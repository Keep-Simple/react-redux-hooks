import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadUsers } from '../store/store'
import { selectUsers, selectLoading } from '../store/selectors'
import Loader from '../Loader'
import styles from './styles.module.scss'

export default function UserTable() {
    const users = useSelector(selectUsers)
    const isLoading = useSelector(selectLoading)

    const dispatch = useDispatch()

    useEffect(() => dispatch(loadUsers()), [])

    return (
        <div className={styles.content}>
            {JSON.stringify(users.length)}
            {isLoading && <Loader />}
            <button onClick={() => dispatch(loadUsers())}>Load More</button>
        </div>
    )
}
