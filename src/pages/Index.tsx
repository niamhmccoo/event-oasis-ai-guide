
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Itinerary from '@/components/Itinerary';
import Location from '@/components/Location';
import Accommodation from '@/components/Accommodation';
import Weather from '@/components/Weather';
import TravelTips from '@/components/TravelTips';
import CompanyInfo from '@/components/CompanyInfo';
import BoardingPass from '@/components/BoardingPass';
import EventChatbot from '@/components/EventChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Hero />
        <Itinerary />
        <Location />
        <Accommodation />
        <Weather />
        <TravelTips />
        <CompanyInfo />
        <BoardingPass />
        <EventChatbot />
        
        {/* Footer */}
        <footer className="py-8 bg-gray-50 text-center">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Company Retreat. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
