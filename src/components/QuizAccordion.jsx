import React from 'react';
import Accordion from './Accordion';

export default function QuizAccordion (props) {
  return (<div className={'c-quizaccordion--root'}>
    <Accordion questions={props.questions} answers={props.answers} />
    <button onClick={props.onButtonClick} className={'back'}>Back to Assignments</button>
  </div>);
}