import React from 'react'
import Table from "../../../Component/Table"

const TransactionHistoryLoad = () => {
    const theadData = ["Date","Time","Particulars","Chq./Ref No.","Credit","Debit","Balance"];
    const tbodyData = [["02/06/2021","02/4/2021","hguytunghtghjhv","--","10,000.00","10,000.00", "00.00"],
        ["02/06/2021","07/3/2021","hguytunghtghjhv","--","10,000.00","10,000.00", "00.00"],]

  return (
    <Table  theadData={theadData} tbodyData={tbodyData}/>
  )
}

export default TransactionHistoryLoad