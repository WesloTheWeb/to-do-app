import React from 'react';
import Task from '../../components/Task/Task';
import classes from './List.module.scss';

const { listContainer } = classes;

const List = ({ }) => {
    return (
        <section>
            <h2>Task List</h2>
            <section className={listContainer}>
                <Task task="Take out the trash and clean Kitchen" />
            </section>
        </section>
    );
};


export default List; 