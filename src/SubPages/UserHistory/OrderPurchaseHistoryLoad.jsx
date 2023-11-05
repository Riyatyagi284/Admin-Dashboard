import React from 'react'
import Table from '../../Component/Table'

const OrderPurchaseHistoryLoad = () => {
    const theadData = ["Order Detail","Order Date","Order Time"]
     const tbodyData = [
        [" xyz", "02/06/2021","12:30:06"],
        [" xyz", "02/06/2021","12:30:06"],
        [" xyz", "02/06/2021","12:30:06"],
        [" xyz", "02/06/2021","12:30:06"],
        [" xyz", "02/06/2021","12:30:06"],
       
     ]
     
  return (
    <Table  theadData={theadData} tbodyData={tbodyData}/>
  )
}

export default OrderPurchaseHistoryLoad