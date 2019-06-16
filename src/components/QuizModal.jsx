import React from 'react';

export default class QuizModal extends React.Component {
  componentDidMount () {
    document.getElementById('close-modal').focus();
  }

  render () {
    const {
      className,
      title,
      onCloseCallback,
      message,
      cancelButton,
      confirmButton,
      hasAutoFocus
    } = this.props;

    return (
      <section className={`c-quizmodal--root ${className || ''}`} role={'region'} autoFocus={!!hasAutoFocus}>
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