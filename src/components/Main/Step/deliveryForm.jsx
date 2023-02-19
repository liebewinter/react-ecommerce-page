import React from "react";
import styles from './deliveryForm.module.css'



function Delivery ({
  deliveryId,
  name,
  price,
  deliveryName,
  deliveryPrice,
  deliveryPeriod,
}) {
  return(
    <label className={styles.radioGroup} dataPrice={price}>
      <input id={deliveryId} type="radio" className={styles.radioInput} name={name}  checked/>
        <div className={styles.radioInfo}>
          <div className={styles.deliverDes}>
            <div className={styles.text}>{deliveryName}</div>
            <div className={styles.price}>{deliveryPrice}</div>
          </div>
          <div className={styles.period}>{deliveryPeriod}</div>
        </div>
      <div className={styles.radioBox}></div>
    </label>
  )
}

export default function Deliveries () {

  return (
    //shipping phase
    <div className="stepTow">
      <form className={styles.formContainer} data-phase="shipping">
        <h3 className={styles.formTitle}>運送方式</h3>
        <section className={styles.formBody}>
          <Delivery 
            deliveryId="shippingStandard"
            name="shipping"
            price="0"
            deliveryName="標準運送"
            deliveryPrice="免費"
            deliveryPeriod="約 3~7 個工作天"
        />
          <Delivery 
            deliveryId="shippingDhl"
            name="shipping"
            price="500"
            deliveryName="DHL 貨運"
            deliveryPrice="500"
            deliveryPeriod="48 小時內送達"
          />
        </section>
      </form>
    </div>
   )
}