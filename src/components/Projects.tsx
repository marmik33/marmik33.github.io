export default function Projects({ texts }: { texts: { title: string; projects: { title: string; description: string; link: string; linktext: string; video: string }[] } }) {
  const projects = texts.projects;

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-teal-500">{texts.title}</h2>

      {/* Grid con máximo 2 por fila */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-stretch p-6 rounded-2xl shadow-lg transition hover:-translate-y-1 hover:shadow-teal-500/40 bg-white/5"
          >
            {/* Izquierda: título, descripción y link */}
            <div className="flex-1 flex flex-col justify-between pr-0 md:pr-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.description}</p>
              </div>
              {p.link && p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  className="text-teal-500 hover:underline mt-auto"
                >
                  {p.linktext}
                </a>
              )}
            </div>

            {/* Derecha: vídeo */}
            {p.video && (
              <div className="w-full md:w-1/2 lg:w-[45%] h-48 md:h-56 lg:h-64 relative overflow-hidden bg-transparent flex-shrink-0">
                <video
                  src={p.video}
                  loop
                  muted
                  className="w-full h-full rounded-xl shadow-md object-contain"
                  onMouseEnter={e => e.currentTarget.play()}
                  onMouseLeave={e => e.currentTarget.pause()}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
