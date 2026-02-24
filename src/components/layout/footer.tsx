import Link from 'next/link';
import { CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_NUMBER, neighborhoods } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">{CILINGIR_BUSINESS_NAME}</h3>
            <p className="mt-2 text-muted-foreground">Güzelbahçe ve çevresinde profesyonel çilingir hizmeti.</p>
            <div className="mt-4">
              <p className="font-semibold">Telefon:</p>
              <a href={`tel:${CILINGIR_PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-primary">{CILINGIR_PHONE_NUMBER}</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Hizmet Bölgelerimiz</h3>
            <ul className="mt-4 space-y-2">
              {neighborhoods.map((n) => (
                <li key={n}>
                  <Link href={`/cilingir/${n}`} className="text-muted-foreground hover:text-primary">
                    {n.charAt(0).toUpperCase() + n.slice(1)} Çilingir
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Hızlı Menü</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/#services" className="text-muted-foreground hover:text-primary">Hizmetlerimiz</Link></li>
              <li><Link href="/#faq" className="text-muted-foreground hover:text-primary">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/hakkimizda" className="text-muted-foreground hover:text-primary">Hakkımızda</Link></li>
              <li><Link href="/gizlilik-politikasi" className="text-muted-foreground hover:text-primary">Gizlilik Politikası</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} {CILINGIR_BUSINESS_NAME}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
