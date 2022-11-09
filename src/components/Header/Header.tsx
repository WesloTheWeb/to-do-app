import React from 'react';
import './Header.module.scss';
import CreateTaskButton from '../CreateTaskButton/CreateTaskButton';

const Header = () => {
    return (
        <header>
            <h1>Just another to do app</h1>
            <p>To begin create a task below to make a ticket, do it and then check it off!</p>
            <CreateTaskButton title="Create New Task" />
        </header>
    );
};

export default Header;