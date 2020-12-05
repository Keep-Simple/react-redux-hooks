import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadUsers } from '../store/store'
import { selectUsers } from '../store/selectors'
import styles from './styles.module.scss'

export default function UserTable() {
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()

    useEffect(() => dispatch(loadUsers()), [])

    return <div className={styles.content}>User Table</div>
}
