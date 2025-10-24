import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({
  texts,
  cvTexts,
  darkMode,
}: {
  texts: { home: string; about: string; projects: string; contact: string };
  cvTexts: { label: string; file: string };
  darkMode: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  // Función para manejar el smooth scroll
  const handleScroll = (id: string) => {
    const section = document.getElementById(id); // Obtiene la sección por su id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
    }
    setMenuOpen(false); // Cierra el menú hamburguesa (en caso de pantallas pequeñas)
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-300 ${darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
      <div className="flex justify-between items-center py-6 container mx-auto px-4">
        <h1 className="text-2xl font-bold text-teal-500">Marcos Sánchez Lozano</h1>
        {/* Botón del menú hamburguesa (visible en pantallas pequeñas) */}
        <button
          className="md:hidden text-teal-500 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        {/* Opciones del menú */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-950 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none`}
        >
          <button
            onClick={() => handleScroll("hero")} // Smooth scroll a la sección Hero
            className="hover:text-teal-500"
          >
            {texts.home} {/* Texto dinámico para "Home" o "Inicio" */}
          </button>
          <button
            onClick={() => handleScroll("about")} // Smooth scroll a la sección Sobre mí
            className="hover:text-teal-500"
          >
            {texts.about}
          </button>
          <button
            onClick={() => handleScroll("projects")} // Smooth scroll a la sección Proyectos
            className="hover:text-teal-500"
          >
            {texts.projects}
          </button>
          <button
            onClick={() => handleScroll("contact")} // Smooth scroll a la sección Contacto
            className="hover:text-teal-500"
          >
            {texts.contact}
          </button>
          <a
            href={cvTexts.file} // Archivo dinámico según el idioma
            download
            className="border border-teal-500 px-3 py-1 rounded-lg hover:bg-teal-500 hover:text-black transition"
          >
            {cvTexts.label} {/* Texto dinámico según el idioma */}
          </a>
        </div>
      </div>
    </nav>
  );
}