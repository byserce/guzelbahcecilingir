import { ShieldCheck, Clock, Award, Car, KeyRound, Lock, Wrench } from 'lucide-react';

export const CILINGIR_PHONE_NUMBER = '0551 890 19 79';
export const CILINGIR_PHONE_LINK = 'tel:+905518901979';
export const CILINGIR_BUSINESS_NAME = 'Güzelbahçe Jet Çilingir';
export const CILINGIR_DOMAIN = 'guzelbahcecilingir.com';

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
    title: 'Kapı Açma',
    description: 'Her türlü kapı ve kilit sorunlarınızda 7/24 yanınızdayız. Hızlı ve hasarsız çözümler.',
    image: 'door-lock'
  },
  {
    icon: Car,
    title: 'Oto Çilingir',
    description: 'Aracınızın markası ne olursa olsun, kapılarını hasarsız açıyoruz. Anahtarınızı içeride mi unuttunuz?',
    image: 'car-lock'
  },
  {
    icon: Lock,
    title: 'Kasa Çilingiri',
    description: 'Ev ve iş yerlerinizdeki her marka çelik kasayı özel ekipmanlarımızla güvenle açıyoruz.',
    image: 'safe-lock'
  },
  {
    icon: Wrench,
    title: 'Kilit Değişimi',
    description: 'Güvenliğiniz için eski kilitlerinizi Kale Kilit gibi güvenilir markaların yeni modelleriyle değiştiriyoruz.',
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
      answer: 'Fiyatlarımız, yapılacak işleme (kapı açma, kilit değişimi vb.), mesafeye ve günün saatine göre değişiklik göstermektedir. En doğru fiyat bilgisi için lütfen bizi arayın.'
    },
    {
      question: 'Pazar günü açık çilingir bulabilir miyim?',
      answer: 'Evet, işletmemiz pazar günleri de dahil olmak üzere haftanın 7 günü, 24 saat boyunca hizmet vermektedir. Nöbetçi çilingir ekibimiz her an yardıma hazırdır.'
    },
    {
      question: 'Anahtar içeride kaldı, kapı nasıl açılır?',
      answer: 'Kapınıza zarar vermeden profesyonel ekipmanlarla açmak en güvenli yoldur. Kendiniz müdahale etmeye çalışmak kilidinize ve kapınıza daha büyük masraflar çıkarabilir. Bizi arayın, 15 dakikada gelelim.'
    },
    {
      question: 'En güvenli kapı kilidi hangisi?',
      answer: 'Güvenlik seviyesi yüksek, tuzaklı ve maymuncukla açılması zor olan kilitler en güvenlisidir. Kale Kilit, Yale gibi markaların yüksek güvenlikli silindirlerini (göbek) tavsiye ediyoruz. İhtiyacınıza en uygun kilidi birlikte seçebiliriz.'
    }
];
