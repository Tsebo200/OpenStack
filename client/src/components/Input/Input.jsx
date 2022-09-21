import React, {forwardRef} from 'react';
import style from './Input.module.scss';

const Input =  forwardRef((props, ref) => {
    return (
      <input
          type={props.inputType}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          name={props.name}
          className={`
            ${props.className ? props.classname : ""}
            ${props.type == "questionInput" ? style.questionInput :
            style.tersiary}
          `} 
          id={props.id}
          onChange={props.onChange}
          ref={ref}
          onKeyPress={props.onKeyPress}
          min={props.min}
          max={props.max}
          value={props.value}
          step={props.step}
          accept={props.accept}
      />
    )
  });
  
  export default Input;
