import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const skills = [
  {
    title: "Spoken Fluency",
    description:
      "Develop natural speech patterns and reduce hesitation when speaking English in any situation.",
  },
  {
    title: "British Pronunciation",
    description:
      "Master clear, authentic British pronunciation that is understood and respected worldwide.",
  },
  {
    title: "Confidence in Communication",
    description:
      "Build the self-assurance to express your ideas clearly in professional and social settings.",
  },
  {
    title: "Real-Life Speaking Skills",
    description:
      "Practice practical scenarios including meetings, presentations, and everyday conversations.",
  },
  {
    title: "Vocabulary Expansion",
    description:
      "Grow your active vocabulary with words and phrases used in contemporary British English.",
  },
  {
    title: "Listening Comprehension",
    description:
      "Improve your ability to understand different British accents and speaking styles.",
  },
];

const SkillsDevelopedSection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="section-container">
        <SectionHeading
          title="What You Will Develop"
          subtitle="Our curriculum focuses on practical skills that make a real difference in how you communicate in English."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="flex items-start gap-4 p-6 bg-navy-light/50 rounded-lg border border-navy-light"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h4 className="text-lg font-serif text-off-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-off-white/70 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsDevelopedSection;
