import React, { useState } from 'react'
import { FaFileExcel } from "react-icons/fa"
import HistoryLoad from '../../SubPages/UserHistory/LoginLogoutHistoryLoad'
import HistoryReset from '../../SubPages/UserHistory/HistoryReset'
import Loader from "../Loader"
import 'react-calendar/dist/Calendar.css';


const UserHistory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleLoadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
      setCurrentPage('Load');
    }, 2000)
  };
  const handleSpinnerClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setCurrentPage(null);
  };
  const [currentPage, setCurrentPage] = useState('')

  const handleLoadBtnClick = () => {
    setCurrentPage("Load")
  }
  const handleResetBtnClick = () => {
    setCurrentPage(null);
    setIsLoaded(false);
    setCurrentPage("Reset")
  }
  return (
    <>
      <div className="history-wrapper">
        <div className="M-login-header">
          <h2>User History</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/User History</span>
          </div>
        </div>

        <div className="container">
          <div className="col-2 tab-buttons">
            <button onClick={() => handleTabClick(0)}
              className={activeTab === 0 ? 'selected' : ''}
            >Login History</button>
            <button onClick={() => handleTabClick(1)}
              className={activeTab === 1 ? 'selected' : ''}
            >Change Password History</button>
          </div>

          <div className="col-8 bets-empty">

          </div>

        </div>

        <div className="container-fluid white-bg bets-bg">
          <div className="tab-content more-tb-content bets-content">

            {isLoading && <Loader />}
            {activeTab === 0 &&
              <div className="container-fluid">
                <div className="row search-bar">
                  <div className="col-md-10 search-form">
                    <input type="text" class="form-control" id="client_id" placeholder='Search User' />


                    {/* <div>
                    <Calendar id="History-calender" onChange={onChange} value={value} />
                  </div> */}

                    <button className="btn btn-black" onClick={handleLoadClick} type="submit">Load</button>
                    <button className="btn btn-grey" type="submit" onClick={handleResetBtnClick}>Reset</button>

                    <div className="search-form-right ">
                      <div className='party-search'>
                        <button className="btn btn-green-file" type="submit">
                          <FaFileExcel />
                        </button>
                        <button className="btn btn-red-file" type="submit">
                          <FaFileExcel />
                        </button>
                      </div>

                    </div>
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

                {currentPage === 'Load' && <HistoryLoad />}
                {currentPage === 'Reset' && <HistoryReset />}

                {!currentPage && !isLoaded && (
                  <>
                    <div className="table-responsive">
                      <div className="table table-responsive-sm">
                        <table className='table table-bordered reset-table'>
                          <thead>
                            <tr>
                              <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                                <div>User Name</div>
                              </th>

                              <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                                <div>Date</div>
                              </th>

                              <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                                <div>IP</div>
                              </th>

                              <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                                <div>Detail</div>
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
                  </>
                )}

                <nav aria-label="Page navigation example text-right">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        {/* <span class="sr-only">Previous</span> */}
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        {/* <span class="sr-only">Next</span> */}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            }




            {isLoading && <Loader />}
            {activeTab === 1 &&
              <div className="container-fluid">
                <div className="row search-bar">
                  <div className="col-md-6 search-form">
                    <input type="text" class="form-control" id="client_id" placeholder='Search User' />
                    <button className="btn btn-black" onClick={handleSpinnerClick} type="submit">Load</button>
                    {isLoading && <Loader />}
                    <button className="btn btn-grey" type="submit" onClick={handleResetBtnClick}>Reset</button>

                    <div className="search-form-right ">
                      <div className='party-search'>
                        <button className="btn btn-green-file" type="submit">
                          <FaFileExcel />
                        </button>
                        <button className="btn btn-red-file" type="submit">
                          <FaFileExcel />
                        </button>
                      </div>

                    </div>
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
                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Event Type</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Event Name</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>User Name</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>M Name</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Nation</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>U Rate</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Amount</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Place Date</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>IP</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Browser</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
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
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        {/* <span class="sr-only">Previous</span> */}
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
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

export default UserHistory
