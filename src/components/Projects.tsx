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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media performance with real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'D3.js', 'MongoDB', 'Express.js'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application with natural language processing and conversation history.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'WebSockets'],
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
            A showcase of my recent work, demonstrating expertise across different technologies and domains
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
                    Live Demo
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
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;