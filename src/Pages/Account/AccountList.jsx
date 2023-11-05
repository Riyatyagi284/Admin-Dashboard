import React,{useState} from 'react'
import { FaFileExcel } from "react-icons/fa"
import Loader from "../Loader"
import Userlist from "../../pdfFile/userlist.pdf" 

const AccountList = () => {
const [isLoading, setIsLoading] = useState(false);

  const handleLoadClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <>
      <div className="multi-login-container">
        <div className="M-login-header">
          <h2>ACCOUNT LIST</h2>
          <div className="M-login-header-right">
            <a className='anchor M-login-anchor'>Home</a>
            <span className='span'>/Account List</span>
          </div>
        </div>

        <div className="container-fluid white-bg">
          <div className="row search-bar">
            <div className="col-md-6 search-form">
              <input type="text" className="form-control" id="client_id" placeholder='Search User' />
              <button className="btn btn-black" type="submit" onClick={handleLoadClick}>Load</button>
              {isLoading && <Loader />}
              <button className="btn btn-grey" type="submit" onClick={handleLoadClick}>Reset</button>
            </div>

            <div className="col-md-6 search-form-right">
              <div>

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
              <button className="btn btn-green create-acc" type="submit">+ Create Account</button>

            </div>
          </div>

          <div className="col-sm-12 col-md-6">
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

          <div className="table-responsive">
            <div className="table table-responsive-sm">
              <table className='table b-table'>
                <thead>
                  <tr>
                    <th role="columnheader" className="position-relative">
                      <div>User Name</div>
                      
                    </th>
                    <th role="columnheader" className="position-relative">
                      <div>CR</div>
                      
                    </th>
          
                    <th role="columnheader" className="position-relative">
                      <div>B st</div>
                      
                    </th>
                    <th role="columnheader" className="position-relative">
                      <div>U st</div>
                      
                    </th>
                    <th role="columnheader" className="position-relative">
                      <div>PName</div>
                      
                    </th>
                    <th role="columnheader" className="position-relative">
                      <div>Account Type</div>
                      
                    </th>
                    <th role="columnheader" className="position-relative">
                      <div>Action</div>
                      
                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      <span title="uuuuuuu">wwwwwwweeeu</span>
                    </td>

        
                    <td>0</td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td>1Pt</td>
                    <td>User</td>

                    <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-green-file">D</button>
                        <button type="button" className="btn btn-red-file">W</button>
                        <button type="button" className="btn btn-blue-file">More</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span title="eeeee">wwwwwwweee</span>
                    </td>

                   
                    <td>0</td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td>1Pt</td>
                    <td>User</td>

                    <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-green-file">D</button>
                        <button type="button" className="btn btn-red-file">W</button>
                        <button type="button" className="btn btn-blue-file">More</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span title="wwwwwww">wwwwwww</span>
                    </td>

                    
                    <td>0</td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td>1Pt</td>
                    <td>User</td>

                    <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-green-file">D</button>
                        <button type="button" className="btn btn-red-file">W</button>
                        <button type="button" className="btn btn-blue-file">More</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span title="abcde">abcdefss</span>
                    </td>

                    
                    <td>0</td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td><div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div></td>

                    <td>1Pt</td>
                    <td>User</td>

                    <td>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-green-file">D</button>
                        <button type="button" className="btn btn-red-file">W</button>
                        <button type="button" className="btn btn-blue-file">More</button>
                      </div>
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
                  {/* <span className="sr-only">Next</span> */}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default AccountList
