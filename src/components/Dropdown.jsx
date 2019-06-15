import React from 'react';

export default function Dropdown (props) {
  const {onQuestionChange, answerIndexes, currentQuestionIndex} = props;

  const generateListItems = () => {
    // using a for loop instead of map because the array values are empty initially
    // and using Array.fill isn't ie11-compatible 
    const result = [];
    for (let i=0; i < answerIndexes.length; i++) {
      const answer = answerIndexes[i];
      result.push(
        <li key={i} onClick={() => onQuestionChange(i)}>
          {!!answer || answer === 0 ? 'Complete' : 'Incomplete'}
        </li>
      );
    }
    return result;
  };

  return <div className={'justify-flex-end'}>
    <p>Question {currentQuestionIndex + 1} of {answerIndexes.length}</p>
    <ol>{generateListItems()}</ol>;
  </div>;
}
