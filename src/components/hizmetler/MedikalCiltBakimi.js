import "./Hizmet.css";
import React from 'react'
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";

export default function MedikalCiltBakimi() {
    useDocumentTitle('Erzurum Cilt Bakımı');
    return (
        <div className="col-12">
            <div className="card m-4" style={{align:"center",backgroundColor:"#f8f7fb",borderRadius:"5px"}}>
               <Title 
                    page_title="Medikal Cilt Bakımı"
               />
                
                <div className="card-body col-12" style={{padding:"3rem"}}>
                    <br/>
                    <h4><strong>Medikal Cilt Bakımı Nedir?&nbsp;</strong></h4>
                    <p class="hizmetyazi">Medikal cilt bakımı cildi üst katmandan başlayarak birikmiş kirden arındırır, derinlemesine nemlendirir, sebum dengesini yeniden kurması için cilde yardımcı olur.
                                            Dermatolojik kozmetikler kullanılarak yapılır. Cilt tipine, kişinin yaşına, cildin problem ve gereksinimlerine göre uygulama ve ürünler değişiklik gösterebilir. Her yaştan kadın ve erkeğin, cilt sağlığını korumak için alışkanlık edinmesi gereken, hiçbir yan etkisi olmadığı gibi yaşlanma karşıtı koruma sağlayan, güzellik sırlarının liste başında yer alan cilt bakım sistemidir. Medikal cilt bakımı, cildin yaşlanmasını yavaşlatan, temizleyen ve elastikiyetini geri kazandıran cilt uygulamalarının tamamı olarak görülebilir.
                                            Epidermisin üst katmanlarında biriken kir ve makyaj artığı, cildin salgıladığı yağla birleştiğinde, zamanla gözenekleri tıkar. Nefessiz kalan deri yeterince kendi kendini temizleyemez hale gelir. Sebum dengesinin bozulması birçok cilt probleminin başlangıç noktasıdır diyebiliriz. Aşırı yağlanma ya da kuruma gibi yaygın cilt sorunlarına neden olur ki, yaşlanmanın etkileri, sebum dengesi bozulmuş bir ciltte çok daha kolay ve hızlı ortaya çıkar. </p> 
                        
                    <h4><strong>Medikal Cilt Bakımının Faydaları Nelerdir?&nbsp;</strong></h4>
                    <p class="hizmetyazi">
                    Düzenli olarak yapılan medikal cilt bakımı sayesinde kan dolaşımı ve lenf drenaj sistemi aktif olduğu için, cilt kendi kendini yenilemeyi sürdürür. Deri altı dokularda oksijen oranı yeterli olduğundan, cilt canlılığı koruyabilir. Medikal cilt bakımın saymakla bitmez faydalarından bazıları şunlardır: 
                    <ul style={{paddingLeft:"3rem"}}>
                        <li>Anti-aging koruma sağlar.</li>
                        <li>Gözenek temizliği ile cildin nefes almasına yardımcı olur.</li>
                        <li>Kan dolaşımı ve lenf sistemini aktif hale getirir. </li>
                        <li>Sebum dengesini korumaya yardımcı olur. </li>
                        <li>Cilt lekelerine karşı koruma saglar.</li>
                        <li>Elastikiyet kaybını önler.</li>
                    </ul>
                    Cilt tipine uygun ürünler, uzmanlar tarafından uygulandığı için medikal cilt bakımı cildinizi tahrişten korur, yanlış kozmetik kullanımından kaynaklanan akne, leke gibi problemlerin yaşanmasının önüne geçer ve siz de cildinizi daha iyi tanımış olursunuz. 
                    </p>


                    <h4><strong>Medikal Cilt Bakımı Ne Sıklıkla Yapılmalı?&nbsp;</strong></h4>
                    <p class="hizmetyazi">Yoğun bir akne dönemi, siyah nokta sorunu gibi durumlar söz konusu ise ve daha önce medikal cilt bakımı yapılmamış bir ciltten bahsediyorsak, başlangıçta birkaç sean boyunca iki hafta arayla, medikal cilt bakımı yapılabilir.

Yoğun makyaj uygulamak durumunda olan ciltler için iki hafta, 21 gün gibi periyotlar tercih edilebilir.

Düzenli cilt bakımı rutini için ideal olan, ayda bir medikal cilt bakımı yaptırmak ve cildinizin ihtiyacına uygun diğer bakımlarla, medikal cilt bakımını kombine etmektir. Böylece hem medikal bakımdan hem de örneğin peeling uygulamasından çok daha etkili bir sonuç elde etmiş oluruz.</p> 


                    <h4><strong>Medikal Cilt Bakımının Aşamaları&nbsp;</strong></h4>
                    <p class="hizmetyazi">Genel bir prosedürü olsa da medikal cilt bakımı kişiye özel bir uygulamadır çünkü her cilt tipinin gereksinimleri ve sorunları farklıdır. Ergenlik çağında akne problemi olan bir cilt ile yoğun çalışma temposunda, her gün makyaj yapılan, ileri yaşta bir cilt, aynı bakımdan fayda görmeyebilir.</p> 

                    <h4><strong>Medikal Cilt Bakımı Nasıl Yapılır?&nbsp;</strong></h4>
                    <p class="hizmetyazi">Medikal cilt bakımı klinik ortamda, cilt uzmanları tarafından gerçekleştirilir. Profesyonel cilt bakımının aşamalarını sıralarsak, nasıl yapıldığını daha görünür şekilde ifade etmiş oluruz: 
                        <ul style={{paddingLeft:"3rem"}}>
                            <li>Cilt yüzeyi, epidermis, cilt tipine uygun ürünlerle temizlenir.</li>
                            <li>Gözeneklerin nazikçe temizlenebilmesi için buhar terapi uygulanır.</li>
                            <li>Siyah ve beyaz noktalar temizlenir.  </li>
                            <li>Cildin tamamına, dekolte bölgesine kadar gözenekler temizlenir. </li>
                            <li>Maske, radyofrekans ya da diğer cilt bakımı sistemlerinden biri, kolajen üretimini tetiklemek üzere kullanılır. </li>
                            <li>Cilt, derinlemesine nemlendirilir.</li>
                        </ul>
                    </p> 

                    






                </div>
                
            </div>
            
        </div>
    )
}



