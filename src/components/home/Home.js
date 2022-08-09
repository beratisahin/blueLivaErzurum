import React from "react";
import ReactPlayer from "react-player";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";
import Owl from "../slider/owlcarousel/Owl";
import Klinik from "../klinik/Klinik.js";

import Test from "../test/Test";



import TopluHizmet from "../topluhizmet/TopluHizmet.js";


function Home() {
  return (
    <div>
 
      <div className="row">
        
      <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"x-large",marginTop:"1rem",color:"#daac1d",fontFamily:"sans-serif"}}>Kayıtlarımız Başlamıştır</h2>
         <Klinik/>
      </div>
     
      
      <br/>
      <hr/>
     
      <div className="col-12">
            <NedenBercislina/>
      </div>
      
      <br/>
      <hr/>
      <div className="row">
        <TopluHizmet/>
      </div>
        

      <hr/>
      
      
      <div className="row">
      <h2 className="doktorlarTitle" style={{textAlign:"center",fontSize:"x-large",color:"#daac1d",fontFamily:"sans-serif"}}>Hizmetlerimiz</h2>
         <Owl/>
      </div>
      <br/>
      <div className="col-12">
            <Mail/>
      </div>
      <br/>
      <div className="row m-2">
        <div className="col-lg-12  col-12 harita" style={{marginTop:"2.5rem"}}>
                      <p className="harita_baslik">Lokasyonumuz</p>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47921.454778895335!2d41.2287350751954!3d39.9039237445403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5fed3c9bde37%3A0x78c08b2bf35460c5!2sErzurum%20Blue%20Liva%20G%C3%BCzellik%20Salonu!5e0!3m2!1str!2str!4v1653179249517!5m2!1str!2str" 
                  className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"",referrerpolicy:"no-referrer-when-downgrade", ariaHidden:"false", tabIndex:"0",border:"2px #daac1d solid",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}> </iframe>
                  
            </div> 

      </div>

    </div>
  );
}

export default Home;
