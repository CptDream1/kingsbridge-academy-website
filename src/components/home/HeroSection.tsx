import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-navy min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gold accent line */}
      <div className="absolute left-0 top-1/4 w-1 h-32 bg-gold" />

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Pre-headline */}
          <p className="text-gold font-medium uppercase tracking-widest text-sm mb-6 animate-fade-in">
            British English Speaking Academy
          </p>

          {/* Main Headline */}
          <h1 className="text-off-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Speak British English{" "}
            <span className="text-gold">with Confidence</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-off-white/80 mb-8 max-w-2xl leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Live, structured small-group courses delivered by experienced tutors.
            Develop fluency, pronunciation, and real-world communication skills.
          </p>

          {/* Key Points */}
          <div
            className="flex flex-wrap gap-6 mb-10 text-off-white/70 text-sm animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              12-week structured course
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              24 live sessions
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Small groups of 6–8 students
            </span>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/apply"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Apply for Next Intake
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline-light inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent" />
    </section>
  );
};

export default HeroSection;
