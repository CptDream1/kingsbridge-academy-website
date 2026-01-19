import { FileText, MessageSquare, PenTool, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const assessments = [
  {
    icon: MessageSquare,
    title: "Ongoing Participation",
    description:
      "Regular engagement and active participation throughout the course is monitored and assessed.",
  },
  {
    icon: PenTool,
    title: "Written Assessment",
    description:
      "A final written component to evaluate comprehension and written communication skills.",
  },
  {
    icon: FileText,
    title: "Coursework Submission",
    description:
      "Completion of assigned coursework demonstrating application of learned skills.",
  },
  {
    icon: Award,
    title: "Speaking Assessment",
    description:
      "A final speaking assessment focusing on confidence, fluency, and communication effectiveness.",
  },
];

const AssessmentSection = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="section-container">
        <SectionHeading
          title="Assessment & Certification"
          subtitle="Students who meet all attendance, participation, and assessment requirements receive a certificate of completion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assessments.map((item) => (
            <div key={item.title} className="academy-card text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h4 className="text-lg font-serif text-primary mb-2">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary rounded-lg max-w-3xl mx-auto text-center">
          <p className="text-off-white leading-relaxed">
            Certification is issued only to students who meet attendance,
            participation, and assessment requirements. This ensures our
            certificates represent genuine achievement in British English
            communication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
