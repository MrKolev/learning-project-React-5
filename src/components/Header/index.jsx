import { Fragment, useContext} from "react"
import styles from "./index.module.css"
import { burgers } from "../../img"
import { HeaderCartButton } from "./HeaderCartButton"
import { CartContext } from "../../store/cart-context"



export const Header = ({onShowCart}) => {
 const cartCtx = useContext(CartContext);
 const numbrtOfCartItems = cartCtx.items.reduce((acc, item) =>{
    return acc + item.amount;
 }, 0);

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Burger BAR</h1>
                <HeaderCartButton onClick={onShowCart} badge={numbrtOfCartItems} label="You Cart" />
            </header>
            <div className={styles["main-image"]}>
                <img src={burgers} alt="burgers" />
            </div>
        </Fragment>
    )
}