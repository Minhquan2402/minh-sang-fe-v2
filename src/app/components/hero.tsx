import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1626200711570-ea66d2226668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwcGFydHklMjB0YWJsZXxlbnwxfHx8fDE3NjkzNDk3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Luxury restaurant party table"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mb-4 text-white">Host Your Perfect Party</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience luxury dining with our exclusive party table reservations. 
            Celebrate life's special moments in style.
          </p>
          <button
            onClick={onBookNow}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            Book Your Table Now
          </button>
        </div>
      </div>
    </section>
  );
}
