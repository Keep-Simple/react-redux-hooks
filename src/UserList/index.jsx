import React from 'react'

import { useHistory } from 'react-router-dom'

import styles from './styles.module.scss'
import UserCard from '../UserCard'

export default function UserList({ users, selectUser }) {
    const history = useHistory()
    const handleUserNav = (id) => history.push(`/user/${id}`)

    return (
        <div className={styles['card-list']}>
            {users.map(
                ({
                    login: { uuid, username },
                    name,
                    picture: { large },
                    selectTime,
                }) => (
                    <UserCard
                        key={uuid}
                        id={uuid}
                        avatar={large}
                        firstName={name.first}
                        lastName={name.last}
                        userName={username}
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
