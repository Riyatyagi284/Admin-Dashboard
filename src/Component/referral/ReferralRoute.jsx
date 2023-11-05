import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Referral from '../../Pages/Referral'
import UserReferral from './UserReferral'

const ReferralRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Referral />} />
      <Route path='user-referral' element={<UserReferral />} />
    </Routes>
  )
}

export default ReferralRoute