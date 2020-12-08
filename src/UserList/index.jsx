import React from 'react'

import { useHistory } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import styles from './styles.module.scss'
import './transitions.css'
import UserCard from '../UserCard'

export default function UserList({ users, selectUser }) {
    const history = useHistory()
    const handleUserNav = (id) => history.push(`/user/${id}`)

    return (
        <TransitionGroup className={styles['card-list']}>
            {users.map(
                ({
                    login: { uuid, username },
                    name,
                    picture: { large },
                    selectTime,
                }) => (
                    <CSSTransition key={uuid} timeout={300} classNames="user">
                        <UserCard
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
                    </CSSTransition>
                )
            )}
        </TransitionGroup>
    )
}
