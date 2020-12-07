import React from 'react'
import styles from './styles.module.scss'

export default function UserCard({
    avatar,
    firstName,
    lastName,
    onButtonClick,
    onCardClick,
    selectTime,
    id,
}) {
    return (
        <div className={styles.card} onClick={onCardClick}>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <img src={avatar} alt="avatar" />
            <button onClick={onButtonClick}>Select</button>
            <h5>{selectTime}</h5>
        </div>
    )
}
