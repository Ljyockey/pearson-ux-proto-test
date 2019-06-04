import React, { Component } from 'react'
import Header from './components/Header'
import QuizTitle from './components/QuizTitle'
import QuizDescription from './components/QuizDescription'
import Quiz from './components/Quiz'

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
                description: 'As you watch the video, quiz questions will appear. You must answer all questions to submit the quiz.',
                videoSrc: 'https://assets.mixkit.co/videos/57/57-720.mp4',
                questions: [
                    {
                        timeInSeconds: 5,
                        correctAnswerIndex: 2,
                        question: 'What is the best way to feel more physically comfortable when delivering a speech?',
                        options: [
                            'Take a course about self esteem',
                            'Learn mediation skills',
                            'Learn specific skills on what to do with your body',
                            'Take a course about ignoring the audience'
                        ]
                    },
                    {
                        timeInSeconds: 10,
                        correctAnswerIndex: 3,
                        question: 'Why is it important to have good posture?',
                        options: [
                            'More impressive looking',
                            'You avoid stomach cramping',
                            'Easier to see the back of the room',
                            'Keeps the body open for other'
                        ]
                    },
                    {
                        timeInSeconds: 15,
                        correctAnswerIndex: 0,
                        question: 'How does standing with your feet shoulder width apart help you have a better delivery?',
                        options: [
                            'Eliminate distracting movement',
                            'You avoid falling over',
                            'You can see the back of the room better',
                            'You can breathe better'
                        ]
                    },
                    {
                        timeInSeconds: 20,
                        correctAnswerIndex: 3,
                        question: 'Why are gestures an important delivery skill to learn?',
                        options: [
                            'Helps the audience from seeing how nervous you might be',
                            'Help communicate the message',
                            'Teaches you that fewer gestures make a better the speech',
                            'Teaches you that more gestures make a better speech'
                        ]
                    },
                    {
                        timeInSeconds: 25,
                        correctAnswerIndex: 3,
                        question: 'What is the outcome of learning correct posture, body movement, and gestures?',
                        options: [
                            'Make you look like you have prepared for your speech',
                            'Make you look powerful',
                            'Helps you avoid stomach cramping',
                            'Make you look and feel more comfortable'
                        ]
                    }
                ]
            }
        }
    }
    render() {
        const {data: {title, totalPoints, dueDateStart, dueDateEnd, learningObjective, description, videoSrc, questions}} = this.state
        return (
            <section>
                <Header accountName='Casey' />
                <main role="main">
                    <QuizTitle
                        title={title}
                        totalPoints={totalPoints}
                        dueDate={{start: dueDateStart, end: dueDateEnd}}
                    />
                    <QuizDescription
                        learningObjectiveText={learningObjective}
                        descriptionText={description}
                    />
                    <Quiz videoSrc={videoSrc} questions={questions}  />
                </main>
            </section>
        )
    }
}
