import { ArrowRight, Download, Cloud, Server, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Cloud className="w-16 h-16 text-primary-foreground" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Server className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <GitBranch className="w-14 h-14 text-primary-foreground" />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground) / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-6 opacity-0 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 text-sm">
              <span className="text-secondary">✦</span>
              <span>WELCOME TO MY PORTFOLIO</span>
              <span className="text-secondary">✦</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              HELLO, I'M
              <br />
              <span className="text-primary-foreground">MOHANA KRISHNA</span>
              <br />
              <span className="bg-secondary text-secondary-foreground px-4 py-1 inline-block mt-2">
                BHOGI
              </span>
            </h1>

            <p className="text-primary-foreground/80 text-lg max-w-md">
              Engineering scalable cloud solutions, automation workflows, and secure DevOps ecosystems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 py-6 text-base font-semibold"
              >
                <a href="#portfolio">
                  Explore Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 py-6 text-base font-semibold"
              >
                <a href="/resume.pdf" download="Mohana_Krishna_Bhogi_Resume.pdf">
                  <Download className="mr-2 w-4 h-4" /> View Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="relative flex justify-center lg:justify-end opacity-0 animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Yellow Circle Background */}
              <div className="absolute -bottom-10 -right-10 w-72 h-72 md:w-96 md:h-96 bg-secondary rounded-full" />
              
              {/* Profile Image */}
              <div className="relative z-10 w-64 h-80 md:w-80 md:h-96 rounded-t-full overflow-hidden shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Mohana Krishna Bhogi - Cloud & DevOps Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
