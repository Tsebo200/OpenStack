import React from 'react'
import style from './Dropdown.module.scss';

export default function Dropdown() {
  return (
    <div className={style.container}>
        <select className={style.dropdown}>
            <option value="Default">-- Please Select --</option>
            <option value="Amber">First Year</option>
            <option value="Black">Second Year</option>
            <option value="Ivory">Third Year</option>
            <option value="Red">Honours</option>
            <option value="Red">Creative Computing</option>
            <option value="White">Lecturer</option>
        </select>         
    </div>
  )
}
