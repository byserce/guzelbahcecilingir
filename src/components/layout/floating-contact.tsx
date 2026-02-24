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
      <Button asChild size="lg" className="h-auto w-full py-2">
        <a href={CILINGIR_PHONE_LINK} className="flex items-center justify-center gap-3">
            <Phone className="h-6 w-6" />
            <div className="flex flex-col items-center justify-center text-center leading-tight">
                <span className="text-lg font-bold">Hemen Ara</span>
                <span className="text-sm font-medium">{CILINGIR_PHONE_NUMBER}</span>
            </div>
        </a>
      </Button>
    </div>
  );
}
