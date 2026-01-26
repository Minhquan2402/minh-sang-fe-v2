import { Trash2, Check } from 'lucide-react';
import { MenuItem } from '@/app/components/menu-card';

interface OrderItem extends MenuItem {
  quantity: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  onRemoveItem: (id: string) => void;
  onConfirmBooking: () => void;
  guests: number;
  date: string;
  time: string;
  location: string;
}

export function OrderSummary({
  items,
  onRemoveItem,
  onConfirmBooking,
  guests,
  date,
  time,
  location
}: OrderSummaryProps) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isBookingValid = guests > 0 && date && time && location;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-2 text-primary">Order Summary</h2>
          <p className="text-center text-muted-foreground mb-12">Review your selection before confirming</p>
          
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
            {/* Booking Details */}
            {isBookingValid && (
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="mb-4 text-primary">Booking Details</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Guests:</span>
                    <span className="ml-2 text-card-foreground">{guests} people</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <span className="ml-2 text-card-foreground">{location}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Date:</span>
                    <span className="ml-2 text-card-foreground">{new Date(date).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Time:</span>
                    <span className="ml-2 text-card-foreground">{time}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Order Items */}
            {items.length > 0 ? (
              <div className="space-y-4 mb-6">
                <h3 className="text-primary">Selected Items</h3>
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex-1">
                      <p className="text-card-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-accent">${(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-destructive hover:text-destructive/80 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No items selected yet. Browse our menu to add items to your party.
              </div>
            )}

            {/* Total */}
            {items.length > 0 && (
              <div className="border-t border-border pt-6 mb-6">
                <div className="flex justify-between items-center text-xl">
                  <span className="text-primary">Total:</span>
                  <span className="text-accent">${total.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <button
              onClick={onConfirmBooking}
              disabled={!isBookingValid}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent"
            >
              <Check className="w-5 h-5" />
              Confirm Booking
            </button>
            
            {!isBookingValid && (
              <p className="text-sm text-muted-foreground text-center mt-4">
                Please fill in all booking details to confirm your reservation
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
