import { Fragment } from "react"
import styles from "./index.module.css"
import { burgers } from "../../img"
import { HeaderCartButton } from "./HeaderCartButton"


export const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Burger BAR</h1>
                <HeaderCartButton badge={3} label="You Cart" />
            </header>
            <div className={styles["main-image"]}>
                <img src={burgers} alt="burgers" />
            </div>
        </Fragment>
    )
}