import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { video } from "framer-motion/client";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState(0); // 0 para español, 1 para inglés

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 0 ? 1 : 0));
  };

  const texts = {
    navbar: [
      { home: "Inicio", about: "Sobre mí", projects: "Proyectos", contact: "Contacto" },
      { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    ],
    hero: [
      {
        greeting: "Hola, soy",
        description: "Ingeniero Informático especializado en desarrollo web y software.",
        button: "Ver proyectos",
      },
      {
        greeting: "Hello, I am",
        description: "Software Engineer specialized in web and software development.",
        button: "View projects",
      },
    ],
    about: [
      {
        title: "Sobre mí",
        text: "Estudiante de Ingeniería Informática con un gran interés en incorporarme al mundo profesional y aplicar mis conocimientos académicos en entornos laborales reales. Soy una persona dedicada y responsable, con ganas de adquirir experiencia práctica y contribuir de manera efectiva a un equipo dinámico. Busco una oportunidad para crecer profesionalmente y seguir aprendiendo.",
      },
      {
        title: "About me",
        text: "Computer Science student with a strong interest in joining the professional world and applying my academic knowledge in real work environments. I am a dedicated and responsible person, eager to gain practical experience and contribute effectively to a dynamic team. I am looking for an opportunity to grow professionally and continue learning.",
      },
    ],
    skills: [
      { title: "Habilidades",
        backend: "Lenguajes de programación backend (C, C++, Python, Java)",
        frontend: "Lenguajes de programación frontend (React, JavaScript, TypeScript, HTML, CSS)",
        databases: "Bases de datos (PostgreSQL, MySQL, MongoDB, Redis)",
        virtualization: "Virtualización y contenedores (Docker, Docker-compose)",
        scrum: "Metodologías ágiles (Scrum)",
        git: "Control de versiones (Git)"
      },
      { title: "Skills",
        backend: "Backend programming languages (C, C++, Python, Java)",
        frontend: "Frontend programming languages (React, JavaScript, TypeScript, HTML, CSS)",
        databases: "Databases (PostgreSQL, MySQL, MongoDB, Redis)",
        virtualization: "Virtualization and containers (Docker, Docker-compose)",
        scrum: "Agile methodologies (Scrum)",
        git: "Version control (Git)"
      },
    ],
    projects: [
      {
        title: "Proyectos", // Título de la sección en castellano
        projects: [
          {
            title: "HexGame", // Título del proyecto en castellano
            description: "HexGame AI Player es un proyecto que juega al tablero Hex usando los algoritmos de Dijkstra, Minimax y poda Alfa-Beta para calcular la heurística y así determinar el mejor movimiento posible. Combina búsqueda de caminos y toma de decisiones estratégicas para simular un juego inteligente.", // Descripción en castellano
            link: "https://github.com/marmik33/HexGame", // Enlace al proyecto
            video: "hexgame_demo.mp4"
          }
        ]
      },
      {
        title: "Projects", // Título de la sección en inglés
        projects: [
          {
            title: "HexGame", // Título del proyecto en inglés
            description: "HexGame AI Player is a project that plays the Hex board game using Dijkstra’s algorithm, Minimax, and Alpha-Beta pruning to evaluate heuristics and determine the best possible move. It combines pathfinding and strategic decision-making to simulate intelligent gameplay.", // Descripción en inglés
            link: "https://github.com/marmik33/HexGame", // Enlace al proyecto
            video: "hexgame_demo.mp4"
          }
        ]
      },
    ],
    contact: [
      {
        title: "Contacto",
        email: "Puedes escribirme a",
        phone: "Teléfono:",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
      {
        title: "Contact",
        email: "You can write to me at",
        phone: "Phone:",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    ],
    cv: [
      { label: "Descargar CV", file: "/cv-es.pdf" },
      { label: "Download CV", file: "/cv-en.pdf" },
    ],
  };

  return (
    <div
      className={`min-h-screen scroll-smooth transition-colors duration-300 ${
        darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar texts={texts.navbar[language]} cvTexts={texts.cv[language]} />

      <main className="container mx-auto px-4">
        {/* Hero */}
        <Hero texts={texts.hero[language]} />

        {/* About */}
        <About texts={texts.about[language]} />

        {/* Skills */}
        <Skills texts={texts.skills[language]} />

        {/* Projects */}
        <Projects texts={texts.projects[language]} />

        {/* Contact */}
        <Contact texts={texts.contact[language]} />
      </main>

      {/* Footer */}
      {/*<footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Marcos Sánchez Lozano. Todos los derechos reservados.
      </footer>*/}

      {/* Dark Mode Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 border border-teal-500 w-12 h-12 rounded-full hover:bg-teal-500 hover:text-black transition flex items-center justify-center"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="fixed bottom-6 left-6 border border-teal-500 w-12 h-12 rounded-full hover:bg-teal-500 hover:text-black transition flex items-center justify-center"
      >
        {language === 0 ? (
          <img
            src="/spain.svg" // Ruta de la bandera de España
            alt="Español"
            className="w-6 h-6"
          />
        ) : (
          <img
            src="/uk.svg" // Ruta de la bandera de Gran Bretaña
            alt="Inglés"
            className="w-6 h-6"
          />
        )}
      </button>
    </div>
  );
}
