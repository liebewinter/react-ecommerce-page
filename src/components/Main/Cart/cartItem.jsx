import React from 'react';
import styles from './cartItems.module.css';
import { ReactComponent as MinusIcon } from '../../../public/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../public/icons/plus.svg';


function CartItem ({
  id, 
  name,
  price,
  img,
  quantity,
  cartItems, 
  setCartItems
}) {
  const formattedPrice = new Intl.NumberFormat('en-us').format(price)

  function handleOnClick(id, clickType) {
    let newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: clickType === "minus" ? item.quantity - 1 : item.quantity + 1,
      };
      } else {
        return item;
      }
    });
    newCartItems = newCartItems.filter((item) => item.quantity > 0);
    
    setCartItems(newCartItems);
  }
      
  return (
    <div className={styles.productContainer} key={id}>
      <img className={styles.imgContainer} src={img} alt={name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusIcon
              className={styles.button}
              onClick={() => handleOnClick(id, 'minus')}
            />
            <span className={styles.productQuantity}>{quantity}</span>
            <PlusIcon
              className={styles.buttun}
              onClick={() => handleOnClick(id, 'plus')}
            />
          </div>
        </div>
      </div>
      <div className={styles.price}>${formattedPrice * quantity.toLocaleString()}</div>
    </div>
  )
}



export default CartItem