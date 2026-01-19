import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="section-container text-center">
        <h2 className="text-off-white mb-4">
          Ready to Begin Your Journey?
        </h2>
        <div className="gold-divider mb-6" />
        <p className="text-off-white/80 max-w-2xl mx-auto mb-8 text-lg">
          Join students across the GCC region who are developing confident
          British English communication skills with Kingsbridge Communication
          Academy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/apply"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Apply for Next Intake
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/how-it-works"
            className="btn-outline-light inline-flex items-center justify-center"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
