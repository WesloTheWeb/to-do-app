import React from 'react';
import classes from './Button.module.scss';

const { genButton } = classes;

const Button = ({ title }: { title: string }) => {
    return (
        <button className={genButton}>{title}</button>
    );
};

export default Button;