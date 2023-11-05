import React from 'react'
import Table from '../../Component/Table'

const TransactionHistoryLoad = ({searchValue}) => {
    const theadData = ["User Id","Username","Transaction Type","Transaction Amount","Transaction Status","Request By","Request Date","Request Time","Completed By","Completed Date","Completed Time","Ip Address","Device History","Remark"]
     const tbodyData = [
        ["104" , " 0xyz","Debit","220","Completed","User", "02/06/2021","12:30:06","User","04/07/2021","01:30:06","123.123.123","abc..","12"],
        ["124" , " x1yz","Debit","220","Completed","User", "02/06/2021","12:30:06","User","04/07/2021","01:30:06","123.123.123","abc..","12"],
        ["234" , " xy2z","Debit","220","Completed","User", "02/06/2021","12:30:06","User","04/07/2021","01:30:06","123.123.123","abc..","12"],
        ["024" , " xyz3","Debit","220","Completed","User", "02/06/2021","12:30:06","User","04/07/2021","01:30:06","123.123.123","abc..","12"],
     ]

     const filteredData = tbodyData.filter((row) => {
      const userId = row[0].toString().toLowerCase();
      const userName = row[1] .toLowerCase();
      const filter = searchValue.toLowerCase();
      return userId.includes(filter) || userName.includes(filter);
    })

  return (
    <Table  theadData={theadData} tbodyData={filteredData}/>
  )
}

export default TransactionHistoryLoad