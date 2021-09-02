import React from 'react'
import style from "../card/card.module.scss"

const Card = ({image, alt, text}) => {
    return (
        <div className={style.wrapper} >
            <div className={style.imgContainer}>
                <img src={image} alt={alt} />
            </div>
            <div className={style.cardText} >
                <p> {text} </p>
            </div>
        </div>
    )
}

export default Card
