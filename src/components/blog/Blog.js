import React from 'react'
import "./Blog.css";

import b1 from "./b1.PNG";
import b2 from "./b2.PNG";
import b3 from "./b3.PNG";
import b4 from "./b4.PNG";
import b5 from "./b5.PNG";
import b6 from "./b6.PNG";

import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function FotografVideo() {
    useDocumentTitle('Fotoğraflar- Erzurum Blue Liva Güzellik Merkezi');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Blog"
               />
                <br/>
                
              <div class="col-12">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"45rem",marginBottom:"3rem"}}>
                  <img src={b1} className="d-block img-responsive blogPhoto" title="Kayseri Lazer Epilasyon" alt="Kayseri Lazer Epilasyon"></img>
                  <h4 className="blogTitle">Lazer Epilasyonda Başarıyı etkileyen faktörler nelerdir?</h4>
                  <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent">Gözleri direkt ışıktan özel gözlüklerle koruma şartı ile tüm vücut bölgelerindeki tüylere uygulanabilir. Yalnızca göz çukuru içine ve kulak deliği içine yapılmamaktadır.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"45rem",marginBottom:"3rem"}}>
                  <img src={b2} className="d-block img-responsive blogPhoto" title="Kayseri Lazer Epilasyon" alt="Kayseri Lazer Epilasyon"></img>
                  <h4 className="blogTitle">Lazer ışını nedir, ciltte nasıl bir etki yaratır?</h4>
                  <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent">"Light Amlification by Stimulated Emmition of Radiation" kısaca lazer (laser) ışını, bildiğimiz ışıktan farklı olarak ışığın tek dalga boyunda düz bir demet halinde yayılmasıdır. Lazer ışını doku üzerine düştüğünde dokunun özelliklerine bağlı olarak üç farklı olay gerçekleşmektedir.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"45rem",marginBottom:"3rem"}}>
                  <img src={b3} className="d-block img-responsive blogPhoto" title="Kayseri Lazer Epilasyon" alt="Kayseri Lazer Epilasyon"></img>
                  <h4 className="blogTitle">Leke ve yanık riski var mı ?</h4>
                  <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent">Deriye rengini veren melanin pigmenti fazla ise yani,cilt esmer veya bronzsa etkilenme riski vardır. Bu nedenle koyu renkli ciltlerde ve güneş banyosundan sonra yapılan uygulamalarda, lazer öncesinde test atışı yapılır. Test atışında komplikasyon görülmesse lazer geçilebilir.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"45rem",marginBottom:"3rem"}}>
                  <img src={b4} className="d-block img-responsive blogPhoto" title="Kayseri Lazer Epilasyon" alt="Kayseri Lazer Epilasyon"></img>
                  <h4 className="blogTitle">Lazer Epilasyonda Başarıyı etkileyen faktörler nelerdir?</h4>
                  <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent">* Uygulama yapılan bölgedeki Kıl koyu ve kalınsa sonuç daha iyidir.Çünkü kalın kıl yeterli enerjiyi tutabilir.Bu sayede kıl köküne iletilen yüksek ısı kökü daha kuvvetli tahrip eder.
                    <br/>  * İyi ve etkin bir soğutma sistemi etkin dozları kullanmaya imkan verir ve başarıyı arttırır.Komplikasyon oranını düşürür.
                    <br/>  * Uygulanan vücut bölgesi başarıyı etkiler. Yüz bölgesi ve kollar problemli bölgelerdir.Koltukaltı genital,bacak bölgesi en iyi cevap alınan bölgelerdir.
                    <br/>  * Derin yerleşimli sırt ve göğüs bölgelerinde de bazen sorun yaşanabilir.
                    <br/>  * Kişinin genetik yapısı ve kıl yapısı bu parametreleri etkileyebilir.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"45rem",marginBottom:"3rem"}}>
                  <img src={b5} className="d-block img-responsive blogPhoto" title="Kayseri Lazer Epilasyon" alt="Kayseri Lazer Epilasyon"></img>
                  <h4 className="blogTitle">Lazer`in uygulanması ne kadar sürer?</h4>
                  <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent">Lazer epilasyonda sure kullanılan cihazda cihaza değişmektedir.Ancak son jenerasyon lazerlerle Dudak üstü 1 dakikada, her iki koltuk altı 2-3 dakikada temizlenir. Tüm bacak ise ortalama 40-45 dakika sürmektedir.</p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12 blogtemplate" style={{height:"45rem",marginBottom:"3rem"}}>
                  <img src={b6} className="d-block img-responsive blogPhoto" title="Kayseri Lazer Epilasyon" alt="Kayseri Lazer Epilasyon"></img>
                  <h4 className="blogTitle">Yaz aylarında Lazer epilasyon ( Lazerli Epilasyon ) uygulaması yapılabilir mi?</h4>
                  <div className="blogScrollText" style={{height:"200px",width:"100%",overflow:"auto",padding:"1rem"}}><p class="blogContent">Tam koruma sağlayan, yüksek faktörlü güneş kremleri kullanılarak özellikle Nd-Yag türü lazerlerle lazer`e yaz aylarında da devam edilebilir. </p>
                  </div>
                </div>


       
                
            </div>
          </div>

        </div>
            
      
    )
}
