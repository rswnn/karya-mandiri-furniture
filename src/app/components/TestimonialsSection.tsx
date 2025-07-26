const testimonials = [
  { name: "Adriansyah", area: "Citayam", text: "Saya suka banget hasilnya! Rapi dan presisi. Puas banget!" },
  { name: "Hj. Firmansyah", area: "Pondok Gede", text: "Tim kami sangat profesional. Tepat waktu dan hasil memuaskan." },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Testimoni Pelanggan</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 italic">“{t.text}”</p>
            <p className="mt-4 font-semibold text-orange-600">{t.name} – {t.area}</p>
          </div>
        ))}
      </div>
    </section>
  );
}