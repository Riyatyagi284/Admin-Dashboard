import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import ChatBox from "../Component/ChatBox"
import { CHATS } from '../assets/chats'
import { UserChat } from "../assets/chat"
import RiyaUserChat from "../Component/RiyaUserChat"
// import UserChats from '../Component/UserChats'
import '../assets/css/Chats.css'
import { useParams } from 'react-router-dom'


const Chat = () => {

    const { userId } = useParams()


    return (
        <>
            <div className="chat-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 chat-left-top">
                            <div className="chat-left">
                                <h2 className="chat-header">All Chats</h2>
                                <div className="chat-left-search-box">
                                    <input type="text" placeholder="Search any user here..." />
                                    <BsSearch size={14} className="search-icon" />
                                </div>

                                <div className="chatboxes-container">
                                    {
                                        CHATS.map((chat) => (
                                            <ChatBox key={chat.id} chat={chat} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 chat-right-top">
                            <div className="chat-right">
                                <RiyaUserChat UserChat={UserChat} userId={userId} />
                                {/* <RiyaUserChat  /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat