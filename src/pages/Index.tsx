
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
    <div className="min-h-screen">
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
      </div>
    </div>
  );
};

export default Index;
