import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="FnavbarWrapper">
      <div className="FnavLogo">
        <img
          src={logo}
          alt=""
          style={{
            width: "100%",
            height: "80px",
          }}
        />
        <div className="logoBottomn">
          <h4>Open Auto @ all rights reserved</h4>
        </div>
      </div>
      <ul className="FnavLinks">
        <div className="FnavLinkss">
          <div className="logoBottom">
            <h4>Open Auto @ all rights reserved</h4>
          </div>
          <div className="potty">
            <li className="FtelephoneImg">
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
            <li className="FinboxImg">
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
                style={{
                  textDecoration: "none",
                  color: "rgba(238, 232, 232, 0.826)",
                }}
              >
                service@openauto.ca
              </a>
            </li>
          </div>
        </div>
        {/* privacy */}
        <div className="privacy">
            <div>Privacy Policy</div>
            <div>Terms Of Use</div>
            <div>Cookie Policy</div>
        </div>
        <div className="ffooterImg">
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
      </ul>
    </div>
  );
};

export default Footer;
