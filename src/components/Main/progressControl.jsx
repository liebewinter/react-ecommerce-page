import React from 'react';
import { ReactComponent as RightArrowIcon } from '../../public/icons/right-arrow.svg';
import { ReactComponent as LeftArrowIcon } from '../../public/icons/left-arrow.svg';
import styles from './progressControl.module.css';

export default function ProgressControl () {
  
  return (
  // <!-- progress-control -->
    <div className={styles.processControlContainer}>
     <section className={styles.buttonGroup} data-phase="shipping">
      <button className={styles.prev}>
        <LeftArrowIcon />
        上一步
      </button>
      <button className={styles.next}>
        下一步
        <RightArrowIcon />
      </button>
    </section>
  </div>
  )
}