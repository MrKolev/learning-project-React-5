import { Fragment } from "react"
import styles from "./index.module.css"
import { burgers } from "../../img"
import { HeaderCartButton } from "./HeaderCartButton"

export const Header = ({ onShowCart }) => {

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Burger BAR</h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className={styles["main-image"]}>
                <img src={burgers} alt="burgers" />
            </div>
        </Fragment>
    )
}