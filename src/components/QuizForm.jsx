import React, {Component} from 'react'

export default class QuizForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAnswerSelected: false
        }
    }

    getVideoTime (timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = ('0' + (timeInSeconds % 60)).slice(-2)
        return minutes + ':' + seconds
    }

    render () {
        const {currentQuestion} = this.props
        if (currentQuestion) {
            return (
                <form className={'c-quizform--root'}>
                    <fieldset>
                        <legend>{currentQuestion.question}</legend>

                        <p>Question 4[{this.getVideoTime(currentQuestion.timeInSeconds)}]</p>

                        <input type="radio" id="a" name="option-a" />
                        <label htmlFor="a">{currentQuestion.options[0]}</label>

                        <input type="radio" id="b" name="option-b" />
                        <label htmlFor="b">{currentQuestion.options[1]}</label>

                        <input type="radio" id="c" name="option-c" />
                        <label htmlFor="c">{currentQuestion.options[2]}</label>

                        <input type="radio" id="d" name="option-d" />
                        <label htmlFor="d">{currentQuestion.options[3]}</label>
                    </fieldset>
                    <input type="submit" disabled={!this.state.isAnswerSelected} className={`form-submit${this.state.isAnswerSelected ? '' : '--disabled'}`} />
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