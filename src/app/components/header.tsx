import { Utensils } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-accent p-2 rounded-lg">
              <Utensils className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-xl text-primary-foreground">La Grande Table</h1>
              <p className="text-xs text-primary-foreground/80">Fine Dining Experience</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#book" className="hover:text-accent transition-colors">Book Table</a>
            <a href="#menu" className="hover:text-accent transition-colors">Menu</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
