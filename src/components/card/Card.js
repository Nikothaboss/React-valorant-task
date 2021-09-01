import React from 'react'
import style from "../card/card.module.scss"

const Card = ({image, alt, text}) => {
    return (
        <div className={style.wrapper} >
            <img src={image} alt={alt} />
            <div className={style.cardText} >
                <p> {text} </p>
            </div>
        </div>
    )
}

export default Card
