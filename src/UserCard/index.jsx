import React from 'react'

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
        <div onClick={onCardClick}>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <img src={avatar} alt="avatar" />
            <button onClick={onButtonClick}>Select</button>
            <h5>{selectTime}</h5>
        </div>
    )
}
