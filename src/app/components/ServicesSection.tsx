const services = [
  { title: "Kitchen Set", desc: "Desain & pemasangan kitchen set modern.", icon: "🍳" },
  { title: "Bedroom Set", desc: "Lemari pakaian, meja rias & ranjang custom.", icon: "🛏️" },
  { title: "Custom Furniture", desc: "Meja, rak, dan kabinet sesuai kebutuhan.", icon: "🪑" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Layanan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}