import styles from "./styles.module.css"

export function CSSApp() {
    return (
        <>
            <div className={styles["grid--2"]}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>

            {/* <div className={styles.main}>
                <div>span</div>
                <div>span</div>
                <div>span</div>
                <div>span</div>
                <div>span</div>
                <div>span</div>
                <div>span</div>
                <div>span</div>
                <div>span</div>
                <div>span</div>
                <div>span</div>
            </div> */}
        </>
    )
}
