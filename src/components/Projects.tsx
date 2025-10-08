export default function Projects({ texts }: { texts: { title: string; underConstruction: string; workingOnIt: string } }) {
  const projects = [
    {
      title: texts.underConstruction, // Título dinámico según el idioma
      description: texts.workingOnIt, // Descripción dinámica según el idioma
      link: "#", // No hay enlace porque está en construcción
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-teal-500">{texts.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl shadow-lg transition hover:-translate-y-1 hover:shadow-teal-500/40"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              className="text-teal-500 hover:underline"
            >
              {p.link !== "#" ? "Ver en GitHub" : ""}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}