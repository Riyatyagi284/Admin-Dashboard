import React from 'react'
import { Routes, Route } from "react-router-dom"
import BankTransaction from "../Pages/Bank/BankTransaction"

const BankRoutes = () => {
  return (
   <Routes>
    <Route path= "transaction" element ={<BankTransaction />} />
   </Routes>
  )
}

export default BankRoutes
