import React, { useState } from 'react'
import '../assets/css/referral.css'
import TreeItem from '../Component/referral/TreeItem'
import { REFERRAL } from '../assets/constants'
import { Avatar, TextField } from '@mui/material'
import Loader from './Loader'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import UserReferral from '../Component/referral/UserReferral'
import Referrals from '../Component/referral/Referrals'
const Referral = () => {  
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  const [user,setUser] = useState( REFERRAL)


  return (
    <div className='mx-4'>
    <div className="M-login-header">
      <h2>Referral</h2>
      <div className="M-login-header-right">
        <a className='anchor M-login-anchor'>Home</a>
        <span className='span'>/Referral</span>
      </div>
    </div>

    <div className="container-fluid">
      <div className="card bg-white">
        <div className="card-body">

        <div className="row search-bar">
            <div className="search-form">
              
              

              <LocalizationProvider className="form-control" dateAdapter={AdapterDayjs}>

                <DemoContainer className="search-bar" components={['DatePicker', 'DatePicker']}>
                {/* <input type="text" className="form-control" id="client_id" placeholder='Search User' /> */}
                <TextField sx={{fontSize:"3 rem !important"}} id="outlined-basic" label="Outlined" variant="outlined" />
                  <DatePicker label={'Start Date'} />
                  <DatePicker label={'End Date'} />
                  <button className="btn btn-black" type="submit" onClick={handleLoadClick}>Load</button>
              {isLoading && <Loader />}
              <button className="btn btn-grey" type="submit" onClick={handleLoadClick}>Reset</button>
                </DemoContainer>
              </LocalizationProvider>

              
            </div>

           
          </div>

          
        
        </div>

        
      </div>
      <div className="card bg-white mt-3">
          {/* <UserReferral user={user} /> */}
          <Referrals />


        </div>
    </div>

  </div>
  )
}

export default Referral