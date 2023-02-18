import React from 'react';
import useState from 'react';
import styles from './cartItems.module.css';
import { ReactComponent as MinusIcon } from '../../../public/icons/minus.svg';
import { ReactComponent as PlusIcon } from '../../../public/icons/plus.svg';
import ProductOne from '../../../public/images/product-1.jpg'
import ProductTwo from '../../../public/images/product-2.jpg'

function CartItems ({
  id, 
  name,
  price,
  img,
  itemCount,
}) {
  const [count ,setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement =() => {
    if (count > 0) {
      setCount(count -1)
    }
  }
  return (
    <div className={styles.productContainer}>
      <img className={styles.imgContainer} src={img} alt={id}/>
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <button onClick={increment}>
            <MinusIcon />
            </button>
            <span className={styles.productCount}>{count}</span>
            <button onClick={decrement}>
            <PlusIcon />
            </button>
          </div>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
    
  )
}

export default CartItems