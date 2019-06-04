import React from 'react';
import TextWithInlineHeader from './TextWithInlineHeader';

export default function QuizDescription (props) {
  return (
    <div className={'c-quiz-description--root'}>
      <TextWithInlineHeader headingType={'h3'} heading={'Learning Objective'} innerText={props.learningObjectiveText} />
      <TextWithInlineHeader headingType={'h3'} heading={'Description'} innerText={props.descriptionText} />
    </div>
  );
}