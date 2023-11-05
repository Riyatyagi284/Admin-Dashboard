import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
// import Logo from "../assets/logo.png"

const SmallScreenHam = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <div className='SmallScreenHamParent'>
            <div className="taj-logo-parent">
                <img src="../assets/logo.png" alt="Tajj77" className='taj-logo' />
            </div>
            <div className="ham-parent">
                <GiHamburgerMenu size={24} style={{ fill: '#fff', cursor: "pointer" }} onClick={
                    toggleSidebar} className="SmallScreenHam" />
            </div>
        </div>
    )
}

export default SmallScreenHam
