import React from 'react'
import Table from '../../Component/Table'

const SupportEmailChatHistoryLoad = () => {
    const theadData = ["All Chats","All Chats With Revert Message","Message Revert By","Message Date","Message Time"]
     const tbodyData = [
      ["xyz..","abc..","..","02/06/2021","12:30:06"],
      ["xyz..","abc..","..","02/06/2021","12:30:06"],
      ["xyz..","abc..","..","02/06/2021","12:30:06"],
      ["xyz..","abc..","..","02/06/2021","12:30:06"],
      ["xyz..","abc..","..","02/06/2021","12:30:06"],
     ]
     
  return (
    <Table  theadData={theadData} tbodyData={tbodyData}/>
  )
}

export default SupportEmailChatHistoryLoad