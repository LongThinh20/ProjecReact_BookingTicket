import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';


export default function NavbarAdmin() {



    return (

        <nav className="navbar navbar-expand-sm bg-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link 3</a>
                </li>
            </ul>
        </nav>



    )

}

