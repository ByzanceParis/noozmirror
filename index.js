class NoozMirror {

  /**
   * This is the constructor of the NoozMirror class
   * @constructor
   * @param {Object} options
   * @param {string} options.token - The token of the NoozMirror is more than one is deployed
   * @example
   * var noozMirror = new NoozMirror({token: "deploymentToken"});
   */

  constructor(options) {
    this.token = options.token;
  }

  /**
   * This function turn on/off the phone flashlight
   * @param {{on : true | false}} - true to turn on, false to turn off
   * @returns {boolean} success - true if the operation was successful, false otherwise
   * @example
   * await noozMirror.turnFlashlight(true);
   */
  async turnFlashlight(on) {
      return true;
  }


  /**
   * This async function take a picture with the phone camera
   * @param {Object} options
   * @param {Boolean} options.quality - The quality of the image
   * @param {Boolean} options.width - The maximum width of the image
   * @param {Boolean} options.height - The maximum height of the image
   * @returns {base64} The base64 encoded string representation of the image.
   * @example
   * var img = await noozMirror.takePicture({quality: 0.5, width: 100, height: 100});
   */
  async takePicture(options) {
    
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
  onRfid(callback) {
    
  }

}
