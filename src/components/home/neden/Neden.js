import "./Neden.css";

import SecurityIcon from '@material-ui/icons/Security';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import EcoIcon from '@material-ui/icons/Eco';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CategoryIcon from '@material-ui/icons/Category';

import React, { Component } from 'react'

export default class Neden extends Component {
    render() {
        
        return (
            <div className="row neden" style={{margin:"0%",padding:"1%",backgroundColor:"#EFEFEF",borderRadius:"1rem"}}>
                    <div className="col-12">
                    <p style={{color:"#2FA8BC",textAlign:"center",fontSize:"20px"}}>Neden Erzurum Blue Liva Güzellik Salonu</p>
                    <br/>
                    </div>
                   
                   
                   <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-baslik"><InsertEmoticonIcon style={{color:"#2FA8BC",fontSize:"larger"}}/>&nbsp; Müşteri Memnuniyeti</p>
                        <p class="card-neden"> 
                        Temel önceliğimiz müşterilerimizin memnuniyetidir.</p>
                        
                   </div>
                
                   <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><PeopleIcon style={{color:"#2FA8BC",fontSize:"larger"}}/>&nbsp; Uzman Kadro</p>
                        <p class="card-neden"> Alanında uzman profesyonel bir kadro yapısıyla sağlık hizmeti veririz.</p>
                        
                   </div>
                  
                   <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><AssignmentTurnedInIcon style={{color:"#2FA8BC",fontSize:"larger"}}/>&nbsp; Kaliteli Hizmet</p>
                        <p class="card-neden"> Müşterilerimize kaliteli hizmetler sunmaktayız.</p>
                        
                   </div>

                  
                
                   <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><EcoIcon style={{color:"#2FA8BC",fontSize:"larger"}}/>&nbsp; Hijyenik Ortam</p>
                        <p class="card-neden">  Müşterilerimize hijyenik çalışma ortamları sunmaktayız.</p>
                        
                   </div>
                  
                   <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><HowToRegIcon style={{color:"#2FA8BC",fontSize:"larger"}}/>&nbsp; Yılların Tecrübesi</p>
                        <p class="card-neden"> Yılların tecrübesini müşterilerimize katkı sağlamak için sunarız.</p>
                       
                   </div>

                   <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-baslik"><SecurityIcon style={{color:"#2FA8BC",fontSize:"larger"}}/>&nbsp; Güvenilirlik</p>
                        <p class="card-neden"> Karşılıklı güven içerisinde hizmet vermeye önem veririz.</p>
                        
                   </div>
                   <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><AcUnitIcon style={{color:"#2FA8BC",fontSize:"larger"}}/>&nbsp; Etkili Sonuçlar</p>
                        <p class="card-neden"> Yüzde 90 oranında dökülmeler sağlanır.</p>
                       
                   </div>

                   <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-baslik"><CategoryIcon style={{color:"#2FA8BC",fontSize:"larger"}}/>&nbsp; Profesyonel Cihazlar</p>
                        <p class="card-neden"> Son teknoloji profesyonel cihazlar tercih ederiz.</p>
                        
                   </div>
                   
                   
             
                   
            </div>
            
               
            
                
           
        )
    }
}
