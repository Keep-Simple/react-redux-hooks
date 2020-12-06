import React from 'react'

import { useHistory } from 'react-router-dom'

import UserCard from '../UserCard'

export default function UserList({ users, selectUser }) {
    const history = useHistory()
    const handleUserNav = (id) => history.push(`/user/${id}`)

    return (
        <div>
            {users.map(
                ({
                    login: { uuid },
                    name,
                    picture: { thumbnail },
                    selectTime,
                }) => (
                    <UserCard
                        key={uuid}
                        id={uuid}
                        avatar={thumbnail}
                        firstName={name.first}
                        lastName={name.last}
                        selectTime={selectTime}
                        onButtonClick={(e) => {
                            e.stopPropagation()
                            selectUser(uuid)
                        }}
                        onCardClick={() => handleUserNav(uuid)}
                    />
                )
            )}
        </div>
    )
}
