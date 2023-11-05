import React, { useState } from 'react'
import { AiOutlineSync } from "react-icons/ai"
import "../responsive/Dashboard.css"

const MarketAnalysis = () => {

  const [input, setInput] = useState("")

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="container-fluid market-parent">
        <div className="market-wrapper">
          <div className='Market-Analysis'>
            <p>Market Analysis</p>
            <AiOutlineSync size={22} />
          </div>
          <div className='search'>
            <input type="text" value={input} onChange={inputHandler} placeholder="Search Event" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MarketAnalysis