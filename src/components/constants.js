export const tasks = [
    {id: 1, label: 'Выучить JS', isDone: true},
    {id: 2, label: 'Выучить React', isDone: false},
    {id: 3, label: 'Написать ToDo лист', isDone: true},
    {id: 4, label: 'Собрать чемоданы', isDone: false},
    {id: 5, label: 'Купить билеты', isDone: true},
];

export const FILTER_STATUSES = {
    ALL: 'all',
    COMPLETED: 'completed',
    IN_PROCESS: 'inProcess',
}

export const filterOptions = [
    {value: FILTER_STATUSES.ALL, label: 'Все'},
    {value: FILTER_STATUSES.COMPLETED, label: 'Выполнено'},
    {value: FILTER_STATUSES.IN_PROCESS, label: 'В процессе'},
];
