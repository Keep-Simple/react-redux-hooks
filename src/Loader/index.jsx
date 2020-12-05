import React from 'react'

import './styles.scss'

export default function Loader() {
    return (
        <div className="mesh-loader">
            <div className="set-one">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="set-two">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}
