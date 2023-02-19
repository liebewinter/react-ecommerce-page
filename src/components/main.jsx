import React from 'react';
import StepProgress from './Main/stepProcess';
import AddressForm from './Main/Step/addressForm';
import Deliveries from './Main/Step/deliveryForm';
import PaymentInfo from './Main/Step/paymentForm';
import ProgressControl from './Main/progressControl';
import Cart from './Main/Cart/cart';
import styles from './main.module.css';

export default function Main() {
  
  return(
    <>
    {/* main */}
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        {/* reguster */}
        <section className={styles.registerContainer} data-phase="1" data-total-price="0">
          <div className={styles.registerBody}>
            <StepProgress className={styles.StepProgressCss}/>
            <AddressForm className={styles.addressFromCss} />
          
            {/* <Deliveries className={styles.deliveriesCss} /> */}
            {/* <PaymentInfo className={styles.paymentInfoCss} /> */}
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