import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import TreeItem from './TreeItem'
import { REFERRAL } from '../../assets/constants'

const UserReferral = () => {
    const [user,setUser] = useState(REFERRAL)
  return (
    <div className='mx-4'>
        <div className="M-login-header">
        <h2>Referral / USER</h2>
        <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home  </a>
            <span className='span'>/User</span>
        </div>
        </div>

    <div className="container-fluid">
      <div className="card bg-white">
        <div className="card-body ordered-list">
             <div className='d-flex'>
          <Avatar sx={{ width: 24, height: 24 }} alt={user.name} src="/static/images/avatar/2.jpg" />

          <h3 className='ms-2 '>Person Name (40)</h3>
          </div>

            <div className="ms-5"> 
            <TreeItem user={user} />
            </div>
            
    </div>
    </div>
    </div>
    </div>
  )
}

export default UserReferral