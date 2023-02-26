import React from 'react';
import StepProgress from './components/Main/stepProcess';
import AddressForm from './components/Main/Step/addressForm';
import DeliveryForm from './components/Main/Step/deliveryForm';
import PaymentForm from './components/Main/Step/paymentForm';
import ProgressControl from './components/Main/progressControl';
import Cart from './components/Main/Cart/cart';
import styles from './main.module.css';
import { useState } from 'react';


export default function Main() {
  const [currentStep, setCurrentStep] = useState(1)
  return(
    <>
    {/* main */}
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        {/* reguster */}
        <section className={styles.registerContainer} data-phase="1" data-total-price="0">
          <div className={styles.registerBody}>
            <StepProgress className={styles.StepProgressCss} currentStep={currentStep}/>
            {currentStep === 1 && <addressFromCss className={styles.addressFromCss}/>}
            {currentStep === 2 && <DeliveryForm className={styles.deliveriesCss}/>}
            {/* <AddressForm className={styles.addressFromCss} /> */}
            {/* <DeliveryForm className={styles.deliveriesCss} /> */}
            <PaymentForm className={styles.paymentInfoCss} />
            <ProgressControl className={styles.progressControlCss} /> 
          </div>
          <div className={styles.checkout}>
            <Cart className={styles.cartCss} />
          </div>
        </section>
        
      </div>
    </main>
    </>
  )
}