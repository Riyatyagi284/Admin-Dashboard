import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AccountStatement from '../Pages/Reports/AccountStatement'
import PartyWinLoss from '../Pages/Reports/PartyWinLoss'
import CurrentBets from '../Pages/Reports/CurrentBets'
// import UserHistory from '../Pages/Reports/UserHistory'
import SecondMui from "../Pages/Reports/SecondMui"


const ReportRoutes = () => {
  return (
    <Routes>
        <Route path= "account-statement" element = {<AccountStatement/>} />
        <Route path = "party-win-loss" element = {< PartyWinLoss />} />
        <Route path = "current-bets" element = {< CurrentBets />} />
        {/* <Route path= "user-history" element = {<UserHistory/>} /> */}
        <Route path= "user-history" element = {<SecondMui/>} />
    </Routes>
  )
}

export default ReportRoutes
