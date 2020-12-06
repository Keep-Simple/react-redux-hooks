import React from 'react'

import { Link } from 'react-router-dom'

import UserCard from '../UserCard'

export default function UserList({ users }) {
    return (
        <div>
            {users.map(({ login: { uuid }, name, picture: { thumbnail } }) => (
                <Link to={`/user/${uuid}`} key={uuid}>
                    <UserCard
                        id={uuid}
                        avatar={thumbnail}
                        firstName={name.first}
                        lastName={name.last}
                        // onButtonClick={}
                    />
                </Link>
            ))}
        </div>
    )
}
