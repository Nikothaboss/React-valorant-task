import React from 'react'
import style from "../../components/header/header.module.scss"
import { MainHeader } from '../typography/Typography'

const Header = () => {
    return (
        <div className={style.wrapper}>
            <MainHeader>Valorant</MainHeader>
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
