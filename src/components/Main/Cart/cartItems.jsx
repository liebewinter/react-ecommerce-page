import React from 'react';
import useState from 'react';
import styles from './cartItems.module.css';
import { ReactComponent as MinusIcon } from '../../../public/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../public/icons/plus.svg';
import { itemsData } from './itemsData';


function CartItems ({
  id, 
  name,
  price,
  img,
  quantity,
}) {
  
  // const [count ,setCount] = useState(0)
  // const increment = () => {
  //   setCount(count + 1)
  // }
  // const decrement =() => {
  //   if (count > 0) {
  //     setCount(count -1)
  //   }
  // }
  return (
    <div className={styles.productContainer} key={id}>
      <img className={styles.imgContainer} src={img} alt={name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusIcon className={styles.button} />
            <span className={styles.productQuantity}>{quantity}</span>
            <PlusIcon className={styles.buttun} />
          </div>
        </div>
      </div>
      <div className={styles.price}>{price}</div>
    </div>
  )
}
export default CartItems