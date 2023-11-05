import { Badge } from '@mui/material'
import {AiOutlineMail} from 'react-icons/ai'
import React, { useState } from 'react'
import { CHATS } from '../assets/chats'

const ChatNotification = () => {
    const [unreadChats,setUnreadChats] = useState(CHATS.length)


  return (
    <Badge className='mx-3' color="secondary" badgeContent={unreadChats}>
        <AiOutlineMail size={30} />
    </Badge>
  )
}

export default ChatNotification