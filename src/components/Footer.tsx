import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex.chen@example.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 gradient-hero border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform mb-2 block"
            >
              ML Portfolio
            </button>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sagar Mehta. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="sm"
                className="glass hover-glow hover-scale p-3 rounded-full"
                onClick={() => window.open(social.href, '_blank')}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>

          {/* Made with love */}
          <div className="flex items-center text-sm text-muted-foreground">
            Made with 
            <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
            and lots of GPU power
          </div>
        </div>

        {/* Back to top hint */}
        <div className="text-center mt-8 pt-8 border-t border-border/20">
          <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;