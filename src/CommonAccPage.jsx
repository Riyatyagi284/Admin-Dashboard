import React from 'react'


const CommonAccPage = ({ columns, data }) => {
    return (
        <>
            <div>CommonAccPage</div>
            <div>
                <h1>Common Page</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default CommonAccPage