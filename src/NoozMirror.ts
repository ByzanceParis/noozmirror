export {};

declare global {
  interface Window { NoozMirror: any; }
}

/**
 * Nooz Mirror Js script
 *  Script can be tested by loaded it in a browser :
 * @example
 * <script src="https://nooz.byzance.world/NoozMirror.js"></script>
 * 
 * You can use it with Typescript like this :
* @example
 * declare global {
 *  interface Window { NoozMirror: any; }
 * }
 * const noozMirror = new NoozMirror();
 * 
* Testing RFID event can be done by pressing r key on the keyboard
 */



class NoozMirror {
  private _conf: any;
  private _callback: Function;
  private _rfid: any;
  
  constructor( conf:object = {}) {
      this._conf = conf;
  }

    /**
   * This function turn on/off the phone flashlight
   * @param {boolean} on - true to turn on, false to turn off
   * @returns {boolean} success - true if the operation was successful, false otherwise
   * @example
   * await noozMirror.toggleFlashlight(true);
   */
  async toggleFlashlight(on:boolean) {
    return await this._toggleFlashlight(on)
  }

  /**
   * This async function take a picture with the phone camera
   * @param {Object} options
   * @param {Boolean} options.quality - The quality of the image 0-1
   * @param {Boolean} options.width - The maximum width of the image 
   * @param {Boolean} options.height - The maximum height of the image
   * @returns {base64} The base64 encoded string representation of the image (jpg format).
   * @example
   * var img = await noozMirror.takePicture({quality: 0.5, width: 100, height: 100});
   */
  async takePicture(options : { width:number, height:number, quality:number }) {
    const image = this._downloadImage(options);
    return image;
  }


  /**
   * This event is fired when a rfid tag is detected or removed
  * @event onRfid
  * @type {Object}
  * @property {string} id id of the tag
  * @property {string} action action performed on the tag (inserted or removed)
  * @example
  * noozMirror.onRfid( (msg) => {
  *  console.log(msg.id);
  *  console.log(msg.action);
  * });
  */
  onRfid(callback:Function) {
    window.addEventListener('keyup', this);
    this._callback = callback;
  }


  public handleEvent(e: Event): void {
    const keyEvent = e as KeyboardEvent;
    if (keyEvent.key == 'r') {

      if (!this._rfid) {
        this._rfid = this._uuidv4();
        this._callback({
          id: this._rfid, 
          action:'IN'
        });

      } else {
        this._callback({
          id: this._rfid, 
          action:'OUT'
        });
        this._rfid = null;
      }
    }
  }

  private _toggleFlashlight(on: boolean) {
    return new Promise((resolve, reject) => {
      resolve(on);
    })
  }


  private async _downloadImage(options:any) {
    console.log(options);
    
    const image = await fetch('https://picsum.photos/1080/1920');
    const blob = await image.blob();
    const reader = new FileReader() ;
    return new Promise((resolve, reject) => {
      const that = this;
      reader.onload = async function(){ 
        console.log(options);
        const result = await that._resizeImage(this.result, options)
        resolve(result);
      }
      reader.readAsDataURL(blob) ;
    });
  }

  private async _resizeImage(image:any, options:any) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image;
    return new Promise((resolve, reject) => {
      img.onload = function() {

        const {width, height} = img;
        const ratio = width / height;
        options.width = options.width || width;
        options.height = options.height || height;
        const newRatio = options.width / options.height;
        if (width > options.width || height > options.height) {
          if (ratio > newRatio) {
            options.height = options.width / ratio;
          } else {
            options.width = options.height * ratio;
          }
        }

        canvas.width = options.width;
        canvas.height = options.height;
        ctx.drawImage(img, 0, 0, options.width, options.height);
        resolve(canvas.toDataURL('image/jpeg', options.quality || 100));
      }
    });
  }
  
  //create random unic id 
  private _uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // tslint:disable-next-line: no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line: no-bitwise
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString();
    });
  }


}

window.NoozMirror = NoozMirror;