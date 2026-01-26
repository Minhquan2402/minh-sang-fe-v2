import { MenuCard, MenuItem } from '@/app/components/menu-card';

interface MenuSectionProps {
  items: MenuItem[];
  onAddItem: (item: MenuItem) => void;
}

export function MenuSection({ items, onAddItem }: MenuSectionProps) {
  const foodItems = items.filter(item => item.category === 'food');
  const drinkItems = items.filter(item => item.category === 'drink');

  return (
    <section id="menu" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Food Menu */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl text-center mb-2 text-primary">Food Selection</h2>
          <p className="text-center text-muted-foreground mb-12">Choose from our exquisite menu</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodItems.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={onAddItem} />
            ))}
          </div>
        </div>

        {/* Drink Menu */}
        <div>
          <h2 className="text-3xl md:text-4xl text-center mb-2 text-primary">Drink Selection</h2>
          <p className="text-center text-muted-foreground mb-12">Premium beverages for your celebration</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinkItems.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={onAddItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
