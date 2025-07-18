import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 gradient-primary rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : ''} pt-20`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Sagar Mehta</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${mounted ? 'animate-fade-in-up' : ''}`}>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Machine Learning Engineer
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${mounted ? 'animate-fade-in-up' : ''}`}>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I build intelligent systems that learn and adapt. Specializing in Deep Learning, 
            Computer Vision, NLP and Gen AI to solve real-world problems with cutting-edge AI.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-700 ${mounted ? 'animate-fade-in-up' : ''}`}>
          <Button 
            size="lg" 
            className="gradient-primary hover-glow hover-lift text-lg px-8 py-3"
            onClick={() => scrollToAbout()}
          >
            About Me
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass hover-glow hover-lift text-lg px-8 py-3"
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center space-x-6 mb-16 transition-all duration-1000 delay-900 ${mounted ? 'animate-fade-in-up' : ''}`}>
          <Button
            variant="ghost"
            size="sm"
            className="glass hover-glow hover-scale p-3 rounded-full"
            onClick={() => window.open('https://github.com/sagarmehta11', '_blank')}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="glass hover-glow hover-scale p-3 rounded-full"
            onClick={() => window.open('https://www.linkedin.com/in/sagarmehta11/', '_blank')}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="glass hover-glow hover-scale p-3 rounded-full"
            onClick={() => window.open('https://x.com/sagarmehta_1', '_blank')}
          >
            <Twitter className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="glass hover-glow hover-scale p-3 rounded-full"
            onClick={() => window.open('mailto:sagarmeht4@gmail.com', '_blank')}
          >
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-1100 ${mounted ? 'animate-fade-in-up' : ''}`}>
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover-scale transition-smooth"
          >
            <ArrowDown className="h-8 w-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;