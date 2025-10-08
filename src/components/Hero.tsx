export default function Hero({ texts }: { texts: { greeting: string; description: string; button: string } }) {
  return (
    <section id="hero" className="text-center py-24">
      <div className="flex flex-col items-center">
        {/* Foto */}
        <img
          src="/image2.png"
          alt="Foto de Marcos Sánchez"
          className="w-48 h-48 rounded-full mb-6 shadow-lg object-cover"
        />
        <h1 className="text-5xl font-bold mb-4">
          {texts.greeting} <span className="text-teal-500">Marcos Sánchez</span>
        </h1>
        <p className="text-lg text-gray-400">{texts.description}</p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-teal-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-teal-400 transition"
        >
          {texts.button}
        </a>
      </div>
    </section>
  );
}