import React from 'react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.onOpenKeyDown = this.onOpenKeyDown.bind(this);
    this.onOpenMouseDown = this.onOpenMouseDown.bind(this);
  }

  onOpenMouseDown (event) {
    const olElement = document.getElementById('list');
    if (event.target !== olElement) this.toggleOpen();
  }

  onOpenKeyDown (event) {
    if (event.keyCode === 27) this.toggleOpen();
  }

  toggleOpen () {
    if (this.state.isOpen) {
      document.removeEventListener('click', this.onOpenMouseDown);
      document.removeEventListener('keydown', this.onOpenKeyDown);
    } else {
      document.addEventListener('click', this.onOpenMouseDown);
      document.addEventListener('keydown', this.onOpenKeyDown);
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onQuestionChange (index) {
    this.props.onQuestionChange(index);
    this.toggleOpen();
  }

  render () {
    const {answerIndexes, currentQuestionIndex} = this.props;

    const generateListItems = () => {
    // using a for loop instead of map because the array values are empty initially
    // and using Array.fill isn't ie11-compatible 
      const result = [];
      for (let i=0; i < answerIndexes.length; i++) {
        const answer = answerIndexes[i];
        const isComplete = !!answer || answer === 0;
        result.push(
          <li
            key={i}
            id={i}
            role={'option'}
          >
            <button onClick={() => this.onQuestionChange(i)} className={'list-item-button'}>
              {i+1}. <span className={`list-item-span--${isComplete ? 'complete' : 'incomplete'}`}>{isComplete ? 'Complete' : 'Incomplete'}</span>
            </button>
          </li>
        );
      }
      return result;
    };

    return <div className={'c-dropdown--root justify-flex-end'}>
      <button className={'dropdown-heading'} aria-haspopup={'listbox'} onClick={this.toggleOpen}>
        Question {currentQuestionIndex + 1} of {answerIndexes.length}
      </button>
      {this.state.isOpen && <ol id={'list'} role={'listbox'}>{generateListItems()}</ol>}
    </div>;
  }
}
