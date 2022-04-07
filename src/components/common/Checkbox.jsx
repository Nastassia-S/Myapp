function Checkbox({label, value, checked}) {
    return (
        <label>
            <input readOnly type="radio" name="tasks" value={value} checked={checked}/>
            {label}
        </label>
    );
}

export const CheckboxGroup = ({value: groupValue, options}) => {
    return (
        <>
            {options.map(({value, label}) =>
                <Checkbox key={label} value={value} label={label} checked={value === groupValue}/>)}
        </>
    )
}
