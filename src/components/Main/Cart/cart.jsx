import React from 'react';
import { useState } from 'react';
import { ReactComponent as MinusIcon } from '../../../public/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../public/icons/plus.svg';
import CartItems from './cartItems';
import styles from './cart.module.css';
import { itemsData } from './itemsData';


function Cart () {
  const itemList = itemsData.map((item) => (
    <CartItems
      key = {item.id}
      id = {item.id}
      name = {item.name}
      img = {item.img}
      price = {item.price}
      quantity = {item.quantity}
    />
   
    // {/* // cart */}
  // const currencyFormation = new Intl.NumberFormat (
  //   'de-DE', 
  //   { 
  //     style: 'currency', 
  //     currency: "EUR", 
  //   }
  // ).format(itemList.item.itemPrice);  
  ));
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
        <div className={styles.price}>0</div>
      </section>
    </section>
  )
}

export default Cart