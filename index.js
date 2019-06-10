function createAlert(elements, options) {
  let elementsArray = [];

  options = options || {};
  (options.iconClasses = options.iconClasses || 'fas fa-bell'),
    (options.time = options.time || false);

  if (!elements.length) {
    elementsArray = new Array(elements);
  }
  if (elementsArray.length === 0) {
    elementsArray = elements;
  }

  for (let element of elementsArray) {
    const labelRectangle = element.getBoundingClientRect();
    let newIcon = document.createElement('i');
    newIcon.className = options.iconClasses;
    Object.assign(newIcon.style, options.style);
    document.body.appendChild(newIcon);
    const iconRectangle = newIcon.getBoundingClientRect();

    let percent = 0.9;
    if (labelRectangle.width <= 200) {
      percent = 0.85;
    } else if (labelRectangle.width <= 300) {
      percent = 0.9;
    } else {
      percent = 0.95;
    }

    newIcon.style.top = `${labelRectangle.top -
      iconRectangle.height / 2 +
      labelRectangle.height / 2}px`;

    newIcon.style.left = `${(labelRectangle.right - iconRectangle.width / 2) *
      percent}px`;

    newIcon.style.position = 'absolute';
    newIcon.style.display = 'table';

    if (options.time) {
      setTimeout(() => {
        newIcon.remove();
      }, options.time);
    }
  }
}

export { createAlert };
