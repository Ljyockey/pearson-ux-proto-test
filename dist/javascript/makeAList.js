'use strict';

const getOddOrEven = value => value % 2 === 0 ? 'EVEN' : 'ODD';

const getIfMultipleOf = (target, value) => value % target === 0 ? ` ${target} MULTIPLE` : '';

const makeAList = size => {
  const ul = document.createElement('ul');
  for (let i = 1; i <= size; i ++) {
    const element = document.createElement('li');
    element.id = `list-item--${i}`;
    element.innerText = `${getOddOrEven(i)}${getIfMultipleOf(3, i)}${getIfMultipleOf(5, i)}`;
    ul.appendChild(element);
  }
  document.getElementById('list').appendChild(ul);
};

makeAList(100);