import React from 'react'
import Table from '../../Component/Table';

const ChangePassHistoryLoad = ({searchValue}) => {
    const theadData = ["User Id", "Username", "Change Date", "Change Time", "Change Made By", "Ip Address", "Device History"]
    const tbodyData = [
        ["0134", " xyz", "02/06/2021", "12:30:06", "abc", "1:30:06", "123.123.123", "abc.."],
        ["124", " xyz", "02/06/2021", "12:30:06", "abc", "1:30:06", "123.123.123", "abc.."],
        ["134", " xyz", "02/06/2021", "12:30:06", "abc", "1:30:06", "123.123.123", "abc.."],
        ["124", " xyz", "02/06/2021", "12:30:06", "abc", "1:30:06", "123.123.123", "abc.."],
        ["1200", " xyz", "02/06/2021", "12:30:06", "abc", "1:30:06", "123.123.123", "abc.."],
    ]

    const filteredData = tbodyData.filter((row) => {
        const userId = row[0].toString().toLowerCase();
        const userName = row[1].toLowerCase();
        const filter = searchValue.toLowerCase();
        return userId.includes(filter) || userName.includes(filter);
    })

    return (
        <Table theadData={theadData} tbodyData={filteredData} />
    )
}

export default ChangePassHistoryLoad
