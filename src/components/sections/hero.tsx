import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { CILINGIR_PHONE_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface HeroProps {
  title: string;
  subtitle: string;
  altText?: string;
}

export default function Hero({ title, subtitle, altText }: HeroProps) {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={altText || heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-black leading-tight drop-shadow-lg md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200 drop-shadow-md md:text-xl">
          {subtitle}
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold shadow-xl transition-transform hover:scale-105">
          <a href={CILINGIR_PHONE_LINK}>
            <Phone className="mr-2 h-5 w-5" />
            Hemen Arayın
          </a>
        </Button>
      </div>
    </section>
  );
}
