import React, {useRef, useImperativeHandle} from 'react';
import classes from './input.module.css';

const Input = React.forwardRef((props, ref) => {
    useImperativeHandle(ref, () => {
        return {onfocus: customFocus}
    })
    const inputRef = useRef();

    function customFocus(){
        inputRef.current.focus()
    }

    return <div
                className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
                }`}
            >
                <label htmlFor="email">{props.children}</label>
                <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChangeHandler}
                onBlur={props.onBlurHandler}
                />
            </div>
})

export default Input;