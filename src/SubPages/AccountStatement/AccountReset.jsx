import React from 'react'

const AccountReset = () => {
  return (
    <div>
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
                          <td colSpan={8} className="reset-td reset-td-right">
                            <div className="text-center">
                              There are no records to show .
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
    </div>
  )
}

export default AccountReset
