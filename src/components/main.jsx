import React from 'react';
import SetpProgress from './Main/stepProcess';
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
        <div className={styles.siteTitleContainer}>
          <h1 className={styles.siteName}>結帳</h1>
        </div>
        
        {/* reguster */}
        
        <section className={styles.registerContainer} data-phase="1" data-total-price="0">
          <div className={styles.registerBody}>
            <SetpProgress />
            <AddressForm />

          </div>
          
          <Cart />
        </section>
        <ProgressControl />
      </div>
    </main>
    </>
  )
}