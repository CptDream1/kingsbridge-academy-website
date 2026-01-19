import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logoStacked from "@/assets/logo-stacked.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-off-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src={logoStacked}
              alt="Kingsbridge Communication Academy"
              className="h-24 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              A UK-branded online British English speaking academy delivering
              live, structured courses to students across the GCC region.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-gold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm hover:text-gold transition-colors">
                About Us
              </Link>
              <Link to="/courses" className="text-sm hover:text-gold transition-colors">
                Courses
              </Link>
              <Link to="/how-it-works" className="text-sm hover:text-gold transition-colors">
                How It Works
              </Link>
              <Link to="/apply" className="text-sm hover:text-gold transition-colors">
                Apply
              </Link>
              <Link to="/contact" className="text-sm hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Policies and Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif text-gold">Policies</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="/documents/Terms_and_Conditions_KCA_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gold transition-colors"
              >
                Terms and Conditions
              </a>
              <a
                href="/documents/Privacy_Policy_KCA_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/documents/Refund_Policy_KCA_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gold transition-colors"
              >
                Refund Policy
              </a>
              <a
                href="/documents/Attendance_and_Certification_Policy_KCA_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gold transition-colors"
              >
                Attendance & Certification
              </a>
              <a
                href="/documents/Student_Code_of_Conduct_KCA_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gold transition-colors"
              >
                Student Code of Conduct
              </a>
            </nav>

            <div className="pt-4">
              <h4 className="text-lg font-serif text-gold mb-2">Contact</h4>
              <a
                href="mailto:contact@kingsbridgecommunicationacademy.co.uk"
                className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
              >
                <Mail size={16} />
                contact@kingsbridgecommunicationacademy.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kingsbridge Communication Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/policies" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                Legal & Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
