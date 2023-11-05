import React, { useEffect, useState } from 'react'
import Users from './Users'
import { Autocomplete, Button, Checkbox, Input, Slider, Typography } from '@mui/joy'
import { Modal } from '@mui/material'






const SelectUser = ({users,setUsers}) => {
  const [open, setOpen] = React.useState(false);
  const [allUsersCheck,setAllUsersCheck]= useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const [filteredUsers,setFilteredUsers] = useState([])
  const [filter,setFilter] = useState({
    search:"",
    walletBalance:"",
    deposite:"",
    city:"",
    state:"",
    currentLocation:"",
    kyc:true,
    account:true
  })

  const filterUsers=()=>{
    let filteredU = users.filter((user)=>{
      const searchMatch =
      !filter.search || 
      user.name.toLowerCase().includes(filter.search.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.search.toLowerCase())

      //console.log("search match",searchMatch)

      const cityMatch = !filter.city ||
      user.address.city.toLowerCase().includes(filter.city.toLowerCase())
      //console.log("city match",cityMatch)

      const stateMatch = !filter.state ||
      user.address.state.toLowerCase().includes(filter.state.toLowerCase())

      //console.log("state match",stateMatch)

      const walletBalanceMatch = !filter.walletBalance ||
      //!isNaN(filter.walletBalance) &&
       user.walletBalance <= filter.walletBalance
      const depositeMatch = !filter.deposite ||
      !isNaN(filter.deposite) && user.deposite <= filter.deposite

     // console.log("deposite match",depositeMatch)
      const kycMatch = //filter.kyc == null ||
      user.kyc == !filter.kyc

     // console.log("kyc match",kycMatch)
      const accountMatch = //filter.account == null ||
       user.account == !filter.account

      console.log("account match",accountMatch)
      return (
         searchMatch &&
        cityMatch &&
        stateMatch &&
        walletBalanceMatch &&
        depositeMatch &&
        kycMatch &&
        accountMatch
        //true
      )

    })
    setFilteredUsers(filteredU)
    return filteredU
    
  }

  useEffect(()=>{
    console.log(filteredUsers)
  },[filteredUsers])

  const viewUsersHandler=()=>{
    setUsers(filterUsers())
    //console.log(filteredUsers)
    handleOpen()
  }

  const addUsersHandler=()=>{
    setUsers(filterUsers())
    // console.log(users)
    // console.log(filter)
    
    //console.log(filterUsers())
  }

  const allUsersHandler=()=>{
    if(!allUsersCheck){
      setAllUsersCheck(true)
      setUsers(users)
    }else{
      setAllUsersCheck(false)
      setUsers([])
    }
  }
  





  return (
    <div className='card shadow-sm'>
        <div className="card-body">
            <h4>Add Users</h4>
            <div className="card">
                <div className="card-body">
                
                <Input disabled={allUsersCheck} onChange={(event)=>setFilter({...filter,'search':event.target.value})} value={filter.search} className='fs-4 p-1' placeholder="Search by User Name or Email" variant="outlined" color="neutral" />
                <div className={`container mt-2 ${allUsersCheck?'disabled':''}`}>
                <div className="row">
                  <div className="col-sm-4">
                    <Checkbox  checked={filter.kyc} onChange={()=>setFilter({...filter,kyc: !filter.kyc})} className='fs-4' label="KYC Not Verified" variant="soft" />
                    <br />
                    <Checkbox checked={filter.account} onChange={()=>setFilter({...filter,account: !filter.account})} className='fs-4 mt-1' label="A/c Not Verified" variant="soft"  />
                    <Input onChange={(event)=>setFilter({...filter,'walletBalance':event.target.value})} value={filter.walletBalance}  type='number' className='fs-4 p-1 mt-1' placeholder="Minimum Wallet Balance" variant="outlined" color="neutral" />
                    <Input onChange={(event)=>setFilter({...filter,'deposite':event.target.value})} value={filter.deposite} type='number' className='fs-4 p-1 mt-1' placeholder="Minimum Deposite" variant="outlined" color="neutral" />

                    {/* <Typography  className="mb-4 fs-5 mt-1" id="track-inverted-slider" gutterBottom>Wallet Balance</Typography> */}
                    {/* <Slider 
                    sx={{fontSize:"1.2rem"}}
                    defaultValue={3}
                     max={10} 
                     aria-label='Always visible'
                     valueLabelDisplay='on' /> */}
                  </div>
                  <div className="col-sm-4">
                  <p className='fs-4 mb-1'>Current Location</p>
                  <Autocomplete  className='fs-4 mt-1 p-1' placeholder='Search Location' options={['Option 1', 'Option 2']} />
                  </div>
                  <div className="col-sm-4">
                    <p className='fs-4 mb-1'>Address</p>
                    <Input onChange={(event)=>setFilter({...filter,'city':event.target.value})} value={filter.city} type='text' className='fs-4 p-1 mt-1' placeholder="City" variant="outlined" color="neutral" />
                    <Input onChange={(event)=>setFilter({...filter,'state':event.target.value})} value={filter.state} type='text' className='fs-4 p-1 mt-1' placeholder="State" variant="outlined" color="neutral" />
                   
                  </div>
                </div>
                </div>
                
                <div className="text-end">
                <Button disabled={allUsersCheck} onClick={viewUsersHandler} className="fs-4" variant='soft'> Next</Button>
                </div>
                </div>
            </div>
            
            <div className='filter-user-box'>
            {/* <Users users={filteredUsers} /> */}
            </div>
            <div className="text-end pt-2">
            {/* <Button onClick={addUsersHandler} variant='soft'>Add users</Button> */}
            </div>
             
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Users users={filteredUsers} setUsers={setUsers} handleClose={handleClose} />
            </Modal>
            
        <Checkbox checked={allUsersCheck} onChange={()=>allUsersHandler()} className='fs-4 mt-1' label="All Users" variant="soft"  />
        </div>
    </div>
  )
}

export default SelectUser