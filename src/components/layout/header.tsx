import Link from 'next/link';
import { KeyRound, Phone } from 'lucide-react';
import { CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_LINK, CILINGIR_PHONE_NUMBER } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center gap-2 font-black text-primary text-xl">
          <KeyRound className="h-6 w-6" />
          <span className="hidden sm:inline">{CILINGIR_BUSINESS_NAME}</span>
          <span className="sm:hidden">Güzelbahçe Çilingir</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="outline" className="h-auto py-2 px-4">
            <a href={CILINGIR_PHONE_LINK} className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <div className="flex flex-col text-left leading-tight">
                <span className="font-semibold">Hemen Ara</span>
                <span className="text-xs text-muted-foreground">{CILINGIR_PHONE_NUMBER}</span>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
