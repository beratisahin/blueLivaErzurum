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
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%2010%20Seans%20t%C3%BCm%20v%C3%BCcut%20lazer%20epilasyon%20(2500%20tl)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k2}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%2010%20Seans%20bayan%20y%C3%BCz%20lazer%20epilasyon%20(600%20tl)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k3}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%204%20Seans%20G5%20masaj%C4%B1%20(600%20tl)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k4}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%204%20Seans%20Slim%20zay%C4%B1flama%20(800%20tl)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k5}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%2010%20Seans%20Koltukalt%C4%B1-T%C3%BCm%20Bacak-Bikini%20B%C3%B6lgesi%20lazer%20epilasyon%20(900%20tl)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k6}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%201%20Seans%20(200%20tl)%2C%203%20seans%20(500%20tl)%20cilt%20bak%C4%B1m%C4%B1%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k7}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%2010%20Seans%20Koltukalt%C4%B1-T%C3%BCm%20Bacak-T%C3%BCm%20Kol-Bikini%20B%C3%B6lgesi%20lazer%20epilasyon%20(1300%20tl)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k8}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Erkekler%20i%C3%A7in%2010%20Seans%20komple%20kemer%C3%BCst%C3%BC%20lazer%20epilasyon%20(1000%20tl)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k9}
                    kampanyaAd="https://wa.me/+905526350125?text=Merhaba%2C%20Erkekler%20i%C3%A7in%2010%20Seans%20Ense-Boyun-Yanak%20lazer%20epilasyon%20(600%20tl)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
            </OwlCarousel>
        </div>    
    )
}

