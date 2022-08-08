import React from 'react';
import Taslak from "../taslakhizmet/Taslak.js";
import "./TopluHizmet.css";
import m1 from "./hizmetFotolar/bl1.jpg";
import m2 from "./hizmetFotolar/bl2.webp";
import m3 from "./hizmetFotolar/bl3.jpg";
import m4 from "./hizmetFotolar/bl4.jpg";
import m5 from "./hizmetFotolar/bl5.jpg";
import m6 from "./hizmetFotolar/bl6.jpg";


export default function TopluHizmet() {
    return (
        
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:"-2rem"}}>
           <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Medikal Cilt Bakımı"
                    taslakphoto={m2}
                    taslaktext="Sasha Diamond Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/medikal-cilt-bakimi"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Robotix Lazer Epilasyon"
                    taslakphoto={m5}
                    taslaktext="Sasha Diamond Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/robotix-lazer-epilasyon"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Hydrafacial Cilt Bakımı"
                    taslakphoto={m3}
                    taslaktext="Sasha Diamond Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/hydrafacial-cilt-bakimi"
                />      
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="G5 Masajı - Kavitasyon"
                    taslakphoto={m4}
                    taslaktext="Sasha Diamond Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/g5-kavitasyon"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Kirpik Lifting"
                    taslakphoto={m1}
                    taslaktext="Sasha Diamond Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/kirpik-lifting"
                />
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <Taslak 
                    taslaktitle="Kaş Laminasyonu "
                    taslakphoto={m6}
                    taslaktext="Sasha Diamond Güzellik Salonu olarak siz değerli müşterilerimize lazer epilasyon, cilt bakımı ve bölgesel incelme vb alanlarda hizmet vermekteyiz."
                    taslaklink="/kas-laminasyonu"
                />
            </div>
            

        </div>
        

    

    )
}
