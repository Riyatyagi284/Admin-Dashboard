import React from 'react'
import { useState } from 'react'
import Reset from "../../SubPages/PartyWinLoss/Reset";
import Load from "../../SubPages/PartyWinLoss/Load";
import { FaFileExcel } from "react-icons/fa"
import Loader from '../Loader';
import Userlist from "../../pdfFile/userlist.pdf"

const PartyWinLoss = () => {
  const [currentPage, setCurrentPage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // const handleLoadBtnClick = () => {
  //   setCurrentPage("Load")
  // }
  const handleResetBtnClick = () => {
    setCurrentPage(null);
    setIsLoaded(false);
    setCurrentPage("Reset")
  }
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

  return (
    <>
      <div className="party-win-loss-wrapper">
        <div className="M-login-header">
          <h2>Party Win Loss</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/Profit Loss</span>
          </div>
        </div>


        {isLoading && <Loader />}
        <div className="container-fluid white-bg">
          <div className="row search-bar">
            <div className="col-md-6 search-form">
              <input type="text" className="form-control" id="client_id" placeholder='Search User' />
              <div className="btns-container">
                <button className="btn btn-black" type="submit" onClick={handleLoadClick}>Load</button>
                <button className="btn btn-grey" type="submit" onClick={handleResetBtnClick}>Reset</button>
              </div>

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
          </div>

          <div className="col-md-12 party-search-right">
            <label htmlFor="fullName">Search:</label>
            <input type="text" className="form-control" id="fullName" placeholder='search' />
          </div>

          {currentPage === "Load" && <Load />}
          {currentPage === "Reset" && <Reset />}

          {!currentPage && !isLoaded && (
            <>
              <div className="table-responsive">
                <div className="table table-responsive-sm">
                  <table className='table table-bordered reset-table'>
                    <thead>
                      <tr>
                        <th role="columnheader"  >
                          <div>No</div>
                        </th>

                        <th role="columnheader"  >
                          <div>User Name</div>
                        </th>

                        <th role="columnheader"  >
                          <div>Level</div>
                        </th>

                        <th role="columnheader"  >
                          <div>Casino pts</div>
                        </th>

                        <th role="columnheader"  >
                          <div>Sport pts</div>
                        </th>

                        <th role="columnheader"  >
                          <div>Third Party pts</div>
                        </th>

                        <th role="columnheader"  >
                          <div>Profit/Loss</div>
                        </th>

                        <th className="reset-last-th" role="columnheader"  >
                          <div>Ptype</div>
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

                      <tr>
                        <td></td>
                        <td>
                          <span title=""></span>
                        </td>
                        <td></td>
                        <td className='load-dark-td'>0.00</td>
                        <td className='load-dark-td'>0.00</td>
                        <td className='load-dark-td'>0.00</td>
                        <td className='load-dark-td'>0.00</td>
                        <td className='reset-last-td-right'></td>

                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  )
}

export default PartyWinLoss