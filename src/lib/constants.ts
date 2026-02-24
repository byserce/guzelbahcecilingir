import { ShieldCheck, Clock, Award, Car, KeyRound, Lock, Wrench, Quote } from 'lucide-react';

export const CILINGIR_BUSINESS_NAME = 'Güzelbahçe Çilingir';
export const CILINGIR_PHONE_NUMBER = '0551 890 19 79';
export const CILINGIR_PHONE_LINK = 'tel:+905518901979';
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
  "küçükkaya"
];

export const services = [
  {
    icon: KeyRound,
    title: 'Çelik Kapı Açma',
    description: 'Markası ne olursa olsun çelik kapılarınız maymuncuk ve özel ekipmanlarla hasarsız açılır.',
    image: 'door-lock'
  },
  {
    icon: Car,
    title: 'Oto Çilingir',
    description: 'Aracınızın anahtarını içeride unuttuğunuzda veya kaybettiğinizde arabanızın kapısını zarar vermeden açıyoruz.',
    image: 'car-lock'
  },
  {
    icon: Lock,
    title: 'Kasa Çilingiri',
    description: 'Ev ve iş yerlerinizdeki şifreli veya anahtarlı her marka çelik kasayı özel ekipmanlarla güvenle açıyoruz.',
    image: 'safe-lock'
  },
  {
    icon: Wrench,
    title: 'Kilit & Barel Değişimi',
    description: 'Güvenliğiniz için eski kilitlerinizi tuzaklı, yüksek güvenlikli Kale Kilit barel (göbek) ile değiştiriyoruz.',
    image: 'key-duplication'
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
    title: 'Resmi İşletme',
    description: 'Vergi levhalı, oda kaydı bulunan güvenilir ve profesyonel hizmet.'
  }
];

export const faqs = [
    {
      question: 'Güzelbahçe çilingir fiyatları ne kadar?',
      answer: 'Çilingir hizmet ücretleri; yapılacak işleme (çelik kapı açma, kilit göbeği/barel değişimi, oto çilingir), mesafeye ve günün saatine göre değişir. Fiyatlarımız şeffaftır ve kötü sürprizlerle karşılaşmazsınız. En uygun fiyat teklifi için bizi arayarak net bilgi alabilirsiniz.'
    },
    {
      question: 'Pazar günü açık çilingir bulabilir miyim?',
      answer: 'Evet, kesinlikle. Güzelbahçe\'de pazar günleri, resmi tatiller ve bayramlar da dahil olmak üzere 7 gün 24 saat nöbetçi çilingir olarak hizmet veriyoruz. Acil durumlarda bir telefon kadar yakınız.'
    },
    {
      question: 'Anahtarım kapının arkasında kaldı, kapı nasıl açılır?',
      answer: 'Bu çok yaygın bir durum. Profesyonel ekibimiz özel çilingir aletleri (maymuncuk vb.) kullanarak kapınıza veya kilidinize hiçbir zarar vermeden işlemi 1-2 dakika içinde gerçekleştirir. Bu işlem hassasiyet gerektirir, tecrübeli ustalarımız bu konuda uzmandır.'
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
    comment: 'Gece yarısı kapıda kaldım, 10 dakika içinde gelip kapıyı hasarsız açtılar. Gerçekten çok hızlı ve profesyonel bir ekip.'
  },
  {
    name: 'Elif K.',
    location: 'Kahramandere',
    comment: 'Arabamın anahtarını içinde unutmuştum. Yarım saat içinde geldiler ve arabama tek bir çizik bile atmadan kapıyı açtılar. Teşekkürler!'
  },
  {
    name: 'Mustafa C.',
    location: 'Yalı Mahallesi',
    comment: 'Taşındığım için kilitleri değiştirmek istedim. Hem uygun fiyat verdiler hem de çok kaliteli tuzaklı kilit taktılar. Güvenle tavsiye ederim.'
  }
];
