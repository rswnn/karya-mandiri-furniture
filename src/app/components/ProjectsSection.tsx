const projects = ["https://ruangdapur.com/wp-content/uploads/2023/06/IMG_3898.jpeg", "https://ruangdapur.com/wp-content/uploads/2023/06/IMG_3900.jpeg", "https://ruangdapur.com/wp-content/uploads/2023/06/IMG_3897.jpeg"];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Portofolio Proyek</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((src, i) => (
          <img key={i} src={src} alt={`Project ${i}`} className="rounded-xl shadow-md" />
        ))}
      </div>
    </section>
  );
}