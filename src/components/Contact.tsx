import { useState } from 'react';
import { Mail, Phone, Send, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary-foreground/80 mb-4">
            <span className="text-secondary">✦</span>
            <span className="text-sm font-semibold tracking-wider uppercase">Contact</span>
            <span className="text-secondary">✦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Let's Work Together
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                  Get in Touch
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  Feel free to reach out for collaborations, opportunities, or just a friendly chat 
                  about cloud technologies and DevOps practices.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a
                  href="mailto:mohanbhogi05@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Mail className="w-5 h-5 text-primary-foreground group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-primary-foreground/60 text-sm">Email</div>
                    <div className="text-primary-foreground font-medium group-hover:text-secondary transition-colors">
                      mohanbhogi05@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919573475770"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Phone className="w-5 h-5 text-primary-foreground group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-primary-foreground/60 text-sm">Phone</div>
                    <div className="text-primary-foreground font-medium group-hover:text-secondary transition-colors">
                      +91 9573475770
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-primary-foreground/60 text-sm">Location</div>
                    <div className="text-primary-foreground font-medium">India</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/mohanakrishnabhogi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary text-primary-foreground hover:text-secondary-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/mohanakrishnabhogi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary text-primary-foreground hover:text-secondary-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={200}>
            <div className="bg-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-muted border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl py-6 text-base font-semibold"
                >
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
