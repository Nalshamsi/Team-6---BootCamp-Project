import React, { useState } from 'react';
import { UserContext } from './UserContext';

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

function Navbar(props) {

  const { loggedIn, logoutUser } = React.useContext(UserContext)
  
  let currentPath = props.path;

  let homeClass = currentPath === '/' ? 'active' : '';
  let aboutClass = currentPath === '/about' ? 'active' : '';
  let activityClass = currentPath === '/activity' ? 'active' : '';
  let loginClass = currentPath === '/login' ? 'active' : '';


  return (
    <div id="navbar">
          <a href="/">
            <svg id="logo" 
            width="49" 
            height="40"
            viewBox='0 0 49 40'
            fill='none' 
            url={'/'}></svg>
          </a>
        <a href="#default" id="logo">Adventurers</a>
        <div id="navbar-right">
          <a className={`nav-link ${homeClass}`} href="/">Home</a>
          <a className={`nav-link ${aboutClass}`} href="/about">About</a>
          <a className={`nav-link ${activityClass}`} href="/activity">Activities</a>
          <a className={`nav-link ${loginClass}`} href="/login">Login</a>
        </div>
      </div>
  );
}
export default Navbar;

// function Navbar() {
//   const NavStyles={
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       background: "#297373",
//       padding: "20px 80px",
//       boxShadow: "0 5px 15px rgba(0, 0, 0, 0.06)"
//   }
//   const NavbarStyles={
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }


//   return(
//     <>
//     <nav style={NavStyles}>
//       <a href="/">
//         <svg id="logo" 
//         width="49" 
//         height="48"
//         viewBox='0 0 49 48'
//         fill='none' 
//         url="./Images/Adlogo.svg"></svg>
//       </a>

//       <div>
//         <ul styles={NavbarStyles}>
//           <li><a href="/" active >Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/events">Events</a></li>
//           <li><a href="/register">Login</a></li>
//         </ul>
//       </div>
//     </nav>
//     </>
//   )
// }
