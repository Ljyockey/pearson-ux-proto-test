import React from 'react';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen () {
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
        result.push(
          <li
            key={i}
            id={i}
            role={'option'}
          >
            <button onClick={() => this.onQuestionChange(i)}>
              {i+1}. {!!answer || answer === 0 ? 'Complete' : 'Incomplete'}
            </button>
          </li>
        );
      }
      return result;
    };

    return <div className={'c-dropdown--root justify-flex-end'}>
      <button aria-haspopup={'listbox'} onClick={this.toggleOpen}>
        Question {currentQuestionIndex + 1} of {answerIndexes.length}
      </button>
      {this.state.isOpen && <ol role={'listbox'}>{generateListItems()}</ol>}
    </div>;
  }
}
