import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div className="navLogo">
        <img src={logo} alt="" style={{
          width: "300px",
          height: "80px",
        }}/>
      </div>
        <ul className="navLinks">
          <li className="telephoneImg">
            <img
              src="https://img.icons8.com/material-outlined/24/ffffff/phone.png"
              alt="call"
            />
            <a
              href="+769 586 4558"
              style={{
                textDecoration: "none",
                color: "rgba(238, 232, 232, 0.826)",
              }}
            >
              +769 586 4558
            </a>
          </li>
          <li className="inboxImg">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
              alt="mail"
              style={{
                height: "20px",
                width: "20px",
              }}
            />
            <a
              href="service@openauto.ca"
              style={{ textDecoration: "none", color: "rgba(238, 232, 232, 0.826)" }}
            >
              service@openauto.ca
            </a>
          </li>
          <li className="download">
            <a>Download The Mobile App</a>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;
