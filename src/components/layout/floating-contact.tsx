'use client';
import { Phone } from 'lucide-react';
import { CILINGIR_PHONE_LINK, CILINGIR_WHATSAPP_LINK } from '@/lib/constants';
import { Button } from '../ui/button';
import WhatsAppIcon from '../icons/whatsapp-icon';

export default function FloatingContact() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t bg-background/80 p-2 backdrop-blur-sm md:hidden"
      role="toolbar"
    >
      <Button asChild size="lg" className="w-full text-lg font-bold">
        <a href={CILINGIR_PHONE_LINK} className="flex items-center justify-center gap-3">
          <Phone className="h-5 w-5" />
          <span>Hemen Ara</span>
        </a>
      </Button>
      <Button asChild size="lg" className="w-full text-lg font-bold bg-whatsapp text-white hover:bg-whatsapp/90">
        <a href={CILINGIR_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
          <WhatsAppIcon className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
      </Button>
    </div>
  );
}
