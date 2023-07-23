import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Taslak.css";

export default class Taslak extends Component {
  
  render() {
    //Destructing
    const { taslakphoto, taslaktitle, taslaktext, taslaklink } = this.props;
    return (
      <div>
        <div class="image">
          <img
            src={taslakphoto}
            title="Erzurum Lazer Epilasyon"
            alt="Erzurum Lazer Epilasyon"
            loading="lazy"
            style={{ width: "100%", height: "30rem" }}
          ></img>
          <div class="details">
            <h2 className="serviceTitle">{taslaktitle}</h2>
            <p>{taslaktext}</p>
          </div>

          <div class="more">
            <a href={taslaklink} class="read-more">
              Daha Fazla Bilgi
            </a>
            <div class="icon-links">
              <a href="#">
                <i class="fa-solid fa-leaf" style={{ color: "#2FA8BC" }}></i>
              </a>
              <a href="#">
                <i class="fa-solid fa-crown" style={{ color: "#2FA8BC" }}></i>
              </a>
              <a href="#">
                <i class="fas fa-heart" style={{ color: "#2FA8BC" }}></i>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
