import { useEffect, useState } from 'react';
import styles from './CartItem.module.css';
 
export const CartItem = ({name,price,amount,onRemove,onAdd}) => {

  const [amountIsHighlightedGreen, setGreen] = useState(false)
  const [amountIsHighlightedRed, setRed] = useState(false)
  const [outAmount, setOutAmount] = useState(0)

  const bumpClassAmount = `${styles.amount} 
  ${amountIsHighlightedGreen ? styles.bumpGreen : ""} 
  ${amountIsHighlightedRed ? styles.bumpRed : ""}`;
  

  useEffect(() => {
    if(outAmount < amount){
      setOutAmount(amount);
      setGreen(true);
      setTimeout(() => {
        setGreen(false);
      },301)
    }else{
      setOutAmount(amount);
      setRed(true);
      setTimeout(() => {
        setRed(false);
      },301)
    }
  }, [amount])


  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{`${price.toFixed(2)} lv.`}</span>
          <span className={bumpClassAmount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

