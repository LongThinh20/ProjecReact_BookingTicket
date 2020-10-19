// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
// import './style.scss'
// import { IconContext } from 'react-icons';


// function NavbarAdmin() {

//     const [sidebar, setsidebar] = useState(false);

//     const showSidebar = () => setsidebar(!sidebar);

//     return (
//         <div className="navBar">
//             <IconContext.Provider value={{ color: 'white' }}>
//                 <div className="navbar" style={{ Height: '500px' }}>
//                     <Link to="#" className="menu-bars">
//                         <FaIcons.FaBars onClick={showSidebar} />
//                     </Link>
//                 </div>
//                 <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//                     <ul className='nav-menu-items' onClick={showSidebar}>
//                         <li className='navbar-toggle'>
//                             <Link to="#" className="menu-bars">
//                                 {/* <AiIcons.AiOutlineClose /> */}
//                             </Link>
//                         </li>
//                         {SidebarData.map((item, index) => {
//                             return (
//                                 <li key={index} className={item.className}>
//                                     <Link to={item.path}>
//                                         <span> {item.icon}</span><span>{item.title}</span>
//                                     </Link>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                 </nav>
//             </IconContext.Provider>
//         </div>
//     )
// }

// export default NavbarAdmin;
