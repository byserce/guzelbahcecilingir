export default function MapSection() {
    return (
      <section id="contact" className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">İletişim ve Adres</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Güzelbahçe ve tüm mahallelerine servisimiz vardır. Konumumuz haritada belirtilmiştir.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-4xl h-[400px] rounded-lg overflow-hidden border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50062.99723783451!2d26.83738596001007!3d38.35824962919747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb98d36323136d%3A0x9d72c11422037a54!2sG%C3%BCzelbah%C3%A7e%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1672522543789!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Güzelbahçe Hizmet Bölgesi"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
