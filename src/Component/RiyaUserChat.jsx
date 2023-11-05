import React, { useState, useRef, useEffect } from 'react'
import { FcClock } from "react-icons/fc"
import { AiFillMail, AiOutlineDown, AiOutlineStar, AiOutlinePlus } from "react-icons/ai"
import { BsSearch, BsFillTelephoneFill, BsReplyAllFill } from "react-icons/bs"
import { BiCopy } from "react-icons/bi"
import { GrAttachment, GrEmoji } from "react-icons/gr"
import { LuForward } from "react-icons/lu"
import { MdDelete } from "react-icons/md"

const RiyaUserChat = ({ UserChat, userId }) => {
    const [inputMessage, setInputMessage] = useState("")
    const [chatHistory, setChatHistory] = useState([])
    const [inputTyping, setInputTyping] = useState(false)
    const [hoverEffect1, setHoverEffect1] = useState(false)

    const [hovereffect2, setHoverEffect2] = useState(false)
    const [hoverEffect3, setHoverEffect3] = useState(false)

    const chatAreaRef = useRef(null);

    const handleMessageChange = (event) => {
        setInputTyping(!inputTyping)
        setInputMessage(event.target.value)
    }

    const handleSendMessage = () => {
        if (inputMessage.trim() !== "") {
            const currentTime = new Date().toLocaleTimeString([], {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
            const newMessage = {
                text: inputMessage,
                time: currentTime,
            }

            setChatHistory([...chatHistory, newMessage])
            setInputMessage("")
        }
    }

    useEffect(() => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const handleMouseEnter = (index) => {
        setHoverEffect1(true)
    }

    const handleMouseLeave = (index) => {
        console.log("index",index)
        setHoverEffect1(true)
    }

    const handleHoverEffect2 = () => {
        console.log("index",index)
        setHoverEffect2(!hovereffect2)
    }

    const handleHoverEffect3 = () => {
        setHoverEffect3(true)
    }


    return (
        <>
            <div className="UserChatcontainer">
                <div className="UserChatHeader">
                    <div className="UserChatHeader-left">
                        <img src={UserChat[userId]?.avatarUrl} alt="User-avatar" />
                        <div className="UserChatHeader-left-b">
                            <p>{UserChat[userId]?.name}</p>
                            <div className="UserChatHeader-left-b2">
                                {inputTyping && (<p>Typing...</p>)}
                            </div>
                        </div>
                    </div>

                    <div className="UserChatHeader-right">
                        <div className="last-seen"><FcClock size={24} />last seen{UserChat[userId]?.LastMessageTime}</div>
                        <div className="contact-box">
                            <p><BsFillTelephoneFill size={24} />{UserChat[userId]?.MobileNumber}</p>
                            <p><AiFillMail size={24} />{UserChat[userId]?.EmailId}</p>
                        </div>
                        <BsSearch size={24} style={{ cursor: "pointer" }} />
                    </div>
                </div>

                <div className="UserChatBody">
                    <div className="userMessage-container">

                        {
                            UserChat[userId]?.UserMessage.map((message, index) => (
                                <div className="message-Container" key={index}>
                                    <div className="agentParent" onMouseEnter={() => handleMouseEnter(message.index)} onMouseLeave={() => handleMouseLeave(message.index)}>
                                        <div className="agent-top">
                                            <img src={UserChat[userId]?.avatarUrl} alt="agent-avatar" />
                                            <span>{UserChat[userId]?.name}</span><span>9:45AM</span>
                                        </div>
                                        <div className="agent-message">
                                            {message?.AgentMessage}
                                        </div>
                                    </div>

                                    <div className="userParent" onMouseEnter={(index) => handleMouseEnter(index)} onMouseLeave={(index) => handleMouseLeave(index)}>
                                        <div className="user-top">
                                            <img src={UserChat[userId]?.AdminUrl} alt="agent-avatar" />
                                            <span>{UserChat[userId]?.AdminName}</span><span>9:45AM</span>
                                        </div>
                                        <div className="user-message">{message.UserMessage}</div>
                                    </div>
                                </div>
                            ))
                        }

                        {
                            chatHistory.map((chat, index) => (
                                <div className="userParent" key={index} onMouseEnter={(index) => handleMouseEnter(index)} onMouseLeave={(index) => handleMouseLeave(index)}>
                                    <div className="user-top">
                                        <img src={UserChat[userId]?.AdminUrl} alt="agent-avatar" />
                                        <span>{UserChat[userId]?.AdminName}</span><span>{chat.time}</span>
                                    </div>
                                    <div className="user-message">{chat.text}</div>
                                </div>
                            ))
                        }

                        {
                            hoverEffect1 &&
                            (<div className="hover-button">
                                <AiOutlineDown size={18} className="hoverbtn-downArrow" onClick={handleHoverEffect2} />
                                <GrEmoji size={18} style={{ cursor: "pointer" }} onClick={handleHoverEffect3} />
                            </div>)
                        }

                        {
                            hovereffect2 &&
                            (<div className="child-hover-popup">
                                <p className="popup-option" ><BsReplyAllFill size={18} />Reply</p>
                                <p className="popup-option" ><BiCopy size={18} />copy</p>
                                <p className="popup-option" ><LuForward size={18} />forward</p>
                                <p className="popup-option" ><AiOutlineStar size={18} />star</p>
                                <p className="popup-option" ><MdDelete size={18} />Delete for me</p>
                                <p className="popup-option" ><AiOutlinePlus size={18} /> select emojies</p>
                            </div>)
                        }

                    </div>
                </div>
                <div className="message-input">
                    <input type="text" placeholder="Type your message here...." className="text-messageInput" value={inputMessage} onChange={handleMessageChange} onKeyPress={
                        (e) => {
                            if (e.key === 'Enter') {
                                handleSendMessage();
                            }
                        }
                    } />
                    <GrAttachment size={24} className="attachment" />

                    <input type="file" className="attachment input-attachment" />

                    <button className="send-btn" onClick={handleSendMessage}>send</button>
                </div>
            </div>
        </>
    )
}

export default RiyaUserChat