import React from 'react'
import { useState } from 'react'
import { BsFullscreen, BsInfoCircleFill, BsSearch } from "react-icons/bs"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import ChatNotification from './ChatNotification'
import "../responsive/Navbar.css"
import SmallScreenHam from '../ResponsiveComponents/SmallScreenHam'

const Navbar = ({ toggleSidebar }) => {

    const [isUserNameOpen, setIsUserNameOpen] = useState(false);

    const UserNametoggleDropdown = () => {
        setIsUserNameOpen(!isUserNameOpen)
    };

    const [text, setText] = useState("")

    const handleInput = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="container-fluid navbar-header">
            <div className="row parent-nav">
                <SmallScreenHam  className="SmallScreenHam" />
                <div className="col-md-6 nav-left">
                    <GiHamburgerMenu size={24} style={{ fill: '#fff', cursor: "pointer" }} onClick={
                        toggleSidebar} className="largeScreenHam" />

                    <input type="text" value={text} onChange={handleInput} placeholder="search user" />
                    <div className="banner">
                        <div className="left-banner">Upcoming Features</div>
                        <div className="right-banner"></div>
                    </div>

                </div>

                {/* <div className="col-md-2 ">
                </div> */}

                <div className="col-md-4 nav-right">
                    <BsSearch size={24} className="navright-searchIcon" />
                    {/* <ChatNotification  className="navright-chat"/> */}
                    <BsFullscreen size={24} className="navright-fullScreenIcon" />
                    <a className='anchor anchor-extra'>
                        <BsInfoCircleFill size={15} />
                        <p className='nav-rule'>Rules</p>
                    </a>
                    <p className='points'>pts:0</p>
                    <div className='user'>Rakesh2
                        <div className='dropdown' onClick={UserNametoggleDropdown}>
                            {isUserNameOpen ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        {isUserNameOpen && (
                            <ul className='dropdown-toggle drop-user-toggle'>
                                <li>option1</li>
                                <li>option2</li>
                                <li>option3</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar