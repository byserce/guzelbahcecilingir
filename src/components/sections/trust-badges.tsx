import { trustBadges } from '@/lib/constants';

export default function TrustBadges() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Müşteri memnuniyeti ve güvenilirlik bizim için her şeyden önce gelir.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <badge.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{badge.title}</h3>
                <p className="mt-2 text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
