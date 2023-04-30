import { useContext } from 'react'
import { Modal } from '../UI/Modal'
import styles from './Cart.module.css'
import { CartContext } from '../../store/cart-context'

import { CartItem } from './CartItem/CartItem'


export const Cart = ({ onHideCart }) => {
    const cartCtx = useContext(CartContext)

    const hasItems = cartCtx.items.length > 0;

    const removeItemFromCartHandler = (id) => { 
        cartCtx.removeItem(id)
    }

    const addItemToCartHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }


    const cartItems = cartCtx.items.map((item) => <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={removeItemFromCartHandler.bind(null, item.id)}
        onAdd={addItemToCartHandler.bind(null, item)}
    />)

    return <Modal onClose={onHideCart}>
        <ul className={styles["cart-items"]}>{cartItems}</ul>
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount.toFixed(2) + " vl."}</span>
        </div>
        <div className={styles.actions}>
            <button onClick={onHideCart} className={styles["button--alt"]} >Close</button>
            {hasItems && <button className={styles.button}>Oredr</button>}
        </div>
    </Modal>
}