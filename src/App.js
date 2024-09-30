import { useState,useEffect } from "react"
import Card from "./components/Card"
const url="https://www.reddit.com/r/reactjs.json"
const App = ()=>{

  const [fetchedData,setFetchedData] = useState([])

  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setFetchedData(data.data.children))
  },[])

  console.log(fetchedData)

  return(
    <>
    <Card cardDetails={fetchedData}/>
    </>
  )
}

export default App