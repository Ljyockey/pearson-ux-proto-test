import React from 'react';

export default class Accordion extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      openIndex: null
    };

    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  getVideoTime (timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = ('0' + (timeInSeconds % 60)).slice(-2);
    return minutes + ':' + seconds;
  }

  onClick (event, index) {
    event.preventDefault();
    this.setState({
      openIndex: this.state.openIndex === index ? null : index
    });
  }

  onKeyDown (event) {
    const currentFocusedHeader = document.activeElement;

    if (currentFocusedHeader.id.includes('accordion-header-')) {
      const headers = document.getElementsByClassName('accordion-header');
      const currentFocusedHeaderIndex = parseInt(currentFocusedHeader.id.split('accordion-header-')[1]);

      let targetIndex;
      switch (event.keyCode) {
      case 40:
        targetIndex = (currentFocusedHeaderIndex + 1) % headers.length;
        headers[targetIndex].focus();
        break;
      case 38:
        targetIndex = currentFocusedHeaderIndex === 0 ? headers.length-1 : currentFocusedHeaderIndex-1;
        headers[targetIndex].focus();
        break;
      case 36:
        headers[0].focus();
        break;
      case 35:
        headers[headers.length-1].focus();
        break;
      default:
        break;
      }
    }
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
              <span className={`triangle-bullet${this.state.openIndex === i ? ' triangle-bullet--expanded' : ''}`}>{String.fromCharCode(8227)}</span>&nbsp; Question {i+1} <span className={'time'}>&nbsp; [{this.getVideoTime(q.timeInSeconds)}]</span>
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