import { useEffect, useRef, useState } from 'react';
import { Brain, Database, TrendingUp, Zap } from 'lucide-react';
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
      icon: Brain,
      title: 'Deep Learning',
      description: 'Building neural networks that understand complex patterns and data'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Extracting insights from large datasets using statistical methods'
    },
    {
      icon: TrendingUp,
      title: 'Model Optimization',
      description: 'Fine-tuning algorithms for maximum performance and efficiency'
    },
    {
      icon: Zap,
      title: 'AI Innovation',
      description: 'Developing cutting-edge solutions for real-world applications'
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
            I'm a passionate ML engineer with 4+ years of experience developing intelligent systems 
            that push the boundaries of what's possible with artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${inView ? 'animate-fade-in-left' : ''}`}>
            <h3 className="text-2xl font-semibold mb-4">
              Transforming data into intelligent insights
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey in machine learning began with a fascination for how computers can learn 
              from data. Today, I specialize in developing deep learning models, computer vision 
              systems, and NLP applications using frameworks like TensorFlow, PyTorch, and scikit-learn.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe that AI should be accessible, ethical, and beneficial to society. Every model 
              I build is designed with interpretability and fairness in mind, ensuring that AI solutions 
              are not just powerful, but also responsible and trustworthy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not training models, you'll find me contributing to open-source ML projects, 
              publishing research papers, or mentoring aspiring data scientists in the community.
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
            { number: '100+', label: 'Models Deployed' },
            { number: '4+', label: 'Years Experience' },
            { number: '15+', label: 'Research Papers' },
            { number: '99%', label: 'Model Accuracy' }
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