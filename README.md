## Installation
- **Needs jQuery Library**
- Include the igni.min.js file after jQuery
- Include the igni.min.css file inside header tag HTML

## Usage
```javascript
$.ignite();
```

## Examples
#### A successful message
```javascript
$.ignite({
   theme: 'success',
   textMessage: '<strong>Congratulations!</strong> A successful message!'
});
```


#### An error message
```javascript
$.ignite({
   theme: 'danger',
   textMessage: '<strong>Oops!</strong> Something went wrong :('
});
```

#### A simple loader
```javascript
//ignite loader
loading = $.ignite({
              type: 'loader',
              theme: 'info',
              textMessage: '<strong>Loading...</strong> Please wait.'
          });
          
//dismiss loader
loading.destroy();
```

## Options
### `type {String}`
Define alert type. (message or loading)

**Default**: `'message'`

### `timer {Number}`
Display duration in milliseconds. (0 for disabled)

**Default**:  `'4000'`

### `position {String}`
Alert orientation. (top or bottom)

**Default**:  `'top'`

### `theme {String}`
Alert style. (default, dark, success, danger, info, warning)

**Default**:  `'default'`

### `textMessage {String}`
Alert content.

**Default**:  `'Hello! This is a default message from igni :)'`

### `dismiss {Boolean}`
Enable close button.

**Default**:  `true`

### `dismissButtonText {String}`
*Require `dismiss {true}`*
Changes the close button text.

**Default**:  `Close`



## Helpdesk

If you have any idea to improve this project or any problem using this, please
feel free to upload an [issue](https://github.com/krownf/igni/issues).


## License

[MIT](LICENSE)
