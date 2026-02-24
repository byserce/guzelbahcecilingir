'use client';
import { Phone } from 'lucide-react';
import { CILINGIR_PHONE_LINK, CILINGIR_PHONE_NUMBER } from '@/lib/constants';
import { Button } from '../ui/button';

export default function FloatingContact() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 p-2 backdrop-blur-sm md:hidden"
      role="toolbar"
    >
      <Button asChild size="lg" className="w-full text-lg font-bold">
        <a href={CILINGIR_PHONE_LINK} className="flex items-center gap-3">
          <Phone className="h-5 w-5" />
          <span>Hemen Ara</span>
        </a>
      </Button>
    </div>
  );
}
