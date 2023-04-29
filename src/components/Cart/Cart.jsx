import styles from './Cart.module.css'

export const Cart = () => {
    const cartItems = [
        {
            id: 'm1',
            name: 'Sushi',
            amount: 2,
            price: 22.99,
        }
    ].map((item) => <li>{item.name}</li>)
    return <div>
        <ul className={styles["cart-items"]}>{cartItems}</ul>
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={styles.actions}>
            <button className={styles["button--alt"]} >Close</button>
            <button className={styles.button}>Oredr</button>
        </div>
    </div>
}