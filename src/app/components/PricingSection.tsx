const packages = [
  { name: "Basic", price: "1.5", features: [  "Blokmill 18mm",
  "Engsel Slow Motion",
  "Rel Double Track STD",
  "Rak Piring Kabinet",
  "Atas/Bawah STD",
  "Rak Sendok STD",
  "Edging",
  "Finishing HPL",
  "Solid/Matte"] },
  { name: "Premium", price: "2.0", features: [  "Multiplek 18mm",
  "Engsel Slow Motion",
  "Rel Double Track Slow Motion/Tip On",
  "Rak Piring Kabinet Atas & Bawah Stainless",
  "Rak Sendok Stainless",
  "Edging",
  "Finishing HPL",
  "Solid/Matte/Glossy",
  "Downlight/LED strip"] },
  { name: "Luxury", price: "2.5", features: [  "PVC Board 18mm",
  "Engsel Slow Motion",
  "Rel Double Track Slow Motion/Tip On",
  "Rak Piring Kabinet Atas & Bawah Stainless",
  "Rak Sendok Stainless",
  "Edging",
  "Finishing HPL",
  "Solid/Matte/Glossy",
  "Downlight/LED strip"] },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Paket Harga</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, i) => (
          <div key={i} className="border p-6 rounded-xl shadow text-left">
            <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
            <p className="text-xl text-orange-600 font-bold mb-4">Rp {pkg.price} jt / m</p>
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}