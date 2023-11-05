import React from 'react'
import { BsCircle } from "react-icons/bs"

const MultiLoginRightTable = ({ tableHead }) => {
    return (
        <>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        {
                            tableHead.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))
                        }
                    </tr>
                </thead>

                < tbody >
                    <tr>
                        <td className='text-center' id="dash">
                            <BsCircle />
                        </td>
                    </tr>
                </tbody>


            </table>
        </>
    )
}

export default MultiLoginRightTable
