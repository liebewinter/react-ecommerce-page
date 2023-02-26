import React from 'react';
import { ReactComponent as PgCompleteIcon } from "../../public/icons/pg-complete.svg";
import styles from './stepProcess.module.css';
import { useState } from 'react'

function Progress({
  currentStep,
  progressOrder,
  progressName,
  phaseName,
}) {
  return(
    <>
      <span className={styles.progressGroup}>
        <span className={styles.progressIcon} >
          {currentStep > progressOrder ? <PgCompleteIcon /> : <span className={styles.text}><span>{progressOrder}</span></span>}
        </span>
        <span className={styles.progressLabel}>{progressName}<span className={phaseName}></span></span>
      </span> 
    </>
  )
}



export default function StepProgress({ currentStep }) {
  

  return(
   <div>
    <div className={styles.siteTitleContainer}>
      <h1 className={styles.siteName}>結帳</h1>
    </div>
    <div className="stepper">
      <section className={styles.progressContainer}>
        <Progress
          currentStep={currentStep}
          progressOrder={1}
          progressName='寄送地址'
          phaseName={styles.address}
        />
        <div className={currentStep < 2 ? styles.activProgressBar : styles.ProgressBar}></div>
        <Progress
          currentStep={currentStep}
          progressOrder={2}
          progressName='運送方式'
          phaseName={styles.shipping}
        />
        <div className={currentStep > 2 ? styles.activProgressBar : styles.ProgressBar}></div>
        <Progress
          currentStep={currentStep}
          progressOrder={3}
          progressName='付款資訊'
          phaseName={styles.creditCard}
        />
      </section>
    </div>
   </div>
    
  )
}
  