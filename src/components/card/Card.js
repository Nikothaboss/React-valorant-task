import React from 'react'
import style from "../card/card.module.scss"
import {Paragraph} from "../typography/Typography";

const Card = ({image, alt, text}) => {
    return (
        <div className={style.wrapper} >
            <div className={style.imgContainer}>
                <img src={image} alt={alt} />
            </div>
            <div className={style.cardText} >
                <Paragraph black> {text} </Paragraph> 
            </div>
        </div>
    )
}

export default Card
