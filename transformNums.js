'use strict';

const transformNums = (num) => {
  const sortedNum = num.sort();
  return [
    sortedNum,
    sortedNum.reverse(),
    sortedNum
  ];
};

module.exports = transformNums;