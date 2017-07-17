const selector = [
  'input',
  'textarea',
  'select',
  '[tabindex]',
  'a[href]',
  'button',
  'object'
].join(', ');

export default node => {
  const children = [...node.querySelectorAll(selector)];

  // ensure they are all in the dom
  return children.filter(child => child.offsetParent);
};
