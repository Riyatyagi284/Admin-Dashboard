import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../../responsive/ActiveUser.css"


const CreateAccount = () => {
  const navigate = useNavigate();

  const navigateToActiveUser = () => {
    navigate('/account/account-list-for-active-user');
  };

  return (
    <>
      <div className="multi-login-container create-account-wrapper">
        <div className="M-login-header">
          <h2>Create ACCOUNT</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>
              <Link to='/account/account-list-for-active-user' onClick={navigateToActiveUser}>/User</Link>/Multi Login Account
            </span>
          </div>
        </div>

        {/* ######################### Left Side Form Code ################################# */}
        <div className="container-fluid white-bg-parent">
          <div className="row">
            <div className="col-xs-12 col-md-6 white-bg1 create-profile-bank-details">
              <h2 className='Account-heading'>General Information</h2>
              <form className='create-Account-left-form'>
                <div className="form-group">

                  <label htmlFor="mobileField">Name:</label>
                  <input type="text" id="name" className="form-control" placeholder="Enter your Name" />

                  <label htmlFor="mobileField">Date Of Birth:</label>
                  <input type="date" id="date" className="form-control" placeholder="Enter your mobile number" />

                  <div className=" d-flex align-items-start  justify-content-between flex-column">
                    <div className="row d-flex align-items-center justify-content-between" style={{ width: '100%' }}>
                      <div className="col-4">
                        <label htmlFor="" className=" col-form-label">Gender
                        </label>
                      </div>

                      <div class="col-12">
                        <div className="dropdown create-editgender">
                          <button class="btn btn-secondary dropdown-toggle drop-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "56%", border: '2px solid gray' }}>
                            Gender
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: "56%" }}>
                            <li><a class="dropdown-item" href="#">Male</a></li>
                            <li><a class="dropdown-item" href="#">Female</a></li>
                            <li><a class="dropdown-item" href="#">..</a></li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="container-fluid ">

                    <label htmlFor="" className=" col-form-label">Email Id
                    </label>

                    <input placeholder="Email Id" type="email" name="email" className="form-control" aria-required="true" aria-invalid="true" />

                  </div>
                </div>

                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />

                <label htmlFor="mobileField">Mobile Number:</label>
                <input type="tel" id="mobileField" className="form-control" placeholder="Enter your mobile number" />

                <h3>Address</h3>
                <label htmlFor="mobileField">Address:</label>
                <textarea placeholder="Enter your Address here" data-vv-as="Remark" name="address" className="form-control" aria-required="false" aria-invalid="false" ></textarea>

                <label htmlFor="mobileField">Pin Code:</label>
                <input type="number" id="pincode" className="form-control" placeholder="Enter your Pin Code" />

              </form>
            </div>

            {/* ############################ Rightside Form Code  ############################ */}
            <div className="col-xs-12 col-md-6 white-bg2">
              <form className='create-Account-right-form'>
                <div className="form-group">
                  <h3>Bank Details</h3>
                  <label htmlFor="mobileField">Bank Name:</label>
                  <input type="text" id="BankName" className="form-control" placeholder="Enter your Bank Name" />

                  <label htmlFor="mobileField">Account Number:</label>
                  <input type="number" id="Account-no." className="form-control" placeholder="Enter your Account Number" />

                  <label htmlFor="mobileField">IFSC Code:</label>
                  <input type="number" id="ifsc-code" className="form-control" placeholder="Enter your IFSC Code" />


                  <h3>Wallet Balance</h3>
                  <div className="create-Account-left-form">
                    <label htmlFor="mobileField">Deposite:</label>
                    <input type="number" id="deposite" className="form-control" placeholder="Enter your Deposite Amount" />

                    <label htmlFor="mobileField">Bonus:</label>
                    <input type="number" id="bonus" className="form-control" placeholder="Enter your Bonus Amount" />

                    <label htmlFor="mobileField">Winning:</label>
                    <input type="number" id="winning" className="form-control" placeholder="Enter your Winning Amount" />
                  </div>




                  <p className='Account-para'>KYC Information</p>
                  <label htmlFor="mobileField">PanCard Number:</label>
                  <div className='d-flex align-items-center'>
                    <input type="number" id="pancard" className="form-control" placeholder="Enter your Pan Card Number" style={{ width: "50%", marginRight: "1rem" }} />
                    <input type="file" style={{ width: "50%", fontSize: "1.4rem", color: "#424242fa" }} />
                  </div>

                  <label htmlFor="mobileField">Aadhar Card Number:</label>
                  <div className='d-flex align-items-center'>
                    <input type="number" id="aadharcard" className="form-control" placeholder="Enter your Aadhar Card Number" style={{ width: "50%", marginRight: "1rem" }} />
                    <input type="file" style={{ width: "50%", fontSize: "1.4rem", color: "#424242fa" }} />
                  </div>

                  <div className='d-flex justify-content-between align-items-center'>
                    <div style={{width:'70%'}}>
                      <label htmlFor="mobileField">Transaction Code:</label>
                      <input type="number" id="transactioncode" className="form-control" placeholder="Enter your Transaction Code" />
                    </div>
                    <button className="btn btn-black" type="submit" style={{width:'26%'}}>Submit</button>
                  </div>

                </div>

                {/* </div> */}
              </form>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

export default CreateAccount