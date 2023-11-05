import React from 'react'

const HistoryReset = () => {
  return (
    <>
      <div className="table-responsive">
        <div className="table table-responsive-sm">
          <table className='table table-bordered reset-table'>
            <thead>
              <tr>
                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>User Id</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>UserName</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Login Date</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Login Time</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Logout Date</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Logout Time</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Ip Address</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Device History</div>
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
    </>
  )
}

export default HistoryReset
