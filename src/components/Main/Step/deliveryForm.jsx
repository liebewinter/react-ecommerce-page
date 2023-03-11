import React from "react";
import styles from './deliveryForm.module.css'
import Button from "../../UI/Button";
import { ReactComponent as LeftArrowIcon } from '../../../public/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../../public/icons/right-arrow.svg';
import { useState } from "react";



function Delivery ({
  deliveryId,
  name,
  deliveryName,
  deliveryPrice,
  deliveryPeriod,
  onChange,
}) {
  const formattedDeliveryPrice = deliveryPrice === "0" ? "免費" : deliveryPrice
  const deliveryPriceNum = parseInt(deliveryPrice)
  return(
    <label className={styles.radioGroup} data-price={deliveryPrice}>
      <input 
      id={deliveryId} 
      type="radio" 
      className={styles.radioInput} 
      name={name} 
      value={deliveryPriceNum}
      onChange={(e) => onChange(parseInt(e.target.value))}
      />
        <div className={styles.radioInfo}>
          <div className={styles.deliverDes}>
            <div className={styles.text}>{deliveryName}</div>
            <div className={styles.price}>{formattedDeliveryPrice}</div>
          </div>
          <div className={styles.period}>{deliveryPeriod}</div>
        </div>
      <div className={styles.radioBox}></div>
    </label>
  )
}

function DeliveryForm ({ onToPrevStep, onToNextStep }) {
  
  const [deliveryPrice, setDeliveryPrice] = useState("0")
  
  function handleDeliveryPriceChange(deliveryPrice) {
    setDeliveryPrice(deliveryPrice)
  }
  
  return (
    //shipping phase
    <div className="stepTow">
      <form className={styles.formContainer} data-phase="shipping">
        <h3 className={styles.formTitle}>運送方式</h3>
        <section className={styles.formBody}>
          <Delivery 
            deliveryId="shippingStandard"
            name="shipping"
            deliveryName="標準運送"
            deliveryPrice="0"
            deliveryPeriod="約 3~7 個工作天"
            onChange={handleDeliveryPriceChange}
        />
          <Delivery 
            deliveryId="shippingDhl"
            name="shipping"
            deliveryName="DHL 貨運"
            deliveryPrice="500"
            deliveryPeriod="48 小時內送達"
            onChange={handleDeliveryPriceChange}
          />
        </section>
      </form>
      <div className={styles.btnGroup}>
        <Button className="prevProgressBtn" type="button" onClick={onToPrevStep}>
          <LeftArrowIcon />
          上一步
        </Button>
        <Button className="nextProgressBtn" type="button" onClick={onToNextStep}>
          下一步
          <RightArrowIcon />
        </Button>
      </div>
    </div>
   )
}

export default DeliveryForm