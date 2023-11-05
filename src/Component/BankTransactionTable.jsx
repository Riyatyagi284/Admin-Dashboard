import React,{useState} from 'react'
import BankModalView from './BankModalView'
// import BankViewModal from "./BankModalView"

const BankTransactionTable = ({ theadData, tbodyData }) => {
    const [show, setShow] = useState(false)

    const handleBankView = () => {
        console.log("clicked")
        setShow(!show)
    }
    
    return (
        <>
            <div className="t-responsive" >
                <div className="table table-responsive-sm">
                    <table className='table load-table table-bordered reset-table'>
                        <thead>
                            <tr className='bankTranaction-tr'>
                                {theadData.map((header, index) => (
                                    <th key={index} className='bankTranaction-th'>{header}</th>
                                ))}
                            </tr>
                        </thead>
<BankModalView show ={show} setShow ={setShow} />
                        <tbody>
                            {
                                tbodyData.length === 0 ? (
                                    <tr className='bankTranaction-tr'>
                                        <td colSpan={8} className="reset-td reset-td-right" style={{ textAlign: "center" }}>
                                            <span className="text-center">
                                                There are no records to show .
                                            </span>
                                        </td>
                                    </tr>
                                ) :

                                    tbodyData.map((row, rowIndex) => (
                                        <tr key={rowIndex} className='bankTranaction-tr'>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className='bankTranaction-td'>
                                                    {cellIndex === row.length - 1 ? (
                                                        <button className='btn btn-blue-file' onClick={handleBankView} >{cell}</button>
                                                    ) : (
                                                        cell
                                                    )}
                                                </td>
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
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default BankTransactionTable
