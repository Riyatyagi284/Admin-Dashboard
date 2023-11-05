import React from 'react'
import Table from '../../Component/Table'

const NotificationHistoryLoad = ({searchValue}) => {
    const theadData = ["User Id","Username","Notification Type","Request By","Request Date","Request Time","IP Track"]
     const tbodyData = [
        ["124" , " 1yz","Promotional","User", "02/06/2021","12:30:06","123.123.123","abc.."],
        ["134" , " y5z","Promotional","User", "02/06/2021","12:30:06","123.123.123","abc.."],
        ["234" , " x3z","Promotional","User", "02/06/2021","12:30:06","123.123.123","abc.."],
        ["104" , " x1z","Promotional","User", "02/06/2021","12:30:06","123.123.123","abc.."],
        ["234" , " x5z","Promotional","User", "02/06/2021","12:30:06","123.123.123","abc.."],
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

export default NotificationHistoryLoad