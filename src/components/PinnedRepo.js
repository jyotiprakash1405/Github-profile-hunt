import React, { useEffect, useState } from 'react'
import './PinnedRepo.css'

function PinnedRepo() {
    const[users , setUsers] = useState([])

    async function getData(){
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();
        setUsers(data)
    }

    useEffect(()=>{
        getData();
    }, [])
  return (
    <div>
        <h3>Pinned Repositories</h3>
        <div className='parent-div'>
            {
                users && users.map((user , index)=>{
                    return (
                            <div className="card" key={index}>
                                <img style={{width: "20%" , border: "3px solid #343a40"}} src={user.avatar_url} alt='logo'></img>
                                <div className="container">
                                    <span><b>{user.login}/</b></span> 
                                    <span><b>{user.type}</b></span>
                                    <p>{user.company} </p> 
                                    <p>Hi, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        )
                })
            }
        </div>
        
    </div>
  )
}

export default PinnedRepo