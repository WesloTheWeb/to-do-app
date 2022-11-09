import React from 'react';
import Button from '../Button/Button';
import classes from './Modal.module.scss';

const { modalContainer } = classes;

const Modal = ({ }) => {
    return (
        <form
            className={modalContainer}
        >
            <h3>Task</h3>
            <p>To create a task fill out the information below</p>
            <label>Name of Task</label>
            <input
                placeholder='title'
            />
            <label>Description</label>
            <textarea
                placeholder='Description'
            />
            <Button
                type='formType'
                title="Create Task"
            />
            <Button
                type='cancel'
                title="Cancel"
            />
        </form>
    );
};

export default Modal;