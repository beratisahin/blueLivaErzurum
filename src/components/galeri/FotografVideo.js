import "./FotografVideo.css";
import React from 'react';
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";
import Instagram from "./SashaDiamondFotoVideo.PNG"

export default function FotografVideo() {
    useDocumentTitle('Fotoğraflar- Sasha Diamond Güzellik Merkezi');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Fotoğraf ve Video"
               />
                <br/>
                <p className="instaLink" style={{textAlign:"center",color:"red"}}>Detaylı güncel fotoğraf ve videolar için <a className="instagram"  href="https://www.instagram.com/sasha.diamond.beauty/" target="_blank">Sasha Diamond Beauty</a> instagram profilimizi ziyaret edebilirsiniz. </p>
                <img src={Instagram} style={{width:"95%",height:"auto"}}></img>
            </div>
            
        </div>
    )
}



