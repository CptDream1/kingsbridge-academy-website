import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Clock,
  Users,
  BookOpen,
  CheckCircle,
  PoundSterling,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const whoIsItFor = [
  "Teenagers aged 16 and above",
  "Young adults and university students",
  "Early-career professionals",
  "Anyone seeking to develop confident British English speaking skills",
  "Parents seeking structured, high-quality education for their children",
  "Learners focused on real-world communication, not just exams",
];

const courseModules = [
  "Foundation speaking and pronunciation",
  "Building conversational confidence",
  "Professional communication skills",
  "Discussion and debate techniques",
  "Presentation and public speaking",
  "Advanced fluency and expression",
];

const assessmentComponents = [
  {
    title: "Ongoing Participation",
    description:
      "Active engagement throughout the course, contributing to discussions and activities.",
  },
  {
    title: "Final Written Assessment",
    description:
      "A written component evaluating comprehension and written communication.",
  },
  {
    title: "Coursework Submission",
    description: "Completion of assigned tasks demonstrating skill application.",
  },
  {
    title: "Final Speaking Assessment",
    description:
      "Assessment of confidence, fluency, and communication effectiveness.",
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">
              Our Courses
            </p>
            <h1 className="text-off-white mb-6">
              12-Week British English{" "}
              <span className="text-gold">Speaking Course</span>
            </h1>
            <p className="text-off-white/80 text-xl leading-relaxed">
              A comprehensive, structured programme designed to develop your
              confidence, fluency, and real-world communication skills in
              British English.
            </p>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <SectionHeading
            title="Course Structure"
            subtitle="Our carefully designed programme provides the perfect balance of instruction, practice, and assessment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="academy-card text-center">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                12
              </div>
              <div className="text-muted-foreground text-sm">Weeks Duration</div>
            </div>
            <div className="academy-card text-center">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                2
              </div>
              <div className="text-muted-foreground text-sm">
                Sessions Per Week
              </div>
            </div>
            <div className="academy-card text-center">
              <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                90
              </div>
              <div className="text-muted-foreground text-sm">
                Minutes Per Session
              </div>
            </div>
            <div className="academy-card text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                6–8
              </div>
              <div className="text-muted-foreground text-sm">
                Students Per Group
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg border border-border">
            <h3 className="text-primary mb-4 text-center">
              Total: 24 Live Sessions
            </h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Each session is carefully structured to maximise speaking practice
              and build your confidence progressively. Through interactive
              discussions, role-plays, pronunciation exercises, and real-world
              scenarios, you will develop genuine fluency and communication
              skills.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Who Is This Course For?"
                centered={false}
                subtitle="Our course is designed for students based in GCC countries who are committed to developing their British English speaking skills."
              />

              <ul className="space-y-3">
                {whoIsItFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary p-8 rounded-lg">
              <h3 className="text-gold mb-6">Course Modules</h3>
              <ul className="space-y-4">
                {courseModules.map((module, index) => (
                  <li key={module} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-serif font-bold text-sm">
                        {index + 1}
                      </span>
                    </span>
                    <span className="text-off-white pt-1">{module}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <SectionHeading
            title="Assessment Breakdown"
            subtitle="Students are assessed through multiple components to ensure comprehensive evaluation of their progress."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {assessmentComponents.map((component) => (
              <div key={component.title} className="academy-card">
                <h4 className="text-lg font-serif text-primary mb-2">
                  {component.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary rounded-lg max-w-3xl mx-auto text-center">
            <p className="text-off-white leading-relaxed">
              Certification is issued only to students who meet attendance,
              participation, and assessment requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-navy">
        <div className="section-container">
          <SectionHeading
            title="Course Fees"
            subtitle="Transparent pricing with monthly payment structure."
            light
          />

          <div className="max-w-lg mx-auto">
            <div className="bg-navy-light/50 rounded-lg border border-navy-light overflow-hidden">
              <div className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <PoundSterling className="w-8 h-8 text-gold" />
                  <span className="text-5xl font-serif font-bold text-off-white">
                    24
                  </span>
                  <span className="text-off-white/70 text-lg">
                    GBP per session
                  </span>
                </div>
                <div className="gold-divider mb-6" />
              </div>

              <div className="bg-navy-dark/50 p-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-off-white">
                    <span>Monthly fee (8 sessions)</span>
                    <span className="font-semibold">£192 GBP</span>
                  </div>
                  <div className="flex justify-between text-off-white">
                    <span>Full course (24 sessions)</span>
                    <span className="font-semibold">£576 GBP</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-navy-light">
                  <p className="text-off-white/70 text-sm leading-relaxed">
                    Fees are paid monthly in advance. Each month must be paid
                    before that month's sessions begin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <SectionHeading
            title="Future Courses"
            subtitle="We are developing additional courses to expand our offerings."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="academy-card text-center opacity-60">
              <div className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                Coming Soon
              </div>
              <h4 className="text-lg font-serif text-primary">
                Advanced Fluency Course
              </h4>
            </div>
            <div className="academy-card text-center opacity-60">
              <div className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                Coming Soon
              </div>
              <h4 className="text-lg font-serif text-primary">
                Business English Speaking
              </h4>
            </div>
            <div className="academy-card text-center opacity-60">
              <div className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                Coming Soon
              </div>
              <h4 className="text-lg font-serif text-primary">
                Pronunciation Masterclass
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="section-container text-center">
          <h2 className="text-off-white mb-4">Ready to Enrol?</h2>
          <div className="gold-divider mb-6" />
          <p className="text-off-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Take the first step towards confident British English communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="btn-outline-light inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
