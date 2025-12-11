import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mohana Krishna Bhogi | Cloud & DevOps Engineer</title>
        <meta
          name="description"
          content="Portfolio of Mohana Krishna Bhogi - Cloud and DevOps Engineer with 3+ years of experience in AWS, Kubernetes, Docker, and CI/CD pipelines."
        />
        <meta
          name="keywords"
          content="DevOps Engineer, Cloud Engineer, AWS, Kubernetes, Docker, CI/CD, Terraform, Mohana Krishna Bhogi"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
