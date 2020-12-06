import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadUsers } from '../store/store'
import { selectUsers, selectLoading } from '../store/selectors'
import Loader from '../Loader'
import styles from './styles.module.scss'
import UserTab from '../UserTab'

export default function UserTable() {
    const users = useSelector(selectUsers)
    const isLoading = useSelector(selectLoading)
    const [isSelectedTab, setTab] = useState(false)

    const dispatch = useDispatch()

    return (
        <div className={styles.content}>
            {isSelectedTab ? 'Selected Users' : 'All Users'}

            <UserTab {...{ users }} />

            {isLoading && <Loader />}

            <button onClick={() => dispatch(loadUsers())}>Load More</button>
        </div>
    )
}
