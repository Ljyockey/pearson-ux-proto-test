import React from 'react';
import TextWithInlineHeader from './TextWithInlineHeader';

export default function QuizTitle (props) {
  const {title, totalPoints, dueDate: {start, end}} = props;

  return (
    <div className="c-quiztitle--root">
      <TextWithInlineHeader headingType={'h1'} heading={'Title'} innerText={title} />
      <h2>{totalPoints} Points</h2>
      <TextWithInlineHeader headingType={'h2'} heading={'Due'} innerText={`${new Date(start).toLocaleDateString()}-${new Date(end).toLocaleDateString()}`} />
    </div>
  );
}