import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful, user-centered digital experiences'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver results'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to achieve shared goals'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : ''}`}>
            About <span className="text-gradient">Me</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'animate-fade-in-up' : ''}`}>
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine technical excellence with thoughtful design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${inView ? 'animate-fade-in-left' : ''}`}>
            <h3 className="text-2xl font-semibold mb-4">
              Building the future, one line of code at a time
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech started with a curiosity about how things work under the hood. 
              Today, I specialize in creating full-stack applications using modern technologies 
              like React, Node.js, and cloud platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe that great software is not just about functionality—it's about creating 
              experiences that users love. Every project I work on is an opportunity to solve 
              real problems and make a positive impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-600 ${inView ? 'animate-fade-in-right' : ''}`}>
            {highlights.map((item, index) => (
              <Card 
                key={item.title} 
                className={`glass hover-glow hover-lift border-border/50 transition-all duration-500`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mb-4">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${inView ? 'animate-fade-in-up' : ''}`}>
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Happy Clients' },
            { number: '100%', label: 'Dedication' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;