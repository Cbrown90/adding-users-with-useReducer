import React, {useRef, useImperativeHandle} from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

const activate = () => {
inputRef.current.focus();
};

useImperativeHandle(ref, () => {
  return{
    focus: activate
  };
});

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}>
     
      <label className={classes.control} htmlFor={props.id}>
        {props.label}
      </label>
      <input
      ref={inputRef}
        type={props.type || "input"}
        id={props.id}
        value={props.value || ""}
        className={`${classes.Input} ${props.className}`}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        {props.children}
      </input>
    </div>
  );
});

export default Input;
