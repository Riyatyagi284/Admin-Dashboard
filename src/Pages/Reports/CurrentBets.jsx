import React, { useState } from 'react'
import { BiPhoneCall, BiSolidCity } from "react-icons/bi"
import { LuArrowBigRightDash } from "react-icons/lu"
import { FaFileExcel } from "react-icons/fa"
import Loader from '../Loader'
import Userlist from "../../pdfFile/userlist.pdf"


const CurrentBets = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('')

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleLoadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleLoadBtnClick = () => {
    setCurrentPage("Load")
  }

  return (
    <>
      <div className="current-bets-wrapper">
        <div className="M-login-header">
          <h2>Current Bets</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/Current Bets</span>
          </div>
        </div>

        <div className="container">
          <div className="col-2 tab-buttons">
            <button onClick={() => handleTabClick(0)}
              className={activeTab === 0 ? 'selected' : ''}
            >Sport</button>
            <button onClick={() => handleTabClick(1)}
              className={activeTab === 1 ? 'selected' : ''}
            >Casino</button>
          </div>

          <div className="col-8 bets-empty">

          </div>

        </div>
        <div className="container-fluid bets-bg">
          <div className="tab-content more-tb-content bets-content">
            {activeTab === 0 &&
              <div className="container-fluid">
                <div className="current-bets-form">
                  <div className="col-md-4 col-lg-3 custom-control-wrapper1">
                    <div className="col-12 flex">
                      <div className="custom-control">
                        <input type="radio" id="customRadio1" name="example" value="matchbet" checked="checked" className="custom-control-input" onClick={handleLoadClick} />
                        <label htmlFor="customRadio1">Matched</label>
                      </div>

                      {isLoading && <Loader />}

                      <div className="custom-control">
                        <input type="radio" id="customRadio2" name="example" value="matchbet" checked="checked" className="custom-control-input" onClick={handleLoadClick} />
                        <label htmlFor="customRadio2">Unmatched</label>
                      </div>
                    </div>

                    <div className="col-12 center">
                      <div className="custom-control">
                        <input type="radio" id="customRadio3" name="example" value="matchbet" checked="checked" className="custom-control-input" onClick={handleLoadClick} />
                        <label htmlFor="customRadio3">Deleted</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-8 col-lg-4">
                    <div className="custom-control-wrapper2">
                      <div className="custom-control">
                        <input type="radio" id="customRadio3" name="example" value="matchbet" checked="checked" className="custom-control-input" />
                        <label htmlFor="customRadio4">All</label>
                      </div>

                      <div className="custom-control">
                        <input type="radio" id="customRadio5" name="example" value="matchbet" checked="checked" className="custom-control-input" />
                        <label htmlFor="customRadio5">Black</label>
                      </div>

                      <div className="custom-control">
                        <input type="radio" id="customRadio6" name="example" value="matchbet" checked="checked" className="custom-control-input" />
                        <label htmlFor="customRadio6">Lay</label>
                      </div>
                    </div>

                    <div className="row search-bar-bets">
                      <div className="col-md-6 search-form">
                        <button className="btn btn-black" onClick={handleLoadClick} type="submit">Load</button>

                        <div className="search-form-right ">
                          <div className='party-search'>

                            <a href={Userlist} download="test">
                              <button className="btn btn-green-file" type="submit">
                                <FaFileExcel />
                              </button>
                            </a>

                            <a href={Userlist} download="test">
                              <button className="btn btn-red-file" type="submit">
                                <FaFileExcel />
                              </button>
                            </a>
                          </div>
                        </div>

                      </div>

                      <div className="col-md-12 col-lg-5"></div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-5 current-bets-row-1">
                    <h5>
                      Total Soda:
                      <span>0</span>
                      Total Amount
                      <span>0.00</span>
                    </h5>
                  </div>
                </div>

                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="datatable_length">
                        <label>
                          Show&nbsp;
                          <select>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                            <option value="500">500</option>
                            <option value="750">750</option>
                            <option value="1000">1000</option>
                          </select>
                          &nbsp;entries
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6 party-search-right">
                      <input type="text" className="form-control" id="fullName" placeholder='search' />
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <div className="table table-responsive-sm">
                    <table className='table load-table table-bordered reset-table'>
                      <thead>
                        <tr>
                          <th role="columnheader" >
                            <div>Event Type</div>
                          </th>

                          <th role="columnheader" >
                            <div>Event Name</div>
                          </th>

                          <th role="columnheader">
                            <div>User Name</div>
                          </th>

                          <th role="columnheader" >
                            <div>M Name</div>
                          </th>

                          <th role="columnheader" >
                            <div>Nation</div>
                          </th>

                          <th role="columnheader" >
                            <div>U Rate</div>
                          </th>

                          <th role="columnheader" >
                            <div>Amount</div>
                          </th>

                          <th role="columnheader" >
                            <div>Place Date</div>
                          </th>

                          <th role="columnheader" >
                            <div>IP</div>
                          </th>

                          <th role="columnheader" >
                            <div>Browser</div>
                          </th>

                          <th role="columnheader" >
                            <div>Action</div>
                          </th>

                        </tr>
                      </thead>

                      <tbody>

                        <tr >
                          <td colSpan={8} className="reset-td reset-td-right" style={{ textAlign: "center" }}>
                            <span className="text-center">
                              There are no records to show .
                            </span>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>

                <nav aria-label="Page navigation example text-right">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        {/* <span className="sr-only">Previous</span> */}
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        {/* <span class="sr-only">Next</span> */}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            }

            {activeTab === 1 &&
              <div className="container-fluid">
                <div className="current-bets-form">
                  <div className="col-md-4 col-lg-3 custom-control-wrapper1">

                  </div>

                  <div className="col-md-8 col-lg-4">
                    <div className="custom-control-wrapper2">
                      <div className="custom-control">
                        <input type="radio" id="customRadio3" name="example" value="matchbet" checked="checked" className="custom-control-input" />
                        <label htmlFor="customRadio4">All</label>
                      </div>

                      <div className="custom-control">
                        <input type="radio" id="customRadio5" name="example" value="matchbet" checked="checked" className="custom-control-input" />
                        <label htmlFor="customRadio5">Black</label>
                      </div>

                      <div className="custom-control">
                        <input type="radio" id="customRadio6" name="example" value="matchbet" checked="checked" className="custom-control-input" />
                        <label htmlFor="customRadio6">Lay</label>
                      </div>
                    </div>

                    <div className="row search-bar-bets">
                      <div className="col-md-6 search-form">
                        <button className="btn btn-black" onClick={handleLoadClick} type="submit">Load</button>

                        {isLoading && <Loader />}

                        <div className="search-form-right ">
                          <div className='party-search'>

                            <a href={Userlist} download="test">
                              <button className="btn btn-green-file" type="submit">
                                <FaFileExcel />
                              </button>
                            </a>

                            <a href={Userlist} download="test">
                              <button className="btn btn-red-file" type="submit">
                                <FaFileExcel />
                              </button>
                            </a>
                          </div>
                        </div>

                      </div>

                      <div className="col-md-12 col-lg-5"></div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-5 current-bets-row-1">
                    <h5>
                      Total Soda:
                      <span>0</span>
                      Total Amount
                      <span>0.00</span>
                    </h5>
                  </div>
                </div>

                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="datatable_length">
                        <label>
                          Show&nbsp;
                          <select>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="250">250</option>
                            <option value="500">500</option>
                            <option value="750">750</option>
                            <option value="1000">1000</option>
                          </select>
                          &nbsp;entries
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6 party-search-right">
                      <input type="text" className="form-control" id="fullName" placeholder='search' />
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <div className="table table-responsive-sm">
                    <table className='table load-table table-bordered reset-table'>
                      <thead>
                        <tr>
                          <th role="columnheader"   >
                            <div>Event Type</div>
                          </th>

                          <th role="columnheader"   >
                            <div>Event Name</div>
                          </th>

                          <th role="columnheader"   >
                            <div>User Name</div>
                          </th>

                          <th role="columnheader"   >
                            <div>M Name</div>
                          </th>

                          <th role="columnheader"   >
                            <div>Nation</div>
                          </th>

                          <th role="columnheader"   >
                            <div>U Rate</div>
                          </th>

                          <th role="columnheader"   >
                            <div>Amount</div>
                          </th>

                          <th role="columnheader"   >
                            <div>Place Date</div>
                          </th>

                          <th role="columnheader"   >
                            <div>IP</div>
                          </th>

                          <th role="columnheader"   >
                            <div>Browser</div>
                          </th>

                          <th role="columnheader" >
                            <div>Action</div>
                          </th>

                        </tr>
                      </thead>

                      <tbody>

                        <tr >
                          <td colSpan={8} className="reset-td reset-td-right" style={{ textAlign: "center" }}>
                            <span className="text-center">
                              There are no records to show .
                            </span>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>

                <nav aria-label="Page navigation example text-right">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        {/* <span NaclassName="sr-only">Previous</span> */}
                      </a>
                    </li>
                    <li className="page-item"><a NaclassName="page-link" href="#">1</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        {/* <span class="sr-only">Next</span> */}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrentBets
