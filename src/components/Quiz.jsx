import React, { Component } from 'react'
import QuizForm from './QuizForm'
import Dropdown from './Dropdown'

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasQuizStarted: false,
            currentQuestionIndex: null
        }
    }

    onFormSubmit (event) {
        console.log('onFormSubmit event: ', event)
    }

    onQuestionChange (event) {
        console.log('onQuestionChange event: ', event)
    }

    render () {
        return (
            <section className={'c-quiz--root'}>
                {this.state.currentQuestionIndex &&
                    <Dropdown
                        totalQuestions={this.props.questions.length}
                        onQuestionChange={this.onQuestionChange}
                    />
                }
                <div className={'quiz-flex-container'}>
                    <video controls src={this.props.videoSrc}></video>
                    <QuizForm
                        onFormSubmit={this.onFormSubmit}
                        currentQuestion={this.props.questions[3]}
                        questionNumber={this.state.currentQuestionIndex ? this.state.currentQuestionIndex + 1 : null}
                    />
                </div>
            </section>
        )
    }
}