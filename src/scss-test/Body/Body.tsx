import { carsUrl } from "../../data/cars-url"
import styles from "../styles.module.scss"

export function Car({ url }: { url: string }) {
    return (
        <div className={styles.image}>
            <img src={url} />
        </div>
    )
}

export function Body() {
    return (
        <div className={styles.body}>
            {carsUrl.map((url) => (
                <Car url={url} />
            ))}
        </div>
    )
}
