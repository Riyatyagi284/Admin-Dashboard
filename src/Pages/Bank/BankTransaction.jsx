import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs';
import Loader from '../Loader'
import Userlist from "../../pdfFile/userlist.pdf"
import { FaFileExcel } from "react-icons/fa"
import BankTransactionTable from "../../Component/BankTransactionTable"
import { DatePicker } from 'antd';
import TimePicker from '../../Component/TimePicker'
import "../../responsive/BankTransaction.css"

const Transaction = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [select1, setSelect1] = useState("All")
    const [select2, setSelect2] = useState("All")
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState('')
    const [showViewTransaction, setShowViewTransaction] = useState(false)

    const theadData = ["User Id", "Username", "Transaction Id", "Transaction Date", "Transaction Time", "Reference No.", "Order Id", "Transaction Type", "Status", ""]
    const tbodyData = [
        ["012", " xyz1", "759837", "2021-06-02", "12:30:06", "1234", "231", "Orders", "paid", "View"],
        ["134", " xyz3", "098973", "2021-02-03", "02:04:02", "3024", "561", "Withdrawals", "success", "View"],
        ["234", " xyz2", "897862", "2021-03-04", "11:00:06", "1043", "974", "Withdrawals", "Failed", "View"],
        ["124", " xyz4", "132545", "2023-06-02", "00:08:08", "6589", "345", "Withdrawals", "In Process", "View"],
        ["134", " xyz3", "756442", "2022-08-08", "02:04:02", "3024", "561", "TDS", "TDS Amount Deduction", "View"],
        ["124", " xyz4", "543422", "2021-05-03", "00:08:08", "9786", "045", "Deposits", "In Process", "View"]
    ]

    const filterData = (data, searchValue, select1, select2, selectedDate, selectedTime) => {
        return data.filter((row) => {
            const userId = row[0].toString().toLowerCase();
            const userName = row[1].toLowerCase();
            const transactionNumber = row[2].toString().toLowerCase();
            const referenceNumber = row[5].toString().toLowerCase();
            const orderId = row[6].toString().toLowerCase();
            const filter = searchValue.toLowerCase();
            const transactionTime = dayjs(`2023-10-09T${row[4]}`);
            const transactionDate = dayjs(row[3]);


            const selectedDateObj = dayjs(selectedDate);
            const formatedTransactionDate = transactionDate.format('YYYY-MM-DD');
            const selectedTranactionDate = selectedDateObj.format('YYYY-MM-DD');
            const isDateMatch = !selectedDate || (formatedTransactionDate === selectedTranactionDate);

            const isTimeMatch = !selectedTime || (transactionTime.format('HH:mm:ss') === selectedTime);

            const isAllSelected1 = (select1 === "All");
            const isSelectedType1 = row[7].toLowerCase() === select1.toLowerCase();

            const isAllSelected2 = (select2 === "All");
            const isSelectedType2 = row[8].toLowerCase() === select2.toLowerCase();

            return (isAllSelected1 || isSelectedType1) && (isAllSelected2 || isSelectedType2) && (userId.includes(filter) || userName.includes(filter) || transactionNumber.includes(filter) || referenceNumber.includes(filter) || orderId.includes(filter)) && isDateMatch && isTimeMatch
        })
    }

    const filteredData = filterData(tbodyData, searchValue, select1, select2, selectedDate, selectedTime)

    const handleTimeChange = (newTime) => {
        setSelectedTime(newTime);
    }

    const toggleViewTransaction = () => {
        setShowViewTransaction(!showViewTransaction)
    }

    // these two
    const handleLoadClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }

    const handleOptionChange1 = (e) => {
        setSelect1(e.target.value)
    }

    const handleOptionChange2 = (e) => {
        setSelect2(e.target.value)
    }

    return (
        <>
            <div className="multi-login-container bank-transaction-wrapper">
                <div className="M-login-header">
                    <h2>Transactions</h2>
                    <div className="M-login-header-right">
                        <a className="anchor M-login-anchor">Bank</a>
                        <span className="span">/transactions</span>
                    </div>
                </div>

                <div className="bankTransaction-container">
                    <div className="container-fluid white-bankbg">
                        <div className="row search-bar">
                            <div className="col-md-6 search-form">
                                <input type="text" className="form-control" id="client_id" placeholder='Search User' onChange={e => setSearchValue(e.target.value)} value={searchValue} />

                                <DatePicker className='dateRang' style={{
                                    paddingLeft: '8px', paddingRight: '8px', margin: "0 1rem"
                                }}
                                    placeholder='Start Date'
                                    onChange={
                                        date =>
                                            setSelectedDate(date.$y + '-' + (date.$M + 1) + '-' + date.$D)}
                                />

                                <TimePicker selectedTime={selectedTime} handleTimeChange={handleTimeChange} className="timeRang" />
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

                            </div>

                            <div className="container-fluid">
                                <div className="row" style={{ marginRight: "-10rem" }}>

                                    <div className="col-xs-12 col-md-9">
                                        <div className="row bankTransaction">
                                            <div className="col-xs-4 col-md-4">
                                                <select
                                                    value={select1}
                                                    className='form-select select'
                                                    id='User-Type'
                                                    aria-label='Default select example'
                                                    style={{
                                                        padding: '1rem',
                                                        fontSize: '1.4rem',
                                                        // width: '20rem',
                                                        color: '#495057',
                                                        // marginRight: '15px',
                                                    }}
                                                    onChange={handleOptionChange1}
                                                // disabled={isClick}
                                                >
                                                    <option value='All'>All</option>
                                                    <option value='Orders'>Orders</option>
                                                    <option value='Withdrawals'>Withdrawals</option>
                                                    <option value='Deposits'>Deposits</option>
                                                    <option value='TDS'>TDS</option>
                                                </select>
                                            </div>

                                            <div className="col-xs-4 col-md-5">
                                                <select
                                                    value={select2}
                                                    className='form-select select'
                                                    id='User-Type'
                                                    aria-label='Default select example'
                                                    style={{
                                                        padding: '1rem',
                                                        fontSize: '1.4rem',
                                                        // width: '20rem',
                                                        color: '#495057',
                                                        // marginLeft: '-5rem',
                                                    }}
                                                    onChange={handleOptionChange2}
                                                // disabled={isClick}
                                                >
                                                    <option value='All'>All</option>
                                                    <option value='Paid'>Paid</option>
                                                    <option value='Failed'>Failed</option>
                                                    <option value='Success'>Success</option>
                                                    <option value='In Process'>In Process</option>
                                                    <option value='Refund'>Refund</option>
                                                    <option value='Winnings'>Winnings</option>
                                                    <option value='TDS Amount Deduction'>TDS Amount Deduction</option>
                                                    <option value='TDS Deduction Against Other Purchases'>TDS Deduction Against Other Purchases</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3"></div>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div style={{ marginRight: "-2rem" }}>
                                            <button className="btn btn-black" type="submit" onClick={handleLoadClick}>Load</button>
                                            {isLoading && <Loader />}
                                            <button
                                                className="btn btn-grey"
                                                type="submit"
                                                onClick={handleLoadClick}
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="container-fluid">
                                <div className="row">
                                    <BankTransactionTable theadData={theadData} tbodyData={filteredData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction