import React from 'react'

import { useSearchInput } from '../utils/searchHook'
import UserList from '../UserList'

export default function UserTab({ users }) {
    const { filteredItems, ...handlers } = useSearchInput(users, filterFunc)

    return (
        <section>
            <input {...handlers} />

            <UserList users={filteredItems} />
        </section>
    )
}

function filterFunc(query, users) {
    return users.filter(
        ({ name: { first, last } }) =>
            first.includes(query) || last.includes(query)
    )
}
