import React from 'react';
import { ReactComponent as RightArrowIcon } from '../../public/icons/right-arrow.svg';
import { ReactComponent as LeftArrowIcon } from '../../public/icons/left-arrow.svg';
import styles from './progressControl.module.css';
import { useState } from 'react';
import PaymentForm from './Step/paymentForm';



export default function ProgressControl() {
  const [currentStep, setCurrentStep] = useState(1)

  
  function handleNextClick() {
    if(currentStep !== 3) {
      setCurrentStep(currentStep + 1) 
    }
  }
  
  function handlePreClick(e) {
    if(currentStep !==1) {
      setCurrentStep(currentStep - 1)
    }
  }

  

  return (
  // <!-- progress-control -->
    <div className={styles.processControlContainer}>
     <section className={styles.buttonGroup} data-phase="shipping">
      <button onClick={handlePreClick}
      className={
        currentStep === 1 ? styles.disabledButton : styles.pre} >
        <LeftArrowIcon />
        上一步
      </button>
      <button onClick={handleNextClick}
      className={styles.next} >
        {currentStep === 3 ? '確認下單' : '下一步'}
        <RightArrowIcon className={
          currentStep === 3 && styles.disabledButton 
        }/>
      </button>
    </section>
  </div>
  )
}