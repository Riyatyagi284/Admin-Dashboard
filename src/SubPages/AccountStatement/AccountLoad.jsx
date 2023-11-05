import React from 'react'

const AccountLoad = () => {
  return (
    <div className="table-responsive">
                  <div className="table table-responsive-sm">
                    <table className='table load-table table-bordered reset-table'>
                      <thead>
                        <tr>
                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Date</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Sr. No.</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Credit</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Debit</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>pts</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Remark</div>
                          </th>

                          <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                            <div>Fromto</div>
                          </th>

                        </tr>
                      </thead>

                      <tbody>

                        <tr >
                        <td>22/07/2023 00:00:00</td>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td>0</td>
                        <td>opening pts</td>
                        <td></td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
  )
}

export default AccountLoad
