import React, { Component } from 'react'
import Header from './components/Header.jsx'
import QuizTitle from './components/QuizTitle.jsx'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                title: 'Learning The Keys To Physical Delivery Skills',
                totalPoints: 15,
                dueDateStart: 'Oct, 18, 2016',
                dueDateEnd: 'Oct, 30, 2016',
                learningObjective: 'To develop knowledge and skills related to the student\'s understanding of rehearsal techniques, and their abilities in the ensemble performance as well as the knowedge of music literature and conducting skills.',
                description: 'As you watch the video, quiz questions will appear. You must answer all questions to submit the quiz.'
            }
        }
    }
    render() {
        const {data: {title, totalPoints, dueDateStart, dueDateEnd, learningObjective, description}} = this.state
        return (
            <section>
                <Header accountName='Casey' />
                <QuizTitle
                    title={title}
                    totalPoints={totalPoints}
                    dueDate={{start: dueDateStart, end: dueDateEnd}}
                />
            </section>
        )
    }
}
