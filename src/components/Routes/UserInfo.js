import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PinnedRepo from '../PinnedRepo';
import './UserInfo.css'
import Loading from '../Loading';

const UserInfo = () => {
    const[users , setUsers] = useState([]);
    const[loading , setLoading] = useState(false)

    const { pathname } = useLocation();
    const navigate = useNavigate();

    let baseUrl = "https://api.github.com/users";
    console.log(pathname)

    async function getUsersInfo(){
      setLoading(true)
      const res = await fetch(baseUrl + pathname);
      const data = await res.json()
      setUsers(()=>[data])
      setLoading(false)
    }

    useEffect(()=>{
      getUsersInfo();
      console.log(users)
    } , [pathname]);
    
  return (
    <div>
      <div className='router-btn'>
        <button onClick={()=>navigate('/')} type="button" className="btn btn-dark">Back</button>
      </div>
        
        {loading ? <Loading/> :
          users && users.map((item , index)=>{
            return (
              <div className='wrapper-div' key={index}>
                <div className='header-div'>
                  <img src={item.avatar_url} alt='img' className='image'></img>
                  <div>
                    <h3>{item.name}</h3>
                    <p>@{item.login}</p>
                    <a href={item.html_url} target='_blank'>  Visit</a>
                  </div>
                </div>

                <div className='body'>
                  <h3>Bio:</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum in quae ut nisi consectetur mollitia! 
                    Aliquid itaque, veritatis a temporibus, nulla quia eaque quos nemo error alias, minima odio ipsa.</p>

                  <h3>Works at:</h3>
                  <p><b>{item.company}</b></p>

                  <div className='flex-content'>
                    <div className='left'>
                      <h4>Repositories</h4>
                      <p>{item.public_repos}</p>
                    </div>
                    <div className='right'>
                      <h4>Followers</h4>
                      <p>{item.followers}</p>
                    </div>
                    
                  </div>
                </div>
                
              </div>
            )
          })
        }
        <div className='pinned-repo'>
          <PinnedRepo/>
        </div>
    </div>
  )
}

export default UserInfo;
