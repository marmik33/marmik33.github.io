export default function About({ texts }: { texts: { title: string; text: string } }) {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-teal-500">{texts.title}</h2>
      <p className="text-gray-400 leading-relaxed">{texts.text}</p>
    </section>
  );
}