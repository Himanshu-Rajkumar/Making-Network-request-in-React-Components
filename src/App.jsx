import { useEffect, useState } from "react"
import DataDisplay from "./DataDisplay/DataDisplay"
import HandleLoding from "./DataDisplay/HandleLoding"
import HandleError from "./DataDisplay/HandleError"








function App() {
  const [data,setData]=useState([])
  const [loding,setLoding]=useState(false)
  const [error,setError]=useState(false)

  useEffect(function(){
    fetchAndUpdatData()
  },[])



  async function fetchAndUpdatData(){
    setLoding(true)
    try {
      let response=await fetch(`https://jsonplaceholder.typicode.com/posts`)
      let finalResponse=await response.json()
      setData(finalResponse)
      setLoding(false)
      
      
    } catch (error) {
      setError(true)
      setLoding(false)
      
    }
  }

  if(loding){
    return <HandleLoding/>
    
  }

  if(error){
    return <HandleError/>
  }

  

  return (
    <>
    <h1>Data Is fetching </h1>
   {
    data.map((items)=>{
     return <DataDisplay key={items.id} items={items}/>

    })
   }

     
    </>
  )
}

export default App
