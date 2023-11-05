import React, { useState } from 'react'
import {LuArrowBigRightDash} from 'react-icons/lu'

const WithdrawForm = ({ onClose }) => {
    return (
        <div className="modal-overlay">
                <div className='modal1'>
                    <header className='header r-header'>
                        <h5 class="modal-title text-uppercase text-white">Deposit</h5>
                        <span className='modal-close' onClick={onClose}>&times;</span>
                    </header>
                    <ul className="nav nav-tabs tab-parent">
                        {/* <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Active</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Withdraw</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <form>
                            <div className="form-group row">
                                <label className='col-form-label col-4'>
                                    Rakesh2
                                </label>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <input placeholder="Amount" type="text" readonly="readonly" name="userDipositeloginusramount" className="form-d-control txt-right" style={{width:'100%'}} />
                                        </div>
                                        <div className="col-6">
                                            <input placeholder="Amount" type="text" readonly="readonly" name="userDipositeloginusramount" className="form-d-control txt-right" style={{width:'100%'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className='col-form-label col-4'>
                                abcdefss
                                </label>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <input placeholder="Amount" type="text" readonly="readonly" name="userDipositeloginusramount" className="form-d-control txt-right" style={{width:'100%'}} />
                                        </div>
                                        <div className="col-6">
                                            <input placeholder="Amount" type="text" readonly="readonly" name="userDipositeloginusramount" className="form-d-control txt-right" style={{width:'100%'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className='col-form-label col-4'>
                                Profit/Loss
                                </label>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <input placeholder="Amount" type="text" readonly="readonly" name="userDipositeloginusramount" className="form-d-control txt-right"  style={{width:'100%'}}/>
                                        </div>
                                        <div className="col-6">
                                            <input placeholder="Amount" type="text" readonly="readonly" name="userDipositeloginusramount" className="form-d-control txt-right" style={{width:'100%'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className='col-form-label col-4'>
                                Amount
                                </label>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <input placeholder="Amount" type="text" name="userDipositeloginusramount" 
                                            className='form-group-amnt' style={{width:'100%'}} />
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="form-group row">
                                <label className='col-form-label col-4'>
                                Remark
                                </label>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                        <textarea placeholder="Remark" data-vv-as="Remark" name="remark"  aria-required="false" aria-invalid="false" id='Remark'className='form-group-rmrk' style={{width:'100%'}}></textarea>

                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className="form-group row">
                                <label className='col-form-label col-4'>
                                Transaction Code
                                </label>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                        <input type="text" className="form-group-trans mb-2 mr-sm-2" id="Credit-Amount submit-left" placeholder="Transaction Code" style={{width:'100%'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-red bn-green" type="submit">Submit
                            <LuArrowBigRightDash/></button>
                        </form>
                    </div>

                </div>
            </div>
    )
}

export default WithdrawForm
