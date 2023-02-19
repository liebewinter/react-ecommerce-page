import React from "react";
import { ReactComponent as PgCompleteIcon } from "../../public/icons/pg-complete.svg";
import styles from './stepProcess.module.css'

function Progress({
  progressOrder,
  dataPhase,
  progressName,
  phaseName,
}) {
  return(
       <>
      <span className={styles.progressGroup} data-phase={dataPhase}>
        <span className={styles.progressIcon} >
          <span className={styles.text}><span>{progressOrder}</span></span>
          <PgCompleteIcon />
        </span>
        <span className={styles.progressLabel}>{progressName}<span className={phaseName}></span></span>
      </span>
          
    </>
  )
}

export default function StepProgress() {
  return(
   <div>
    <div className={styles.siteTitleContainer}>
      <h1 className={styles.siteName}>結帳</h1>
    </div>
    <div className="stepper">
      <section className={styles.progressContainer}>
        <Progress
          progressIsActive='active'
          progressOrder='1'
          dataPhase='address'
          progressName='寄送地址'
          phaseName={styles.address}
        />
        <Progress
          progressIsActive='active'
          progressOrder='2'
          dataPhase='shipping'
          progressName='運送方式'
          phaseName={styles.shipping}
        />
        <Progress
          progressIsActive='active'
          progressOrder='3'
          dataPhase='credit-card'
          progressName='付款資訊'
          phaseName={styles.creditCard}
        />
      </section>
    </div>
   </div>
    
  )
}
  