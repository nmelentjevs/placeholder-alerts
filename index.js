const createAlert = (elements, options) => {
  let elementsArray = [];
  options = options || {};
  options.iconClasses = options.iconClasses || 'fas fa-bell';
  options.time = options.time || false;
  options.display = options.display || 'absolute';
  options.percent = options.percent || false;
  options.style = options.style || { color: 'red', fontSize: '14px' };

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
    if (!options.percent) {
      if (labelRectangle.width <= 200) {
        percent = 0.85;
      } else if (labelRectangle.width <= 300) {
        percent = 0.9;
      } else {
        percent = 0.95;
      }
    } else {
      percent = options.percent;
    }

    if (options.display === 'absolute') {
      newIcon.style.top = `${labelRectangle.top -
        iconRectangle.height / 2 +
        labelRectangle.height / 2 +
        window.scrollY}px`;

      newIcon.style.left = `${(labelRectangle.right - iconRectangle.width / 2) *
        percent +
        window.scrollX}px`;

      newIcon.style.position = 'absolute';
      newIcon.style.display = 'table';
    } else {
      const label = element.parentElement;
      label.appendChild(newIcon);
      label.style.position = 'relative';
      newIcon.style.display = 'table';
      newIcon.style.position = 'absolute';
      newIcon.style.top = options.positionY;
      newIcon.style.right = options.positionX;
    }

    if (options.time) {
      setTimeout(() => {
        newIcon.remove();
        label.style.position = '';
      }, options.time);
    }
  }
};

export { createAlert };


