export default function Contact({
  texts,
}: {
  texts: { title: string; email: string; phone: string; github: string; linkedin: string };
}) {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-teal-500">{texts.title}</h2>
      <p className="text-gray-400 mb-4">
        {texts.email}{" "}
        <a
          href="mailto:marcossanchezlozano@gmail.com"
          className="text-teal-500 hover:underline"
        >
          marcossanchezlozano@gmail.com
        </a>
      </p>
      <p className="text-gray-400 mb-4">
        {texts.phone} 693 363 558
      </p>
      <div className="flex gap-6">
        <a
          href="https://github.com/marmik33"
          className="hover:text-teal-500"
          target="_blank"
        >
          {texts.github}
        </a>
        <a
          href="https://linkedin.com/in/marcos-sanchez-326203375"
          className="hover:text-teal-500"
          target="_blank"
        >
          {texts.linkedin}
        </a>
      </div>
    </section>
  );
}