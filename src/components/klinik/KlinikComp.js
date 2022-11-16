import { Link } from "react-router-dom";
import React, { Component } from 'react';
import "./Klinik.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default class KlinikComp extends Component { 
render() {
     //Destructing
     const {kampanyaResim,kampanyaAd}=this.props;
     return (

      <div className="item owl-slider">
          <div className="owlCarouselTempKlinik">
              <img src={kampanyaResim} className="owlCarouselImageKlinik" loading="lazy" alt="Erzurum Lazer Epilasyon" title="Erzurum Lazer Epilasyon"></img>
          </div>
          <div className="whatsapp_temp">
                <a href={kampanyaAd} className="whatsapp_float_mesaj" target="_blank" rel="noopener noreferrer">Kampanya Hakkında Detaylı Bilgi İçin Tıklayın</a>
                <div className="roof-whatsapp_kampanya">
                
                <a href={kampanyaAd} className="whatsapp_float_kampanya" target="_blank" rel="noopener noreferrer">
                  
                  <WhatsAppIcon className="whatsapp-ic" style={{fontSize:"x-large"}}/>
              </a>
          </div>
          </div>
         
      </div>

     )
}
}