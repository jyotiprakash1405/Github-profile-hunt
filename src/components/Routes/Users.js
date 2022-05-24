import React, { useEffect, useRef, useState } from 'react'
import UserContainer from '../UserContainer';
import Loading from '../Loading'
import './Users.css'

function Users() {
    const[users , setUsers] = useState([]);
    const[loading , setLoading] = useState(false)

    let baseUrl = 'https://api.github.com/users';

    const user = useRef('')

    async function allUsers(){
        if(user.current.value === ""){
            setLoading(true)
            const res = await fetch(baseUrl)
            const data = await res.json()
            // console.log(data)
            setUsers(data)
            setLoading(false)
        }
        
    }

    async function findUser(){
        setLoading(true)
        if(user.current.value !== ''){
            setUsers("")
            const res = await fetch(baseUrl+"/"+user.current.value);
            const data = await res.json();
            console.log(data);
            setUsers(()=>[data]) //convert object to array
            user.current.value = "";
        }
        else{
            allUsers();
        }
        setLoading(false)
        // console.log(user.current.value)
    }

    useEffect(()=>{
        allUsers();
    } , [setUsers])
  return (
    <div>
        <div className='input'>
            <input type="text" placeholder='Search github user...' ref={user} className='input-field'></input>
            <button onClick={findUser} type="button" className="btn btn-primary button">Search</button>
        </div>
        {loading ? <Loading/> : <UserContainer users={users}/>}
    </div>
  )
}

export default Users