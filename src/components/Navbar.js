import React, {useState} from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';
function Navbar() {
  const [showLink, setShowLink] = useState(false)
  function Click(){
    setShowLink(!showLink)
  }
  return (
    <div className="navbar">
      <div className="leftSide" id={showLink ? 'open' : 'close'}>
        <img src={logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={Click}>
          <ReorderIcon  />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
