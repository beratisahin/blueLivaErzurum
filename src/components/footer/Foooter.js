import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";


import React, { Component } from "react";

export default class Foooter extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div id="footer">
        <div
          class="row p-4"
          style={{ backgroundColor: "white", height: "auto" }}
        >
         

          <div className="col-12">
            <hr />
            <div className="patent">
              <p
                style={{ fontSize: "12px", paddingLeft: "1rem", float: "left" }}
              >
                {" "}
                ©2023 All Rights Reserved
              </p>
              &nbsp; &nbsp;
              <a
                className="sebertech"
                href="https://wa.me/+905449125561?text=Merhaba%20Berati%20Bey%2C%20web%20sitesi%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  paddingRight: "1rem",
                  float: "right",
                  textAlign: "right",
                  color: "black",
                }}
              >
                {" "}
                ®Se<b>B</b>er Tech
              </a>
            </div>
          </div>

          <div className="roof-location">
            <a
              href="https://goo.gl/maps/kUcv5GiaGXuQAsKi7"
              className="location_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LocationOnIcon className="location-icon" />
            </a>
          </div>

          <div className="roof-phone">
            <a
              href="tel: +905075994155" 
              className="phone_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneIcon className="phone-icon" />
            </a>
          </div>

          <div className="roof-whatsapp">
            <a
              href="https://wa.me/+905075994155"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="whatsapp-icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
