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

  render () {
    return <div className={'c-accordion--root'} onKeyDown={this.onKeyDown}>
      {this.props.questions.map((q, i) => (
        <div key={i}>
          <h3>
            <button
              onClick={e => this.onClick(e, i)}
              aria-expanded={this.state.openIndex === i}
              aria-controls={`accordion-item-${i}`}
              id={`accordion-header-${i}`}
              className={'accordion-header'}
            >
            Question {i+1} [{this.getVideoTime(q.timeInSeconds)}]
            </button>
          </h3>
          {this.state.openIndex === i && <div id={`accordion-item-${i}`}>
            <p>{q.question}</p>
          </div>}
        </div>
      ))}
    </div>;
  }
}