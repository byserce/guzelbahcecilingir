import { Building2 } from 'lucide-react';

interface LocalExpertiseProps {
    neighborhood: string;
}

const localDetails: { [key: string]: { focus: string, content: string } } = {
  yelki: {
    focus: "Yelki Kavşağı, Kooperatif Evleri, Yelki Pazar Yeri",
    content: "<strong>Yelki kavşağı</strong> ve çevresindeki sitelere en hızlı ulaşan ekibiz. Yelki’nin dar sokaklarını ve site girişlerini biliyoruz, trafiğe takılmadan ara yolları kullanarak <strong>15 dakikada</strong> yanınızdayız."
  },
  kahramandere: {
    focus: "Villa Bölgesi, Lüks Siteler, Güvenlikli Geçişler",
    content: "<strong>Kahramandere</strong> villalar bölgesinde yüksek güvenlikli kilit değişimi, dijital kilit montajı ve alarm sistemleri konusunda uzmanız. Akıllı kilit sistemleriniz ve özel villa kapılarınız için profesyonel, hasarsız çözümler sunuyoruz."
  },
  siteler: {
    focus: "Sahil Yolu, Apartman Yoğunluğu, Eski Tip Kilitler",
    content: "<strong>Siteler mahallesi</strong> sahil şeridindeki binaların kapıları, neme ve tuza maruz kaldığı için sık sık arızalanabilir. Paslanmaya dayanıklı dış kapı kilitleri ve otomatik kapı hidrolik yayı montajı hizmetimizle komşularınızın yanındayız."
  },
  yalı: {
    focus: "Balıkçı Barınağı, Gece Mekanları, Acil Servis",
    content: "<strong>Yalı mahallesinde</strong> gece saatlerinde anahtarınızı mı kaybettiniz? Özellikle Güzelbahçe balıkçı barınağı ve sahil restoranları civarındaki nöbetçi ekibimizle dakikalar içinde kapınızı açıyoruz. Gece servisimizle mağduriyetinizi anında gideriyoruz."
  },
  maltepe: {
    focus: "Okullar Bölgesi, Belediye Civarı",
    content: "<strong>Maltepe mahallesi</strong> ve Güzelbahçe Belediye binası çevresinde her model kapı ve kilit için 7/24 orijinal yedek parça garantili servis sunuyoruz. Okul ve resmi dairelerin yoğun olduğu bu bölgede hızlı ve güvenilir hizmet veriyoruz."
  },
  çelebi: {
    focus: "Yeni Yapılaşma, İnşaat Projeleri",
    content: "<strong>Çelebi mahallesindeki</strong> yeni yapılaşma ve modern inşaat projelerinde kullanılan yeni nesil çelik kapıların karmaşık kilit mekanizmalarına hakim uzman ekibimizle hizmetinizdeyiz. Garantili montaj ve servis sağlıyoruz."
  },
  atatürk: {
    focus: "Merkez Çarşı, Esnaf Yoğunluğu",
    content: "<strong>Atatürk mahallesi</strong> çarşı merkezindeki esnafımıza ve sakinlerimize özel, hızlı anahtar kopyalama, kepenk ve iş yeri kilit sistemleri ve barel değişimi hizmeti veriyoruz. Ticari işletmelerin güvenlik ihtiyaçlarına yönelik çözümler sunuyoruz."
  }
};


export default function LocalExpertise({ neighborhood }: LocalExpertiseProps) {
  const formattedNeighborhood = neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1);
  const detail = localDetails[neighborhood];
  const defaultContent = `Güzelbahçe'nin tüm sokak ve caddelerini avucumuzun içi gibi biliyoruz. <strong>${formattedNeighborhood}</strong> mahallesindeki konumunuza motorlu ekiplerimizle dakikalar içinde ulaşıyoruz.`;
    
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
            <Building2 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{formattedNeighborhood} Mahallesine Hakimiyet</h2>
            {detail && <p className="mt-2 text-sm text-muted-foreground font-semibold tracking-wide">Odak Alanlarımız: {detail.focus}</p>}
            <div className="prose prose-lg mx-auto mt-6 text-muted-foreground">
                <p dangerouslySetInnerHTML={{ __html: detail ? detail.content : defaultContent }} />
                <p>
                    İster ana caddede olun, ister ara sokakta, size en hızlı ve en güvenilir hizmeti sunma garantisi veriyoruz. 
                    Yerel bilgi birikimimiz, acil durumlarda zaman kaybetmememizi sağlar.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
