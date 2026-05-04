import Link from 'next/link';
import { neighborhoods } from '@/lib/constants';
import { Button } from '../ui/button';
import { MapPin } from 'lucide-react';

export default function NeighborhoodLinks() {
  return (
    <section className="py-16 lg:py-24 bg-primary/5">
      <div className="container text-center">
        <MapPin className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">Tüm Mahallelere Servis</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-xl">
          Güzelbahçe'nin neresinde olursanız olun, bir telefon uzağınızdayız.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {neighborhoods.map((n) => (
            <Button asChild variant="outline" key={n} className="bg-background transition-all hover:bg-primary hover:text-primary-foreground">
              <Link href={`/cilingir/${n}`}>
                {n.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
