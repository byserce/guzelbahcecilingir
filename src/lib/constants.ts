import { ShieldCheck, Clock, Award, Car, KeyRound, Lock, Wrench } from 'lucide-react';

export const CILINGIR_BUSINESS_NAME = 'Güzelbahçe Çilingir';
export const CILINGIR_PHONE_NUMBER = '0551 890 19 79';
export const CILINGIR_PHONE_LINK = 'tel:+905518901979';
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
      answer: 'Çilingir hizmet ücretleri yapılacak işleme (çelik kapı açma, kilit göbeği değişimi, oto çilingir), mesafeye ve günün saatine göre değişir. En uygun fiyat teklifi ve güncel çilingir fiyatları için bizi arayarak net bilgi alabilirsiniz.'
    },
    {
      question: 'Pazar günü ve gece nöbetçi çilingir hizmetiniz var mı?',
      answer: 'Evet, Güzelbahçe\'de pazar günleri, resmi tatiller ve geceleri de dahil olmak üzere 7/24 nöbetçi çilingir olarak hizmet veriyoruz. Acil durumlarda bir telefon kadar yakınız.'
    },
    {
      question: 'Anahtarım kapının arkasında kaldı, kapıya zarar gelir mi?',
      answer: 'Hayır. Profesyonel ekibimiz özel çilingir aletleri kullanarak kapınıza veya kilidinize hiçbir zarar vermeden işlemi gerçekleştirir. Kapı açma işlemleri hassasiyet gerektirir ve tecrübeli ustalarımız bu konuda uzmandır.'
    },
    {
      question: 'En güvenli kapı kilidi hangisi? Kilit değişimi yapıyor musunuz?',
      answer: 'Güvenliğiniz için tuzaklı, alarmlı ve yüksek güvenlikli silindirlere sahip kilitleri öneriyoruz. Kale Kilit, Yale gibi markaların en iyi modelleri stoklarımızda mevcuttur. Adresinizde kilit değişimi ve göbek değişimi hizmeti de sunuyoruz.'
    }
];
