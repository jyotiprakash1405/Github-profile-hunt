import React from 'react'
import './UserContainer.css'
import {Link} from 'react-router-dom'

function UserContainer({users}) {
  return (
    <div className='wrapper'>
        {
            users && users.map((user , index)=>{
                return (
                        user?.login && (
                        <div className="card" key={index}>
                            <img style={{width: "20%" , border: "3px solid #343a40"}} src={user.avatar_url} alt='logo'></img>
                            <div className="container">
                                <h4><b>{user.login}</b></h4> 
                                <h5><b>{user.name}</b></h5>
                                <p>{user.company} </p> 
                                <p>Hi, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <Link to={`${user?.login}`}>
                                    <p><button type="button" className="btn btn-dark">View</button></p>
                                </Link>
                                
                            </div>
                        </div>)
                    )
            })
        }
    </div>
  )
}

export default UserContainer