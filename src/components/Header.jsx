import React from 'react';

export default function Header (props) {
    return (
        <header role="banner">
            <nav role="navigation">
                <ul>
                    <li>
                        <a href="#"><img src="./foo.jpg" alt="Pearson" /></a>
                    </li>
                    <li>
                        <a href="#"><img src="./foo.jpg" alt="Notifications" /></a>
                    </li>
                    <li>
                        <a href="#"><img src="./foo.jpg" alt="Help" /></a>
                    </li>
                    <li>
                        <a href="#">{props.accountName}</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}