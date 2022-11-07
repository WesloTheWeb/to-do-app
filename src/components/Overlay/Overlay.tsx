import React from 'react';
import classes from './Overlay.module.scss';

const { backdrop } = classes;

const Overlay = ({ }) => {
    return (
        <div
            className={backdrop}
        />
    );
};

export default Overlay;