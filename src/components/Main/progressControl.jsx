import React from 'react';
import { ReactComponent as RightArrowIcon } from '../../public/icons/right-arrow.svg';
import { ReactComponent as LeftArrowIcon } from '../../public/icons/left-arrow.svg';
import styles from './progressControl.module.css';
// import { useState } from 'react';



export default function ProgressControl({currentStep, setCurrentStep}) {
  
  function handleNextClick(event) {
    event.preventDefault()
    if(currentStep !== 'step3') {
      setCurrentStep(currentStep + 1)
    }
  }
  
  function handlePrevClick(event) {
    event.preventDefault()
    if(currentStep !== 'setp1') {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
  // <!-- progress-control -->
    <div className={styles.processControlContainer}>
     <section className={styles.buttonGroup} data-phase="shipping">
      <button onClick={handlePrevClick}
      className={
        currentStep === 'step1' ? styles.disabledButton : styles.pre} >
        <LeftArrowIcon className='next'/>
        上一步
      </button>
      <button onClick={handleNextClick}
      className={styles.next} >
        {currentStep === 'step3' ? '確認下單' : '下一步'}
        <RightArrowIcon className={
          currentStep === 'step3' && styles.disabledNext 
        }/>
      </button>
    </section>
  </div>
  )
}