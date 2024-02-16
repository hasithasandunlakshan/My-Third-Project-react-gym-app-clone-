
import "./App.css"
import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import Hero from "./Components/Hero";

function App() {
  
  const [loading ,setloading]=useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{setloading(false)},5000)
  },[])
 
  return (
    <div className="App">
      {loading ?  <SyncLoader
 className="loading"
    color="red"
      loading={loading}
    
      size={25}
     
    />:<Hero/>
   
    }</div>
  

  );
}

export default App;
