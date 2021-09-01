import React from 'react'
import style from "../../components/header/header.module.scss"

const Header = () => {
    return (
        <div className={style.wrapper}>
            <h1>Valorant</h1>
            <ul className={style.nav} >
                <li>Heroes</li>
                <li>Bundles</li>
                <li>Maps</li>
                <li>Weapons</li>
            </ul>
        </div>
    )
}

export default Header
