import { Body } from "./Body/Body"
import { Header } from "./Header/Header"
import styles from "./styles.module.scss"

export function SCSSApp() {
    return (
        <div className={styles.main}>
            <Header />
            <Body />
        </div>
    )
}
