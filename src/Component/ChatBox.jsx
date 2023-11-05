import React, { useState } from 'react'
import { MdOutlineBrokenImage, MdBrightness1 } from "react-icons/md"
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai"
import '../assets/css/Chats.css'
import { useNavigate, useParams } from 'react-router-dom'

const ChatBox = ({ chat }) => {
    const [toggleStar, setToggleStar] = useState(false)
    const [selected, setSelected] = useState(0)
    let navigate = useNavigate()

    const {userId} = useParams();

console.log("selected",selected)

    const chatClickHandler = (id) => {
        console.log("clicked")
        setSelected(id)
        navigate(`/chat/${id}`)
    }


    const handleStarred = () => {
        setToggleStar(!toggleStar)
    }
    return (
            <div className="individualChat-wrapper" onClick={() => chatClickHandler(chat.id)}>
                <div className="chatDetails">
                    <div className="chatDetail-row1">
                        <img src={chat.avatarUrl} alt="avatar" className="chat-avatar" />

                        <div className="userIndentifier">
                            <div className="chat-col1">
                                <p>{chat.name}</p>

                                <div className="chat-message">
                                    {
                                        chat.LastMessageType === "text" ? (
                                            <p>{chat.LastMessage}</p>
                                        ) : (
                                            chat.LastMessageType === "Image" && (
                                                <p><MdOutlineBrokenImage /> Image</p>
                                            )
                                        )
                                    }
                                </div>
                            </div>

                            <div className="chat-col3">
                                <p className="last-seen">{chat.LastMessageTime}</p>
                                <div className="chat-read-unread">
                                    {chat.status === "unread" ? (
                                        <MdBrightness1 size={24} fill="red" />
                                    ) : (
                                        chat.status === "read" && (
                                            <img src="https://w7.pngwing.com/pngs/259/827/png-transparent-right-mark-tick.png" alt="right-mark-tick" className="read-tick" />
                                        )
                                    )}
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="row2-right">
                        <div className="star">
                            {
                                toggleStar ? (<AiTwotoneStar size={24} fill="blue" onClick={handleStarred} />) : (<AiOutlineStar size={24} onClick={handleStarred} />)
                            }
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default ChatBox
