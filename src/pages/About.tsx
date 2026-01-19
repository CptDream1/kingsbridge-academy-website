import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Heart, Shield, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence in Education",
    description:
      "We maintain the highest standards in curriculum design, teaching methodology, and student support.",
  },
  {
    icon: Heart,
    title: "Student-Centred Approach",
    description:
      "Every student receives personalised attention and support throughout their learning journey.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description:
      "We operate with complete honesty about our offerings, credentials, and what students can expect.",
  },
  {
    icon: Award,
    title: "Commitment to Results",
    description:
      "We focus on tangible improvements in speaking confidence, fluency, and communication effectiveness.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">
              About Us
            </p>
            <h1 className="text-off-white mb-6">
              A British Academy for{" "}
              <span className="text-gold">English Speaking Excellence</span>
            </h1>
            <p className="text-off-white/80 text-xl leading-relaxed">
              Kingsbridge Communication Academy is a UK-branded online British
              English speaking academy delivering live, structured small-group
              courses to students across GCC countries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Mission"
                centered={false}
                subtitle="To empower students across the GCC region with the confidence and skills to communicate effectively in British English."
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We believe that effective communication is the foundation of
                  personal and professional success. Our academy was founded
                  with a clear purpose: to provide accessible, high-quality
                  British English speaking education to students who seek to
                  develop genuine fluency and confidence.
                </p>
                <p>
                  Unlike traditional language courses that focus primarily on
                  grammar and examination preparation, Kingsbridge Communication
                  Academy prioritises spoken English, real-world communication
                  skills, and the confidence to express oneself clearly in any
                  situation.
                </p>
              </div>
            </div>

            <div className="bg-primary p-8 rounded-lg">
              <h3 className="text-gold mb-4">Our Focus Areas</h3>
              <ul className="space-y-4 text-off-white/90">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Spoken British English fluency and natural expression</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Confidence building for professional and social contexts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Clear, authentic British pronunciation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Real-life communication skills for everyday situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Small-group interactive learning for maximum practice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do at Kingsbridge Communication Academy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="academy-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-primary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <SectionHeading
            title="Academy Leadership"
            subtitle="Kingsbridge Communication Academy is a founder-led institution with a personal commitment to student success."
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-primary mb-4">Director & Principal Tutor</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our academy is led by our Director and Principal Tutor, who
                brings a passion for British English education and a commitment
                to helping students develop genuine communication confidence.
                Every aspect of our curriculum, from session structure to
                assessment methods, reflects our founder's dedication to
                practical, results-focused language education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-navy">
        <div className="section-container">
          <SectionHeading
            title="Credentials & Accreditation"
            subtitle="We are transparent about our qualifications and accreditation status."
            light
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-navy-light/50 p-8 rounded-lg border border-navy-light">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-off-white font-serif text-lg mb-1">
                      Level 5 TEFL
                    </h4>
                    <p className="text-off-white/70 text-sm">In progress</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-off-white font-serif text-lg mb-1">
                      CPD Accreditation
                    </h4>
                    <p className="text-off-white/70 text-sm">In progress</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-light">
                <p className="text-off-white/60 text-sm leading-relaxed">
                  We believe in complete transparency regarding our
                  qualifications. These credentials are currently in progress
                  and will be updated upon completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
