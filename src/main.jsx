import React from 'react';
import StepProgress from './components/Main/stepProcess';
// import AddressForm from './components/Main/Step/addressForm';
// import DeliveryForm from './components/Main/Step/deliveryForm';
// import PaymentForm from './components/Main/Step/paymentForm';
// import ProgressControl from './components/Main/progressControl';
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
  const [cartData, setCartData] = useContext(ItemsContext)
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
              <ItemsProvider value={[cartData, setCartData]}>
                <Cart 
                  className={styles.cartCss} 
                  shippingPrice={shippingPrice} />
              </ItemsProvider>
            
            
            </div>
          </section>
        </InputProvider>
        
        
      </div>
    </main>
    </>
  )
}