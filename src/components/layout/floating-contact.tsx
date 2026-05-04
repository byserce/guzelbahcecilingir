'use client';
import { Phone } from 'lucide-react';
import { CILINGIR_PHONE_LINK, CILINGIR_PHONE_NUMBER } from '@/lib/constants';
import { Button } from '../ui/button';

export default function FloatingContact() {
  return (
    <div
      className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
      role="toolbar"
    >
      <Button asChild size="lg" className="h-auto w-full py-4 shadow-[0_10px_30px_rgba(34,87,195,0.4)] rounded-2xl bg-primary text-white border border-primary/20 transition-all hover:scale-105 active:scale-95">
        <a href={CILINGIR_PHONE_LINK} className="flex items-center justify-center gap-4">
            <div className="bg-white/20 p-2 rounded-xl">
                <Phone className="h-7 w-7" />
            </div>
            <div className="flex flex-col items-start leading-tight">
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">7/24 Acil Çilingir</span>
                <span className="text-xl font-black">{CILINGIR_PHONE_NUMBER}</span>
            </div>
        </a>
      </Button>
    </div>
  );
}
