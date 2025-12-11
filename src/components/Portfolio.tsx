import { ArrowUpRight, Cloud, Container, GitBranch, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'AWS Infrastructure Automation',
    description: 'Automated provisioning using Terraform, integrating CI/CD workflows to enable repeatable and scalable environment setups.',
    tools: ['Terraform', 'AWS', 'Jenkins', 'CloudFormation'],
    icon: Cloud,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
  },
  {
    title: 'Kubernetes Deployments',
    description: 'Implemented microservices-based architecture on EKS with auto-scaling, monitoring, and GitOps workflows.',
    tools: ['Kubernetes', 'EKS', 'Helm', 'ArgoCD'],
    icon: Container,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
  },
  {
    title: 'CI/CD Pipeline Optimization',
    description: 'Designed end-to-end pipelines using Jenkins, Helm charts, and SonarQube for code quality and security scanning.',
    tools: ['Jenkins', 'SonarQube', 'Docker', 'Snyk'],
    icon: GitBranch,
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
  },
  {
    title: 'Monitoring & Observability Setup',
    description: 'Configured Prometheus–Grafana dashboards and CloudWatch metrics for improved reliability and alerting.',
    tools: ['Prometheus', 'Grafana', 'CloudWatch', 'Splunk'],
    icon: Activity,
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <span className="text-secondary">✦</span>
            <span className="text-sm font-semibold tracking-wider uppercase">My Projects</span>
            <span className="text-secondary">✦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Some of My Work
          </h2>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full">
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-24 h-24 text-white/30" />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-float" />
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 rounded-xl animate-float" style={{ animationDelay: '1s' }} />
                  
                  {/* Arrow Button */}
                  <Button
                    size="icon"
                    className="absolute bottom-4 right-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
