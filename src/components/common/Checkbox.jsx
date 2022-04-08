function Checkbox({label, value, checked, onChange}) {
    return (
        <label>
            <input readOnly type="radio" name="tasks" value={value} checked={checked} onChange={onChange}/>
            {label}
        </label>
    );
}

export const CheckboxGroup = ({value: groupValue, options, onChange}) => {
    return (
        <>
            {options.map(({value, label}) =>
                <Checkbox key={label} value={value} label={label} checked={value === groupValue} onChange={onChange}/>)}
        </>
    )
}
