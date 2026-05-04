import Link from 'next/link';
import { KeySquare, Phone } from 'lucide-react';
import { CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_LINK, CILINGIR_PHONE_NUMBER } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center gap-2 font-black text-primary text-xl">
          <KeySquare className="h-6 w-6" />
          <span className="hidden sm:inline">{CILINGIR_BUSINESS_NAME}</span>
          <span className="sm:hidden">Güzelbahçe Çilingir</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <a href={CILINGIR_PHONE_LINK} className="hidden md:flex flex-col items-end mr-2">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">7/24 Acil Hattı</span>
            <span className="text-lg font-black text-primary">{CILINGIR_PHONE_NUMBER}</span>
          </a>
          <Button asChild size="lg" className="h-auto py-2.5 px-6 rounded-full shadow-lg transition-all hover:scale-105">
            <a href={CILINGIR_PHONE_LINK} className="flex items-center gap-3">
              <Phone className="h-5 w-5 fill-current" />
              <span className="font-bold">Hemen Ara</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
