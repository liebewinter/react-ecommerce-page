import React from 'react';
import { ReactComponent as PgCompleteIcon } from "../../public/icons/pg-complete.svg";
import styles from './stepProcess.module.css';

function Progress({
  progressOrder,
  progressName,
  phaseName,
  active,
  done
}) {

  const classActive = active ? `${styles.active}` : ''
  const classDone = done ? `${styles.done}` : ''
  const calssInactive = !active && !done ? `${styles.inactive}` : ''
  
  return(
    <>
      <span className={styles.progressGroup}>
        <span className={styles.progressIcon}>
          {active ? (
            <span className={`${styles.text} ${classActive} ${classDone} ${calssInactive}`}><span>{progressOrder}</span></span>
          ) : done ? (
            <PgCompleteIcon className={classDone}/>
          ) : (
            <span className={`${styles.text} ${classActive} ${classDone} ${calssInactive}`}><span>{progressOrder}</span></span>
          )}
        </span>
        <span className={styles.progressLabel}>{progressName}<span className={phaseName}></span></span>
        
      </span> 
    </>
  )
}

export default function StepProgress({ stepControl }) {
  

  return(
   <div>
    <div className={styles.siteTitleContainer}>
      <h1 className={styles.siteName}>結帳</h1>
    </div>
    <div className="stepper">
      <section className={styles.progressContainer}>
        <Progress
          progressOrder='1'
          progressName='寄送地址'
          phaseName={styles.address}
          active={stepControl === 'step1' ? true : false}
          done={stepControl === 'step2' || stepControl === 'step3' ? true : false}
        />
        <div className={stepControl === 'step1' || stepControl === 'step2'? styles.activProgressBar : styles.progressBar}></div>
        <Progress
          progressOrder='2'
          progressName='運送方式'
          phaseName={styles.shipping}
          active={stepControl === 'step2' ? true : false}
          done={stepControl === 'step3' ? true : false}
        />
        <div className={stepControl === 'step2' ? styles.activProgressBar : styles.progressBar}></div>
        <Progress
          progressOrder='3'
          progressName='付款資訊'
          phaseName={styles.creditCard}
          active={stepControl === 'step3' ? true : false}
          done={stepControl === 'step3' ? true : false}
        />
      </section>
    </div>
   </div>
    
  )
}
  