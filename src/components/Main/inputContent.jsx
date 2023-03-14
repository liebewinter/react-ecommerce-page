import React from "react";
import styles from './Step/addressForm.module.css';

export default function InputContent ({
  inputClassName,
  inputLabel,
  inputType,
  placeHolder,
  name,
  onChange,
}) {
  return (
    <>
      <div className={inputClassName}>
        <div className={styles.inputLabel}>{inputLabel}</div>
        <input 
        type={inputType} 
        placeholder={placeHolder} 
        name={name}
        onChange={onChange}/>
      </div>
    </>
  )
}