import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import StepCard from "@/components/ui/StepCard";

const steps = [
  {
    step: 1,
    title: "Submit Your Application",
    description:
      "Submit your application with your personal details, background, and reason for wanting to join KCA.",
  },
  {
    step: 2,
    title: "English Level Test",
    description:
      "Complete a short 15-minute English level test so KCA can assess your current level and assess your suitability for the academy.",
  },
  {
    step: 3,
    title: "Short Interview",
    description:
      "Attend a short interview so KCA can assess your communication, confidence, commitment, and overall suitability.",
  },
  {
    step: 4,
    title: "Identity Verification",
    description:
      "Provide a valid photo ID for identity verification as part of the enrolment process. Students aged 16–17 may also be asked to provide parent/guardian ID and written consent.",
  },
  {
    step: 5,
    title: "Acceptance & Payment",
    description:
      "Once accepted, students receive payment details and onboarding guidance. Monthly payment is required to secure and keep their place. Places are limited and first come, first confirmed.",
  },
  {
    step: 6,
    title: "Tech & Setup Requirements",
    description:
      "Before starting, ensure you have a stable internet connection, microphone, camera, quiet learning space, and a laptop or desktop where possible. Keep a notebook and pen for personal notes, vocabulary, feedback, and progress throughout the course.",
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
            title="Enrolment Process"
            subtitle="Everything you need to know to get started with KCA."
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
