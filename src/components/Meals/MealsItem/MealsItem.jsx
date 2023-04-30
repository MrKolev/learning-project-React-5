import { useContext } from 'react'
import styles from './MealItem.module.css'
import { MealItemForm } from './MealsItemForm'
import { CartContext } from '../../../store/cart-context'


export const MealsItem = ({ name, description, price, id }) => {
    
    const cartCtx = useContext(CartContext)

    const onAddToCartHendler = (amount) => {
        cartCtx.addItem({ id, name, amount, price })
    }

    return <li className={styles.meal}>
        <div>
            <h3>{name}</h3>
            <div className={styles.description}>{description}</div>
            <div className={styles.price}>{`${price.toFixed(2)} lv.`}</div>
        </div>

        <MealItemForm onAddToCart={onAddToCartHendler} id={id} />

    </li>

}