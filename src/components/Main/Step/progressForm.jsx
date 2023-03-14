import React, { useState, useContext } from "react";
import AddressForm from "./addressForm";
import DeliveryForm from "./deliveryForm";
import PaymentForm from "./paymentForm";
import { InputContext } from "./inputContext"


function ProgressForm ({ onToPrevStep, onToNextStep, onDeliveryPriceChange, stepControl }) {
  
  
  const [formData, setFormData] = useState ({
    address: {
      name: '',
      phone: '',
      email: '',
      address: '',
    },
    delivery: {
      deliveryMethod: '',
      deliveryPrice: 0,
    },
    payment: {
      cardholderName: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
  })
  

  const handleAddressSubmit = (addressData) => {
    setFormData({ ...formData, address: addressData })
  }

  const handleDeliverySumit = (deliveryData) => {
    setFormData({ ...formData, delivery: deliveryData})
    onDeliveryPriceChange(deliveryData.deliveryPrice)
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log(`Cardholder Name: ${formData.payment.cardholderName}`);
    console.log(`Card Number: ${formData.payment.cardNumber}`);
    console.log(`Expiry Date: ${formData.payment.expiryDate}`);
    console.log(`CVC: ${formData.payment.cvc}`);
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