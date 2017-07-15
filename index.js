import getFocusableChildren from './getFocusableChildren';

const emptyObject = {};
export default (node, event, config) => {
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
