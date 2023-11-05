import React from 'react'
import {CiClock2} from "react-icons/ci"
import {GiCheckMark} from "react-icons/gi"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"

const Query = ({time, status, rating}) => {

    
    let elements = []
    for(let i=1;i<=5;i++){
        if(i<=rating){
            elements.push(<AiFillStar />)
        }else{
            elements.push(<AiOutlineStar />)
        }
        
    }

  return (
    <div className='container text-center mb-5'>
            <div className="query-status-box">
            <p ><GiCheckMark className='me-3' /> Marked as {status} <CiClock2 className='fs-4 ms-3' /> {time}</p>

            
            
            </div>
            <div className='d-flex query-status-review'>
                
            {
                elements
            }
            </div>
        </div>
  )
}

export default Query