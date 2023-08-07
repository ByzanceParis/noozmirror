(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var NoozMirror = (function () {
        function NoozMirror(conf) {
            this._conf = conf;
        }
        NoozMirror.prototype.toggleFlashlight = function (on) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this._toggleFlashlight(on)];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        NoozMirror.prototype.takePicture = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var image;
                return __generator(this, function (_a) {
                    image = this._downloadImage(options);
                    return [2, image];
                });
            });
        };
        NoozMirror.prototype.onRfid = function (callback) {
            window.addEventListener('keyup', this);
            this._callback = callback;
        };
        NoozMirror.prototype.handleEvent = function (e) {
            var keyEvent = e;
            if (keyEvent.key == 'r') {
                if (!this._rfid) {
                    this._rfid = this._uuidv4();
                    this._callback({
                        id: this._rfid,
                        action: 'IN'
                    });
                }
                else {
                    this._callback({
                        id: this._rfid,
                        action: 'OUT'
                    });
                    this._rfid = null;
                }
            }
        };
        NoozMirror.prototype._toggleFlashlight = function (on) {
            return new Promise(function (resolve, reject) {
                resolve(on);
            });
        };
        NoozMirror.prototype._downloadImage = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var image, blob, reader;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(options);
                            return [4, fetch('https://picsum.photos/1080/1920')];
                        case 1:
                            image = _a.sent();
                            return [4, image.blob()];
                        case 2:
                            blob = _a.sent();
                            reader = new FileReader();
                            return [2, new Promise(function (resolve, reject) {
                                    var that = _this;
                                    reader.onload = function () {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var result;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        console.log(options);
                                                        return [4, that._resizeImage(this.result, options)];
                                                    case 1:
                                                        result = _a.sent();
                                                        resolve(result);
                                                        return [2];
                                                }
                                            });
                                        });
                                    };
                                    reader.readAsDataURL(blob);
                                })];
                    }
                });
            });
        };
        NoozMirror.prototype._resizeImage = function (image, options) {
            return __awaiter(this, void 0, void 0, function () {
                var canvas, ctx, img;
                return __generator(this, function (_a) {
                    canvas = document.createElement('canvas');
                    ctx = canvas.getContext('2d');
                    img = new Image();
                    img.src = image;
                    return [2, new Promise(function (resolve, reject) {
                            img.onload = function () {
                                var width = img.width, height = img.height;
                                var ratio = width / height;
                                options.width = options.width || width;
                                options.height = options.height || height;
                                var newRatio = options.width / options.height;
                                if (width > options.width || height > options.height) {
                                    if (ratio > newRatio) {
                                        options.height = options.width / ratio;
                                    }
                                    else {
                                        options.width = options.height * ratio;
                                    }
                                }
                                canvas.width = options.width;
                                canvas.height = options.height;
                                ctx.drawImage(img, 0, 0, options.width, options.height);
                                resolve(canvas.toDataURL('image/jpeg', options.quality || 100));
                            };
                        })];
                });
            });
        };
        NoozMirror.prototype._uuidv4 = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0;
                var v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString();
            });
        };
        return NoozMirror;
    }());
    window.NoozMirror = NoozMirror;

})();
