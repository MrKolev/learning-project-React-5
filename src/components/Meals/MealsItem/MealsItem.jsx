import styles from './MealItem.module.css'
import { MealItemForm } from './MealsItemForm'

export const MealsItem = ({ name, description,price, id}) => {
    return <li className={styles.meal}>
        <div>
            <h3>{name}</h3>
            <div className={styles.description}>{description}</div>
            <div className={styles.price}>{`${price.toFixed(2)} lv.`}</div>
        </div>
        <div>
        <MealItemForm id={id}/>
        </div>
    </li>

}