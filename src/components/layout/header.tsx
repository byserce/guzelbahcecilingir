import Link from 'next/link';
import { KeyRound, Phone } from 'lucide-react';
import { CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_LINK, CILINGIR_WHATSAPP_LINK } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from '../icons/whatsapp-icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-black text-primary text-xl">
          <KeyRound className="h-6 w-6" />
          <span className="hidden sm:inline">{CILINGIR_BUSINESS_NAME}</span>
          <span className="sm:hidden">Güzelbahçe Çilingir</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="outline">
            <a href={CILINGIR_PHONE_LINK}>
              <Phone className="mr-2 h-4 w-4" />
              Hemen Ara
            </a>
          </Button>
          <Button asChild className="bg-whatsapp text-white hover:bg-whatsapp/90">
            <a href={CILINGIR_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
