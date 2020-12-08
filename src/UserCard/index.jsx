import React from 'react'
import styles from './styles.module.scss'
import minus from './minus.svg'

export default function UserCard({
    avatar,
    firstName,
    lastName,
    userName,
    onButtonClick,
    onCardClick,
    selectTime,
    id,
}) {
    const buttonSvgSrc = selectTime
        ? minus
        : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/64/icon-add-f.svg'

    return (
        <div className={styles.card} onClick={onCardClick}>
            <div className={styles['card-profile']}>
                <div className={styles['card-profile_visual']}>
                    <img src={avatar} alt="avatar" />
                </div>

                <div className={styles['card-profile_user-infos']}>
                    <span className={styles['infos_name']}>
                        {`${firstName} ${lastName}`}
                    </span>

                    <span className={styles['infos_nick']}>@{userName}</span>

                    <div onClick={onButtonClick}>
                        <img src={buttonSvgSrc} alt="sign" />
                    </div>
                </div>

                <div className={styles['card-profile_user-stats']}>
                    <div className={styles['stats-holder']}>
                        <div className={styles['user-stats']}>
                            <strong>Personal Id</strong>
                            <span>{id.substring(0, 12)}</span>
                        </div>

                        {selectTime && (
                            <div className={styles['user-stats']}>
                                <strong>Select Date</strong>
                                <span>{selectTime}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
