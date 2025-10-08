import { FaCode, FaDatabase, FaDocker, FaGitAlt, FaProjectDiagram, FaJava } from "react-icons/fa";
import { SiPostgresql, SiMysql, SiMongodb, SiRedis, SiPython, SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiCplusplus, SiC, SiDocker } from "react-icons/si";

export default function Skills({ texts }: { texts: { title: string, backend: string, frontend: string, databases: string, virtualization: string, scrum: string, git: string } }) {
  const skills = [
    {
      icon: <FaCode />,
      name: texts.backend,
      logos: [<SiC />, <SiCplusplus />, <SiPython />, <FaJava />],
    },
    {
      icon: <FaCode />,
      name: texts.frontend,
      logos: [<SiReact />, <SiJavascript />, <SiTypescript />, <SiHtml5 />, <SiCss3 />],
    },
    {
      icon: <FaDatabase />,
      name: texts.databases,
      logos: [<SiPostgresql />, <SiMysql />, <SiMongodb />, <SiRedis />],
    },
    {
      icon: <FaDocker />,
      name: texts.virtualization,
      logos: [
        <SiDocker />,
        <img
          src="/docker-compose.png" // Ruta de la imagen del pulpo
          alt="Docker Compose"
          className="w-10 h-10"
        />,
      ],
    },
    {
      icon: <FaProjectDiagram />,
      name: texts.scrum,
      logos: [
        <img
          src="/scrum.png"
          alt="Scrum"
          className="w-10 h-10"
        />,
      ],
    },
    {
      icon: <FaGitAlt />,
      name: texts.git,
      logos: [<FaGitAlt />],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-teal-500">{texts.title}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col gap-4 p-4 rounded-lg shadow-lg transition hover:-translate-y-1 hover:shadow-teal-500/40"
          >
            <div className="flex items-center gap-4">
              <span className="text-teal-500 text-2xl">{skill.icon}</span>
              <span className="text-gray-400">{skill.name}</span>
            </div>
            {skill.logos.length > 0 && (
              <div className="flex justify-center gap-6 mt-4">
                {skill.logos.map((logo, logoIndex) => (
                  <span key={logoIndex} className="text-teal-500 text-4xl">
                    {logo}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}