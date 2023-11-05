import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { BiHomeCircle, BiUserPlus, BiMemoryCard } from 'react-icons/bi';
import { BsBarChartFill, BsChatRightText } from "react-icons/bs"
import { FaRegUserCircle } from "react-icons/fa"
import { BsBank } from "react-icons/bs"
import { GrDocumentText, GrNotification } from "react-icons/gr"
import { SlCalender } from "react-icons/sl"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { height } from '@mui/system';
import { GoCrossReference } from 'react-icons/go'
import "../responsive/Example1.css"

const Sidebar = ({ onItemClick, showText, dropdownOptions, handleDropdownItemClick }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false);
    const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    };
    const toggleBankDropdown = () => {
        setIsBankDropdownOpen(!isBankDropdownOpen)
    };
    const toggleReportDropdown = () => {
        setIsReportDropdownOpen(!isReportDropdownOpen)
    };
    const toggleProductDropdown = () => {
        setIsProductDropdownOpen(!isProductDropdownOpen)
    }
    const dropdownHeight = {
        backgroundColor: 'blue',
        color: 'white',
        height: "8rem",
    };

    return (
        <div className="container">
            {
                showText ? (
                    <>
                        <Link to="/"><img src="../assets/logo.png" className='logo' alt="company-logo" /></Link>
                        <li><Link to="/" className='anchor' onClick={() => onItemClick(0)}>
                            <BiHomeCircle size={32} />
                            <p>Dashboard</p>
                        </Link></li>

                        <li><Link to="/market-analysis" className='anchor' onClick={() => onItemClick(1)}>
                            <BsBarChartFill size={32} />
                            <p>Market Analysis</p>
                        </Link></li>

                        {/* <li><Link to="/multi-login" className='anchor' onClick={() => onItemClick(2)}>
                            <BiUserPlus size={32} />
                            <p>Multi Login Account</p>
                        </Link></li> */}
                        {/* onClick={() => handleDropdownItemClick(3)} */}
                        <li><div className='anchor' >
                            <FaRegUserCircle size={32} style={isOpen ? { marginBottom: '9rem' } : {}} />
                            <p style={isOpen ? { marginBottom: '9rem' } : {}}>Account</p>
                            <i className={`dropdown ${isOpen ? 'dropopen1' : ''}`} onClick={toggleDropdown}>
                                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </i>
                            {/* Render the dropdown Options if the dropdddown is open  */}
                            {isOpen && (
                                <ul className='dropdown-toggle'>
                                    {
                                        dropdownOptions[0].map((option, index) => (
                                            <li key={index}><Link to={`/account/${option.toLowerCase().replace(/ /g, "-")}`} key={index} onClick={() => onItemClick(index + 4)}>{option}</Link></li>
                                        ))
                                    }
                                </ul>
                            )}

                        </div></li>


                        {/* <li><Link to="/bank" className='anchor' onClick={() => onItemClick(3)}>
                            <BsBank size={32} />
                            <p>Bank</p>
                        </Link></li> */}


                        {/* Bank Dropdown */}
                        <li><div className='anchor'>
                            <GrDocumentText size={32} style={isBankDropdownOpen ? { marginBottom: '10rem' } : {}} />
                            <p style={isBankDropdownOpen ? { marginBottom: '10rem' } : {}}> Bank </p>
                            <i className={`dropdown ${isBankDropdownOpen ? 'dropdown2' : ''}`} onClick={toggleBankDropdown}>
                                {isBankDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </i>
                            {/* Render the dropdown Options if the dropdddown is open  */}
                            {isBankDropdownOpen && (
                                <ul className='dropdown-toggle1'>
                                    {
                                        dropdownOptions[1].map((option, index) => (
                                            <li key={index}><Link to={`/bank/${option.toLowerCase().replace(/ /g, "-")}`} key={index} onClick={() => onItemClick(index + 7)}>{option}</Link></li>
                                        ))
                                    }
                                </ul>
                            )}
                        </div></li>





                        <li><div className='anchor'>
                            <GrDocumentText size={32} style={isReportDropdownOpen ? { marginBottom: '10rem' } : {}} />
                            <p style={isReportDropdownOpen ? { marginBottom: '10rem' } : {}}> Reports</p>
                            <i className={`dropdown ${isReportDropdownOpen ? 'dropdown2' : ''}`} onClick={toggleReportDropdown}>
                                {isReportDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </i>
                            {/* Render the dropdown Options if the dropdddown is open  */}
                            {isReportDropdownOpen && (
                                <ul className='dropdown-toggle1'>
                                    {
                                        dropdownOptions[2].map((option, index) => (
                                            <li key={index}><Link to={`/report/${option.toLowerCase().replace(/ /g, "-")}`} key={index} onClick={() => onItemClick(index + 7)}>{option}</Link></li>
                                        ))
                                    }
                                </ul>
                            )}
                        </div></li>

                        <li><div className='anchor'>
                            <GrDocumentText size={32} style={isProductDropdownOpen ? { marginBottom: '10rem' } : {}} />
                            <p style={isProductDropdownOpen ? { marginBottom: '10rem' } : {}}> Product </p>
                            <i className={`dropdown ${isProductDropdownOpen ? 'dropdown2' : ''}`} onClick={toggleProductDropdown}>
                                {isProductDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </i>
                            {/* Render the dropdown Options if the dropdddown is open  */}
                            {isProductDropdownOpen && (
                                <ul className='dropdown-toggle1'>
                                    {
                                        dropdownOptions[3].map((option, index) => (
                                            <li key={index}><Link to={`/report/${option.toLowerCase().replace(/ /g, "-")}`} key={index} onClick={() => onItemClick(index + 7)}>{option}</Link></li>
                                        ))
                                    }
                                </ul>
                            )}
                        </div></li>



                        <li><Link to="/events" className='anchor' onClick={() => onItemClick(8)}>
                            <SlCalender size={32} />
                            <p>Events</p>
                        </Link></li>

                        <li><Link to="/chat" className='anchor' onClick={() => onItemClick(9)}>
                            <BsChatRightText size={32} />
                            <p>Chat</p>
                        </Link></li>

                        <li><Link to="/notification" className='anchor' >
                            <GrNotification size={32} />
                            <p>Notification</p>
                        </Link></li>

                        <li><Link to="/referral" className='anchor' >
                            <GoCrossReference size={32} />
                            <p>Referral</p>
                        </Link></li>



                    </>
                ) :
                    (<>
                        <Link to="/"><img src="../assets/logo-circle.png" className='logo' alt="company-logo" style={{ width: '7rem', height: '7rem', background: 'rgb(100 95 95)', borderRadius: "50%", margin: '1rem' }} /></Link>
                        <li><Link to="/" className='anchor' onClick={() => onItemClick(0)}>
                            <BiHomeCircle size={32} />
                        </Link></li>

                        <li><Link to="/market-analysis" className='anchor' onClick={() => onItemClick(1)}>
                            <BsBarChartFill size={32} />

                        </Link></li>

                        {/* <li><Link to="/multi-login" className='anchor' onClick={() => onItemClick(2)}>
                            <BiUserPlus size={32} />

                        </Link></li> */}

                        <li><div className='anchor'>
                            <FaRegUserCircle size={32} onClick={toggleDropdown} >
                                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </FaRegUserCircle>
                            {/* Render the dropdown Options if the dropdddown is open  */}
                            {isOpen && (
                                <ul className='dropdown-toggle drop-toggle'>
                                    {
                                        dropdownOptions[0].map((option, index) => (
                                            <li key={index}><Link to={`/account/${option.toLowerCase().replace(/ /g, "-")}`} key={index} onClick={() => onItemClick(index + 4)}>{option}</Link></li>
                                        ))
                                    }
                                </ul>
                            )}
                        </div></li>


                        <li><Link to="/bank" className='anchor' onClick={() => onItemClick(3)}>
                            <BsBank size={32} />

                        </Link></li>

                        <li><div className='anchor'>
                            <GrDocumentText size={32} onClick={toggleReportDropdown}>

                                {isReportDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                            </GrDocumentText>

                            {/* Render the dropdown Options if the dropdddown is open  */}
                            {isReportDropdownOpen && (
                                <ul className='dropdown-toggle1 drop-toggle1'>
                                    {
                                        dropdownOptions[1].map((option, index) => (
                                            <li key={index}><Link to={`/report/${option.toLowerCase().replace(/ /g, "-")}`} key={index} onClick={() => onItemClick(index + 7)}>{option}</Link></li>
                                        ))
                                    }
                                </ul>
                            )}

                        </div></li>

                        {/* <li><Link to="/our-casino" className='anchor' onClick={() => onItemClick(6)}>
                            <BiMemoryCard size={32} />

                        </Link></li>

                        <li><Link to="/virtual-casino" className='anchor' onClick={() => onItemClick(7)}>
                            <BiMemoryCard size={32} />

                        </Link></li> */}

                        <li><Link to="/events" className='anchor' onClick={() => onItemClick(9)}>
                            <SlCalender size={32} />

                        </Link></li>

                        <li><Link to="/chat" className='anchor' >
                            <BsChatRightText size={32} />
                        </Link></li>

                        <li><Link to="/notification" className='anchor' >
                            <GrNotification size={32} />
                        </Link></li>

                        <li><Link to="/referral" className='anchor' >
                            <GoCrossReference size={32} />
                        </Link></li>



                    </>
                    )
            }

        </div>
    )
}

export default Sidebar