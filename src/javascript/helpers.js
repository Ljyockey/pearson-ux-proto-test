'use strict';

export const isTruthyOrZero = (value) => Boolean(value) || value === 0;

export const getVideoTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = ('0' + (timeInSeconds % 60)).slice(-2);
  return minutes + ':' + seconds;
};
