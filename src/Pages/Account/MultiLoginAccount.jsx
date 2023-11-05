import React from 'react'
import { AiOutlineCheck } from "react-icons/ai"
import { BsCircle } from "react-icons/bs"
import MultiLoginPriviledges from './MultiLoginPriviledges'
import MultiLoginRightTable from './MultiLoginRightTable'

const MultiLoginAccount = () => {
  const labelNames = ["All", "Dashboard", "Market Analysis", "User List", "Insert User", "Bank", "Account Statement", "Party Win Loss", "Current Bets", "User HIstory", "General Lock", "Casino Result", "Live Casino Result", "Our Casino", "Events", "Market Search Analysis", "Login User Creation", "Withdraw", "Deposit", "Credit Reference", "User Info", "User Password Change", "User Lock", "Bet Lock", "Turn Over", "Coupon Report", "active user", "fraud report", "currency permission"];

  const tableHead = [
    "Dashboard","Market Analysis","User List", "Insert User","Bank","Account Statement","Party Win Loss","current Bets","User History", "General Lock","Casino Result", "Live Casino Result", "Our Casino", "Event","Market Search Analysis", "Login User Creation", "Withdraw", "Deposit", "Credit Reference", "User Info", "User Password Change", "User Lock", "Bet Lock", "Turn Over", "Coupon Report", "active user", "fraud report", "currency permission"
  ];
  // const tableBody = []

  return (
    <>
      <div className="multi-login-container multi-login-wrapper">
        <div className="M-login-header">
          <h2>MULTI LOGIN ACCOUNT</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/Multi Login Account</span>
          </div>
        </div>

        <div className="container-fluid white-bg">
          <div className="form-parent">
            <p>Personal Information</p>
            <div className="container-fluid">
              <form>
                <div className="form-row">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <label htmlFor="client_id">Client Id</label>
                        <input type="text" className="form-control multi-Acc-form" id="client_id" />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" className="form-control multi-Acc-form" id="fullName" />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control multi-Acc-form" id="inputPassword4" />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="inputPassword">Confirm Password</label>
                        <input type="text" className="form-control multi-Acc-form" id="inputPassword" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="container-fluid">
              <div className="row priviledge-box">
                <MultiLoginPriviledges labelNames={labelNames} />
              </div>
            </div>

            <div className="btn-groups">
              <button className="btn" type="submit">Transection Code</button>
              <button className="btn btn-green" type="submit">Submit</button>
              <button className="btn btn-grey" type="submit">Reset</button>
            </div>
          </div>

          <div className="table-section">
            <table className='table table-bordered'>
              {/* <div className="table table-bordered"> */}
              <tbody>
                <tr className='table-row'>
                  <th className='fixed-col-1 '>Action</th>
                  <th className='fixed-col-2'>Username</th>
                  <th className='fixed-col-3'>Full Name</th>
                </tr>

                <tr className='flex'>
                  <td className='fixed-col-1' id="fixed-col-1">
                    <a className='text-white btn1'>U</a>
                    <a className='text-white btn2'>S</a>
                    <a className='text-white btn3'>P</a>
                  </td>
                  <td className='fixed-col-2 flex' id="fixed-col-2">
                    <p>wwwwwwweeeu1</p>
                    <AiOutlineCheck />
                  </td>
                  <td className='fixed-col-3' id="fixed-col-3">
                    mlllllll
                  </td>

                </tr>
              </tbody>
              {/* </div> */}
            </table>

            <div className='multi-table-right'>
              <MultiLoginRightTable  tableHead={tableHead} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default MultiLoginAccount