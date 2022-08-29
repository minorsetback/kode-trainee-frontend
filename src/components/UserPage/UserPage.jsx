import { useParams } from "react-router-dom"
import { useUsers } from "../../hooks/useUsers"
import styles from "../../styles/UserPage/UserPage.module.scss"
import { useEffect, useState } from "react"
import LoaderUserPage from "../Common/LoaderUserPage"
import Error from "../Common/Error"

const UserPage = () => {
    const { users, error, isFetching } = useUsers()
    const { id } = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        const user = users?.filter((item) => item.id === id)
        if (user) {
            setUser(user[0])
        }
    }, [users]);

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <div>
            {!isFetching && user && (
                <>
                    <div className={styles.userHeader}>
                        <img className={styles.userImage} src="user_image.png" />
                        <p className={styles.userName}>{user?.firstName} {user?.lastName}<span className={styles.userTag}> {user?.userTag}</span></p>
                        <p className={styles.userPosition}>{user?.position}</p>
                    </div>
                    <div className={styles.userDateBlock}>
                        <img src="star.svg" className={styles.userStarImage} />
                        <p className={styles.userBirthday}>
                            {new Date(user?.birthday).toLocaleString('default', { day: '2-digit', month: 'long', year: 'numeric' })}
                            <span className={styles.userAge}>{String(getAge(user?.birthday))}</span>
                        </p>
                    </div>
                    <div className={styles.usePhoneBlock}>
                        <img src="phone.svg" className={styles.userPhoneImage} />
                        <p className={styles.userPhone}>
                            +{user?.phone}
                        </p>
                    </div>
                </>
            )}
            {isFetching && <LoaderUserPage />}
            {error && <Error />}
        </div>

    )
}
export default UserPage