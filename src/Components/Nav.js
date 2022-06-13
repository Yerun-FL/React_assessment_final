import React from "react";
import "./Nav.css";
import pic from "../Images/logo2.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbg">
      <img className="imagelogo" src={pic} />
      {/* <p>Having an account</p> */}
      <Button className="navbtn" variant="success">
        <Link className="btn-nav" to="/login">
          Log in
        </Link>
      </Button>
    </div>
  );
};
export default Navbar;
