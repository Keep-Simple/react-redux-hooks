import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadUsers, toggleUserSelect } from '../store/store'
import {
    selectUsers,
    selectLoading,
    selectSelectedUsers,
} from '../store/selectors'
import Loader from '../Loader'
import styles from './styles.module.scss'
import UserTab from '../UserTab'

const TAB_HASH = {
    ALL_USERS: 'All Users',
    SELECTED_USERS: 'Selected Users',
}

export default function UserTable() {
    const [tab, setTab] = useState(TAB_HASH.ALL_USERS)
    const isLoading = useSelector(selectLoading)
    const dispatch = useDispatch()

    const selectUser = (id) => dispatch(toggleUserSelect(id))

    const users = useSelector(
        tab === TAB_HASH.ALL_USERS ? selectUsers : selectSelectedUsers
    )

    return (
        <div className={styles.content}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div onClick={() => setTab(TAB_HASH.ALL_USERS)}>
                    {TAB_HASH.ALL_USERS}
                </div>
                <div onClick={() => setTab(TAB_HASH.SELECTED_USERS)}>
                    {TAB_HASH.SELECTED_USERS}
                </div>
            </div>

            <UserTab {...{ users, selectUser }} />

            {isLoading && <Loader />}

            {tab === TAB_HASH.ALL_USERS && (
                <button onClick={() => dispatch(loadUsers())}>Load More</button>
            )}
        </div>
    )
}
