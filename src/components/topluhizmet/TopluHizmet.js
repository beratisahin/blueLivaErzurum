import Taslak from "../taslakhizmet/Taslak.js";
import "./TopluHizmet.css";
import m1 from "./hizmetFotolar/bl1.jpg";
import m2 from "./hizmetFotolar/bl2.webp";
import m3 from "./hizmetFotolar/bl3.jpg";
import m4 from "./hizmetFotolar/bl4.jpg";
import m5 from "./hizmetFotolar/bl5.jpg";
import m6 from "./hizmetFotolar/bl6.jpg";
import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Send from "./Send.js";

export default class TopluHizmet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      kampanyaAd: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.setState({
      kampanyaAd: encodeURI(
        `https://wa.me/+905526350125?text=${e.target.value}`
      ),
    });
  }

  render() {
    return (
      <div
        class="col-12"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginLeft: "-2rem",
        }}
      >
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Medikal Cilt Bakımı"
            taslakphoto={m2}
            taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
            taslaklink="/medikal-cilt-bakimi"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Robotix Lazer Epilasyon"
            taslakphoto={m5}
            taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
            taslaklink="/robotix-lazer-epilasyon"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Hydrafacial Cilt Bakımı"
            taslakphoto={m3}
            taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
            taslaklink="/hydrafacial-cilt-bakimi"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="G5 Masajı - Kavitasyon"
            taslakphoto={m4}
            taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
            taslaklink="/g5-kavitasyon"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Kirpik Lifting"
            taslakphoto={m1}
            taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
            taslaklink="/kirpik-lifting"
          />
          <Send />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
          <Taslak
            taslaktitle="Kaş Laminasyonu "
            taslakphoto={m6}
            taslaktext="Blue Liva Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
            taslaklink="/kas-laminasyonu"
          />
          <Send />
        </div>
      </div>
    );
  }
}
