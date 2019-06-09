import React from 'react';
import QuizTitle from './QuizTitle';
import QuizDescription from './QuizDescription';

export default function QuizInfo (props) {
  return (
    <div className={'c-quizinfo--root'}>
      <QuizTitle
        title={props.title}
        totalPoints={props.totalPoints}
        dueDate={props.dueDate}
      />
      <QuizDescription
        learningObjectiveText={props.learningObjective}
        descriptionText={props.description}
      />
    </div>
  );
}