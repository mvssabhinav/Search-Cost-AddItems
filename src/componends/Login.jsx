import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let nav=useNavigate()
    let [flag,setFlag]=useState(true)
    let [inputs,setinputs]=useState({
        Enterusername:'',
        Enterpassword:'',
    })
    let [arr,setArr]=useState([])
    let handle1=(e)=>{
        setinputs({...inputs,Enterusername:e.target.value})

    }
    let handle2=(e)=>{
        setinputs({...inputs,Enterpassword:e.target.value})

    }
    useEffect(()=>{
            fetch(`http://localhost:3000/order`)
            .then(rep=>rep.json())
            .then(data=>{
                setArr(data)
            })

        },[])
    let submit2=(e)=>{
        e.preventDefault()
        if(inputs.Enterusername ==="abhi" && inputs.Enterpassword === "abhi"){
            nav('/adminpage')

        }
        else{
            let meta=arr.find(user=>
            user.username === inputs.Enterusername && user.password === inputs.Enterpassword
        )
        if(meta){
            setFlag(false)

        }

        }
        
    }
  return (
    <div>
        
        {flag ? 
        <form action="">
            <h1>this is log in page</h1>
            <input type="text" onChange={handle1} placeholder='enter username' /><br />
            <input type="password" onChange={handle2} placeholder='enter password' /> <br />
            <button onClick={submit2}>submit</button>

        </form>:<><h1>this user login form</h1></>}
    </div>
  )
}

export default Login