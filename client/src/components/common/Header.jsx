// import React, { useState,useEffect } from "react";
// import { Link } from "react-router-dom";
// import Settings from "../profile/Settings/Settings";
// import './Header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// const Navbar = ({element,toggleDarkMode,darkMode}) => {
//   const [open, setOpen] = useState(false);

 



//   return (
//     <header className={`flex w-full items-center `} >
//       <div className="container">
//         <div className="relative -mx-4 flex items-center justify-between">
//           <div className="w-60 max-w-full px-4">
//             <div className="block w-full py-5">
//               {/* <img
//                 src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
//                 alt="logo"
//                 className="dark:hidden"
//               /> */}
//               {/* <p className="insta">iຖŞtคງrค๓</p> */}
//               <h1
//   className="text-4xl font-bold text-transparent bg-clip-text text-decoration-none"
//   style={{
//     marginLeft: "-2rem",
//      // Updated gradient colors
   
//      color:" burlywood"
//   }}
// >
//   𝓲𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶

// </h1>
//               {/* <img
//                 src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
//                 alt="logo"
//                 className="hidden dark:block"
//               /> */}
//            </div>
//           </div>
//           <div className="flex w-full items-center justify-between px-4">
//             <div>
//               <button
//                 onClick={() => setOpen(!open)}
//                 id="navbarToggler"
//                 className={` ${
//                   open && "navbarTogglerActive"
//                 } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
//               >
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//                 <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
//               </button>
//               <nav
//                 // :className="!navbarOpen && 'hidden' "
//                 id="navbarCollapse"
//                 // className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
//                 //   !open && "hidden"
//                 // } `}
//               >
//                 <ul className="block lg:flex">
//                   <Link to={'/home'}>
//                   <ListItem >Home</ListItem>
                  
//                   </Link>
//                   <Link to={'posts'}>
//                   <ListItem >Posts</ListItem>
//                   </Link>
//                   <Link to={'settings'}>
//                   <ListItem >Profile</ListItem>
//                   </Link>
//                   <Link to={'allpost'}>
//                   <ListItem >AllPost</ListItem>
//                   </Link>
//                 </ul>
//               </nav>
//             </div>
//             <div className="hidden justify-end pr-16 sm:flex lg:pr-0" style={{marginTop:"-1rem",marginLeft:"10rem"}}>
//               <a
//                 href="/#"
//                 className="px-7 py-3 text-base font-medium  hover:text-primary dark:text-white text-decoration-none "
//                 style={{
//                   color:"burlywood"
//                 }}>
//                 Sign out
//               </a>
//               <Link to={'settings'}>

//               <button
                
//                 className="rounded-md  px-7 py-3 text-base font-medium text-white  text-decoration-none "
//               style={{backgroundColor:" burlywood"}}>
//                 Settings
//               </button>
//               </Link>




//               <button onClick={toggleDarkMode} style={{marginLeft:"2rem"}}>
//               {darkMode ? <FontAwesomeIcon icon={faSun}  className="fa-2x" /> : <FontAwesomeIcon icon={faMoon}  className="fa-2x"/>}
//             </button>


      



              
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// const ListItem = ({ children, NavLink }) => {
//   return (
//     <>
//       <li>
//       <a
//   className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex text-decoration-none"
//   style={{
//     color:"burlywood"
//   }}
// >
//   {children}
// </a>


//       </li>






      
//     </>
//   );
// };



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// import "./Header.css";

// const Navbar = ({ toggleDarkMode, darkMode,element }) => {
//   const [open, setOpen] = useState(false);

