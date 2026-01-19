import { FileText, Download } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const policies = [
  {
    title: "Terms and Conditions",
    description:
      "The complete terms governing the use of our services, including student responsibilities, academy obligations, and the educational agreement.",
    file: "/documents/Terms_and_Conditions_KCA_2026.pdf",
  },
  {
    title: "Privacy Policy",
    description:
      "How we collect, use, protect, and handle personal information in accordance with data protection regulations.",
    file: "/documents/Privacy_Policy_KCA_2026.pdf",
  },
  {
    title: "Refund Policy",
    description:
      "Our policy regarding fee refunds, including eligibility criteria, timelines, and the process for requesting refunds.",
    file: "/documents/Refund_Policy_KCA_2026.pdf",
  },
  {
    title: "Attendance and Certification Policy",
    description:
      "Requirements for course attendance, participation expectations, and the criteria for certification upon completion.",
    file: "/documents/Attendance_and_Certification_Policy_KCA_2026.pdf",
  },
  {
    title: "Student Code of Conduct",
    description:
      "Expected standards of behaviour, communication guidelines, and the values we uphold in our learning community.",
    file: "/documents/Student_Code_of_Conduct_KCA_2026.pdf",
  },
];

const Policies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">
              Legal
            </p>
            <h1 className="text-off-white mb-6">
              Policies & <span className="text-gold">Documents</span>
            </h1>
            <p className="text-off-white/80 text-xl leading-relaxed">
              Access our official policies and legal documents. We are committed
              to transparency in all aspects of our operation.
            </p>
          </div>
        </div>
      </section>

      {/* Policies List */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <SectionHeading
            title="Academy Policies"
            subtitle="All policies are effective from 1 January 2026. Please review these documents carefully before enrolment."
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                    <FileText className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-serif text-primary mb-2">
                      {policy.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {policy.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Effective Date: 1 January 2026
                      </span>
                      <a
                        href={policy.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary p-8 rounded-lg text-center">
              <h3 className="text-gold mb-4">Questions About Our Policies?</h3>
              <p className="text-off-white/80 mb-6 leading-relaxed">
                If you have any questions about our policies or require
                clarification on any point, please do not hesitate to contact us.
              </p>
              <a
                href="mailto:contact@kingsbridgecommunicationacademy.co.uk"
                className="text-gold hover:text-gold-light transition-colors"
              >
                contact@kingsbridgecommunicationacademy.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
