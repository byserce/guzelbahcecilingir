import { Building2 } from 'lucide-react';

interface LocalExpertiseProps {
    neighborhood: string;
}

export default function LocalExpertise({ neighborhood }: LocalExpertiseProps) {
  const formattedNeighborhood = neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1);
    
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
            <Building2 className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">{formattedNeighborhood} Mahallesine Hakimiyet</h2>
            <div className="prose prose-lg mx-auto mt-6 text-muted-foreground">
                <p>
                    Güzelbahçe'nin tüm sokak ve caddelerini avucumuzun içi gibi biliyoruz. 
                    <strong>{formattedNeighborhood}</strong> mahallesindeki konumunuza motorlu ekiplerimizle dakikalar içinde ulaşıyoruz. 
                    İster ana caddede olun, ister ara sokakta, size en hızlı hizmeti sunma garantisi veriyoruz. 
                    Yerel bilgi birikimimiz, acil durumlarda zaman kaybetmememizi sağlar.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
