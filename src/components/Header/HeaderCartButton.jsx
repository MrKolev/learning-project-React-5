
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'


export const HeaderCartButton = (
    {
        label,
        badge
    }
) => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}><CartIcon/></span>
            <span>{label}</span>
            <span className={styles.badge}>
                {badge}
            </span>

        </button>
    )
}