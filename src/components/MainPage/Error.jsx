import styles from '../../styles/MainPage/MainPage.module.scss'

const Error = () => {
    return (
        <div className={styles.errorWrapper}>
            <img src='flying-saucer.png' className={styles.errorImage} alt='error'/>
            <p className={styles.errorTitle}>Какой-то сверхразум все сломал</p>
            <p className={styles.errorSubTitle}>Постараемся быстро починить</p>
            <a className={styles.errorReload} href='/'>Попробовать снова</a>
        </div>
    )
}

export default Error