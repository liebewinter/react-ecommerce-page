import React, { useState, useContext } from "react";
import AddressForm from "./addressForm";
import DeliveryForm from "./deliveryForm";
import PaymentForm from "./paymentForm";
import { InputContext } from "./inputContext"


function ProgressForm ({ onToPrevStep, onToNextStep, onDeliveryPriceChange, stepControl }) {
  
  
  const [formData, setFormData] = useState ({
    address: {
      title: '',
      name: '',
      tel: '',
      email: '',
      city: '',
    },
    delivery: {
      deliveryMethod: '',
    },
    payment: {
      cardOwner: '',
      cardNumber: '',
      cardPeriod: '',
      cardPin: '',
    },
  })
  // console.log('form', formData)
  const userInput = useContext(InputContext)

  const handleAddressSubmit = (addressData) => {
    setFormData({ ...formData, address: addressData })
  }

  const handleDeliverySumit = (deliveryData) => {
    setFormData({ ...formData, delivery: deliveryData})
    onDeliveryPriceChange(deliveryData.deliveryPrice)
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // 因為userInput是一個array，此處需使用[0]取得正確的資料
    console.log(`Cardholder Name: ${userInput[0].payment.cardOwner}`);
    console.log(`Card Number: ${userInput[0].payment.cardNumber}`);
    console.log(`Expiry Date: ${userInput[0].payment.cardPeriod}`);
    console.log(`CVC: ${userInput[0].payment.cardPin}`);
  };


  return (
    <>

    {stepControl === 'step1' && 
    <AddressForm 
    onToNextStep={onToNextStep} 
    onAddressSubmit={handleAddressSubmit}
    />}
    
    {stepControl === 'step2' && 
    <DeliveryForm 
    onToPrevStep={onToPrevStep} 
    onToNextStep={onToNextStep}
    onDeliverySumit={handleDeliverySumit}
    />}
    
    {stepControl === 'step3' && 
    <PaymentForm 
    onToPrevStep={onToPrevStep}
    handlePaymentSubmit={handlePaymentSubmit}
    />}
    </>
  )
}

export default ProgressForm