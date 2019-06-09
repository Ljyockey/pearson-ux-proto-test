import React from 'react';
import QuizForm from './QuizForm';
import Dropdown from './Dropdown';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: null,
      hasQuizStarted: false,
      hasQuizCompleted: false,
      answerIndexes: new Array(this.props.questions.length)
    };

    this.onVideoPlaying = this.onVideoPlaying.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit (event) {
    event.preventDefault();
    const selectedAnswerIndex = parseInt(event.currentTarget.querySelector('input:checked').id);
    const answerIndexes = this.state.answerIndexes;
    this.setState({
      answerIndexes: [
        ...answerIndexes.slice(0, this.state.currentQuestionIndex),
        selectedAnswerIndex,
        ...answerIndexes.slice(this.state.currentQuestionIndex + 1)
      ]
    }, () => {
      if (this.state.currentQuestionIndex === this.props.questions.length - 1) {
        this.props.onQuizCompletion(this.state.answerIndexes);
      } else this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1
      });
    });

  }

  onQuestionChange (event) {
    console.log('onQuestionChange event: ', event);
  }

  onVideoPlaying (event) {
    if (!this.state.currentQuestionIndex) {
      this.setState({
        currentQuestionIndex: 0,
        hasQuizStarted: true
      });
    }
  }

  render () {
    return (
      <section className={'c-quiz--root'}>
        {this.state.hasQuizStarted &&
                    <div className={'quiz-dropdown-container'}>
                      <Dropdown
                        totalQuestions={this.props.questions.length}
                        onQuestionChange={this.onQuestionChange}
                      />
                      <p className="justify-flex-end">Worth {this.props.questions[this.state.currentQuestionIndex].points} point{this.props.questions[this.state.currentQuestionIndex].points === 1 ? '' : 's'}</p>
                    </div>
        }
        <div className={'quiz-flex-container'}>
          <video onPlaying={this.onVideoPlaying} controls src={this.props.videoSrc}></video>
          <QuizForm
            onFormSubmit={this.onFormSubmit}
            currentQuestion={this.props.questions[this.state.currentQuestionIndex]}
            questionNumber={this.state.currentQuestionIndex ? this.state.currentQuestionIndex + 1 : null}
            buttonText={this.state.hasQuizCompleted ? 'Submit Quiz' : 'Resume'}
          />
        </div>
      </section>
    );
  }
}