//   const handleToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <header className="bg-white dark:bg-dark">
//       <div className="container mx-auto p-4">
//         <div className="flex items-center justify-between" >
//           <div className="flex-shrink-0">
//             <Link
//               to="/home"
//               className="text-4xl font-bold text-transparent bg-clip-text text-decoration-none"
//               style={{ color: "burlywood" }}
//             >
//               𝓲𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶
//             </Link>
//           </div>
//           <div className="lg:hidden">
//             <button
//               onClick={handleToggle}
//               className="text-white dark:text-dark focus:outline-none"
//             >
//               <span className="block h-2 w-6 bg-body-color dark:bg-white mb-1"></span>
//               <span className="block h-2 w-6 bg-body-color dark:bg-white mb-1"></span>
//               <span className="block h-2 w-6 bg-body-color dark:bg-white"></span>
//             </button>
//           </div>
//           <nav
//             className={`lg:flex mt-4 lg:items-center lg:w-auto ${
//               open ? "block" : ""
//             }`}
//           >
//             <ul className="flex  lg:flex-row lg:ml-auto space-y-2 lg:space-y-0"  >
//               <NavLink to={'/home'}>Home</NavLink>
//               <NavLink to={'posts'}>Posts</NavLink>
//               <NavLink to={'settings'}>Profile</NavLink>
//               <NavLink to={'allpost'}>AllPost</NavLink>
//             </ul>
//           </nav>
//           <div className="lg:flex items-center ml-4">
//             <div className="lg:hidden">
//               <Link
//                 to={'settings'}
//                 className="block px-4 py-2 text-base font-medium hover:text-primary dark:text-white text-decoration-none"
//                 style={{ color: "burlywood" }}
//               >Settings
                
//               </Link>
//               <a
//                 href="/"
//                 className="block px-4 py-2 text-base font-medium hover:text-primary dark:text-white text-decoration-none"
//                 style={{ color: "burlywood" }}
//               >
//                 Sign out
//               </a>
//             </div>
//             <div className="hidden lg:flex items-center space-x-4">




// <Link
//                 to={'settings'}
//                 className="px-7 py-3 text-base font-medium hover:text-primary dark:text-white text-decoration-none"
//                 style={{ color: "burlywood" }}
//               >
//                 Settings
//               </Link> 











//               <a
//                 href="/"
//                 className="px-7 py-3 text-base font-medium hover:text-primary dark:text-white text-decoration-none"
//                 style={{ color: "burlywood" }}
//               >
//                 Sign out
//               </a>
//               <button onClick={toggleDarkMode}>
//                 {darkMode ? (
//                   <FontAwesomeIcon icon={faSun} className="fa-2x" />
//                 ) : (
//                   <FontAwesomeIcon icon={faMoon} className="fa-2x" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>



//   );
// };

// const NavLink = ({ to, children }) => (
//   <li className="mb-2 lg:mb-0 lg:ml-6">
//     <Link
//       to={to}
//       className="block lg:inline-block px-2 py-1 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white text-decoration-none"
//       style={{ color: "burlywood" }}
//     >
//       {children}
//     </Link>
//   </li>
// );

// export default Navbar;



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className=" navbars" style={{height: "6rem"}}  >
      <Container fluid>
        <Navbar.Brand href="#" style={{
          color:"darkslateblue"
        }}> 𝓲𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{marginLeft: "15rem"}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', }}
            navbarScroll
          >
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'settings'}>Profile</NavLink>
             <NavLink to={'allpost'}>AllPost</NavLink>
            
             {/* <NavLink to={'/'} >Sign Out</NavLink> */}
          </Nav>
          <Form className="d-flex">
          {/* <Link   to={'/'}><Button variant="outline-success">Sign Out</Button></Link> */}
          <Link   to={'/'}><button class="bn632-hover bn20">SignOut</button></Link>
          <Link to={'/message'}><button class="btn">Message</button></Link>
          <Link   to={'settings'}><button class="bn632-hover bn20">Settings</button></Link>
            {/* <Link   to={'settings'}><Button variant="outline-success">Settings</Button></Link> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

const NavLink = ({ to, children }) => (
    <li className="mb-2 lg:mb-0 lg:ml-6">
      <Link
        to={to}
        className="block lg:inline-block px-2 py-1 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white text-decoration-none"
        style={{ color: "darkslateblue" }}
      >
        {children}
      </Link>
    </li>
  );

export default NavScrollExample;