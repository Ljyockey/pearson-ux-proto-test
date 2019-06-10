import React from 'react';
import QuizForm from './QuizForm';
import Dropdown from './Dropdown';
import Accordion from './Accordion';

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
  }

  onFormSubmit (event) {
    const targetInput = event.currentTarget.querySelector('input:checked');
    const selectedAnswerIndex = parseInt(targetInput.id);
    targetInput.checked = false;

    const answerIndexes = this.state.answerIndexes;
    this.setState({
      answerIndexes: [
        ...answerIndexes.slice(0, this.state.currentQuestionIndex),
        selectedAnswerIndex,
        ...answerIndexes.slice(this.state.currentQuestionIndex + 1)
      ]
    }, () => {
      if (this.state.currentQuestionIndex === this.props.questions.length - 1) {
        this.setState({hasQuizFinished: true});
        this.props.onQuizCompletion(this.state.answerIndexes);
      } else this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1
      });
    });

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
        {this.state.hasQuizStarted && !this.state.hasQuizFinished &&
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
          {this.state.hasQuizFinished
            ? <Accordion questions={this.props.questions} answers={this.state.answerIndexes} />
            : <QuizForm
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