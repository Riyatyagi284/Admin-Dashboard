import React from 'react'
import Table from '../../Component/Table'

const DepositeWithdrawalHistoryLoad = () => {
    const theadData = ["Deposite History","Deposite Date","Deposite Time","All Withdrawal Request","Update History Status","Ip Address","Device History"]
     const tbodyData = [
        ["xyz","02/06/2021","12:30:06","abc...","abc","123.123.123","abc.."],
        ["xyz","02/06/2021","12:30:06","abc...","abc","123.123.123","abc.."],
        ["xyz","02/06/2021","12:30:06","abc...","abc","123.123.123","abc.."],
        ["xyz","02/06/2021","12:30:06","abc...","abc","123.123.123","abc.."],
        ["xyz","02/06/2021","12:30:06","abc...","abc","123.123.123","abc.."],
        
     ]
  return (
    <Table  theadData={theadData} tbodyData={tbodyData}/>
  )
}

export default DepositeWithdrawalHistoryLoad