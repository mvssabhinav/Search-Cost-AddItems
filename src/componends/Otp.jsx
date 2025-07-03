import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Otp() {
    let nav=useNavigate()
    const num= Math.floor(Math.random() * (999 - 101 + 1)) + 101;
    let [math,setMath]=useState(num)
    let [store,setStore]=useState({
        inputvalue:''
    })

    useEffect(()=>{
      
         setMath(num)
    },[])
    
    let handle1=(e)=>{
        setStore({...store,inputvalue:e.target.value})

    }
    let submit=(e)=>{
        e.preventDefault()
        if(parseInt(store.inputvalue) === math){
            nav('/servises')
        }
        else{
            alert('enter correct otp')
        }

    }

  return (
    <div>
        <form action="">
            <input type="text" onChange={handle1} placeholder='' />
            <p>{math}</p>
            <button onClick={submit}>verify</button>
        </form>
    </div>
  )
}

export default Otp