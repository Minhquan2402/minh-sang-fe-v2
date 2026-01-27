import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      <ImageWithFallback
        src="/assets/bìa.jpg"
        alt="Minh Sang Logo"
        className="w-full h-full object-contain bg-[#f6be56]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mb-4 text-white">Tổ Chức Bữa Tiệc Hoàn Hảo</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Trải nghiệm ẩm thực sang trọng với dịch vụ đặt bàn tiệc độc quyền của chúng tôi. Hãy cùng kỷ niệm những khoảnh khắc đặc biệt của cuộc sống một cách đẳng cấp.
          </p>
          <button
            onClick={onBookNow}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-all transform hover:scale-105"
          >
            Đặt Bàn Ngay 
          </button>
        </div>
      </div>
    </section>
  );
}
