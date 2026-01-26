import { useState, useRef } from 'react';
import { Header } from '@/app/components/header';
import { Hero } from '@/app/components/hero';
import { BookingForm } from '@/app/components/booking-form';
import { MenuSection } from '@/app/components/menu-section';
import { OrderSummary } from '@/app/components/order-summary';
import { MenuItem } from '@/app/components/menu-card';
import { toast } from 'sonner';
import { Toaster } from 'sonner';

interface OrderItem extends MenuItem {
  quantity: number;
}

export default function App() {
  // Booking form state
  const [guests, setGuests] = useState(4);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  
  // Order state
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  
  // Refs for scrolling
  const bookingRef = useRef<HTMLDivElement>(null);

  // Menu items data
  const menuItems: MenuItem[] = [
    // Food
    {
      id: 'food-1',
      name: 'Prime Ribeye Steak',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1705755402973-009b7877a0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaW5uZXJ8ZW58MXx8fHwxNzY5MjM4NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'food'
    },
    {
      id: 'food-2',
      name: 'Grilled Salmon',
      price: 38.99,
      image: 'https://images.unsplash.com/photo-1577004686904-1a4f118acf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2FsbW9uJTIwcGxhdGV8ZW58MXx8fHwxNzY5MzI2NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'food'
    },
    {
      id: 'food-3',
      name: 'Truffle Pasta Carbonara',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1764586119076-61711e8ed25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYSUyMGRpc2h8ZW58MXx8fHwxNzY5Mjg0MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'food'
    },
    {
      id: 'food-4',
      name: 'Lobster Thermidor',
      price: 52.99,
      image: 'https://images.unsplash.com/photo-1666453360366-3fcc86a690b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2JzdGVyJTIwZGlubmVyJTIwcGxhdGV8ZW58MXx8fHwxNzY5MzQ5NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'food'
    },
    // Drinks
    {
      id: 'drink-1',
      name: 'Premium Champagne',
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1558327664-43c61ab50539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3MlMjBjaGFtcGFnbmV8ZW58MXx8fHwxNzY5MzQ5NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drink'
    },
    {
      id: 'drink-2',
      name: 'Signature Cocktail',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1650691960684-c15e3e2d5c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGRyaW5rJTIwYmFyfGVufDF8fHx8MTc2OTMwNjE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drink'
    },
    {
      id: 'drink-3',
      name: 'Fresh Fruit Juice',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1641659735894-45046caad624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGp1aWNlJTIwZ2xhc3N8ZW58MXx8fHwxNzY5MzQzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drink'
    },
    {
      id: 'drink-4',
      name: 'Vintage Wine',
      price: 65.00,
      image: 'https://images.unsplash.com/photo-1558327664-43c61ab50539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3MlMjBjaGFtcGFnbmV8ZW58MXx8fHwxNzY5MzQ5NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drink'
    }
  ];

  const handleBookNow = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddItem = (item: MenuItem) => {
    setOrderItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast.success(`${item.name} added to your party!`);
  };

  const handleRemoveItem = (id: string) => {
    const item = orderItems.find(i => i.id === id);
    setOrderItems(prev => prev.filter(i => i.id !== id));
    if (item) {
      toast.success(`${item.name} removed from your party`);
    }
  };

  const handleConfirmBooking = () => {
    if (guests > 0 && date && time && location) {
      toast.success('Booking confirmed! We look forward to hosting your party.', {
        duration: 5000,
      });
      // Reset form
      setTimeout(() => {
        setGuests(4);
        setDate('');
        setTime('');
        setLocation('');
        setOrderItems([]);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" richColors />
      
      <Header />
      
      <Hero onBookNow={handleBookNow} />
      
      <div ref={bookingRef}>
        <BookingForm
          guests={guests}
          setGuests={setGuests}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          location={location}
          setLocation={setLocation}
        />
      </div>
      
      <MenuSection items={menuItems} onAddItem={handleAddItem} />
      
      <OrderSummary
        items={orderItems}
        onRemoveItem={handleRemoveItem}
        onConfirmBooking={handleConfirmBooking}
        guests={guests}
        date={date}
        time={time}
        location={location}
      />
      
      <footer id="contact" className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl mb-4 text-primary-foreground">Contact Us</h3>
          <p className="text-primary-foreground/80 mb-2">Phone: +1 (555) 123-4567</p>
          <p className="text-primary-foreground/80 mb-2">Email: reservations@lagrandetable.com</p>
          <p className="text-primary-foreground/80 mt-8 text-sm">© 2026 La Grande Table. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
