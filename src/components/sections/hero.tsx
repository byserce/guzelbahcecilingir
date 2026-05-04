'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { CILINGIR_PHONE_LINK, CILINGIR_PHONE_NUMBER, CILINGIR_WHATSAPP_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import WhatsAppIcon from '../icons/whatsapp-icon';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  altText?: string;
}

export default function Hero({ title, subtitle, altText }: HeroProps) {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden text-white">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={altText || heroImage.description}
            fill
            priority
            className="object-cover scale-105"
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
        </div>
      )}
      
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium backdrop-blur-md border border-primary/30"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse" />
            Güzelbahçe Genelinde 15 Dakikada Servis
          </motion.div>
          
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl drop-shadow-2xl">
            {title.split('-')[0]} <br/>
            <span className="text-accent">{title.split('-')[1] || ''}</span>
          </h1>
          
          <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-100/90 md:text-2xl leading-relaxed">
            {subtitle}
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button asChild size="lg" className="h-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_20px_rgba(23,205,237,0.4)] px-8 py-4 text-xl font-black rounded-2xl group">
                <a href={CILINGIR_PHONE_LINK} className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                        <Phone className="h-7 w-7" />
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                        <span className="text-sm opacity-80 font-bold uppercase tracking-wider">Acil Hattı</span>
                        <span>{CILINGIR_PHONE_NUMBER}</span>
                    </div>
                </a>
                </Button>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button asChild variant="outline" size="lg" className="h-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md px-8 py-4 text-lg font-bold rounded-2xl group">
                <a href={CILINGIR_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <WhatsAppIcon className="h-6 w-6 text-green-400" />
                    <span>WhatsApp Destek</span>
                </a>
                </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ArrowRight className="h-8 w-8 rotate-90" />
      </div>
    </section>
  );
}
