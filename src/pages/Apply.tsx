import { Link } from "react-router-dom";
import { Mail, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const Apply = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">
              Enrolment
            </p>
            <h1 className="text-off-white mb-6">
              Apply to{" "}
              <span className="text-gold">Kingsbridge Communication Academy</span>
            </h1>
            <p className="text-off-white/80 text-xl leading-relaxed">
              Take the first step towards confident British English communication.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Opening Soon */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-gold" />
              </div>
              <h2 className="text-primary mb-4">Applications Opening Soon</h2>
              <div className="gold-divider mb-6" />
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The application form will be available shortly. Please contact us
              to register your interest and be notified when applications open.
            </p>

            <div className="bg-primary p-8 rounded-lg mb-8">
              <h3 className="text-gold mb-4">Contact Us to Register Interest</h3>
              <a
                href="mailto:contact@kingsbridgecommunicationacademy.co.uk"
                className="inline-flex items-center gap-3 text-off-white hover:text-gold transition-colors text-lg"
              >
                <Mail className="w-6 h-6" />
                contact@kingsbridgecommunicationacademy.co.uk
              </a>
            </div>

            <p className="text-muted-foreground text-sm">
              Please include your name, country of residence, and any questions
              you may have about the course.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Placeholder */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Online Application"
            subtitle="When applications open, you will be able to apply directly through our website."
          />

          {/* Placeholder for Google Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-muted border-2 border-dashed border-border rounded-lg p-12 text-center">
              <p className="text-muted-foreground mb-4">
                Application form coming soon
              </p>
              <p className="text-sm text-muted-foreground/70">
                This section will contain our online application form when
                enrolment opens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Prepare */}
      <section className="py-20 bg-navy">
        <div className="section-container">
          <SectionHeading
            title="Preparing Your Application"
            subtitle="Here is what you will need when applications open."
            light
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-navy-light/50 p-8 rounded-lg border border-navy-light">
              <ul className="space-y-4 text-off-white">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Your personal contact details</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Country of residence</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Current English proficiency level (self-assessed)</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Your learning goals and objectives</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Preferred schedule availability</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-navy-light">
                <p className="text-off-white/70 text-sm leading-relaxed">
                  For students under 18, parent or guardian information will also
                  be required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="section-container text-center">
          <h2 className="text-off-white mb-4">Have Questions?</h2>
          <div className="gold-divider mb-6" />
          <p className="text-off-white/80 max-w-2xl mx-auto mb-8 text-lg">
            We are happy to answer any questions about the course, enrolment
            process, or schedule.
          </p>

          <Link
            to="/contact"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Contact Us
            <Mail size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
