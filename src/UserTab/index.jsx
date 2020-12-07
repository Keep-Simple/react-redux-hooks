import React from 'react'

import { useSearchInput } from '../utils/searchHook'
import styles from './styles.module.scss'
import UserList from '../UserList'

export default function UserTab({ users, selectUser }) {
    const { filteredItems, ...handlers } = useSearchInput(users, filterFunc)

    return (
        <section>
            <span className={styles['search-input']}>
                <input {...handlers} placeholder="  Search by name ..." />
                <span></span>
            </span>

            <UserList users={filteredItems} selectUser={selectUser} />
        </section>
    )
}

function filterFunc(query, users) {
    return users.filter(
        ({ name: { first, last } }) =>
            first.includes(query) || last.includes(query)
    )
}
