import {
  GraduationCap,
  Users,
  Mic2,
  Globe,
  Award,
  Clock,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: GraduationCap,
    title: "British English Focus",
    description:
      "Master authentic British pronunciation, vocabulary, and communication patterns used in professional and academic settings.",
  },
  {
    icon: Users,
    title: "Small Group Learning",
    description:
      "Engage in interactive sessions with 6–8 students, ensuring personalised attention and maximum speaking practice.",
  },
  {
    icon: Mic2,
    title: "Confidence Building",
    description:
      "Develop the confidence to express yourself clearly in any situation, from professional meetings to casual conversations.",
  },
  {
    icon: Globe,
    title: "Live Online Sessions",
    description:
      "Join from anywhere in the GCC region. All sessions are delivered live by experienced tutors for real-time interaction.",
  },
  {
    icon: Award,
    title: "Recognised Certification",
    description:
      "Receive a certificate upon successful completion, demonstrating your achievement in British English communication.",
  },
  {
    icon: Clock,
    title: "Structured Programme",
    description:
      "Follow a carefully designed 12-week curriculum with 24 sessions, building skills progressively each week.",
  },
];

const WhyKCASection = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="section-container">
        <SectionHeading
          title="Why Kingsbridge Communication Academy"
          subtitle="We provide a premium British English speaking education that focuses on real-world communication skills, not just exam preparation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKCASection;
