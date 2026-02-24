import Link from 'next/link';
import { KeyRound, Phone } from 'lucide-react';
import { CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_LINK, CILINGIR_PHONE_NUMBER } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-black text-primary text-xl">
          <KeyRound className="h-6 w-6" />
          <span className="hidden sm:inline">{CILINGIR_BUSINESS_NAME}</span>
          <span className="sm:hidden">Jet Çilingir</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <a href={CILINGIR_PHONE_LINK}>
              <Phone className="mr-2 h-4 w-4" />
              {CILINGIR_PHONE_NUMBER}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={CILINGIR_PHONE_LINK}>
              <Phone className="mr-2 h-4 w-4" />
              Hemen Ara
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
