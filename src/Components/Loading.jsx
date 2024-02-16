import React from 'react'
import "./Loading.css"
import { SyncLoader } from 'react-spinners';
import { useState,useEffect } from 'react'
function Loading() {
    const [loading ,setloading]=useState(false);
    useEffect(()=>{
      setloading(true)
      setTimeout(()=>{setloading(false)},5000)
    },[])
  return (
    <div className='loadings'>
        <h1>Loading</h1>
        <SyncLoader
 className="loading"
    color="red"
      loading={loading}
    
      size={25}
     
    />
    </div>
  )
}

export default Loading