import { ShieldCheck, Clock, Award, Car, KeyRound, Lock, Wrench, Cpu, KeySquare } from 'lucide-react';

export const CILINGIR_BUSINESS_NAME = 'Güzelbahçe Çilingir';
export const CILINGIR_PHONE_NUMBER = '0551 890 19 79';
export const CILINGIR_PHONE_LINK = 'tel:+905518901979';
export const CILINGIR_ALT_PHONE_NUMBER = '0505 036 60 80';
export const CILINGIR_ALT_PHONE_LINK = 'tel:+905050366080';
export const CILINGIR_WHATSAPP_NUMBER = '+905518901979';
const CILINGIR_WHATSAPP_MESSAGE = 'Merhaba, Güzelbahçe Çilingir için yazıyorum.';
export const CILINGIR_WHATSAPP_LINK = `https://wa.me/${CILINGIR_WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(CILINGIR_WHATSAPP_MESSAGE)}`;
export const CILINGIR_DOMAIN = 'guzelbahcecilingir.com';
export const CILINGIR_ADDRESS = 'Yalı Mah. 54. Sok. No:12, 35310 Güzelbahçe/İzmir';

export const neighborhoods = [
  "yelki", 
  "kahramandere", 
  "yalı", 
  "siteler", 
  "maltepe", 
  "çelebi", 
  "atatürk", 
  "payamlı", 
  "küçükkaya",
  "çamlı",
  "mustafa-kemal-pasa",
  "yaka"
];

export const services = [
  {
    icon: KeyRound,
    title: 'Çelik Kapı Açma',
    description: 'Markası ne olursa olsun çelik kapılarınız maymuncuk ve özel ekipmanlarla kapınıza ve kasasına zarar vermeden, hasarsız açılır.',
    image: 'door-lock'
  },
  {
    icon: Car,
    title: 'Oto Çilingir',
    description: 'Aracınızın anahtarını unuttuğunuzda veya kaybettiğinizde, markası ne olursa olsun kapısını özel aletlerle çizmeden açıyoruz.',
    image: 'car-lock'
  },
  {
    icon: Lock,
    title: 'Kasa Çilingiri',
    description: 'Şifreli veya anahtarlı her marka ve model çelik kasayı, özel ekipmanlarımızla yüksek güvenlikli mekanizmasına zarar vermeden açıyoruz.',
    image: 'safe-lock'
  },
  {
    icon: Wrench,
    title: 'Kilit & Göbek Değişimi',
    description: 'Güvenliğiniz için eski kilitlerinizi hırsızlığa karşı tuzaklı, yüksek güvenlikli Kale Kilit göbek (barel) sistemleriyle değiştiriyoruz.',
    image: 'lock-change'
  },
  {
    icon: Cpu,
    title: 'Akıllı Kilit Montajı',
    description: 'Evinize veya ofisinize modern ve güvenli akıllı kilit sistemlerinin montajını ve kurulumunu profesyonelce yapıyoruz.',
    image: 'smart-lock'
  },
];

export const trustBadges = [
  {
    icon: Clock,
    title: '7/24 Hizmet',
    description: 'Günün her saati, haftanın her günü kesintisiz çilingir desteği.'
  },
  {
    icon: ShieldCheck,
    title: 'Garantili Kilit',
    description: 'Kullandığımız tüm kilit ve bareller, üretici garantisi altındadır.'
  },
  {
    icon: Award,
    title: 'Yetkili & Güvenilir',
    description: 'İzmir Anahtarcılar Odası\'na kayıtlı, vergi levhalı, resmi ve güvenilir bir işletmeyiz.'
  }
];

export const faqs = [
    {
      question: 'Güzelbahçe çilingir fiyatları ne kadar?',
      answer: 'Çilingir hizmet ücretleri; yapılacak işleme (çelik kapı açma, kilit göbeği değişimi, oto çilingir), mesafeye ve günün saatine göre değişir. Fiyatlarımız şeffaftır; işleme başlamadan önce size net bir fiyat bilgisi sunarız. Gece tarifemizde küçük bir fark olabilir. En uygun fiyat teklifi için bizi arayabilirsiniz.'
    },
    {
      question: 'Pazar günü açık çilingir bulabilir miyim?',
      answer: 'Evet, kesinlikle. Güzelbahçe\'de pazar günleri, resmi tatiller ve bayramlar da dahil olmak üzere 7 gün 24 saat nöbetçi çilingir olarak hizmet veriyoruz. Acil durumlarda bir telefon kadar yakınız.'
    },
    {
      question: 'Anahtarım kapının arkasında kaldı, kapıya zarar gelir mi?',
      answer: 'Hayır. Bu çok yaygın bir durum. Profesyonel ekibimiz özel çilingir aletleri (maymuncuk vb.) kullanarak kapınıza veya kilidinize hiçbir zarar vermeden işlemi 1-2 dakika içinde gerçekleştirir. Bu işlem hassasiyet ve tecrübe gerektirir.'
    },
    {
      question: 'En güvenli kapı kilidi hangisi?',
      answer: 'Güvenliğiniz için hırsızlığa karşı tuzaklı kilit ve alarmlı silindir (göbek) gibi yüksek güvenlikli ürünleri öneriyoruz. Kale Kilit, Yale gibi markaların en iyi modelleri stoklarımızda mevcuttur. Adresinize gelerek kilit ve barel değişimi hizmeti de sunuyoruz.'
    }
];

export const testimonials = [
  {
    name: 'Ahmet Y.',
    location: 'Yelki Mahallesi',
    comment: 'Gece yarısı 02:30\'da aradım, Yelki\'deki evime 10 dakikada gelip kapıyı tek bir çizik bile olmadan açtılar. Gerçekten çok hızlı ve profesyonel bir ekip.'
  },
  {
    name: 'Elif K.',
    location: 'Kahramandere',
    comment: 'Arabamın anahtarını içinde unutmuştum, üstelik pazar günüydü. Kahramandere merkezine yarım saat içinde geldiler ve arabama zarar vermeden kapıyı açtılar. Minnettarım!'
  },
  {
    name: 'Mustafa C.',
    location: 'Yalı Mah. Balıkçı Barınağı civarı',
    comment: 'Yeni taşındığım için tüm kilitleri değiştirmek istedim. Hem piyasaya göre uygun fiyat verdiler hem de hırsızlığa karşı en güvenli olan Kale Kilit\'in tuzaklı modelini taktılar. Güvenle tavsiye ederim.'
  }
];
