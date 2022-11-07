import React from 'react';
import classes from './Button.module.scss';

const { genButton, formTypeBtn, formTypeCancelBtn } = classes;

const Button = ({ title, type }: { title: string, type?: any }) => {

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

    return (
        <button className={`${genButton} ${determinType(type)}`}>{title}</button>
    );
};

export default Button;