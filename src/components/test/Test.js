import './Test.css';
import React, { Component } from 'react';


export default class Test extends Component {
      
    render() {
           //Destructing
           const {photo,title,text}=this.props;
           return (

                   <div>
                        <div className="col-12 m-4 pl-5 pr-5 pt-2 pb-2 card-temp" style={{backgroundColor:"#F1F1F1",borderRadius:"1rem",textAlign:"center",height:"45rem",border:"3px #3A667D inset"}}>
                                <img src={photo} className="card-photo" alt="..." style={{width:"100%", height:"20rem",padding:"1%",borderRadius:"1rem"}}></img>
                                <p class="card-title" style={{color:"#3A667D",fontSize:"large",marginTop:"1rem"}}>{title}</p>
                                <p class="card-text" style={{fontSize:"medium",textAlign:"justify"}}>{text}</p>
                                
                                

                        </div>

                   </div>


           

           )
    }
}
