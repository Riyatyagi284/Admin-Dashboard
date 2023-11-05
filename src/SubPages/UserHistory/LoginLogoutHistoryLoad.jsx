import React from 'react'
import Table from '../../Component/Table';

const HistoryLoad = ({searchValue}) => {
  const theadData = ["User Id","Username","Login Date","Login Time","Logout Date","Logout Time","Ip Address","Device History"]
     const tbodyData = [
        ["012" , " xyz1", "02/06/2021","12:30:06","04/07/2021","1:30:06","123.123.123","abc.."],
        ["234" , " xyz2", "02/06/2021","12:30:06","04/07/2021","1:30:06","123.123.123","abc.."],
        ["134" , " xyz3", "02/06/2021","12:30:06","04/07/2021","1:30:06","123.123.123","abc.."],
        ["124" , " xyz4", "02/06/2021","12:30:06","04/07/2021","1:30:06","123.123.123","abc.."],
        ["123" , " xyz5", "02/06/2021","12:30:06","04/07/2021","1:30:06","123.123.123","abc.."],
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

export default HistoryLoad