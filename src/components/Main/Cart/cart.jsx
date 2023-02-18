import React from 'react';
import { useState } from 'react';
import { ReactComponent as MinusIcon } from '../../../public/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../public/icons/plus.svg';
import CartItems from './cartItems';
import ProductOne from '../../../public/images/product-1.jpg';
import ProductTwo from '../../../public/images/product-2.jpg';

import styles from './cart.module.css';



function Cart () {
  const items =[
      {
        id: 0, 
        name: '破壞補丁修身牛仔褲',
        price: '3999',
        img: {ProductOne},
        itemCount: 0
      },
      {
        id: 1, 
        name: '刷色直筒牛仔褲',
        price: '1299',
        img: {ProductTwo},
        itemCount:0
      }
    ];
  // console.log(items)
  const itemList = items.map((item) => {
    <cartItems 
      key = {item.id}
      name = {item.name}
      price = {item.price}
      img = {item.img}
      itemCount = {item.itemCount}
    />
    console.log(item)
  });
  console.log(items);
  // {/* // cart */}
  return (
    <section className={styles.cartContainer}>
    <h3 className="cart-title">購物籃</h3>
      <section className={styles.productList} data-total-price="0">
                    {itemList}


      </section>

          <section className="cart-info shipping col col-12">
            <div className="text">運費</div>
            <div className="price"></div>
          </section>
          <section className="cart-info total col col-12">
            <div className="text">小計</div>
            <div className="price"></div>
          </section>
    </section>
  )
}

export default Cart