import React, { Component } from 'react'
import "./Title.css";
import S1 from "../header/bLLogo2.png";



export default class Title extends Component {
    render() {
        //Destructing
        const {page_title} = this.props;
        return (
            <div className="page_header" style={{borderRadius:"5px",height:"9rem"}}>
                    <img src={S1} className="page_header_icon" style={{width:"12rem",height:"8rem",float:"left",marginTop:"2px",marginLeft:"2px"}}></img>
                    <a className="page_header_home" href="/">Ana Sayfa <i class="fas fa-long-arrow-alt-right"></i></a>
                    
                    <p className="page_header_title">{page_title}</p>
              
                
            </div>
        );
      }
}

