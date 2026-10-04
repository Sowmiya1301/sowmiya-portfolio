import ContactIntro from "../components/ContactIntro";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-surface flex items-center justify-center px-4 sm:px-8 md:pl-32 md:pr-16 py-16 scroll-mt-20"
    >
      <ContactIntro />
    </section>
  );
}

export default Contact;
