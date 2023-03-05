import React, { useState } from "react";
import AddressForm from "./addressForm";
import DeliveryForm from "./deliveryForm";
import PaymentForm from "./paymentForm";



function ProgressForm ({ onToPrevStep, onToNextStep, stepControl }) {
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
  }

  const handlePaymentSubmit = (paymentData) => {
    setFormData({ ...formData, payment: paymentData})
  }

  return (
    <>
    {stepControl === 'step1' && 
    <AddressForm 
    onToNextStep={onToNextStep} 
    onAddressSubmit={handleAddressSubmit}/>}
    
    {stepControl === 'step2' && 
    <DeliveryForm 
    onToPrevStep={onToPrevStep} 
    onToNextStep={onToNextStep}
    omDeliverySumit={handleDeliverySumit}
    />}
    
    {stepControl === 'step3' && 
    <PaymentForm 
    onToPrevStep={onToPrevStep}
    onPaymentSubmit={handlePaymentSubmit}
    />}
    </>
  )
}

export default ProgressForm