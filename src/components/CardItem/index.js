import "./index.css"

function decodeHTML(encodedString) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = encodedString;
    return textarea.value;
  }

const CardItem = (props)=>{
    const {cardInfo} = props
    const {title,score,url,selftext_html} = cardInfo
    
      const decodeText = decodeHTML(selftext_html)
    return(
        <li className="content">
            <h1 className="heading">{title}</h1>
            <p className="score">score: {score}</p>
            <div className="text" dangerouslySetInnerHTML={{ __html: decodeText }} />
            <img src={url} alt="react" className="image"/>
        </li>
    )
}
export default CardItem