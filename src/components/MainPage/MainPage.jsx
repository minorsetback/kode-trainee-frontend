import styles from '../../styles/MainPage/MainPage.module.scss'
import { useUsers } from '../../hooks/useUsers'
import UserItem from '../../elements/MainPage/UserItem';
import Loader from '../Common/Loader';
import Error from '../Common/Error'
import { useState, useEffect } from 'react'
import Modal from '../../elements/MainPage/Modal'

const MainPage = () => {
    const { users, isFetching, error, searchUsers, sortDepartment, sortByDateOrAlphabet } = useUsers();
    const [data, setData] = useState(users)
    const [inputValue, setInputValue] = useState()
    const [sort, setSort] = useState({ department: '', sort: '' })
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setData(users)
    }, [users])

    useEffect(() => {
        sortByDateOrAlphabet(data, sort?.sort)
    }, [sort?.sort])

    useEffect(() => {
        if (inputValue !== '') {
            setData(searchUsers(data, inputValue))
        } else {
            if (sort?.department) {
                setData(sortDepartment(sort.department))
            }
            else {
                setData(users)
            }
        }
        // eslint-disable-next-line
    }, [inputValue])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h1>Поиск</h1>
                <p className={styles.search}>
                    <img src="search.png" alt='search' />
                    <input type="text" className={styles.searchInput} placeholder="Введи имя, тег..." onChange={(e) => { setInputValue(e.target?.value) }} />
                    <img src="filter.png" alt='filter' onClick={() => setOpen(!open)} />
                </p>
                <div className={styles.sortUsers}>
                    <p style={{ "borderBottom": sort?.department === '' ? '2px solid #6534FF' : '0px solid #6534FF' }} onClick={() => { setData(users); setSort({ ...sort, department: '' }) }}>Все</p>
                    <p style={{ "borderBottom": sort?.department === 'design' ? '2px solid #6534FF' : '0px solid #6534FF' }} onClick={() => { setData(sortDepartment('design', sort.sort)); setSort({ ...sort, department: 'design' }) }}>Designers</p>
                    <p style={{ "borderBottom": sort?.department === 'analytics' ? '2px solid #6534FF' : '0px solid #6534FF' }} onClick={() => { setData(sortDepartment('analytics', sort.sort)); setSort({ ...sort, department: 'analytics' }) }}>Analyst</p>
                    <p style={{ "borderBottom": sort?.department === 'support' ? '2px solid #6534FF' : '0px solid #6534FF' }} onClick={() => { setData(sortDepartment('support', sort.sort)); setSort({ ...sort, department: 'support' }) }}>Support</p>
                    <p style={{ "borderBottom": sort?.department === 'ios' ? '2px solid #6534FF' : '0px solid #6534FF' }} onClick={() => { setData(sortDepartment('ios', sort.sort)); setSort({ ...sort, department: 'ios' }) }}>IOS</p>
                    <p style={{ "borderBottom": sort?.department === 'android' ? '2px solid #6534FF' : '0px solid #6534FF' }} onClick={() => { setData(sortDepartment('android', sort.sort)); setSort({ ...sort, department: 'android' }) }}>Android</p>
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)} setSort={setSort} />

            {
                !isFetching && data?.map(user => {
                    return (
                        <a href={`/${user.id}`} key={user.id}>
                            <UserItem data={user} />
                        </a>

                    )
                })
            }
            {isFetching && <Loader />}
            {error && <Error />}
        </div >
    )
}

export default MainPage