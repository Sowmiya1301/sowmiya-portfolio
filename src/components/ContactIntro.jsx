import { FiMail, FiPhone, FiLinkedin, FiMapPin } from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    label: "usowmiya00@gmail.com",
    href: "mailto:usowmiya00@gmail.com",
  },
  { icon: FiPhone, label: "+94 741601138" },
  {
    icon: FiLinkedin,
    label: "sowmiya-uthayakumar",
    href: "https://www.linkedin.com/in/sowmiya-uthayakumar",
    external: true,
  },
  { icon: FiMapPin, label: "Sri Lanka - Jaffna", href: null },
];

function ContactIntro() {
  return (
    <div
      className="text-center max-w-6xl mx-20 bg-white border border-primary/10 rounded-3xl shadow-sm px-6 py-10 md:px-12 md:py-14"
      data-aos="fade-up"
    >
      <p className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-primary tracking-wide uppercase mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Open to work · Remote | Hybrid | Office
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-dark leading-tight">
        Let's Connect
      </h1>

      <p className="mt-5 text-sm md:text-base text-body leading-relaxed">
        I'm actively looking for opportunities to grow as a developer and
        contribute to a team building real products. If you have a role,
        project, or just want to talk tech — I'd love to hear from you.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {contactInfo.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/15 text-primary">
                <Icon size={14} />
              </span>
              <span className="text-sm font-medium text-primary-dark">
                {item.label}
              </span>
            </>
          );

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 bg-surface border border-primary/15 rounded-full pl-2 pr-5 py-2 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              {content}
            </a>
          ) : (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-surface border border-primary/15 rounded-full pl-2 pr-5 py-2"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactIntro;
