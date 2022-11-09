import React, { MouseEvent } from 'react';
import { setModal } from '../../app/modalSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import classes from './CreateTaskButton.module.scss';

const { genButton } = classes;

const CreateTaskButton = ({ title }: { title: string}) => {
    const modalToggle = useAppSelector((state) => state.modal)
    const dispatch = useAppDispatch();

    const onModalClick = (e: MouseEvent, modal: boolean) => {
        e.preventDefault();
        dispatch(setModal(modal))
        console.log('clicked')
    }

    return (
        <button
            className={`${genButton}`}
            onClick={(e) => onModalClick(e, modalToggle.modal)}
        >
            {title}
        </button>
    );
};

export default CreateTaskButton;