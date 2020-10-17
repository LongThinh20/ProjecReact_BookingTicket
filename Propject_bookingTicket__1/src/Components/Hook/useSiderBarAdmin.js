import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icon/fa'

function useSiderBarAdmin() {
    return (
        <div>
            <div className="navbar">
                <Link to="#" className="menu-bar">
                    <FaIcons.FaBars />
                </Link>
            </div>
        </div>
    )
}

export default useSiderBarAdmin
