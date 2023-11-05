import React from 'react'
import Table from '../../Component/Table'

const AccountStatusHistoryLoad = ({searchValue}) => {
    const theadData = ["User Id","Username","Transaction Lock Status","Hide","Block","Freeze","Made By","Create Date","Create Time","Reason","Remark"]
     const tbodyData = [
        ["123" , " xy1","Add To Credit","","","","MLA", "02/06/2021","12:30:06","abc..","12"],
        ["124" , " xy2","Add To Credit","","","","MLA", "02/06/2021","12:30:06","abc..","12"],
        ["134" , " xy3","Add To Credit","","","","MLA", "02/06/2021","12:30:06","abc..","12"],
        ["234" , " xy4","Add To Credit","","","","MLA", "02/06/2021","12:30:06","abc..","12"],
        ["124" , " xy5","Add To Credit","","","","MLA", "02/06/2021","12:30:06","abc..","12"],
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

export default AccountStatusHistoryLoad