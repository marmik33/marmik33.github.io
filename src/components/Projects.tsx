export default function Projects({ texts }: { texts: { title: string; projects: { title: string; description: string; link: string; video: string }[] } }) {
  const projects = texts.projects;

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
            {p.video && (
              <div className="mt-4">
                <video
                  src={p.video}
                  loop
                  muted
                  className="w-full rounded-lg shadow-md object-cover"
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