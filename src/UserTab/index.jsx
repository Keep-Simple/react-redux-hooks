import React from 'react'

import { useSearchInput } from '../utils/searchHook'
import styles from './styles.module.scss'
import UserList from '../UserList'

export default function UserTab({ users, selectUser }) {
    const { filteredItems, ...handlers } = useSearchInput(users, filterFunc)

    return (
        <section>
            <div className={styles['search-wrapper']}>
                <span className={styles['search-input']}>
                    <input {...handlers} placeholder="  Search by name ..." />
                    <span></span>
                </span>
            </div>

            <UserList users={filteredItems} selectUser={selectUser} />
        </section>
    )
}

function filterFunc(query, users) {
    query = query.toLowerCase()

    return users.filter(
        ({ name: { first, last } }) =>
            first.toLowerCase().includes(query) ||
            last.toLowerCase().includes(query)
    )
}
