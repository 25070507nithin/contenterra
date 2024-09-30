import CardItem from "../CardItem"
import "./index.css"
const Card = (props)=>{
    const {cardDetails} = props
    return(
        <ul className="content-container">
            {cardDetails.map(eachCard=>(
                <CardItem key={eachCard.data.id} cardInfo = {eachCard.data}/>
            ))}
        </ul>
    )
}

export default Card