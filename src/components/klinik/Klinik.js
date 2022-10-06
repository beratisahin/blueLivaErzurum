import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { NavigateBeforeSharp } from '@material-ui/icons';
import k1 from "./kampanyalar/1.webp";
import k2 from "./kampanyalar/2.webp";
import k3 from "./kampanyalar/3.webp";
import k4 from "./kampanyalar/4.webp";
import k5 from "./kampanyalar/5.webp";
import k6 from "./kampanyalar/6.webp";
import k7 from "./kampanyalar/7.webp";
import k8 from "./kampanyalar/8.webp";
import k9 from "./kampanyalar/9.webp";
import k10 from "./kampanyalar/10.webp";
import k11 from "./kampanyalar/11.webp";
import k12 from "./kampanyalar/12.webp";
import k13 from "./kampanyalar/13.webp";
import k14 from "./kampanyalar/14.webp";
import k15 from "./kampanyalar/15.webp";

import KampComp from "./KlinikComp.js";





//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    autoplayHoverPause:false,
    dots:2,
    autoplay: true,
    loop:true,
    dotsSpeed:2,
    navText: ["",""],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    },
  };


export default function Klinik() {
    return (
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",zIndex: "1000"}}>
            <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
               <KampComp
                    kampanyaResim={k1}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Komple%20V%C3%BCcut%20(T%C3%BCm%20Bacak%20-%20Genital%20B%C3%B6lge%20-%20Kol%20-%20Koltukalt%C4%B1)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k2}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20T%C3%BCm%20V%C3%BCcut%20(T%C3%BCm%20Bacak%20-%20Genital%20B%C3%B6lge%20-%20Koltukalt%C4%B1)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k3}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Tepeden%20T%C4%B1rna%C4%9Fa%20(Y%C3%BCz%20B%C3%B6lgesi%20-%20Genital%20B%C3%B6lge%20-%20Koltukalt%C4%B1-%20T%C3%BCm%20Bacak-%20Bel%2BS%C4%B1rt%2BPopo%20-%20G%C3%B6bek%2BG%C3%B6%C4%9F%C3%BCs%2BOmuz)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k4}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Y%C3%BCz%20B%C3%B6lgesi%20(%C3%87ene%20-%20B%C4%B1y%C4%B1k%20-%20Favori%20-%20Ka%C5%9F%20Aras%C4%B1)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k5}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Tek%20B%C3%B6lge%20(T%C3%BCm%20Kol%20-%20T%C3%BCm%20Bacak)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k6}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Tek%20B%C3%B6lge%20(%C3%87ene%20-%20B%C4%B1y%C4%B1k%20-%20Favori%20-%20Ka%C5%9F%20Aras%C4%B1)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k7}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Tek%20B%C3%B6lge%20(Yar%C4%B1m%20Kol%20-%20Yar%C4%B1m%20Bacak%20-%20Koltukalt%C4%B1%20-%20Genital%20B%C3%B6lge%20-%20Bel%2BS%C4%B1rt%2BG%C3%B6bek)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k8}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20B%C3%B6lgesel%20%C4%B0ncelme%20(7%20Seans%20Kavitasyon%20-%205%20Seans%20G5%20Masaj%C4%B1)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k9}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Dermapen%20(5%20Seans%20Dermapen)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k10}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Ka%C5%9F%20Laminasyonu%20ve%20Kirpik%20Lifitng%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k11}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Cilt%20Bak%C4%B1m%C4%B1%20(Hydrafacial%20ve%20Medikal%20%20Cilt%20Bak%C4%B1m%C4%B1)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k12}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Y%C3%BCz%20B%C3%B6lgesi%20(Sakal%20%C3%87izim%20-%20Boyun%20-%20Favori%20-%20Ka%C5%9F%20Aras%C4%B1%20-%20Ense)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k13}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20erkekler%20i%C3%A7in%20B%C3%B6lgesel%20%C4%B0ncelme%20(G5%20Masaj%C4%B1%20ve%20Kavitasyon)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k14}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20erkekler%20i%C3%A7in%20Cilt%20Bak%C4%B1m%C4%B1%20(Hydrafacial%20ve%20Medikal%20%20Cilt%20Bak%C4%B1m%C4%B1)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k15}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Kemer%20%C3%9Cst%C3%BC%20(Kol%20-%20Bel%20-%20S%C4%B1rt%20-%20G%C3%B6bek%20-%20G%C3%B6%C4%9F%C3%BCs)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
            </OwlCarousel>
        </div>    
    )
}

