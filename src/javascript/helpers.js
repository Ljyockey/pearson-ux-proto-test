'use strict';

export const isTruthyOrZero = (value) => Boolean(value) || value === 0;

export const getVideoTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = ('0' + (timeInSeconds % 60)).slice(-2);
  return minutes + ':' + seconds;
};

export const handleArrowKeyNavigation = (className, keyCode) => {
  if (document.activeElement.className === className) {
    const options = document.getElementsByClassName(className);
    const currentFocusedOptionIndex = parseInt(document.activeElement.id.split(className + '-')[1]);

    let targetIndex;
    switch (keyCode) {
    case 40:
      targetIndex = (currentFocusedOptionIndex + 1) % options.length;
      options[targetIndex].focus();
      break;
    case 38:
      targetIndex = currentFocusedOptionIndex === 0 ? options.length-1 : currentFocusedOptionIndex-1;
      options[targetIndex].focus();
      break;
    case 36:
      options[0].focus();
      break;
    case 35:
      options[options.length-1].focus();
      break;
    default:
      break;
    }
  }
};