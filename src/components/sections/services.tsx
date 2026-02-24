import Image from 'next/image';
import { services } from '@/lib/constants';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-card">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Profesyonel Hizmetlerimiz</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Kapıda kalma derdine son! Her türlü kilit ve anahtar sorununuz için yanınızdayız.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const serviceImage = PlaceHolderImages.find((img) => img.id === service.image);
            return (
              <Card key={service.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {serviceImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={serviceImage.imageUrl}
                      alt={`Güzelbahçe ${service.title} hizmeti`}
                      fill
                      className="object-cover"
                      data-ai-hint={serviceImage.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
