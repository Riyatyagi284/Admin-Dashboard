import React, { useState } from 'react'
import { BiPhoneCall, BiSolidCity } from "react-icons/bi"
import { LuArrowBigRightDash } from "react-icons/lu"


const MoreForm = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="more-modal-overlay">
                <div className='modal1 more-modal1'>
                    <header className="header more-head">
                        <h2>ABCDEFSS</h2>
                        <span className='modal-close' onClick={onClose}>&times;</span>
                    </header>

                    <div className="tab-buttons">
                        <button onClick={() => handleTabClick(0)}>Profile</button>
                        <button onClick={() => handleTabClick(1)}>Change Password</button>
                        <button onClick={() => handleTabClick(2)}>User Lock</button>
                        <button onClick={() => handleTabClick(3)}>Account history</button>
                        <button onClick={() => handleTabClick(4)}>Edit Profile</button>
                    </div>
                    <div className="tab-content more-tb-content">
                        {activeTab === 0 &&
                            <div className="container-fluid">
                                <div className="row tab-row1">
                                    <div className="col-6 tab-row1-left">
                                        <div className="row ">
                                            <div className="col-12 tab-row1-left1">
                                                <div className="circle">
                                                    A
                                                </div>
                                                <p className='para1'>abcdefss</p>
                                                <p className='para2'>abcde</p>
                                                <hr />
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-12 tab-row1-left2">
                                                <BiPhoneCall fontSize={26} /><BiSolidCity fontSize={26} />
                                                
                                            </div>
                                        </div>

                                        <div className="row tab-row1-left3">
                                            <div className="col-12">
                                                <h3>Partnership Information</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 tab-row1-right">
                                        <h3>Additional Information</h3>
                                        <table className="profile-table">
                                            <tbody>
                                                <tr>
                                                    <th className="profile-head">
                                                        User Name
                                                    </th>
                                                    <td className="profile-data">
                                                        abcdefss
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        Full Name
                                                    </th>
                                                    <td className="profile-data">
                                                        abcde
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        Mobile Number:
                                                    </th>
                                                    <td className="profile-data">

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        City:
                                                    </th>
                                                    <td className="profile-data">

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        Credit Pts:
                                                    </th>
                                                    <td className="profile-data">
                                                        0.00
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        pts:
                                                    </th>
                                                    <td className="profile-data">
                                                        0.00
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        Client P/L:
                                                    </th>
                                                    <td className="profile-data">
                                                        0.00
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        Exposure:
                                                    </th>
                                                    <td className="profile-data">
                                                        0.00
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        Casino pts:
                                                    </th>
                                                    <td className="profile-data">
                                                        0.00
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        Sports pts:
                                                    </th>
                                                    <td className="profile-data">
                                                        0.00
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        Third Party pts:
                                                    </th>
                                                    <td className="profile-data">
                                                        0.00
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th className="profile-head">
                                                        Created Date:
                                                    </th>
                                                    <td className="profile-data">
                                                        02/07/2023 23:14:35

                                                    </td>
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
                                        <input placeholder="Password" type="password" name="userchangepasswordpassword" data-vv-as="Password" class="form-control" aria-required="true" aria-invalid="false" />
                                    </div>
                                </div>

                                <div className="form-group2 row">
                                    <label htmlFor="" className="col-form-label more-label col-4">Confirm Password</label>
                                    <div className="col-8 form-group-feedback">
                                        <input placeholder="Confirm Password" type="password" name="userchangepasswordcpassword" data-vv-as="Confirm Password" class="form-control" aria-required="true" aria-invalid="false" />
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
                                <div className="form-group1">
                                    <label htmlFor="" className="col-4 col-form-label">Bet lock
                                    </label>
                                    <div className="custom-control col-8">
                                        <input type="checkbox" className="custom-control-input" value="true" id="__BVID__3987" />
                                    </div>
                                </div>

                                <div className="form-group1">
                                    <label htmlFor="" className="col-4 col-form-label">User lock
                                    </label>
                                    <div className="co-8 custom-control">
                                        <input type="checkbox" className="custom-control-input" value="true" id="__BVID__3987" />
                                    </div>
                                </div>

                                <div className="form-group1">
                                    <label htmlFor="" className="co-4 col-form-label more-trans-label">Transaction code
                                    </label>
                                    <div className="col-8 custom-control more-trans">
                                        <input placeholder="Transaction Code" type="password" name="UserLockMpassword" className="form-control" aria-required="true" aria-invalid="true" />
                                    </div>
                                </div>

                                <div className="form-group1">
                                    <button className="btn btn-black bn-black" type="submit">Submit
                                        <LuArrowBigRightDash />
                                    </button>
                                </div>

                            </form>
                        }

                        {activeTab === 3 &&
                            <table className="table">
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
                            </table>
                        }

                        {activeTab === 4 &&
                            <form action="" className="user-lock">
                                <div className="form-group row">
                                    <label className='col-form-label col-4'>
                                        Rakesh2
                                    </label>
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-6">
                                                <input placeholder="Amount" type="text" readonly="readonly" name="userDipositeloginusramount" className="form-d-control txt-right" />
                                            </div>
                                            <div className="col-6">
                                                <input placeholder="Amount" type="text" readonly="readonly" name="userDipositeloginusramount" className="form-d-control txt-right" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="" className="col-4 col-form-label">Change Password lock
                                    </label>
                                    <div className="custom-control col-8">
                                        <input type="checkbox" className="custom-control-input" value="true" id="__BVID__3987" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="" className="col-4 col-form-label">Favorite Master
                                    </label>
                                    <div className="co-8 custom-control">
                                        <input type="checkbox" className="custom-control-input" value="true" id="__BVID__3987" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="" className="co-4 col-form-label">Transaction Code
                                    </label>
                                    <div className="col-8 custom-control">
                                        <input placeholder="Transaction Code" type="password" name="UserLockMpassword" className="form-control" aria-required="true" aria-invalid="true" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-red bn-green" type="submit">Submit
                                        <LuArrowBigRightDash />
                                    </button>
                                </div>

                            </form>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreForm
