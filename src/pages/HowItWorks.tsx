import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import StepCard from "@/components/ui/StepCard";

const steps = [
  {
    step: 1,
    title: "Apply Online",
    description:
      "Complete our online application form with your details, English proficiency level, and learning goals. Our team will review your application promptly.",
  },
  {
    step: 2,
    title: "Assessment & Placement",
    description:
      "We assess your current English level and learning objectives to ensure you are placed in the most appropriate group for your development.",
  },
  {
    step: 3,
    title: "Group Allocation",
    description:
      "You will be assigned to a small group of 6–8 students at a similar level. Small groups ensure maximum speaking practice and personalised attention.",
  },
  {
    step: 4,
    title: "Live Sessions Begin",
    description:
      "Attend two 90-minute live sessions per week. Each session is interactive, engaging, and designed to build your skills progressively.",
  },
  {
    step: 5,
    title: "Ongoing Assessment & Feedback",
    description:
      "Receive regular feedback on your progress throughout the course. Your participation and development are monitored to ensure you achieve your goals.",
  },
  {
    step: 6,
    title: "Final Assessments & Certification",
    description:
      "Complete your final assessments including speaking, written, and coursework components. Students who meet all requirements receive their certificate of completion.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">
              How It Works
            </p>
            <h1 className="text-off-white mb-6">
              Your Journey to{" "}
              <span className="text-gold">Confident Communication</span>
            </h1>
            <p className="text-off-white/80 text-xl leading-relaxed">
              From application to certification, here is how your learning
              journey with Kingsbridge Communication Academy unfolds.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <SectionHeading
            title="Step by Step"
            subtitle="A clear, structured path from enrolment to certification."
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  <StepCard
                    step={step.step}
                    title={step.title}
                    description={step.description}
                  />
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-14 w-0.5 h-8 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="What to Expect"
            subtitle="Understanding what your learning experience will look like."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="academy-card">
              <h4 className="text-lg font-serif text-primary mb-4">
                During Sessions
              </h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Interactive discussions on varied topics
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Pronunciation practice and correction
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Role-plays and real-world scenarios
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Vocabulary building exercises
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Confidence-building activities
                </li>
              </ul>
            </div>

            <div className="academy-card">
              <h4 className="text-lg font-serif text-primary mb-4">
                Between Sessions
              </h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Practice assignments to reinforce learning
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Listening exercises with British English content
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Self-study materials and resources
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Preparation for upcoming topics
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  Coursework completion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-20 bg-navy">
        <div className="section-container">
          <SectionHeading
            title="Technical Requirements"
            subtitle="Ensure you have the following to participate in live sessions."
            light
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-navy-light/50 p-8 rounded-lg border border-navy-light">
              <ul className="space-y-4 text-off-white">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Stable internet connection suitable for video conferencing
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>
                    Computer, laptop, or tablet with camera and microphone
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Quiet environment for uninterrupted participation</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Headphones recommended for optimal audio quality</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-navy-light">
                <p className="text-off-white/70 text-sm leading-relaxed">
                  Detailed setup instructions will be provided upon enrolment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="section-container text-center">
          <h2 className="text-off-white mb-4">Ready to Begin?</h2>
          <div className="gold-divider mb-6" />
          <p className="text-off-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Start your journey towards confident British English communication
            today.
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
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
