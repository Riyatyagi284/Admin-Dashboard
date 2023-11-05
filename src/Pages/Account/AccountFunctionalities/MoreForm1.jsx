import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import { LuArrowBigRightDash } from "react-icons/lu"
import Form from 'react-bootstrap/Form';
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineCheck } from "react-icons/ai"
import TransactionTable from "./TransactionTable"
import UploadAadhar from "../../../Component/UploadAadhar"
import UploadPan from "../../../Component/UploadPan"
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function JustifiedExample({ onClose }) {
    const navStyle = {
        width: '100%',
    };
    const [activeTab, setActiveTab] = useState(0);
    const [panEnlarged, setPanEnlarged] = useState(false);
    const [aadharEnlarged, setAadharEnlarged] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const toggleAadharEnlarged = () => {
        setAadharEnlarged(!aadharEnlarged)
    }

    const togglePanEnlarged = () => {
        setPanEnlarged(!panEnlarged)
    }

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword)
    }

    const handleConfirmPasswordToggle = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    // const imageSize = enlarged ? { width:"150px",height:"75px"} : {width:"72px",height:"35px"}

    return (
        <>
            <div className="more-modal-overlay">
                <div className='modal1 more-modal1'>
                    <header className="header more-head">
                        <h2>User Name</h2>
                        <span className='modal-close' onClick={onClose}>&times;</span>
                    </header>


                    <Nav justify variant="tabs" style={navStyle}>
                        <Nav.Item onClick={() => handleTabClick(0)}>
                            <Nav.Link >Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => handleTabClick(1)}>
                            <Nav.Link>Change Password</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => handleTabClick(2)}>
                            <Nav.Link>User Lock</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => handleTabClick(3)}>
                            <Nav.Link>Account history</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={() => handleTabClick(4)}>
                            <Nav.Link>Edit Profile</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <div className="tab-content more-tb-content">
                        {activeTab === 0 &&
                            <div className="container-fluid">
                                <div className="row tab-row1">
                                    <div className="col-6 tab-row1-left">
                                        <div className="row ">
                                            <div className="col-12 tab-row1-left1">
                                                <div className='d-flex justify-content-between ml-44 mr-44'>
                                                    <div className="circle">
                                                        A
                                                    </div>
                                                    <AiOutlineCheck size={24} style={{ background: "green", color: "#fff", padding: "0.6rem", borderRadius: "50%" }} />
                                                </div>

                                                <div className='d-flex align-items-center'>
                                                    <div className="profile-bank-details">
                                                        <h3 style={{ marginLeft: '1.2rem' }}>Wallet Balance</h3>

                                                        <tr>
                                                            <div className="row profile-BankParent">
                                                                <th className="col-3 profile-head" style={{ fontSize: "1.2rem" }}>
                                                                    Deposite
                                                                </th>
                                                                <td className="col-8 profile-data">
                                                                    <input placeholder="Deposite" type="text" name="userchangepasswordmpassword" value="" readOnly data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />
                                                                </td>
                                                            </div>
                                                        </tr>

                                                        <tr>
                                                            <div className="row profile-BankParent">
                                                                <th className="col-3 profile-head" style={{ fontSize: "1.2rem" }}>
                                                                    Bonus
                                                                </th>
                                                                <td className="col-8 profile-data">
                                                                    <input placeholder="Bonus" type="text" name="userchangepasswordmpassword" value="" readOnly data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />
                                                                </td>
                                                            </div>
                                                        </tr>

                                                        <tr>
                                                            <div className="row profile-BankParent">
                                                                <th className="col-3 profile-head" style={{ fontSize: "1.2rem" }}>
                                                                    Winning
                                                                </th>
                                                                <td className="col-8 profile-data">
                                                                    <input placeholder="Winning" type="text" name="userchangepasswordmpassword" value="" readOnly data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />
                                                                </td>
                                                            </div>
                                                        </tr>

                                                    </div>

                                                </div>
                                                <hr />
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-12 tab-row1-left2 d-flex flex-column">
                                                <p className='para1'>Name</p>
                                                <p className='para2'>status</p>
                                            </div>
                                        </div>

                                        <div className="row tab-row1-left3">
                                            <div className="profile-bank-details">
                                                <div className="col-12">
                                                    <h3 style={{ marginLeft: '1.2rem' }}>Information</h3>
                                                </div>

                                                <table className="profile-table">
                                                    <tbody>
                                                        <tr>
                                                            <div className="row profile-BankParent">
                                                                <th className="col-3 profile-head">
                                                                    KYC Details
                                                                </th>
                                                                <td className="col-8 profile-data">
                                                                    <input placeholder="KYC Details" type="text" name="userchangepasswordmpassword" value="" readOnly data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />
                                                                </td>
                                                            </div>
                                                        </tr>

                                                        <tr>
                                                            <div className="row profile-BankParent">
                                                                <th className="col-3 profile-head">
                                                                    PanCard no.
                                                                </th>
                                                                <td className="col-8 profile-data ">
                                                                    <div className="profile-pan-data">
                                                                        <input placeholder="Pan Card Number" type="text" name="userchangepasswordmpassword" value="" readOnly data-vv-as="Transaction Code" class="form-control profile-pan-input" aria-required="true" aria-invalid="false" />
                                                                        <img src="https://www.thestatesman.com/wp-content/uploads/2019/07/pan-card.jpg"
                                                                            style={{ width: "72px", height: "35px", cursor: "pointer" }} onClick={togglePanEnlarged} alt="pan-card" />
                                                                    </div>
                                                                </td>
                                                            </div>
                                                        </tr>
                                                        {
                                                            panEnlarged && (
                                                                <div onClick={togglePanEnlarged}
                                                                ><img
                                                                        src="https://www.thestatesman.com/wp-content/uploads/2019/07/pan-card.jpg"
                                                                        className="p-non-edit-pan"
                                                                        alt="Enlarged Pan Card"
                                                                    />
                                                                </div>
                                                            )
                                                        }


                                                        <tr>
                                                            <div className="row profile-BankParent">
                                                                <th className="col-3 profile-head">
                                                                    Aadhar No.
                                                                </th>
                                                                <td className="col-8 profile-data ">
                                                                    <div className="profile-pan-data">
                                                                        <input placeholder="Aadhar Number " type="text" name="userchangepasswordmpassword" value="" readOnly data-vv-as="Transaction Code" class="form-control profile-pan-input" aria-required="true" aria-invalid="false" /> <img src="https://www.themmsglobal.com/services/aadhar.jpg" style={{ width: "72px", height: "35px", cursor: "pointer" }} onClick={toggleAadharEnlarged} />
                                                                    </div>
                                                                </td>
                                                            </div>
                                                        </tr>

                                                        {
                                                            aadharEnlarged && (
                                                                <div onClick={toggleAadharEnlarged}>
                                                                    <img
                                                                        src="https://www.themmsglobal.com/services/aadhar.jpg"
                                                                        className="p-non-edit-aadhar"

                                                                        alt="Enlarged Pan Card"
                                                                    />
                                                                </div>
                                                            )
                                                        }



                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 tab-row1-right">
                                        <h3>Additional Information</h3>
                                        <table className="profile-table">
                                            <tbody>
                                                <tr>
                                                    <div className="row">
                                                        <th className="col-3 profile-head">
                                                            Date of Birth
                                                        </th>
                                                        <td className="col-8 profile-data">
                                                            <input placeholder="Bank Name" type="text" name="userchangepasswordmpassword" value="12/05/1996" readOnly data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />
                                                        </td>
                                                    </div>
                                                </tr>

                                                <tr>
                                                    <div className="row">
                                                        <th className="col-3 profile-head">
                                                            Gender
                                                        </th>
                                                        <td className="col-8 profile-data">
                                                            <input placeholder="Bank Name" type="text" name="userchangepasswordmpassword" value="male" readOnly data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />
                                                        </td>
                                                    </div>
                                                </tr>

                                                <tr>
                                                    <div className="row">
                                                        <th className="col-3 profile-head">
                                                            Email Id
                                                        </th>
                                                        <td className="col-8 profile-data">
                                                            <input placeholder="Bank Name" type="text" name="userchangepasswordmpassword" value="abc@gmail.com" readOnly data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />

                                                        </td>
                                                    </div>
                                                </tr>

                                                <tr>
                                                    <div className="row">
                                                        <th className="col-3 profile-head">
                                                            Mobile No.
                                                        </th>
                                                        <td className="col-8 profile-data">
                                                            <input placeholder="Mobile no." type="text" name="userchangepasswordmpassword" value="9085950579" readOnly data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />
                                                        </td>
                                                    </div>
                                                </tr>

                                                <div className="profile-bank-details">
                                                    <h3>Address</h3>

                                                    <tr>
                                                        <div className="row">
                                                            <th className="col-3 profile-head">
                                                                Address
                                                            </th>
                                                            <td className="col-8 profile-data" style={{ maginTop: "-1rem" }}>

                                                                <FloatingLabel
                                                                    controlId="floatingTextarea"
                                                                    label="Comments"
                                                                    className="mb-3"
                                                                    style={{ marginLeft: '8px', width: "37rem" }}
                                                                >
                                                                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                                                                </FloatingLabel>

                                                            </td>
                                                        </div>
                                                    </tr>

                                                    <tr>
                                                        <div className="form-group3 row profile-BankParent">
                                                            <label htmlFor="" className="col-form-label more-label col-2"><th className="profile-head">
                                                                Pin Code
                                                            </th></label>
                                                            <div className="col-10 form-group-feedback">
                                                                <input placeholder="Pin Code " type="text" name="userchangepasswordmpassword" readOnly data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                                            </div>
                                                        </div>
                                                    </tr>

                                                </div>

                                                <div className="profile-bank-details">
                                                    <h3>Bank Details</h3>
                                                    <tr>
                                                        <div className="form-group3 row profile-BankParent">
                                                            <label htmlFor="" className="col-form-label more-label col-2"><th className="profile-head">
                                                                Bank Name
                                                            </th></label>
                                                            <div className="col-10 form-group-feedback">
                                                                <input placeholder="Bank Name" type="password" name="userchangepasswordmpassword" readOnly data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                                            </div>
                                                        </div>
                                                    </tr>

                                                    <tr>
                                                        <div className="form-group3 row profile-BankParent">
                                                            <label htmlFor="" className="col-form-label more-label col-2"><th className="profile-head">
                                                                Account Number
                                                            </th></label>
                                                            <div className="col-10 form-group-feedback">
                                                                <input placeholder="Account Number" type="password" name="userchangepasswordmpassword" readOnly data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                                            </div>
                                                        </div>
                                                    </tr>

                                                    <tr>
                                                        <div className="form-group3 row profile-BankParent">
                                                            <label htmlFor="" className="col-form-label more-label col-2"><th className="profile-head">
                                                                IFSC Code
                                                            </th></label>
                                                            <div className="col-10 form-group-feedback">
                                                                <input placeholder="IFSC Code" type="password" name="userchangepasswordmpassword" readOnly data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                                            </div>
                                                        </div>
                                                    </tr>

                                                </div>



                                                <tr>
                                                    <div className="row">
                                                        <th className="col-3 profile-head">
                                                            Password
                                                        </th>
                                                        <td className="col-8 profile-data">
                                                            {showPassword ? (<>
                                                                <input placeholder="password" type="password" readOnly name="userchangepasswordmpassword" data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />
                                                                <AiOutlineEyeInvisible size={24} onClick={handlePasswordToggle} style={{ position: "absolute", bottom: "18.4rem", right: "120px" }} />
                                                            </>) : (
                                                                <>
                                                                    <input placeholder="password" type="password" readOnly name="userchangepasswordmpassword" data-vv-as="Transaction Code" class="form-control profile-input" aria-required="true" aria-invalid="false" />
                                                                    <AiOutlineEyeInvisible size={24} onClick={handlePasswordToggle} style={{ position: "absolute", bottom: "15rem", right: "120px" }} />
                                                                    <AiOutlineEye size={24} onClick={handlePasswordToggle} style={{ position: "absolute", bottom: "18.4rem", right: "120px" }} />
                                                                </>
                                                            )
                                                            }
                                                        </td>
                                                    </div>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        }

                        {activeTab === 1 &&
                            <form action="" className="userChangePassword">
                                <div className="form-group1 row">
                                    <label htmlFor="" className="col-form-label more-label col-4">Password</label>
                                    <div className="col-8 form-group-feedback">
                                        {showPassword ? (<>
                                            <input placeholder="Password" type="password" name="Bank Account" className="form-control" aria-required="true" aria-invalid="true" style={{ outline: "none", border: "none" }} />
                                            <AiOutlineEyeInvisible size={24} onClick={handlePasswordToggle} style={{ position: "absolute", right: "60px", top: "170px", color: "grey" }} />
                                        </>) : (
                                            <>
                                                <input placeholder="Password" type="text" name="Bank Account" className="form-control" aria-required="true" aria-invalid="true" style={{ outline: "none", border: "none" }} />
                                                <AiOutlineEye size={24} onClick={handlePasswordToggle} style={{ position: "absolute", right: "60px", top: "170px", color: "grey" }} />
                                            </>
                                        )
                                        }
                                    </div>
                                </div>

                                <div className="form-group2 row">
                                    <label htmlFor="" className="col-form-label more-label col-4">Confirm Password</label>
                                    <div className="col-8 form-group-feedback">
                                        {showConfirmPassword ? (<>
                                            <input placeholder="Password" type="password" name="Bank Account" className="form-control" aria-required="true" aria-invalid="true" style={{ outline: "none", border: "none" }} />
                                            <AiOutlineEyeInvisible size={24} onClick={handleConfirmPasswordToggle} style={{ position: "absolute", right: "60px", top: "230px", color: "grey" }} />
                                        </>) : (
                                            <>
                                                <input placeholder="Password" type="text" name="Bank Account" className="form-control" aria-required="true" aria-invalid="true" style={{ outline: "none", border: "none" }} />
                                                <AiOutlineEye size={24} onClick={handleConfirmPasswordToggle} style={{ position: "absolute", right: "60px", top: "230px", color: "grey" }} />
                                            </>
                                        )
                                        }
                                    </div>
                                </div>

                                <div className="form-group3 row">
                                    <label htmlFor="" className="col-form-label more-label col-4">Transection Code</label>
                                    <div className="col-8 form-group-feedback">
                                        <input placeholder="Transaction Code" type="password" name="userchangepasswordmpassword" data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                    </div>
                                </div>

                                <div className="form-group4 row">
                                    <button className='btn btn-black bn-black'>Submit<LuArrowBigRightDash fontSize={26} /></button>

                                </div>

                            </form>
                        }

                        {
                            activeTab === 2 &&
                            <form action="" className="user-lock">
                                <div className="form-group1 d-flex">
                                    <label htmlFor="" className="col-4 col-form-label">Block
                                    </label>
                                    <div className="custom-control col-8">
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                            />
                                        </Form>
                                    </div>
                                </div>

                                <div className="form-group1 d-flex">
                                    <label htmlFor="" className="col-4 col-form-label">Unlock
                                    </label>
                                    <div className="co-8 custom-control">
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                            />
                                        </Form>
                                    </div>
                                </div>

                                <div className="form-group1 d-flex">
                                    <label htmlFor="" className="col-4 col-form-label">Deposite Lock
                                    </label>
                                    <div className="co-8 custom-control">
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                            />
                                        </Form>
                                    </div>
                                </div>

                                <div className="form-group1 d-flex">
                                    <label htmlFor="" className="col-4 col-form-label">Purchase Lock
                                    </label>
                                    <div className="co-8 custom-control">
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                            />
                                        </Form>
                                    </div>
                                </div>

                                <div className="form-group1 d-flex">
                                    <label htmlFor="" className="col-4 col-form-label">Withdrawal Lock
                                    </label>
                                    <div className="co-8 custom-control">
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                            />
                                        </Form>
                                    </div>
                                </div>

                                <div className="form-group1 d-flex">
                                    <label htmlFor="" className="col-4 col-form-label">Transection Code
                                    </label>
                                    <div className="co-8 custom-control">
                                        <input placeholder="Transaction Code" type="password" name="userchangepasswordmpassword" data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                    </div>
                                </div>



                                <div className="form-group1 ">
                                    <button className="btn btn-black bn-black" type="submit">Submit
                                        <LuArrowBigRightDash />
                                    </button>
                                </div>

                            </form>
                        }

                        {activeTab === 3 &&
                            <>
                                <h2 className='mb-2'>Transaction</h2>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 transaction-left">
                                            <h3 className='mb-5'>Aarti</h3>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p>C/O xyzcuhnbmjhkkf</p>
                                                    <p>abc colony Noida</p>
                                                    <p>abcxyz-1100997</p>
                                                    <p>DELHI,INDIA</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <table className="profile-table transaction-table">
                                                <tbody>
                                                    <tr>
                                                        <th className="profile-head">
                                                            Generation Date
                                                        </th>
                                                        <td className="profile-data">
                                                            abcdefss
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th className="profile-head">
                                                            Period
                                                        </th>
                                                        <td className="profile-data">

                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th className="profile-head">
                                                            Customer Id
                                                        </th>
                                                        <td className="profile-data">
                                                            hbhjhbgfhj
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th className="profile-head">
                                                            Account No.
                                                        </th>
                                                        <td className="profile-data">

                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th className="profile-head">
                                                            Account Type
                                                        </th>
                                                        <td className="profile-data">

                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th className="profile-head">
                                                            Currency
                                                        </th>
                                                        <td className="profile-data">

                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th className="profile-head">
                                                            Effective Available Balance
                                                        </th>
                                                        <td className="profile-data">

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* <table className="table mt-4">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div>Super User</div>
                                            </th>


                                            <th><div>User</div></th>


                                            <th><div>Transfer Form</div></th>


                                            <th><div>Amount Date</div></th>


                                        </tr>
                                    </thead>

                                    <tbody>
                                        there are no records to show
                                    </tbody>
                                </table> */}

                                <TransactionTable className="mb-4" />
                            </>
                        }

                        {activeTab === 4 &&
                            <form action="" className="user-lock">
                                <div className="container-fluid">
                                    <div className="row ">

                                        <div className=" d-flex align-items-start justify-content-between col-6">
                                            <div className="row d-flex align-items-center justify-content-between" style={{ width: '100%' }}>
                                                <div className="col-4">
                                                    <label htmlFor="" className=" col-form-label">User Name
                                                    </label>
                                                </div>
                                                <div className="col-8 custom-control">
                                                    <input placeholder="User Name" type="text" name="Username" className="form-control" aria-required="true" aria-invalid="true" style={{ width: "100%" }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" d-flex align-items-center  col-6">
                                            <div className="col-4">
                                                <label htmlFor="" className=" col-form-label">Date Of Birth
                                                </label>
                                            </div>
                                            <div className="col-8 custom-control">
                                                <input placeholder="Date Of Birth" type="text" name="dob" className="form-control" aria-required="true" aria-invalid="true" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-fluid mt-2">
                                    <div className="row">

                                        <div className=" d-flex align-items-start  justify-content-between flex-column col-6">
                                            <div className="row d-flex align-items-center justify-content-between" style={{ width: '100%' }}>
                                                <div className="col-4">
                                                    <label htmlFor="" className=" col-form-label">Gender
                                                    </label>
                                                </div>
                                                {/* <div className="col-8 custom-control my-2 mx-0"> */}
                                                <div class="col-8">
                                                    <div className="dropdown edit-gender">
                                                        <button class="btn btn-secondary dropdown-toggle drop-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "93%" }}>
                                                            Gender
                                                        </button>
                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: "93%" }}>
                                                            <li><a class="dropdown-item" href="#">Male</a></li>
                                                            <li><a class="dropdown-item" href="#">Female</a></li>
                                                            <li><a class="dropdown-item" href="#">..</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* </div> */}
                                            </div>

                                            <div className=" d-flex align-items-center justify-content-between" style={{ width: '100%', marginTop: "1.2rem" }}>
                                                {/* <div className="row d-flex align-items-center justify-content-between" style={{ width: '100%' }}> */}
                                                <div className="col-4">
                                                    <label htmlFor="" className=" col-form-label">Mobile Number
                                                    </label>
                                                </div>
                                                <div className="col-8 custom-control my-2 mx-0 ">
                                                    <input placeholder="Mobile Number" type="number" name="number" className="form-control" aria-required="true" aria-invalid="true" style={{ width: "100%" }} />
                                                </div>
                                                {/* </div> */}
                                            </div>

                                            <div className=" d-flex justify-content-between" style={{ width: '100%' }}>
                                                <div className="col-4">
                                                    <label htmlFor="" className=" col-form-label">Email Id
                                                    </label>
                                                </div>
                                                <div className="col-8 custom-control my-2 mx-0 ">
                                                    <input placeholder="Email Id" type="email" name="email" className="form-control" aria-required="true" aria-invalid="true" style={{ width: "100%" }} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className=" d-flex align-items-start col-6" style={{ marginTop: "-1rem" }}>
                                            <div className="profile-bank-details edit-profile-address">
                                                <h3>Address</h3>

                                                <tr>
                                                    <div className="row">
                                                        <label htmlFor="" className="col-form-label more-label col-2"><th className="col-3 profile-head">Address</th></label>


                                                        <td className="col-8 profile-data" style={{ maginTop: "-1rem" }}>

                                                            <FloatingLabel
                                                                controlId="floatingTextarea"
                                                                label="Comments"
                                                                className="mb-3"
                                                                style={{ width: "37rem", fontSize: '14px' }}
                                                            >
                                                                <Form.Control as="textarea" placeholder="Leave a comment here" />
                                                            </FloatingLabel>

                                                        </td>
                                                    </div>
                                                </tr>

                                                <tr>
                                                    <div className="form-group3 row profile-BankParent">
                                                        <label htmlFor="" className="col-form-label more-label col-2"><th className="profile-head">
                                                            Pin Code
                                                        </th></label>
                                                        <div className="col-10 form-group-feedback">
                                                            <input placeholder="Pin Code " type="text" name="userchangepasswordmpassword" readOnly data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </div>
                                                </tr>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row edit-profile-bank-pan">
                                    <div className="col-6">
                                        <div className="profile-bank-details edit-bank">
                                            <h3>Bank Details</h3>
                                            <tr>
                                                <div className="form-group3 row profile-BankParent">
                                                    <label htmlFor="" className="col-form-label more-label col-2"><th className="profile-head">
                                                        Bank Name
                                                    </th></label>
                                                    <div className="col-10 form-group-feedback">
                                                        <input placeholder="Bank Name" type="password" name="userchangepasswordmpassword" data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                                    </div>
                                                </div>
                                            </tr>

                                            <tr>
                                                <div className="form-group3 row profile-BankParent">
                                                    <label htmlFor="" className="col-form-label more-label col-2"><th className="profile-head">
                                                        Account Number
                                                    </th></label>
                                                    <div className="col-10 form-group-feedback">
                                                        <input placeholder="Account Number" type="password" name="userchangepasswordmpassword" data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                                    </div>
                                                </div>
                                            </tr>

                                            <tr>
                                                <div className="form-group3 row profile-BankParent">
                                                    <label htmlFor="" className="col-form-label more-label col-2"><th className="profile-head">
                                                        IFSC Code
                                                    </th></label>
                                                    <div className="col-10 form-group-feedback">
                                                        <input placeholder="IFSC Code" type="password" name="userchangepasswordmpassword" data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                                    </div>
                                                </div>
                                            </tr>

                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="profile-bank-details">
                                            <div className="col-12">
                                                <h3 style={{ marginLeft: '1.2rem', padding: "0.7rem 0.36rem" }}>Information</h3>
                                            </div>

                                            <table className="profile-table">
                                                <tbody>

                                                    <tr>
                                                        <div className="row profile-BankParent">
                                                            <div className=" d-flex align-items-start  justify-content-between flex-column">
                                                                <div className="row d-flex align-items-center justify-content-between" style={{ width: '100%' }}>
                                                                    <div className="col-4">
                                                                        <label htmlFor="" className=" col-form-label" style={{ paddingLeft: '1.4rem' }}><th className="profile-head" style={{ color: " #74788d" }}>KYC Detail</th>
                                                                        </label>
                                                                    </div>
                                                                    {/* <div className="col-8 custom-control my-2 mx-0"> */}
                                                                    <div class="col-8">
                                                                        <div className="dropdown edit-gender">
                                                                            <button class="btn btn-secondary dropdown-toggle drop-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "100%", marginLeft: "-1.2rem" }}>
                                                                                KYC Detail
                                                                            </button>
                                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: "100%" }}>
                                                                                <li><a class="dropdown-item" href="#">Verified</a></li>
                                                                                <li><a class="dropdown-item" href="#">Reject</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </tr>

                                                    <tr>
                                                        <div className="row profile-BankParent">
                                                            <th className="col-3 profile-head" style={{ color: " #74788d" }}>
                                                                PanCard no.
                                                            </th>
                                                            <td className="col-8 profile-data ">
                                                                <div className="profile-pan-data">
                                                                    <input placeholder="Bank Name" type="text" name="userchangepasswordmpassword" value="" data-vv-as="Transaction Code" class="form-control profile-pan-input" aria-required="true" aria-invalid="false" />

                                                                    <UploadPan />
                                                                </div>
                                                            </td>
                                                        </div>
                                                    </tr>



                                                    <tr>
                                                        <div className="row profile-BankParent">
                                                            <th className="col-3 profile-head" style={{ color: " #74788d" }}>
                                                                Aadhar No.
                                                            </th>
                                                            <td className="col-8 profile-data ">
                                                                <div className="profile-pan-data">
                                                                    <input placeholder="Bank Name" type="text" name="userchangepasswordmpassword" value="" data-vv-as="Transaction Code" class="form-control profile-pan-input" aria-required="true" aria-invalid="false" />

                                                                    <UploadAadhar />
                                                                </div>
                                                            </td>
                                                        </div>
                                                    </tr>



                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group3 row">
                                                <label htmlFor="" className="col-form-label more-label col-4">Transection Code</label>
                                                <div className="col-8 form-group-feedback">
                                                    <input placeholder="Transaction Code" type="password" name="userchangepasswordmpassword" data-vv-as="Transaction Code" class="form-control" aria-required="true" aria-invalid="false" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="form-group">
                                                <button className="btn btn-red bn-green" type="submit">Submit
                                                    <LuArrowBigRightDash />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        }
                    </div>

                </div>
            </div>
        </>
    );
}

export default JustifiedExample;