import React, {Component} from 'react'

export default class QuizForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAnswerSelected: false
        }

        this.onRadioChange = this.onRadioChange.bind(this)
    }

    getVideoTime (timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = ('0' + (timeInSeconds % 60)).slice(-2)
        return minutes + ':' + seconds
    }

    onRadioChange (event) {
        if (!this.state.isAnswerSelected) {
            this.setState({isAnswerSelected: true})
        }
    }

    render () {
        const {currentQuestion, buttonText, onFormSubmit} = this.props
        if (currentQuestion) {
            return (
                <form className={'c-quizform--root'} onSubmit={onFormSubmit}>
                    <fieldset>
                        <legend>{currentQuestion.question}</legend>

                        <p>Question 4[{this.getVideoTime(currentQuestion.timeInSeconds)}]</p>

                        <div className={'answer-options'}>
                            <label htmlFor="a">
                                <input onChange={this.onRadioChange} type="radio" id="a" name="quiz-option" required />
                                {currentQuestion.options[0]}
                            </label>

                            <label htmlFor="b">
                                <input onChange={this.onRadioChange} type="radio" id="b" name="quiz-option" />
                                {currentQuestion.options[1]}
                            </label>

                            <label htmlFor="c">
                                <input onChange={this.onRadioChange} type="radio" id="c" name="quiz-option" />
                                {currentQuestion.options[2]}
                            </label>

                            <label htmlFor="d">
                                <input onChange={this.onRadioChange} type="radio" id="d" name="quiz-option" />
                                {currentQuestion.options[3]}
                            </label>
                        </div>
                    </fieldset>
                    <input value={buttonText} type="submit" disabled={!this.state.isAnswerSelected} className={`form-submit${this.state.isAnswerSelected ? '' : '--disabled'}`} />
                </form>
            )
        }
        else return (
            <div className="c-quizform--empty">
                Select the play button to begin your quiz.
            </div>
        )
    }
}