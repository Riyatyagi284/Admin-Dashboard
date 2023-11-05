import React from 'react'
import Table from '../../Component/Table'

const ProfileHistoryLoad = ({searchValue}) => {
    const theadData = ["User Id","Username","Login Date","Change Type","Request By","Request Date","Request Time","Change Made By","Change Date","Change Time","Ip Address","Device History","Remark"]
     const tbodyData = [
        ["134" , " x1yz", "02/06/2021","Name","Admin","04/07/2021","1:30:06","Admin","04/07/2021","1:30:06","123.123.123","abc..","12"],
        ["114" , " xy1z", "02/06/2021","Name","Admin","04/07/2021","1:30:06","Admin","04/07/2021","1:30:06","123.123.123","abc..","12"],
        ["124" , " xyz2", "02/06/2021","Name","Admin","04/07/2021","1:30:06","Admin","04/07/2021","1:30:06","123.123.123","abc..","12"],
        ["234" , " xyz4", "02/06/2021","Name","Admin","04/07/2021","1:30:06","Admin","04/07/2021","1:30:06","123.123.123","abc..","12"],  
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

export default ProfileHistoryLoad
