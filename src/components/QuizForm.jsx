import React from 'react';

export default class QuizForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswerSelected: false
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  getVideoTime (timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = ('0' + (timeInSeconds % 60)).slice(-2);
    return minutes + ':' + seconds;
  }

  onRadioChange (event) {
    if (!this.state.isAnswerSelected) {
      this.setState({isAnswerSelected: true});
    }
  }

  onFormSubmit (event) {
    event.preventDefault();
    this.setState({
      isAnswerSelected: false
    });
    this.props.onFormSubmit(event);
  }

  render () {
    const {currentQuestion, buttonText, questionNumber} = this.props;
    if (currentQuestion) {
      return (
        <form className={'c-quizform--root'} onSubmit={this.onFormSubmit}>
          <fieldset>
            <legend>{currentQuestion.question}</legend>

            <p>Question {questionNumber}[{this.getVideoTime(currentQuestion.timeInSeconds)}]</p>

            <div className={'answer-options'}>
              <label htmlFor="0">
                <input onChange={this.onRadioChange} type="radio" id="0" name="quiz-option" required />
                {currentQuestion.options[0]}
              </label>

              <label htmlFor="1">
                <input onChange={this.onRadioChange} type="radio" id="1" name="quiz-option" />
                {currentQuestion.options[1]}
              </label>

              <label htmlFor="2">
                <input onChange={this.onRadioChange} type="radio" id="2" name="quiz-option" />
                {currentQuestion.options[2]}
              </label>

              <label htmlFor="3">
                <input onChange={this.onRadioChange} type="radio" id="3" name="quiz-option" />
                {currentQuestion.options[3]}
              </label>
            </div>
          </fieldset>
          <div className={'submit-container'}>
            <input value={buttonText} type="submit" disabled={!this.state.isAnswerSelected} className={`form-submit${this.state.isAnswerSelected ? '' : '--disabled'}`} />
          </div>
        </form>
      );
    }
    else return (
      <div className="c-quizform--empty">
                Select the play button to begin your quiz.
      </div>
    );
  }
}