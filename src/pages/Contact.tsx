import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent",
      description:
        "Thank you for contacting us. We will respond to your enquiry shortly.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">
              Get in Touch
            </p>
            <h1 className="text-off-white mb-6">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="text-off-white/80 text-xl leading-relaxed">
              We welcome your enquiries about courses, enrolment, or any aspect
              of Kingsbridge Communication Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-off-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeading
                title="Contact Information"
                centered={false}
                subtitle="We aim to respond to all enquiries within two business days."
              />

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-primary mb-2">
                      Email
                    </h4>
                    <a
                      href="mailto:contact@kingsbridgecommunicationacademy.co.uk"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      contact@kingsbridgecommunicationacademy.co.uk
                    </a>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="text-lg font-serif text-primary mb-4">
                    What to Include
                  </h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      Your full name
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      Your email address
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      Country of residence
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      Your question or enquiry
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeading
                title="Send a Message"
                centered={false}
                subtitle="Use the form below to send us your enquiry."
              />

              {isSubmitted ? (
                <div className="bg-primary p-8 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-gold mb-4">Message Sent Successfully</h3>
                  <p className="text-off-white/80 leading-relaxed">
                    Thank you for contacting Kingsbridge Communication Academy.
                    We will review your message and respond to your enquiry
                    within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-card"
                      maxLength={100}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-card"
                      maxLength={255}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your enquiry..."
                      rows={6}
                      className="bg-card resize-none"
                      maxLength={1000}
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-gold-dark"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
