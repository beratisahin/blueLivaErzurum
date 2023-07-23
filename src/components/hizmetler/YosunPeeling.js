import "./Hizmet.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle";
import Title from "../title/Title";
import y1 from "./8.webp";
import y2 from "./9.webp";
import y3 from "./10.webp";

export default function YosunPeeling() {
  useDocumentTitle("Erzurum Yosun Peeling");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <Title page_title="Yosun Peeling" />

        <div className="card-body col-12" style={{ padding: "3rem" }}>
          <br />
          <h4>
            <strong>Yosun Peeling Nedir? Nasıl Yapılır?&nbsp;</strong>
          </h4>
          <p class="hizmetyazi">
            Biyolojik peeling uygulamalarından biri olan yosun peeling (algea
            peeling); 12 Deniz yosunundan oluşan bir İçeriğe sahiptir. Hafif
            dokunuşlarla yapılan masajla cilt altına itilir ve ürün 3,5
            milimetre cilt altına inerek 72 saat çalışarak mucizevi etkisini
            gösterir. Cildin pH dengesini, asidik bir ürün içermediği için
            bozmadan yapılandırarak yeni hücre oluşumuna yardımcı olur. Bu
            bakımı yaparken cildin doğal iyileştirme prosesini devreye soktuğu
            için naturel bir şekilde cilt altında bir iyileştirme ,hücre
            yenileme hızını arttırma , hücre bariyerlerini kuvvetlendirme,
            elastin ve kolajen üretimini arttırmak üzere Cilt de yaşanan Problem
            her ne ise o problemi iyileştirmek üzere bir tür savaş başlatmış
            olur. Bu bakımın en güzel özelliklerinden biri de uygulama
            protokollerini değiştirerek Her yaş grubuna, hassas cilt tiplerine,
            hamilelerde, kuperozlu hatta rozasea hassasiyeti olan ciltlerde bile
            kullanabilme imkanı sunmasıdır.
          </p>

          <h4>
            <strong>Uygulamadan sonra dikkat edilmesi gerekenler:&nbsp;</strong>
          </h4>
          <p class="hizmetyazi">
            Bol su içilmesi gerekir, Uygulama sonrası ciltte yoğun bir kuruma
            söz konusu olacağı için işlemin devam ürünü olan oksijen jel ürününü
            uzmanın önerdiği şekilde düzenli olarak kullanılmalıdır. Tabii ki
            uygulamadan sonra cilt bariyerlere zayıflayacağım dan önerilen güneş
            koruyucu ürününü kullanmayı esinlikle ihmal etmemek
            gerekmektedir.(Mümkünse 3 saatte bir sürülmesi önerilir.) Problemin
            yoğunluğuna ve özelliğine bağlı olarak önerilen seans sayıları
            tamamlanmalıdır.
          </p>
          <div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <img
                class="yImg"
                title="Erzurum Yosun Peeling"
                alt="Yosun Peeling"
                src={y1}
              ></img>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <img
                class="yImg"
                title="Erzurum Yosun Peeling"
                alt="Yosun Peeling"
                src={y2}
              ></img>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 col-12">
              <img
                class="yImg"
                title="Erzurum Yosun Peeling"
                alt="Yosun Peeling"
                src={y3}
              ></img>
            </div>
          </div>
          <h4>
            <strong>
              Allgea peelingin etki ettiği cilt problemleri nelerdir?&nbsp;
            </strong>
          </h4>
          <p class="hizmetyazi">
            Akne problemleri, Akne izleri ve skarlar, Güneşin neden olduğu
            hasarlar, Siyah noktalar, Açık ve dolu gözenekler, Yaşlılık
            lekeleri, İnce kırışıklıklar, Hiper pigmentasyon, Ton eşitsizliği vb
            Sayılabilir.
          </p>

          <h4>
            <strong>Allgea peelingin faydaları nelerdir?&nbsp;</strong>
          </h4>
          <p class="hizmetyazi">
            Cildi temizler, Hücre yenilenmesini uyarır, Kollajen ve elastin
            üretmek için fibroblastlar ı uyarır, Sebum üretimini azaltır ve
            bakterilerle savaşır, Langerhan hücrelerini uyarır, Pigmentasyon
            lekelerini normal değiştirir, Cildin yapısını normal değiştirir.
          </p>
        </div>
      </div>
    </div>
  );
}
