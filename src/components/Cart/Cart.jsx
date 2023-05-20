import { Fragment, useContext, useState } from 'react'
import { Modal } from '../UI/Modal'
import styles from './Cart.module.css'
import { CartContext } from '../../store/cart-context'

import { CartItem } from './CartItem/CartItem'
import { Checkout } from './Checkout'
import { URL } from '../../URL'


export const Cart = ({ onHideCart }) => {
    const cartCtx = useContext(CartContext);
    const [orderCheckout, setOrderCheckout] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitIsDone, setSubmitIsDone] = useState(false);

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

    const submitOrderHandler = (userData) => {
        setIsSubmitted(true);
        fetch(URL + 'orders.json', {
            method: "POST",
            body: JSON.stringify({
                orderDate: new Date(),
                user: userData,
                orderItems: cartCtx.items
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Something went wrong!")
                }
                setIsSubmitted(false);
                setSubmitIsDone(true);
                cartCtx.clearCart();
            })
            .catch(err => alert(err.message))
    }

    const crttModalContext = <Fragment>
        {!orderCheckout && <ul className={styles["cart-items"]}>{cartItems}</ul>}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount.toFixed(2) + " vl."}</span>
        </div>
        {orderCheckout && <Checkout
            onCancel={() => setOrderCheckout(false)}
            ocConfirm={submitOrderHandler}
        />}
        {!orderCheckout && <div className={styles.actions}>
            <button onClick={onHideCart} className={styles["button--alt"]} >Close</button>
            {hasItems && <button className={styles.button} onClick={() => setOrderCheckout(true)}>Oredr</button>}
        </div>}
    </Fragment>;

    const submittingModalCtx = <p>Sending order data ... </p>;

    const didSubmitModalCtx = <Fragment>
        <p>Successfully sent the order!</p>
        <div className={styles.actions}>
            <button onClick={onHideCart} className={styles.button} >Close</button>
        </div>
    </Fragment>

    return <Modal onClose={onHideCart}>
        {!isSubmitted && !submitIsDone && crttModalContext}
        {isSubmitted && !submitIsDone && submittingModalCtx}
        {submitIsDone && !isSubmitted && didSubmitModalCtx}
    </Modal>
}