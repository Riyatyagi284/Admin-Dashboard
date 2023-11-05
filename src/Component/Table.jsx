import React from 'react'

const Table = ({ theadData, tbodyData }) => {
    return (
        <>
            <div className="table-responsive">
                <div className="table table-responsive-sm">
                    <table className='table load-table table-bordered reset-table'>
                        <thead>
                            <tr>
                                {theadData.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {
                                tbodyData.length === 0 ? (
                                    <tr >
                                        <td colSpan={8} className="reset-td reset-td-right" style={{textAlign:"center"}}>
                                            <span className="text-center">
                                                There are no records to show .
                                            </span>
                                        </td>
                                    </tr>
                                ) :

                                    tbodyData.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex}>{cell}</td>
                                            ))}
                                        </tr>
                                    ))

                            }
                        </tbody>
                    </table>

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

export default Table
