import { useContext } from 'react'
import { Modal } from '../UI/Modal'
import styles from './Cart.module.css'
import { CartContext } from '../../store/cart-context'
import { MealsItem } from '../Meals/MealsItem/MealsItem'


export const Cart = ({ onHideCart }) => {
    const cartCtx = useContext(CartContext)

    const cartItems = cartCtx.items.map((item) => <MealsItem
        name={item.name}
        price={item.price}
    />)

    return <Modal onClose={onHideCart}>
        <ul className={styles["cart-items"]}>{cartItems}</ul>
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={styles.actions}>
            <button onClick={onHideCart} className={styles["button--alt"]} >Close</button>
            <button className={styles.button}>Oredr</button>
        </div>
    </Modal>
}