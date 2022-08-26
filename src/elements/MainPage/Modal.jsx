import styles from '../../styles/MainPage/MainPage.module.scss'
import { createPortal } from 'react-dom'
const Modal = ({ onClose, open, setSort }) =>
    open ?
        createPortal(
            <div className={styles.modalWrapper}>
                <div className={styles.modal}>
                    <h2 className={styles.modalTitle}>Сортировка</h2>
                    <button onClick={onClose} className={styles.modal__close}>&times;</button>
                    <div>
                        <div>
                            <input type="radio" name="sort" value="alphabet" onChange={(e) => { setSort((prev) => setSort({ ...prev, sort: e.target.value })) }} />
                            <label htmlFor="sort">По алфавиту</label>
                        </div>
                        <div>
                            <input type="radio" name="sort" value="date" onChange={(e) => { setSort((prev) => setSort({ ...prev, sort: e.target.value })) }} />
                            <label htmlFor="sort">По дню рождения</label>
                        </div>
                    </div>
                </div>
            </div>,
            document.body)
        : null

export default Modal