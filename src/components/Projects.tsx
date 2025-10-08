export default function Projects({ texts }: { texts: { title: string } }) {
  const projects = [
    {
      title: "Gestor de Tareas",
      description: "Aplicación React con TypeScript y Firebase.",
      link: "https://github.com/marmik33/todo-app",
    },
    {
      title: "API REST Node.js",
      description: "API construida con Express y MongoDB.",
      link: "https://github.com/marmik33/api-node",
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
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}