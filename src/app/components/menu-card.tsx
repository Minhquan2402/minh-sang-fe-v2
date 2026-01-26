import { Plus } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'food' | 'drink';
}

interface MenuCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export function MenuCard({ item, onAdd }: MenuCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg mb-2 text-card-foreground">{item.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xl text-accent">${item.price.toFixed(2)}</span>
          <button
            onClick={() => onAdd(item)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add to Party
          </button>
        </div>
      </div>
    </div>
  );
}
