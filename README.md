<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [NoozMirror][1]
    *   [Parameters][2]
    *   [Examples][3]
    *   [toggleFlashlight][4]
        *   [Parameters][5]
        *   [Examples][6]
    *   [takePicture][7]
        *   [Parameters][8]
        *   [Examples][9]
*   [onRfid][10]
    *   [Properties][11]
    *   [Examples][12]

## NoozMirror

Nooz Mirror Js script
Script can be tested by loaded it in a browser :

### Parameters

*   `conf` **[object][13]**  (optional, default `{}`)

### Examples

```javascript
<script src="https://nooz.byzance.world/NoozMirror.js"></script>

You can use it with Typescript like this :
```

```javascript
declare global {
 interface Window { NoozMirror: any; }
}
const noozMirror = new NoozMirror();

Testing RFID event can be done by pressing r key on the keyboard
```

### toggleFlashlight

This function turn on/off the phone flashlight

#### Parameters

*   `on` **[boolean][14]** true to turn on, false to turn off

#### Examples

```javascript
await noozMirror.toggleFlashlight(true);
```

Returns **[boolean][14]** success - true if the operation was successful, false otherwise

### takePicture

This async function take a picture with the phone camera

#### Parameters

*   `options` **[Object][13]**&#x20;

    *   `options.quality` **[Boolean][14]** The quality of the image 0-1
    *   `options.width` **[Boolean][14]** The maximum width of the image
    *   `options.height` **[Boolean][14]** The maximum height of the image

#### Examples

```javascript
var img = await noozMirror.takePicture({quality: 0.5, width: 100, height: 100});
```

Returns **base64** The base64 encoded string representation of the image (jpg format).

## onRfid

This event is fired when a rfid tag is detected or removed

Type: [Object][13]

### Properties

*   `id` **[string][15]** id of the tag
*   `action` **[string][15]** action performed on the tag (inserted or removed)

### Examples

```javascript
noozMirror.onRfid( (msg) => {
 console.log(msg.id);
 console.log(msg.action);
});
```

[1]: #noozmirror

[2]: #parameters

[3]: #examples

[4]: #toggleflashlight

[5]: #parameters-1

[6]: #examples-1

[7]: #takepicture

[8]: #parameters-2

[9]: #examples-2

[10]: #onrfid

[11]: #properties

[12]: #examples-3

[13]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
