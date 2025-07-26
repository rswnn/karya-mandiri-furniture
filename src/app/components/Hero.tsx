export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[80vh] text-white flex items-center justify-center" style={{ backgroundImage: "url('https://www.bassettfurniture.com/on/demandware.static/-/Sites-bassett-Library/default/dw8109f429/living/2-col-impact-living-clp.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-10 rounded-xl max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Spesialis Furniture Custom</h1>
        <p className="text-lg mb-6">Desain, Produksi & Pemasangan — Satu Layanan Lengkap</p>
        <a href="https://wa.me/6285779902189" className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold">Konsultasi Gratis</a>
      </div>
    </section>
  )
}