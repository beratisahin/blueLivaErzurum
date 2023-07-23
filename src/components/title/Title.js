import React, { Component } from 'react'
import "./Title.css";



export default class Title extends Component {
    render() {
        //Destructing
        const {page_title} = this.props;
        return (
            <div className="page_header" style={{borderRadius:"5px",height:"9rem"}}>
                   
                    <a className="page_header_home" href="/">Ana Sayfa <i class="fas fa-long-arrow-alt-right"></i></a>
                    
                    <p className="page_header_title">{page_title}</p>
              
                
            </div>
        );
      }
}

