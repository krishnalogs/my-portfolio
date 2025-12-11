import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech',
    institution: 'Hindustan Institute of Technology and Science',
    year: '2018 – 2022',
    grade: '8.55 CGPA',
  },
  {
    degree: 'Intermediate (+2)',
    institution: 'Narayana Junior College, Vizag',
    year: '2016 – 2018',
    grade: '89%',
  },
  {
    degree: '10th Standard',
    institution: 'Narayana Group of Schools, Bobbili',
    year: '2015 – 2016',
    grade: '8.8 CGPA',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <span className="text-secondary">✦</span>
            <span className="text-sm font-semibold tracking-wider uppercase">About Me</span>
            <span className="text-secondary">✦</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Know Me Better
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6 opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Cloud & DevOps Engineer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Over <span className="text-primary font-semibold">3+ years</span> of experience in designing, 
                  automating, and securing AWS cloud infrastructures. Expertise in Kubernetes, Docker, CI/CD 
                  pipelines, and microservices deployment.
                </p>
                <p>
                  Strong focus on <span className="text-primary font-semibold">DevSecOps</span>, cloud optimization, 
                  and resilient system design. Team player with great communication, continuous learning mindset, 
                  and passion for solving complex system challenges.
                </p>
                <p className="italic border-l-4 border-secondary pl-4 py-2 bg-muted/50 rounded-r-lg">
                  "Passionate about leveraging cloud platforms and automation to build scalable, efficient, 
                  and resilient systems. With a strong curiosity for emerging technologies, I enjoy exploring 
                  tools that simplify infrastructure management and accelerate development workflows."
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="font-display text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="font-display text-3xl font-bold text-primary">AWS</div>
                <div className="text-sm text-muted-foreground">Cloud Expert</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="font-display text-3xl font-bold text-primary">K8s</div>
                <div className="text-sm text-muted-foreground">Orchestration</div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="opacity-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-secondary" />
              Education
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-2 top-2 w-5 h-5 bg-secondary rounded-full border-4 border-background shadow-md" />
                    
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>
                      <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-1">{edu.institution}</p>
                      <div className="flex items-center gap-2 mt-3 text-secondary font-semibold">
                        <Award className="w-4 h-4" />
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
