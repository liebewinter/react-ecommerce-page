import React, { useContext } from 'react';
import styles from './cart.module.css';
import CartItem from './cartItem';
import { ItemsContext } from './itemsContext';




function Cart ({ shippingPrice }) {
  
  const [cartData, setCartData, totalPrice, setTotalPrice] = useContext(ItemsContext)
  
  function CalculatedTotalPrice (cartItems, shippingPrice) {
    let total = 0
    cartItems.map((cartItem) => {
      total += cartItem.price * cartItem.quantity;
    })
    const sumedPrice = total + parseInt(shippingPrice)

    setTotalPrice(sumedPrice)
    return sumedPrice 
  }
  
  const itemList = cartData.map((itemData) => (
    <CartItem
      key = {itemData.id}
      id = {itemData.id}
      name = {itemData.name}
      price = {itemData.price}
      img = {itemData.img}
      quantity = {itemData.quantity}
      cartItems={cartData}
      setCartItems={setCartData}
      totalPrice={totalPrice}
    />
  ));
  
    return (
    
    <section className={styles.cartContainer}>
    <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList} data-otal-rice="0">
        {itemList}
      </section>

      <section className={styles.cartInfoShipping}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>{shippingPrice}</div>
      </section>
      <section className={styles.cartInfoTotal}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>{CalculatedTotalPrice(cartData, shippingPrice)}</div>
      </section>
    </section>

  )
}

export default Cart