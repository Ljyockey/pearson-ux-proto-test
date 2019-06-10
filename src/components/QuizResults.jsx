import React from 'react';

export default function QuizResults (props) {
  const {totalCorrect, totalQuestions} = props;
  const totalWrong = totalQuestions - totalCorrect;
  const score = parseInt((totalCorrect / totalQuestions).toFixed(2).slice(2));

  return (
    <div className={'c-quizresults--root'}>
      <div className={'svg-container'}>
        <svg viewBox="0 0 42 42" className={'svg-score'}>
          <circle className="wrong" cx="21" cy="21" r="15.91549430918954" fill="transparent" strokeWidth="3"></circle>
          <circle className="correct" cx="21" cy="21" r="15.91549430918954" fill="transparent" strokeWidth="3" strokeDasharray={`${score} ${100 - score}`} strokeDashoffset="0"></circle>
          <text aria-describedby={'score-description'} x="21" y="25" fontSize="smaller" textAnchor="middle">{score + '%'}</text>
        </svg>
        <p id="score-description">Your quiz score!</p>
      </div>
      <ul>
        <li>{totalQuestions} Questions</li>
        <li>{totalCorrect} Correct</li>
        <li>{totalWrong} Incorrect</li>
        <li>Score {score + '%'}</li>
      </ul>
    </div>
  );
}