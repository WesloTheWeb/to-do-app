import React, { MouseEvent } from 'react';
import { setModal } from '../../app/modalSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import classes from './Button.module.scss';

const { genButton, formTypeBtn, formTypeCancelBtn } = classes;

const Button = ({ title, type, clickEvent }: { title: string, type?: any, clickEvent?: string }) => {
    const modalToggle = useAppSelector((state) => state.modal)
    const dispatch = useAppDispatch();

    const onModalClick = (e: MouseEvent, modal: boolean) => {
        e.preventDefault();
        dispatch(setModal(modal))
        console.log('clicked')
    }

    const determinType = (btnType: string) => {
        switch (btnType) {
            case 'formType':
                return formTypeBtn;

            case 'cancel':
                return formTypeCancelBtn;

            default:
                return genButton;
        };
    };

    const determineClickEvnt = (evnt: any) => {
        switch (evnt) {
            case 'modal':
                return onModalClick;
        }

    }

    return (
        <button
            className={`${genButton} ${determinType(type)}`}
            onClick={(e) => onModalClick(e, modalToggle.modal)}
        >
            {title}
        </button>
    );
};

export default Button;