import React, { Component } from 'react'
import Header from './components/Header.jsx'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Header accountName='Casey' />
        )
    }
}
