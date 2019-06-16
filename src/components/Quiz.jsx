import React from 'react';
import QuizForm from './QuizForm';
import Dropdown from './Dropdown';
import QuizAccordion from './QuizAccordion';
import QuizModal from './QuizModal';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: null,
      hasQuizStarted: false,
      hasQuizFinished: false,
      answerIndexes: new Array(this.props.questions.length)
    };

    this.onVideoPlaying = this.onVideoPlaying.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.onSubmitConfirmation = this.onSubmitConfirmation.bind(this);
    this.onSubmitCancelation = this.onSubmitCancelation.bind(this);
    this.onSuccessAck = this.onSuccessAck.bind(this);
    this.onErrorAck = this.onErrorAck.bind(this);
  }

  onFormSubmit () {
    const isLastQuestion = this.state.currentQuestionIndex === this.props.questions.length - 1;
    const targetInput = document.querySelector('input:checked');
    if (!isLastQuestion) targetInput.checked = false;
    if (isLastQuestion) {
      this.setState({isConfirmingSubmission: true});
    } else this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    });

  }

  onRadioChange () {
    const targetInput = document.querySelector('input:checked');
    const selectedAnswerIndex = parseInt(targetInput.id);

    const answerIndexes = this.state.answerIndexes;
    this.setState({
      answerIndexes: [
        ...answerIndexes.slice(0, this.state.currentQuestionIndex),
        selectedAnswerIndex,
        ...answerIndexes.slice(this.state.currentQuestionIndex + 1)
      ]
    });
  }

  onSubmitCancelation () {
    this.setState({
      isConfirmingSubmission: false
    });
  }

  onSubmitConfirmation () {
    const isComplete = this.state.answerIndexes.filter(a => Boolean(a) || a === 0).length === this.props.questions.length;

    this.setState({
      isConfirmingSubmission: false,
      submitSuccess: isComplete,
      submitError: !isComplete,
      hasQuizFinished: isComplete
    });

    if (isComplete) this.props.onQuizCompletion(this.state.answerIndexes);
  }

  onVideoPlaying () {
    if (!this.state.currentQuestionIndex) {
      this.setState({
        currentQuestionIndex: 0,
        hasQuizStarted: true
      });
    }
  }

  onQuestionChange (index) {
    const targetInput = document.querySelector('input:checked');
    if (targetInput) targetInput.checked = false;
    this.setState({
      currentQuestionIndex: index
    });
  }

  onSuccessAck () {
    this.setState({
      submitSuccess: false
    });
  }

  onErrorAck () {
    this.setState({
      submitError: false
    });
  }

  render () {
    return (
      <section className={'c-quiz--root'}>
        {this.state.submitSuccess && 
                  <QuizModal
                    id={'form-submit-success'}
                    className={'form-submit'}
                    title={'Success'}
                    onCloseCallback={this.onSuccessAck}
                    message={'Success! You\'ve successfully submitted your quiz'}
                  />}
        {this.state.submitError &&
                  <QuizModal
                    id={'form-submit-error'}
                    className={'form-submit'}
                    title={'Error'}
                    onCloseCallback={this.onErrorAck}
                    message={'Please answer all the questions before submitting the quiz.'}
                  />}
        {this.state.isConfirmingSubmission && 
                  <QuizModal
                    className={'form-confirmation'}
                    title={'Submit Quiz'}
                    onCloseCallback={this.onSubmitCancelation}
                    message={'Are you sure you\'re ready to submit? You won\'t be able to change your answers.'}
                    cancelButton={{
                      onClickCallback: this.onSubmitCancelation,
                      text: 'Review'
                    }}
                    confirmButton={{
                      onClickCallback: this.onSubmitConfirmation,
                      text: 'Submit Quiz'
                    }}
                    originElement={document.getElementById('form-submit')}
                    hasFocus
                  />}
        {this.state.hasQuizStarted && !this.state.hasQuizFinished &&
                    <div className={'quiz-dropdown-container'}>
                      <Dropdown
                        onQuestionChange={this.onQuestionChange}
                        answerIndexes={this.state.answerIndexes}
                        currentQuestionIndex={this.state.currentQuestionIndex}
                      />
                      <p className="justify-flex-end">Worth {this.props.questions[this.state.currentQuestionIndex].points} point{this.props.questions[this.state.currentQuestionIndex].points === 1 ? '' : 's'}</p>
                    </div>
        }
        <div className={'quiz-flex-container'}>
          <video onPlaying={this.onVideoPlaying} controls src={this.props.videoSrc}></video>
          {this.state.hasQuizFinished
            ? <QuizAccordion onButtonClick={e => e.preventDefault()} questions={this.props.questions} answers={this.state.answerIndexes} />
            : <QuizForm
              onRadioChange={this.onRadioChange}
              selectedAnswerIndex={this.state.answerIndexes[this.state.currentQuestionIndex]}
              isLast={this.state.currentQuestionIndex === this.props.questions.length - 1}
              onFormSubmit={this.onFormSubmit}
              currentQuestion={this.props.questions[this.state.currentQuestionIndex]}
              questionNumber={this.state.currentQuestionIndex ? this.state.currentQuestionIndex + 1 : null}
              buttonText={this.state.currentQuestionIndex && this.state.currentQuestionIndex === this.props.questions.length - 1 ? 'Submit Quiz' : 'Resume'}
            />
          }
        </div>
      </section>
    );
  }
}