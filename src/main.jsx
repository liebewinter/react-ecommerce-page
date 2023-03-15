import React from 'react';
import StepProgress from './components/Main/stepProcess';
import ProgressForm from './components/Main/Step/progressForm';
import Cart from './components/Main/Cart/cart';
import styles from './main.module.css';
import { useState } from 'react';
import { useContext } from 'react';
import { ItemsContext, ItemsProvider } from './components/Main/Cart/itemsContext';
import { InputContext, InputProvider } from './components/Main/Step/inputContext';





export default function Main() {
  const [currentStep, setCurrentStep] = useState('step1')
  const [shippingPrice, setShippingPrice] = useState(0)
  const [cartData, setCartData, totalPrice, setTotalPrice] = useContext(ItemsContext)
  const [formData, setFormData] = useContext(InputContext)

  const handlePrevStepChange = () => {
    switch (currentStep) {
      case 'step2':
        setCurrentStep('step1')
        break
      case 'step3':
        setCurrentStep('step2')
        break
      default:
        break
    }
  }
  
  const handleNextStepChange = () => {
    switch (currentStep) {
      case 'step1':
        setCurrentStep('step2')
        break
      case 'step2':
        setCurrentStep('step3')
        break
      default:
        break
    }
  }

  return(
    <>
    {/* main */}
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        {/* reguster */}
        <InputProvider value={[formData, setFormData]}>
          <ItemsProvider value={[cartData, setCartData, totalPrice, setTotalPrice]}>
          <section className={styles.registerContainer}>
          
            <div className={styles.registerBody}>
              <StepProgress 
                stepControl={currentStep}
              />
            
              <ProgressForm 
                stepControl={currentStep}
                onToPrevStep={handlePrevStepChange}
                onToNextStep={handleNextStepChange}
                onDeliveryPricChange={setShippingPrice}
              />
          
              </div>
              <div className={styles.checkout}>
              
                <Cart 
                  className={styles.cartCss} 
                  shippingPrice={shippingPrice} 
                />
              </div>
            </section>
          </ItemsProvider>
        </InputProvider>
        
        
      </div>
    </main>
    </>
  )
}