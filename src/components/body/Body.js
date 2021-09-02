import style from "../body/body.module.scss"
import {cardText} from "../../utils/text";
import Card from "../card/Card";
import sova from "../../img/sova.jpg"


const Body = () => {
    return (
        <div className={style.wrapper}>
            <Card image={sova} alt="whatever" text={cardText.sova} />
            <Card image={sova} alt="whatever" text={cardText.viper} />
            <Card image={sova} alt="whatever" text={cardText.jett} />
            <Card image={sova} alt="whatever" text={cardText.brimstone} />
            <Card image={sova} alt="whatever" text={cardText.sage} />
            <Card image={sova} alt="whatever" text={cardText.killjoy} />


        </div>
    )
}

export default Body
