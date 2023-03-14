import React, { createContext, useState } from 'react';

export const InputContext = createContext([])

export function InputProvider({ children }) {
  const [formData, setFormData] = useState({
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
    }
  });
  return (
    <InputContext.Provider value={[formData, setFormData]}>
      {children}
    </InputContext.Provider>
  );
}