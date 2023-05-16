
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'
import { CartContext } from "../../store/cart-context"
import { useContext, useEffect, useState } from 'react'



export const HeaderCartButton = ({ onClick }) => {

    const label = "You Cart"
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx
    const badge = items.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

    const buttonClass = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`
    
    useEffect(() => {
        if(items.length === 0) {
            return
        }
        setBtnIsHighlighted(true);
      const timer =  setTimeout(() => {
            setBtnIsHighlighted(false);
        },301)

        return () => {
            clearTimeout(timer)
        };
    }, [items])

    return (
        <button onClick={onClick} className={buttonClass}>
            <span className={styles.icon}><CartIcon /></span>
            <span>{label}</span>
            <span className={styles.badge}>
                {badge}
            </span>

        </button>
    )
}