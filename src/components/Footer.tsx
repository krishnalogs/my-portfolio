import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-bold text-background">
            MOHANA KRISHNA
          </div>
          
          <div className="flex items-center gap-1 text-background/70 text-sm">
            Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> by Mohana Krishna Bhogi
          </div>
          
          <div className="text-background/50 text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
