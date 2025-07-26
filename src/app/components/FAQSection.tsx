const faqs = [
  { q: "Bisa desain sendiri?", a: "Ya, tim desainer kami akan bantu mewujudkan desain Anda." },
  { q: "Berapa lama pengerjaan?", a: "Estimasi 4–6 minggu sejak desain disetujui." },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Pertanyaan Umum</h2>
      <div className="max-w-4xl mx-auto space-y-4 text-left">
        {faqs.map((f, i) => (
          <div key={i}>
            <h4 className="font-semibold text-lg">{f.q}</h4>
            <p className="text-gray-700">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}