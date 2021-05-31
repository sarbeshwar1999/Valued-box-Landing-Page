import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from "../../assets/LOGO.svg"

const Header = () => {
  return (
   
<nav className="navbar navbar-expand-lg navbar-light">
<img className="company-logo"alt="Company logo" src={logo}/>
  <a className="navbar-brand" href="Home">ValuedBox</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

      <li className="nav-item active">
        <NavLink className="nav-link" to={"Feature"}>Feature </NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link " to={"#"} >Contact </NavLink>
      </li>

      <li className="nav-item active">
        <NavLink className="nav-link" to={"Register"} >Register </NavLink>
      </li>

     

     <li className="nav-item dropdown">
       <a className="nav-link " href="Login" id="navbarDropdown" role="button" aria-haspopup="true">
       <AccountCircleIcon />
        </a>
      </li>
    </ul>
  </div>
</nav>
   
  )
}

export default Header
