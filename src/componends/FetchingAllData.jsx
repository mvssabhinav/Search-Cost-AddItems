import React, { useEffect, useState } from 'react'

function FetchingAllData() {
    let [fetching,setFetching]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/order`)
        .then(rep=>rep.json())
        .then(data=>{
            setFetching(data)
        })
    },[])
  return (
    <div>
        {
            fetching.map((user)=>(
                <div>
                    <p>{user.username}</p> <br />
                    <p>{user.email}</p> <br />
                    <p>{user.password}</p>
                </div>
                
                
            ))
        }

    </div>
  )
}

export default FetchingAllData