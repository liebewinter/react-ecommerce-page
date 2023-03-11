import React from "react";
import styles from './Button.module.css'

function Button ({ children, type, className, onClick }) {
  const classPrevProgressBtn = 
  className === 'prevProgressBtn' ? styles.prevProgressBtn : ''
  const classNextProgressBtn =
  className === 'nextProgressBtn' ? styles.nextProgressBtn : ''

  return(
    <button 
    type={type}
    onClick={onClick}
    className={`${styles.button} ${classPrevProgressBtn} ${classNextProgressBtn}`}
    >
      {children}
  </button>
  )
}

export default Button