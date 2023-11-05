import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Routes, Route } from 'react-router-dom'
import Sidebar from "./Component/Sidebar"
import Navbar from "./Component/Navbar"
import Dashboard from "./Pages/Dashboard"
import MarketAnalysis from "./Pages/MarketAnalysis"
import MultiLoginAccount from "./Pages/Account/MultiLoginAccount"
import AccountRoutes from "./Component/Account-Routes"
import ReportRoutes from "./Component/ReportRoutes"
import BankRoutes from "./Component/BankRoutes"
import Report from "./Pages/Report"
import ActiveUser from './Pages/Account/ActiveUser'
import CreateAccount from './Pages/Account/CreateAccount'
import AccountStatement from './Pages/Reports/AccountStatement'
import PartyWinLoss from './Pages/Reports/PartyWinLoss'
import CurrentBets from './Pages/Reports/CurrentBets'
import UserHistory from './Pages/Reports/UserHistory'
import Chat from './Pages/Chat'
import Notification from './Pages/Notification'
import Referral from './Pages/Referral'
import ReferralRoute from './Component/referral/ReferralRoute'

const MainComponent = () => {

const navigate = useNavigate() 

  const [selectedListIndex, setSelectedListIndex] = useState(0);
  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(-1);
  const [showSidebarText, setShowSidebarText] = useState(true);
  // const [showLogo,setShowLogo] = useState("true");

  const dropdownOptions = [
    ["Account list",  "Create Account","Multi Login Account"],
    ["Transaction"],
    ["Account Statement", "Party Win Loss", "Current Bets", "User History"],
    ["Account Statement1", "Party Win Loss1", "Current Bets1", "User History1"],
  ];

  const pages = [
    <Dashboard />,
    <MarketAnalysis />,
    <MultiLoginAccount />,
    // <Bank />,
    <ActiveUser />,
    <CreateAccount />,
    <AccountStatement />,
    <PartyWinLoss />,
    <CurrentBets />,
    <UserHistory />,
  ];

  const toggleSidebarText = () => {
    setShowSidebarText((prevShowSidebarText) => !prevShowSidebarText)
  }

  const handleItemClick = (index) => {
    setSelectedListIndex(index);
    setSelectedDropdownIndex(-1);
  };

  const handleDropdownItemClick = (index) => {
    setSelectedDropdownIndex(index);
    setSelectedListIndex(-1);
  };

  const navigateToCreateAccount = ( ) => {
    setSelectedListIndex(5);
    setSelectedDropdownIndex(-1);
    navigate('/create-account')
  }

  const navigateToActiveUser = () => {
    setSelectedListIndex(4); // Set the selected index to the Active User page
    setSelectedDropdownIndex(-1);
    navigate('/active-user')
  };

  return (
    <>
      <div className="container-fluid parent-wrapper">
        <div className="row">
          {showSidebarText ? (
            <div className="sidebar">
            <div className="example1">
              <Sidebar onItemClick={handleItemClick} showText={showSidebarText} dropdownOptions={dropdownOptions} handleDropdownItemClick={handleDropdownItemClick} />
            </div>
          </div>
          ) : (
            <div className="col-md-1 col-lg-1 ">
            <div className="example1" style={{width:'12rem'}}>
              <Sidebar onItemClick={handleItemClick} showText={showSidebarText} dropdownOptions={dropdownOptions} handleDropdownItemClick={handleDropdownItemClick} />
            </div>
          </div>
          )}
          

           {showSidebarText ? (
            <div className="rightside">
            <div className="example2">
              <Navbar toggleSidebar={toggleSidebarText} showSidebarText={showSidebarText} />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path="/market-analysis" element={<MarketAnalysis />} />
                <Route path="/multi-login" element={<MultiLoginAccount />} />
                <Route path="/account/*" element={<AccountRoutes />} />
                <Route path="/bank/*" element={<BankRoutes />} />
                <Route path="/referral/*" element={<ReferralRoute />} />
                <Route path="/report/*" element={<ReportRoutes />} />
                <Route path="/chat/:userId?" element={<Chat />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/referral" element={<Referral />} />
              </Routes>
            </div>
          </div>
           ) : (
            <div className="col-md-11 col-lg-11 ">
            <div className="example2">
              <Navbar toggleSidebar={toggleSidebarText} showSidebarText={showSidebarText} />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path="/market-analysis" element={<MarketAnalysis />} />
                {/* <Route path="/multi-login" element={<MultiLoginAccount />} /> */}
                <Route path="/account/*" element={<AccountRoutes />} />
                <Route path="/bank/*" element={<BankRoutes />} />
                <Route path="/report/*" element={<ReportRoutes />} />
                <Route path="/chat/:userId?" element={<Chat />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/referral/*" element={<ReferralRoute />} />
              </Routes>
            </div>
          </div>
           )}
          
        </div>
      </div>
    </>
  )
}

export default MainComponent