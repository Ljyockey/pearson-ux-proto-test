'use strict';

const transformNums = (nums) => {
  const sortedNums = nums.sort();
  return [
    ...sortedNums,
    ...sortedNums.reverse(),
    ...sortedNums.reverse()
  ];
};

module.exports = transformNums;