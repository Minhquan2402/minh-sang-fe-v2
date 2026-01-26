import { Users, Calendar, MapPin } from 'lucide-react';

interface BookingFormProps {
  guests: number;
  setGuests: (value: number) => void;
  date: string;
  setDate: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
}

export function BookingForm({
  guests,
  setGuests,
  date,
  setDate,
  time,
  setTime,
  location,
  setLocation
}: BookingFormProps) {
  const locations = [
    'Downtown - Main Street',
    'Waterfront - Harbor View',
    'Uptown - Garden District',
    'City Center - Plaza'
  ];

  return (
    <section id="book" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-2 text-primary">Reserve Your Table</h2>
          <p className="text-center text-muted-foreground mb-12">Fill in the details below to start planning your event</p>
          
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-card-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Number of Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter number of guests"
                />
              </div>

              <div>
                <label className="block mb-2 text-card-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Location / Branch
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select a location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2 text-card-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block mb-2 text-card-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-accent" />
                  Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
