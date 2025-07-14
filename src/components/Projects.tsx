import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'AI-Powered Medical Diagnosis',
      description: 'A deep learning system for early detection of skin cancer using convolutional neural networks and transfer learning.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      technologies: ['PyTorch', 'Computer Vision', 'Flask', 'React', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'Real-time sentiment analysis of social media posts using BERT transformers and streaming data processing.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Transformers', 'BERT', 'Apache Kafka', 'MongoDB', 'Docker'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Machine learning dashboard for forecasting sales trends using time series analysis and ensemble methods.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Time Series', 'XGBoost', 'Plotly', 'FastAPI', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Computer Vision Pipeline',
      description: 'End-to-end object detection and tracking system for autonomous vehicles using YOLO and Kalman filters.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['YOLO', 'OpenCV', 'TensorFlow', 'ROS', 'CUDA'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Recommendation Engine',
      description: 'Collaborative filtering system for e-commerce product recommendations using matrix factorization and deep learning.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['Collaborative Filtering', 'Neural Networks', 'Spark', 'Redis', 'Kubernetes'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Reinforcement Learning Game AI',
      description: 'Deep Q-Network agent that learns to play complex strategy games through self-play and reward optimization.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
      technologies: ['Deep Q-Learning', 'OpenAI Gym', 'PyTorch', 'Unity ML-Agents', 'TensorBoard'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : ''}`}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'animate-fade-in-up' : ''}`}>
            A showcase of my recent ML projects, demonstrating expertise across computer vision, NLP, and predictive analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group glass hover-glow hover-lift border-border/50 overflow-hidden transition-all duration-1000 ${
                inView ? 'animate-fade-in-up' : ''
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 gradient-primary">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="gradient-primary hover-glow flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass hover-glow"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${inView ? 'animate-fade-in-up' : ''}`}>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass hover-glow hover-lift px-8 py-3"
          >
            View All Research
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;