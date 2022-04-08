import React from 'react';
import css from './styles.module.css';
import {FILTER_STATUSES, filterOptions} from './constants';
import {CheckboxGroup} from './common';

const filterTask = (filter, task) => {
    if (filter === FILTER_STATUSES.ALL) {
        return true;
    }

    if (filter === FILTER_STATUSES.COMPLETED) {
        return task.isDone;
    }

    return !task.isDone;
}

const generateUniqueId = (tasks) => {
    const ids = tasks.map(({id}) => id);

    return Math.max(...ids) + 1;
}

export class App extends React.Component {
    state = {
        tasks: [
            {id: 1, label: 'Выучить JS', isDone: true},
            {id: 2, label: 'Выучить React', isDone: false},
            {id: 3, label: 'Написать ToDo лист', isDone: true},
            {id: 4, label: 'Собрать чемоданы', isDone: false},
            {id: 5, label: 'Купить билеты', isDone: true},
        ],
        taskInput: '',
        filter: FILTER_STATUSES.ALL,
    };

    deleteTaskHandler = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(({id: taskID}) => taskID !== id)
        }));
    };

    inputChangeHandler = (event) => {
        this.setState({taskInput: event.target.value});
    };

    addTaskHandler = () => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.concat([{
                id: generateUniqueId(prevState.tasks),
                label: prevState.taskInput,
                isDone: false
            },
            ]),
        }));
    };

    toggleCheckbox = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.map((task) => {
                if (task.id !== id) {
                    return task
                }

                return {...task, isDone: !task.isDone};
            }),
        }));
    };

    changeFilterHandler = (event) => {
        this.setState({filter: event.target.value});
    };

    render() {
        const {tasks, taskInput, filter} = this.state;

        return (
            <div className={css.app}>
                <h1 className={css.header}>TODO App</h1>
                <form className={css.form}>
                    <input value={taskInput} onChange={this.inputChangeHandler} type="text" className={css.input}/>
                    <button onClick={this.addTaskHandler} type="button" className={css.btn}>Add task</button>
                </form>
                <div>
                    <CheckboxGroup options={filterOptions} value={filter} onChange={this.changeFilterHandler}/>
                </div>
                <ul className={css.list}>
                    {tasks.filter((task) => filterTask(filter, task)).map(({id, label, isDone}) => (
                        <li className={css.item} key={id}>
                            <input readOnly type="checkbox" className={css.checkbox} checked={isDone} onChange={() => {
                                this.toggleCheckbox(id)
                            }}/>
                            {label}
                            {isDone && <button type="button" className={css.btn} onClick={() => {
                                this.deleteTaskHandler(id)
                            }}>Remove Task</button>}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
