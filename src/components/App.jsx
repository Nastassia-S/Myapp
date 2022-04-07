import css from './styles.module.css';
import {FILTER_STATUSES, filterOptions, tasks} from './constants';
import {CheckboxGroup} from './common';

const filter = FILTER_STATUSES.COMPLETED;

const filterTask = (filter, task) => {
    if (filter === FILTER_STATUSES.ALL) {
        return true;
    }

    if (filter === FILTER_STATUSES.COMPLETED) {
        return task.isDone;
    }

    return !task.isDone;
}

export function App() {
    return (
        <div className={css.app}>
            <h1 className={css.header}>TODO App</h1>
            <form className={css.form}>
                <input type="text" className={css.input}/>
                <button type="button" className={css.btn}>Add task</button>
            </form>
            <div>
                <CheckboxGroup options={filterOptions} value={FILTER_STATUSES.COMPLETED}/>
            </div>
            <ul className={css.list}>
                {tasks.filter((task) => filterTask(filter, task)).map(({id, label, isDone}) => (
                    <li className={css.item} key={id}>
                        <input readOnly type="checkbox" className={css.checkbox} checked={isDone}/>
                        {label}
                        {isDone && <button type="button" className={css.btn}>Remove Task</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
}
