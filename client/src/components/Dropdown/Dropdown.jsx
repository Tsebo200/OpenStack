import React from 'react'
import style from './Dropdown.module.scss';
import { forwardRef } from 'react';

const Dropdown = forwardRef((props, ref) => {
  return (
    <div className={style.container}>
        <select className={style.dropdown} ref={ref}>
            <option value="N/A">-- Please Select --</option>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Honours">Honours</option>
            <option value="Creative Computing">Creative Computing</option>
            <option value="Lecturer">Lecturer</option>
        </select>         
    </div>
  )
});

export default Dropdown;
