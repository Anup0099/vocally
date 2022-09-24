import React, { useState } from "react";
import axios from "axios";
import "./body.css";
import output from "../../assets/output.png";
import flogo from "../../assets/flogo.png";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
const Body = () => {
  const [form, setForm] = useState({
    fullName: null,
    email: null,
    errors: {
      fullName: "",
      email: "",
    },
  });
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const errors = form.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      default:
        break;
    }
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      console.info("Valid Form");
      try{
        const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: form.fullName,
        email: form.email,
        },{headers:{"Content-Type" : "application/json"}});
        console.log(res);
        alert("User created successfully");
      }
      catch(err){
        console.log(err);
      }
    } else {
      console.error("Invalid Form");
    }
    window.location.reload();
  };
  const { errors } = form;
  return (
    <div className="main">
      <div className="bodyWrapper">
        <div className="LeftPart">
          <div className="bodyLeft">
            <div>Vehicle Maintainanace From The Comfort Of Your Home</div>
          </div>
          <div className="bodyLeftPara">
            <p>
              Open Auto Smooths the hassle of maintaining your vehicle and helps
              you deal with unexpected repairs worry-free
            </p>
            <form onSubmit={handleSubmit} noValidate className="form">
              <input
                type="text"
                name="fullName"
                noValidate
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
              {errors.fullName.length > 0 && (
                <div className="error">{errors.fullName}</div>
              )}
              <input
                type="text"
                name="email"
                noValidate
                placeholder="Enter Your Email Address"
                onChange={handleChange}
              />
              {errors.email.length > 0 && (
                <div className="error">{errors.email}</div>
              )}
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="bodyImg">
          <img src={output} alt="" />
        </div>
      </div>
      <div className="bodyFooter">
        <div className="dropdown">
          <img
            src={flogo}
            alt=""
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "#secondBody";
            }}

            //smooth scroll
          />
        </div>
        <div className="footerImg">
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-f.png"
            style={{
              cursor: "pointer",
            }}
          />
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png"
            style={{
              cursor: "pointer",
            }}
          />
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new--v1.png"
            style={{
              cursor: "pointer",
            }}
          />
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
            style={{
              cursor: "pointer",
            }}
          />
          <img
            src="https://img.icons8.com/material-rounded/24/ffffff/youtube-play.png"
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
