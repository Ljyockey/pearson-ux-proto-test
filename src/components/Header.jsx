import React from 'react';

export default function Header (props) {
  return (
    <header role="banner" className="c-header-root">
      <nav role="navigation">
        <ul>
          <li>
            <a href="#"><img src={'public/img/pearson-logo.png'} alt="Pearson" /></a>
          </li>
          <li>
            <a href="#"><img className={'icon'} src="public/img/notification.svg" alt="Notifications" /></a>
          </li>
          <li>
            <a href="#"><img className={'icon'} src="public/img/help.svg" alt="Help" /></a>
          </li>
          <li>
            <a href="#">{props.accountName}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}