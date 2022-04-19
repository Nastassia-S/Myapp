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
