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
import Tab from './Tab'

const TAB_HASH = {
    ALL_USERS: 'All Users',
    SELECTED_USERS: 'Selected Users',
}

export default function UserTable() {
    const [tab, setTab] = useState(TAB_HASH.ALL_USERS)
    const isLoading = useSelector(selectLoading)
    const users = useSelector(
        tab === TAB_HASH.ALL_USERS ? selectUsers : selectSelectedUsers
    )

    const dispatch = useDispatch()
    const selectUser = (id) => dispatch(toggleUserSelect(id))
    const loadMore = () => dispatch(loadUsers())

    const tabProps = { current: tab, setTab }

    return (
        <div className={styles.content}>
            <div className={styles.tabs}>
                <Tab name={TAB_HASH.ALL_USERS} {...tabProps} />
                <Tab name={TAB_HASH.SELECTED_USERS} {...tabProps} />
            </div>

            <UserTab {...{ users, selectUser }} />

            {isLoading && <Loader />}

            {tab === TAB_HASH.ALL_USERS && (
                <button
                    className={styles['load-more-button']}
                    onClick={loadMore}
                >
                    Load More
                </button>
            )}
        </div>
    )
}
