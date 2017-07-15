# capture-tab-navigation

Utility function to capture tab navigation inside an HTMLElement.

When hitting tab when the last element is focused, it cycles to the first focusable element inside the container.

When hitting `shift+tab` when the first element inside the container is focused, it cycles to the last focusable element inside the container.

## Install

```sh
$ npm i --save @rb/capture-tab-navigation
```

## Usage

```js
import captureTabNavigation from '@rb/capture-tab-navigation'

// the HTMLElement where you want to capture tav navigation
const myDialog = document.querySelector('...')

myDialog.addEventListener('keydown', function(event) {
  // the function expects the container HTMLElement
  // and the keydown event object
  captureTabNavigation(myDialog, event)
})
```

## License

#### MIT