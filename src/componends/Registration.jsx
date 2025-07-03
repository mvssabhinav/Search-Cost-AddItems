import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Registration() {
    let nav=useNavigate()

    let [flag1,setFlag1]=useState(true)
    let [info,setinfo]=useState('get otp')
    let [inputvalues,setinputvalus]=useState({
        username:'',
        email:'',
        password:'',
        conformpassword:''
    })
    let handle1=(e)=>{
        setinputvalus({...inputvalues,username:e.target.value})

    }
    let handle2=(e)=>{
        setinputvalus({...inputvalues,email:e.target.value})

    }
    let handle3=(e)=>{
        setinputvalus({...inputvalues,password:e.target.value})

    }
    let handle4=(e)=>{
        setinputvalus({...inputvalues,conformpassword:e.target.value})

    }


     
        const num= Math.floor(Math.random() * (999 - 101 + 1)) + 101;
        let [math,setMath]=useState(num)
        let [store,setStore]=useState({
            inputvalue:''
        })
    
        useEffect(()=>{
          
             setMath(num)
        },[])
        
        let handle5=(e)=>{
            setStore({...store,inputvalue:e.target.value})
    
        }

    let submit1=(e)=>{
         e.preventDefault()
        if(flag1){
            if(inputvalues.password===inputvalues.conformpassword){
                setFlag1(false)
                setinfo('verify')

            }
            else{
                alert('enter correct password')
            }
        }
        else{
            if(math === parseInt(store.inputvalue)){
                fetch(`http://localhost:3000/order`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(inputvalues)
            })
            setinputvalus({
                username:'',
                email:'',
                password:'',
                conformpassword:''

            })
                nav('/login')
            }
            else{
                alert('enter correct otp')
            }
        }   
       
    }
  return (
    <div>
       
        {flag1 ? 
         <form action="">
            <input onChange={handle1} type="text" placeholder='enter username' /><br />
            <input onChange={handle2} type="email" placeholder='enter email' /> <br />
            <input onChange={handle3} type="password" placeholder='enter password' /><br />
            <input onChange={handle4} type="password" placeholder='enter comform password' /><br />
            
        </form>:
        <form action="">
            <input type="text" onChange={handle5} placeholder='enter otp' />
            <h1>{math}</h1>
        </form>}
        <button onClick={submit1}>{info}</button>
    </div>
  )
}

export default Registration