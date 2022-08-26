import axios from 'axios';
import { useState, useEffect } from 'react'
export const useUsers = () => {
    const root = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users'
    const [users, setUsers] = useState()
    const [isFetching, setIsFetching] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        setUsers(users)
        console.log(users)
    }, [users])

    const getUsers = async () => {
        try {
            setIsFetching(true)
            const res = await axios.get(root)
            if (res.status === 200) {
                setUsers(res.data.items)
                setIsFetching(false)
            } else {
                setError(res.detail)
                setIsFetching(false)
            }
        } catch {
            setError("Something wrong")
            setIsFetching(false)
        }
    }

    const searchUsers = (users, searchValue) => {
        if (users) {
            const search = users.filter(user => {
                return user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
                    user.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
                    user.userTag.toLowerCase().includes(searchValue.toLowerCase())
            }
            )
            return search
        }
    }

    const sortByDateOrAlphabet = (type) => {
        if (type === 'date') {
            users?.sort(function (a, b) {
                let dateA = new Date(a.birthday), dateB = new Date(b.birthday)
                return dateA - dateB
            })
        } else if (type === 'alphabet') {
            users?.sort(function (a, b) {
                let nameA = a.firstName.toLowerCase(), nameB = b.firstName.toLowerCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        }
    }

    const sortDepartment = (department) => {
        console.log(users)
        if (users) {
            const usersByDepartment = users.filter(user => user.department === department)
            return usersByDepartment
        }
    }

    return {
        users,
        isFetching,
        error,
        searchUsers,
        sortDepartment,
        sortByDateOrAlphabet
    }
}
