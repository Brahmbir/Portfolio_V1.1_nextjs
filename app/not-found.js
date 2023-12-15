import styles from "@/styles/not_found.module.css"

const NotFound = () => {
    return (
        <section className={styles.cont}>
            <div className={styles.FOF} >
                <div className={styles.backFOF}>
                    <div className={styles.Foftext}>＼（〇_ｏ）／</div>
                </div>
                <div className={styles.downlabel}>
                    <p className={styles.pl}>4 - 0 - 4</p>
                    <p className={styles.pl}>
                        sorry we lost your page .&nbsp;&nbsp;Back to home
                    </p>
                </div>
            </div >
        </section>
    );
}

export default NotFound;
