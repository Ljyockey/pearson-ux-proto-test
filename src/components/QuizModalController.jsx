import React from 'react';
import QuizModal from './QuizModal';

export default function QuizModalController (props) {
  const {
    isSubmitSuccess,
    onSuccessAck,
    isSubmitError,
    onErrorAck,
    isConfirmingSubmission,
    onSubmitCancelation,
    onSubmitConfirmation
  } = props;

  return (
    <div className={'c-quizmodalcontroller--root'}>
      {isSubmitSuccess && 
        <QuizModal
          id={'form-submit-success'}
          className={'form-submit-modal'}
          title={'Success'}
          onCloseCallback={onSuccessAck}
          message={'Success! You\'ve successfully submitted your quiz.'}
        />}
      {isSubmitError &&
        <QuizModal
          id={'form-submit-error'}
          className={'form-submit-modal'}
          title={'Error'}
          onCloseCallback={onErrorAck}
          message={'Please answer all the questions before submitting the quiz.'}
        />}
      {isConfirmingSubmission && 
        <QuizModal
          className={'form-confirmation'}
          title={'Submit Quiz'}
          onCloseCallback={onSubmitCancelation}
          message={'Are you sure you\'re ready to submit? You won\'t be able to change your answers.'}
          cancelButton={{
            onClickCallback: onSubmitCancelation,
            text: 'Review'
          }}
          confirmButton={{
            onClickCallback: onSubmitConfirmation,
            text: 'Submit Quiz'
          }}
          originElement={document.getElementById('form-submit')}
          hasFocus
        />}
    </div>
  );

}