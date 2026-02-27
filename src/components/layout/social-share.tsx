'use client';

import { useEffect, useState } from 'react';
import { Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from '@/components/icons/whatsapp-icon';
import { CILINGIR_BUSINESS_NAME } from '@/lib/constants';

export default function SocialShare() {
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  if (!pageUrl) {
    return null;
  }

  const encodedUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(`Güvenilir çilingir hizmeti için ${CILINGIR_BUSINESS_NAME}'ni tavsiye ediyorum!`);

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      className: 'bg-[#1877F2] hover:bg-[#1877F2]/90',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`,
      className: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/90',
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon className="h-5 w-5" />,
      url: `https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`,
      className: 'bg-whatsapp hover:bg-whatsapp/90',
    },
  ];

  return (
    <div>
      <h3 className="font-bold">Sitemizi Paylaşın</h3>
      <div className="mt-4 flex gap-2">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            asChild
            size="icon"
            className={`${social.className} text-white`}
          >
            <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${social.name}`}>
              {social.icon}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
