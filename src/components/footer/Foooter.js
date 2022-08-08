import "./Foooter.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import YouTubeIcon from '@material-ui/icons/YouTube';
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
import MainLogo from "../header/SashaDiamondMenuLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';




import React, { Component } from "react";

export default class Foooter extends Component {

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="footer">
        <div class="row p-4" style={{ backgroundColor: "white", height:"auto" }}>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <a href="/" title="Sasha Diamond Güzellik Merkezi" alt="Sasha Diamond Güzellik Merkezi">
              <img
                src={MainLogo}
                alt="logo"
                style={{ width: "30rem", height: "12rem",display:"block",align:"center",margin:"auto" }}
              ></img>
            </a>
            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                fontFamily:"sans-serif",
                textAlign: "justify",
                textIndent: "1px",
              }}
            >
              {" "}
              Sasha Diamond Güzellik Merkezi olarak hastalarımıza ve danışanlarımıza farklı medikal alanlarda hizmet sunmaktayız. Medikal estetikten saç ekimine kadar, son teknoloji cihazlarımız ve uzman ekibimizle her adımda yanınızdayız.

Sasha Diamond Güzellik Merkezi olarak, hastalarımıza ulaşmak istedikleri görünümü kazandırmak için farklı tedavi seçenekleri sunuyoruz. 
            </p>
          </div>


          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "12px",marginBottom:"2rem"  }}>
            <b style={{ color: "#0180c2", fontSize: "18px" }}>Çalışma Takvimi</b>
            <hr/>
            <table class="table table-striped" >
                    
                    <tbody>
                        <tr style={{height:"2px"}}>
                            <td>Pazartesi</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Salı</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Çarşamba</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Perşembe</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Cuma</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Cumartesi</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                        <tr>
                            <td>Pazar</td>
                            <td>09:00 - 19:00</td>
                        </tr>
                      
                    </tbody>
                    
                    </table>
                   
                        <p style={{color:"red",fontSize:"13px"}}></p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-12" style={{ fontSize: "15px",marginBottom:"2rem"  }}>
            <p style={{ color: "#0180c2", fontWeight: "bold", fontSize: "18px" }}>
              Kayseri Sasha Diamond Güzellik Merkezi
            </p>
            <hr/>
            <a
              href="https://www.facebook.com/sasha.diamond.beauty/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left" }}
            >
              <FacebookIcon className="icon" style={{fontSize:"24px"}}/>
            </a>
            <a
              href="https://www.instagram.com/sasha.diamond.beauty/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <InstagramIcon className="icon" style={{fontSize:"24px",color:"purple"}}/>
            </a>
            <a
              href="https://wa.me/+905055782721"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <WhatsAppIcon className="icon" style={{fontSize:"24px",color:"lightgreen"}}/>
            </a>
            <a
              href="tel: +905055782721"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px" }}
            >
              <SettingsPhoneIcon className="icon" style={{fontSize:"24px"}} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ float: "left", textIndent: "10px",color:"red" }}
            >
              <YouTubeIcon className="icon" style={{fontSize:"24px"}} />
            </a>
            <br />
            <br/>
            <p style={{ fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a href="mailto:sasha.diamond.guzellik.merkezi@gmail.com">
                <EmailIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              sasha.diamond.guzellik.merkezi@gmail.com  
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              {" "}
              <a
                href="tel: +905055782721"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SettingsPhoneIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              0505 578 27 21  <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{  fontSize: "14px", textAlign: "left" }}>
              
              <a 
                href="https://www.google.com/maps/place/Yeni,+Haf%C4%B1z+Mustafa+Cd.+No:67,+05300+Merzifon%2FAmasya/@40.8757342,35.4455671,17z/data=!4m2!3m1!1s0x408702394c8ecf21:0x7d0637087a365c6a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HomeIcon style={{fontSize:"24px"}}/>
              </a>
              &nbsp;
              Gevher Nesibe Mah. İstasyon Cad. No:27/14 <br/> Kocasinan / Kayseri{" "}

             
            </p>
          </div>





          <div className="col-12">
            
            <hr/> 
                    <div className="patent" >
                        
                            <p style={{fontSize:"12px",paddingLeft:"1rem",float:"left"}}> ©2021 All Rights Reserved</p> 
                            &nbsp; &nbsp;
                            <a className="sebertech" href="tel: +905449125561"
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{fontSize:"12px",paddingRight:"1rem",float:"right",textAlign:"right",color:"black"}}> ®Se<b>B</b>er Tech</a>
                    </div>
          </div>


          <div className="roof-location">
              <a href="https://www.google.com/maps/dir//Kayseri+Sasha+Diamond+G%C3%BCzellik+Merkezi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x152b119ea4cb6347:0x8630a4f02dbdf0fb?sa=X&ved=2ahUKEwj86MTlxYj5AhUNX_EDHWrMDCUQ9Rd6BAg0EAQ" className="location_float" target="_blank" rel="noopener noreferrer">
                  <LocationOnIcon className="location-icon"/>
              </a>
          </div>

          <div className="roof-phone">
              <a href="tel: +905055782721" className="phone_float" target="_blank" rel="noopener noreferrer">
                  <PhoneIcon className="phone-icon"/>  
              </a>
          </div>

          <div className="roof-whatsapp">
              <a href="https://wa.me/+905055782721" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="whatsapp-icon"/>
              </a>
          </div>

        </div>

        
      </div>
    );
  }
}
