import React from 'react';
import {getVideoTime, handleArrowKeyNavigation} from '../javascript/helpers';

export default class Accordion extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      openIndex: null
    };

    this.onClick = this.onClick.bind(this);
  }


  onClick (event, index) {
    event.preventDefault();
    this.setState({
      openIndex: this.state.openIndex === index ? null : index
    });
  }

  onKeyDown (event) {
    handleArrowKeyNavigation('accordion-header', event.keyCode);
  }

  generateOptionList (options, correctAnswerIndex, userAnswerIndex) {
    return options.map((o, i) => (
      <li
        key={i}
        className={`option${i === correctAnswerIndex ? ' option--correct': ''}${i === userAnswerIndex && i !== correctAnswerIndex ? ' option--incorrect' : ''}`}>
        {o}
      </li>
    ));
  }

  render () {
    return <div className={'c-accordion--root'} onKeyDown={this.onKeyDown}>
      {this.props.questions.map((q, i) => (
        <div key={i}>
          <h3>
            <button
              onClick={e => this.onClick(e, i)}
              aria-expanded={this.state.openIndex === i}
              id={`accordion-header-${i}`}
              className={'accordion-header'}
            >
              <span className={`triangle-bullet${this.state.openIndex === i ? ' triangle-bullet--expanded' : ''}`}>{String.fromCharCode(8227)}</span>&nbsp; Question {i+1} <span className={'time'}>&nbsp; [{getVideoTime(q.timeInSeconds)}]</span>
              <span className={`feedback feedback--${q.correctAnswerIndex === this.props.answers[i] ? 'correct' : 'incorrect'}`}>{q.correctAnswerIndex === this.props.answers[i] ? String.fromCharCode(10003) : String.fromCharCode(10008)}</span>
            </button>
          </h3>
          {this.state.openIndex === i && <div className={'accordion-item'} id={`accordion-item-${i}`}>
            <p>{q.question}</p>
            <ul>
              {this.generateOptionList(q.options, q.correctAnswerIndex, this.props.answers[i])}
            </ul>
          </div>}
        </div>
      ))}
    </div>;
  }
}