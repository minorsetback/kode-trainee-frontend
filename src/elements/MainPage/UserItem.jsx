import styles from '../../styles/MainPage/MainPage.module.scss'

const UserItem = ({ data }) => {

    return (
        <div className={styles.userWrapper}>
            <div className={styles.imageWrapper}>
                <img src="user_image.png" className={styles.image} alt='user'/>
            </div>
            <div className={styles.userNameWrapper}>
                <p className={styles.userName}>{data.firstName} {data.lastName}<span className={styles.userTag}> {data.userTag}</span></p>
                <p className={styles.userPosition}>{data.position}</p>
            </div>
        </div>
    )
}

export default UserItem