import React, { useEffect, useState } from 'react'
import {TextField} from '@mui/material'

function Body() {
    let baseUrl = 'https://api.github.com/users'
    const[users , setUsers] = useState([])
    const[name , setName] = useState('')
    const[data , setData] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`${baseUrl}/${name}`)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    }

    useEffect(()=>{
        fetch(`${baseUrl}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    })
    
  return (
    <div>
        <i className="fa-brands fa-github"></i>
        <span>Github Profile Viewer</span>
        <br></br>
        <form onSubmit={handleSubmit}>
            <TextField onChange={(e)=>setName(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
            <button>Get Users</button>
        </form>

        {
            data.map((it , index)=>{
                return(   
                    <li key={index}>{it.login}</li>
                )
            })
        }
        
    </div>
  )
}

export default Body