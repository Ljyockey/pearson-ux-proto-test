import React from 'react';

export default class QuizModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
  }
  componentDidMount () {
    if (this.props.hasFocus) document.getElementById('close-modal').focus();
    document.addEventListener('click', this.onClick);
    document.addEventListener('keydown', this.onKeydown);
  }

  componentWillUnmount () {
    if (this.props.hasFocus) this.props.originElement.focus();
  }

  onClick (event) {
    if (event.target !== this.ref) {
      this.props.onCloseCallback();
    }
  }

  onKeydown (event) {
    if (event.keyCode === 27) {
      this.props.onCloseCallback();
    }
  }

  render () {
    const {
      className,
      title,
      onCloseCallback,
      message,
      cancelButton,
      confirmButton
    } = this.props;

    return (
      <section ref={r => this.ref = r} className={`c-quizmodal--root ${className || ''}`} role={'region'}>
        <div className={'header'}>
          <h4 className={'title'}>{title}</h4>
          <button id={'close-modal'} className={'close'} onClick={onCloseCallback}>{String.fromCharCode(10007)}</button>
        </div>
        <div className={'main'}>
          <p className={'message'}>{message}</p>
          <div className={'action-items'}>
            {cancelButton && <button onClick={cancelButton.onClickCallback} className={'cancel'}>{cancelButton.text}</button>}
            {confirmButton && <button onClick={confirmButton.onClickCallback} className={'confirm'}>{confirmButton.text}</button>}
          </div>
        </div>
      </section>
    );
  }
}