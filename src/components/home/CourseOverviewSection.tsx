import { Link } from "react-router-dom";
import { Calendar, Clock, Users, BookOpen, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { icon: Calendar, label: "Course Duration", value: "12 Weeks" },
  { icon: Clock, label: "Sessions Per Week", value: "2 × 90 min" },
  { icon: Users, label: "Group Size", value: "6–8 Students" },
  { icon: BookOpen, label: "Total Sessions", value: "24 Live" },
];

const CourseOverviewSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <SectionHeading
          title="Course Structure"
          subtitle="Our 12-week British English Speaking Course is designed to transform your communication skills through structured, interactive learning."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary p-6 rounded-lg text-center"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-2xl font-serif font-bold text-off-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-off-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Each session is carefully structured to maximise speaking practice
            and build confidence progressively. Students engage in discussions,
            role-plays, pronunciation exercises, and real-world communication
            scenarios.
          </p>

          <Link
            to="/courses"
            className="btn-primary inline-flex items-center gap-2"
          >
            View Full Course Details
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;
