
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { eventDetails } from '@/utils/mockData';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1572954204808-81305ab7eba0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb')",
      height: "80vh",
      backgroundPosition: "center 60%",
    }}>
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative h-full flex flex-col justify-center items-center text-center text-white">
        <div className="max-w-3xl">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            {eventDetails.name}
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
            <div className="flex items-center justify-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{eventDetails.date}</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{eventDetails.location}</span>
            </div>
          </div>
          
          <p className="text-lg mb-8 opacity-90">
            {eventDetails.description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gradient-bg border-none">
              View Itinerary
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              Download Event Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
