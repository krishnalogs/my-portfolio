import { Cloud, GitBranch, Container, FileCode, Activity, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Cloud Infrastructure Design & Deployment',
    description: 'Design and implement scalable, secure, and cost-effective cloud architectures on AWS with best practices.',
    icon: Cloud,
  },
  {
    title: 'CI/CD Pipeline Development & Automation',
    description: 'Build robust continuous integration and deployment pipelines to accelerate software delivery.',
    icon: GitBranch,
  },
  {
    title: 'Kubernetes & Docker Orchestration',
    description: 'Deploy and manage containerized applications with Kubernetes for high availability and scalability.',
    icon: Container,
  },
  {
    title: 'Infrastructure as Code (Terraform)',
    description: 'Automate infrastructure provisioning with Terraform for consistent and repeatable deployments.',
    icon: FileCode,
  },
  {
    title: 'Monitoring, Logging & Observability',
    description: 'Set up comprehensive monitoring solutions with Prometheus, Grafana, and CloudWatch for system insights.',
    icon: Activity,
  },
  {
    title: 'DevSecOps Integration & Cloud Security',
    description: 'Integrate security into DevOps workflows with vulnerability scanning and compliance automation.',
    icon: Shield,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <span className="text-secondary">✦</span>
            <span className="text-sm font-semibold tracking-wider uppercase">Services</span>
            <span className="text-secondary">✦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What I Offer
          </h2>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 80}>
              <div className="group bg-card rounded-2xl p-6 border border-border hover:border-primary hover:bg-primary transition-all duration-300 cursor-pointer h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-5 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm leading-relaxed mb-4 transition-colors">
                  {service.description}
                </p>

                {/* Read More */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary group-hover:text-primary-foreground font-medium text-sm hover:bg-transparent"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
