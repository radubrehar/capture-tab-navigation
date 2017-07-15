(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.captureTabNavigation = factory());
}(this, (function () { 'use strict';

const selector = [
  'input',
  'textarea',
  'select',
  '[tabindex]',
  'a[href]',
  'button',
  'object'
].join(', ');

var getFocusableChildren = node => {
  const children = [...node.querySelectorAll(selector)];

  console.log(children);
  // ensure they are all in the dom
  return children.filter(child => child.offsetParent);
};

const emptyObject = {};
var index = (node, event, config) => {
  config = config || emptyObject;
  const { key, target, shiftKey } = event;
  if (key != 'Tab') {
    return;
  }
  const focusableChildren = (config.getFocusableChildren ||
    getFocusableChildren)(node);

  const last = focusableChildren[focusableChildren.length - 1];
  const first = focusableChildren[0];
  if (target === first && first && shiftKey) {
    event.preventDefault();

    if (last && last.focus) {
      last.focus();
    }
    return true;
  }

  if (target === last && last && !shiftKey) {
    event.preventDefault();

    if (first && first.focus) {
      first.focus();
    }

    return true;
  }
};

return index;

})));
