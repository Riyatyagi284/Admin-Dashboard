import React from 'react'

const Reset = () => {
  return (
    <>
      <div className="table-responsive">
        <div className="table table-responsive-sm">
          <table className='table table-bordered reset-table'>
            <thead>
              <tr>
                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>No</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>User Name</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Level</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Casino pts</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Sport pts</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Third Party pts</div>
                </th>

                <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Profit/Loss</div>
                </th>

                <th className="reset-last-th" role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" >
                  <div>Ptype</div>
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
  )
}

export default Reset
