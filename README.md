<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [NoozMirror][1]
    *   [Parameters][2]
    *   [toggleFlashlight][3]
        *   [Parameters][4]
        *   [Examples][5]
    *   [takePicture][6]
        *   [Parameters][7]
        *   [Examples][8]
*   [onRfid][9]
    *   [Properties][10]
    *   [Examples][11]

## NoozMirror

Nooz Mirror Js script
Script can be tested by loaded it in a browser :

<script src="https://nooz.byzance.world/NoozMirror.js"></script>

You can use it with Typescript like this :
declare global {
interface Window { NoozMirror: any; }
}
const noozMirror = new NoozMirror();
Testing RFID event can be done by pressing r key on the keyboard

### Parameters

*   `conf` **[object][12]**  (optional, default `{}`)

### toggleFlashlight

This function turn on/off the phone flashlight

#### Parameters

*   `on` **[boolean][13]** true to turn on, false to turn off

#### Examples

```javascript
await noozMirror.toggleFlashlight(true);
```

Returns **[boolean][13]** success - true if the operation was successful, false otherwise

### takePicture

This async function take a picture with the phone camera

#### Parameters

*   `options` **[Object][12]**&#x20;

    *   `options.quality` **[Boolean][13]** The quality of the image 0-1
    *   `options.width` **[Boolean][13]** The maximum width of the image
    *   `options.height` **[Boolean][13]** The maximum height of the image

#### Examples

```javascript
var img = await noozMirror.takePicture({quality: 0.5, width: 100, height: 100});
```

Returns **base64** The base64 encoded string representation of the image (jpg format).

## onRfid

This event is fired when a rfid tag is detected or removed

Type: [Object][12]

### Properties

*   `id` **[string][14]** id of the tag
*   `action` **[string][14]** action performed on the tag (inserted or removed)

### Examples

```javascript
noozMirror.onRfid( (msg) => {
 console.log(msg.id);
 console.log(msg.action);
});
```

[1]: #noozmirror

[2]: #parameters

[3]: #toggleflashlight

[4]: #parameters-1

[5]: #examples

[6]: #takepicture

[7]: #parameters-2

[8]: #examples-1

[9]: #onrfid

[10]: #properties

[11]: #examples-2

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[13]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
