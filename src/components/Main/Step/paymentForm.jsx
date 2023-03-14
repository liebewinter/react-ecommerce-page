import React, {useContext} from "react"
import InputContent from "../inputContent"
import styles from './paymentForm.module.css'
import Button from "../../UI/Button";
import { ReactComponent as LeftArrowIcon } from '../../../public/icons/left-arrow.svg';
import { InputContext } from "./inputContext";

export default function PaymentForm ({ onToPrevStep, handlePaymentSubmit }) {

  const [formData, setFormData] = useContext(InputContext)
  function handleChange(event) {
    setFormData({
      ...formData,
      payment: {
        ...formData.payment,
        [event.target.name]: event.target.value
      }
    })
  }

  return(
    <div className="stepThree">
      <form 
        className={styles.formContainer} 
        data-phase="credit-card"
        onSubmit={handlePaymentSubmit}>
        <h3 className={styles.formTitle}>付款資訊</h3>
          <section className={styles.formBody}>
            <div className={styles.inputContainer}>
              <InputContent
                inputClassName={styles.cardName}
                inputLabel="持卡人姓名"
                inputType="text"
                placeHolder="John Doe"
                name="cardOwner"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <InputContent
                inputClassName={styles.cardNumber}
                inputLabel="卡號"
                inputType="text"
                placeHolder="1111 2222 3333 4444"
                name="cardNumber"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <InputContent
                inputClassName={styles.cardPeriod}
                inputLabel="有效期限"
                inputType="text"
                placeHolder="MM/YY"
                name="cardPeriod"
                onChange={handleChange}
              />
              <InputContent
                inputClassName={styles.cardPin}
                inputLabel="CVC / CCV"
                inputType="text"
                placeHolder="123"
                name="cardPin"
                onChange={handleChange}
              />
            </div>
          </section>
      </form>
      <div className={styles.btnGroup}>
        <Button className="prevProgressBtn" type="button" onClick={onToPrevStep}>
          <LeftArrowIcon />
          上一步
        </Button>
        <Button 
          className="nextProgressBtn" 
          type="submit">
          確認下單
        </Button>
      </div>
    </div>
  )
}

// <!-- credit-card phase -->
            