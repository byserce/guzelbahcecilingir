import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TriangleAlert, Home, Phone } from 'lucide-react';
import { CILINGIR_PHONE_LINK } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center py-12">
      <TriangleAlert className="h-16 w-16 text-destructive" />
      <h1 className="mt-6 text-4xl font-black md:text-6xl">404 - Sayfa Bulunamadı</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir. Endişelenmeyin, çilingir hizmeti için doğru yerdesiniz.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href={CILINGIR_PHONE_LINK}>
            <Phone className="mr-2 h-5 w-5" />
            Acil Çilingir Çağır
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Ana Sayfaya Dön
          </Link>
        </Button>
      </div>
    </div>
  );
}
