import { Building2 } from 'lucide-react';

interface LocalExpertiseProps {
    neighborhood: string;
}

const localDetails: { [key: string]: string } = {
  yelki: "<strong>Yelki</strong>'deki konumunuza, özellikle Yelki Migros veya eski belediye binası civarına motorlu ekiplerimizle dakikalar içinde ulaşıyoruz.",
  kahramandere: "<strong>Kahramandere</strong>'nin tüm sokak ve sitelerine hakimiz. Özellikle Mavişehir Modern veya Park Yaşam Mavişehir gibi sitelerdeki konumunuza en hızlı şekilde ulaşıyoruz.",
  yalı: "<strong>Yalı Mahallesi</strong>'nde, balıkçı barınağı veya sahil şeridi fark etmeksizin, size en yakın ekibimizi anında yönlendiriyoruz."
};

export default function LocalExpertise({ neighborhood }: LocalExpertiseProps) {
  const formattedNeighborhood = neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1);
  const detailText = localDetails[neighborhood] || `Güzelbahçe'nin tüm sokak ve caddelerini avucumuzun içi gibi biliyoruz. <strong>${formattedNeighborhood}</strong> mahallesindeki konumunuza motorlu ekiplerimizle dakikalar içinde ulaşıyoruz.`;
    
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
            <Building2 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{formattedNeighborhood} Mahallesine Hakimiyet</h2>
            <div className="prose prose-lg mx-auto mt-6 text-muted-foreground">
                <p dangerouslySetInnerHTML={{ __html: detailText }} />
                <p>
                    İster ana caddede olun, ister ara sokakta, size en hızlı hizmeti sunma garantisi veriyoruz. 
                    Yerel bilgi birikimimiz, acil durumlarda zaman kaybetmememizi sağlar.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
