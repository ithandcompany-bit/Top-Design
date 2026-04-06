import { Link, NavLink } from "react-router-dom";
import "../../public/styles/Navbar.css";
import {useState} from "react";

function Navbar() {

const [menu, setMenu]=useState(false)


  function menuToggler(){
    setMenu(prevMenu => !prevMenu)
  }
 
  return (
    <nav className="navbar">

      <div className="humberger" onClick={menuToggler}>
        <hr />
        <hr />
        <hr />
      </div>
      <h2><span className="name1">Top</span> Design</h2>

      <div className={menu ? " links" : "view links"}>
  <NavLink to="/" className={({ isActive }) => isActive ? "active linkItem" : "linkItem"} onClick={menuToggler}>Home</NavLink>
  <NavLink to="/about" className={({ isActive }) => isActive ? "active linkItem" : "linkItem"} onClick={menuToggler}>About</NavLink>
  <NavLink to="/services" className={({ isActive }) => isActive ? "active linkItem" : "linkItem"} onClick={menuToggler}>Services</NavLink>
  <NavLink to="/contact" className= {({ isActive }) => isActive ? "active linkItem" : "linkItem"} onClick={menuToggler}>Contact</NavLink>
</div>

    </nav>
  );
}

export default Navbar;