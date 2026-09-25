import SkillsIntro from "../components/SkillsIntro";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-surface  px-4 sm:px-8 md:pl-32 md:pr-16 py-10 scroll-mt-20"
    >
      <h1 className="text-4xl md:text-5xl subhead-font font-extrabold text-primary-dark mb-4">
        <span>
          My <span className="text-primary "> Skills </span>
        </span>
      </h1>
      <SkillsIntro />
    </section>
  );
}

export default Skills;
