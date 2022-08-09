import "./Neden.css";

import SecurityIcon from '@material-ui/icons/Security';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import EcoIcon from '@material-ui/icons/Eco';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import React, { Component } from 'react'

export default class Neden extends Component {
    render() {
        
        return (
            <div className="row neden" style={{margin:"0%",padding:"1%",backgroundColor:"#EFEFEF",borderRadius:"1rem"}}>
                    <div className="col-12">
                    <p style={{color:"#daac1d",textAlign:"center",fontSize:"20px"}}>Neden Erzurum Blue Liva Güzellik Merkezi</p>
                    <br/>
                    </div>
                   
                   
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-baslik"><InsertEmoticonIcon style={{color:"#daac1d",fontSize:"larger"}}/>&nbsp; Müşteri Memnuniyeti</p>
                        <p class="card-neden"> 
                        Temel önceliğimiz müşterilerimizin memnuniyetidir.</p>
                        
                   </div>
                
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><PeopleIcon style={{color:"#daac1d",fontSize:"larger"}}/>&nbsp; Uzman Kadro</p>
                        <p class="card-neden"> Alanında uzman profesyonel bir kadro yapısıyla sağlık hizmeti veririz.</p>
                        
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><AssignmentTurnedInIcon style={{color:"#daac1d",fontSize:"larger"}}/>&nbsp; Kaliteli Hizmet</p>
                        <p class="card-neden"> Müşterilerimize kaliteli hizmetler sunmaktayız.</p>
                        
                   </div>

                  
                
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><EcoIcon style={{color:"#daac1d",fontSize:"larger"}}/>&nbsp; Hijyenik Ortam</p>
                        <p class="card-neden">  Müşterilerimize hijyenik çalışma ortamları sunmaktayız.</p>
                        
                   </div>
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <p class="card-baslik"><HowToRegIcon style={{color:"#daac1d",fontSize:"larger"}}/>&nbsp; Yılların Tecrübesi</p>
                        <p class="card-neden"> Yılların tecrübesini müşterilerimize katkı sağlamak için sunarız.</p>
                       
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        
                        <p class="card-baslik"><SecurityIcon style={{color:"#daac1d",fontSize:"larger"}}/>&nbsp; Güvenilirlik</p>
                        <p class="card-neden"> Karşılıklı güven içerisinde hizmet vermeye önem veririz.</p>
                        
                   </div>
                   
             
                   
            </div>
            
               
            
                
           
        )
    }
}
