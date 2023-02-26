import React from 'react';
import { useState } from 'react';
import { ReactComponent as MinusIcon } from '../../../public/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../public/icons/plus.svg';
import { useContext } from 'react';
import CartItem from './cartItem';
import { ItemsContext } from './itemsContext';
import styles from './cart.module.css';




function Cart () {
  
  const [cartData, setCartData] = useContext(ItemsContext)

  function CalculatedTotalPrice ({cartItems}) {
    let total = 0
    cartItems.map((cartItem) => {
      total += cartItem.price * cartItem.quantity
      return total
    })
  
  const itemList = cartData.map((itemData) => (
    <CartItem
      key = {itemData.id}
      id = {itemData.id}
      name = {itemData.name}
      price = {itemData.price}
      img = {itemData.img}
      quantity = {itemData.quantity}
      cartItems = {cartData}
      setCartItems = {setCartData}
    />
    
  ));
  console.log(itemList)
    return (

    <section className={styles.cartContainer}>
    <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList} data-otal-rice="0">
        {itemList}
      </section>

      <section className={styles.cartInfoShipping}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={styles.cartInfoTotal}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}><CalculatedTotalPrice cartItems={cartData} /></div>
      </section>
    </section>
  )
}
}

export default Cart