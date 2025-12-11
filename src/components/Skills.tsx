import { Cloud, Container, GitBranch, Wrench, Database, Shield, Code, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: ['AWS', 'ECS', 'EKS', 'EC2', 'S3', 'IAM', 'CloudWatch', 'EBS', 'CloudFront'],
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'Containerization & Orchestration',
    icon: Container,
    skills: ['Docker', 'Kubernetes'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'CI/CD Tools',
    icon: GitBranch,
    skills: ['Jenkins', 'Helm Charts'],
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Build Tools',
    icon: Wrench,
    skills: ['Maven'],
    color: 'from-red-400 to-red-600',
  },
  {
    title: 'Infrastructure as Code',
    icon: Database,
    skills: ['Terraform'],
    color: 'from-violet-400 to-violet-600',
  },
  {
    title: 'Monitoring & Logging',
    icon: Database,
    skills: ['CloudWatch', 'Prometheus', 'Grafana', 'Splunk'],
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    title: 'Security & Code Quality',
    icon: Shield,
    skills: ['SonarQube', 'Snyk'],
    color: 'from-rose-400 to-rose-600',
  },
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'Shell'],
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    title: 'Collaboration',
    icon: Users,
    skills: ['Jira', 'Confluence', 'Slack'],
    color: 'from-indigo-400 to-indigo-600',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <span className="text-secondary">✦</span>
            <span className="text-sm font-semibold tracking-wider uppercase">My Skills</span>
            <span className="text-secondary">✦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Technical Expertise
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
