import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Sass', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code', 'Linux', 'Jest'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management', 'Agile', 'Mentoring'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 transition-all duration-1000 ${inView ? 'animate-fade-in-up' : ''}`}>
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${inView ? 'animate-fade-in-up' : ''}`}>
            A comprehensive toolkit of technologies and skills I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className={`glass hover-glow hover-lift border-border/50 transition-all duration-1000 ${
                inView ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${400 + categoryIndex * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className={`glass hover-scale transition-all duration-300 cursor-default`}
                      style={{ animationDelay: `${600 + categoryIndex * 200 + skillIndex * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${inView ? 'animate-fade-in-up' : ''}`}>
          <h3 className="text-2xl font-semibold text-center mb-8">Core Proficiencies</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: 'Frontend Development', level: 95 },
              { skill: 'Backend Development', level: 88 },
              { skill: 'UI/UX Design', level: 82 },
              { skill: 'Project Management', level: 90 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: inView ? `${item.level}%` : '0%',
                      transitionDelay: `${1200 + index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;