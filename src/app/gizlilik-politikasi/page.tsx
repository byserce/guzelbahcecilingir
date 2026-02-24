import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="prose mx-auto max-w-3xl">
        <h1>Gizlilik Politikası</h1>
        <p>
          Güzelbahçe Çilingir olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine önem veriyoruz. Bu web sitesi, bir yerel işletme olan çilingir servisimizin tanıtımı amacıyla kurulmuştur.
        </p>
        
        <h2>Hangi Bilgileri Topluyoruz?</h2>
        <p>
          Bu web sitesi, kullanıcılarından doğrudan kişisel bilgi (isim, e-posta, telefon numarası vb.) toplamaz. İletişim kurmak için sağlanan telefon numaraları ve bağlantılar, sizin tarafınızdan başlatılan eylemlerdir.
        </p>
        <p>
          Sitemizin performansını analiz etmek ve kullanıcı deneyimini iyileştirmek amacıyla üçüncü taraf hizmetler (örneğin Google Analytics) aracılığıyla anonim veriler toplanabilir. Bu veriler, ziyaret ettiğiniz sayfalar, sitede kalma süreniz gibi istatistiksel bilgiler içerir ve kişisel kimliğinizi ortaya çıkarmaz.
        </p>

        <h2>Çerezler (Cookies)</h2>
        <p>
          Web sitemiz, temel işlevsellik ve analiz amacıyla çerezler kullanabilir. Çerezler, tarayıcınızda saklanan küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz.
        </p>
        
        <h2>Google Haritalar</h2>
        <p>
          Sitemizde, hizmet bölgemizi göstermek amacıyla Google Haritalar'dan gömülü bir harita bulunmaktadır. Google Haritalar'ın kullanımı, Google'ın kendi gizlilik politikasına tabidir.
        </p>

        <h2>Değişiklikler</h2>
        <p>
          Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacaktır.
        </p>

        <p className="text-sm text-muted-foreground">Son Güncelleme: 1 Ağustos 2024</p>
      </div>
    </div>
  );
}
