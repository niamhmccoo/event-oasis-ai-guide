
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { itineraryItems } from '@/utils/mockData';

const Itinerary = () => {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <section id="itinerary" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Event Itinerary</h2>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="0" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {itineraryItems.map((item, index) => (
                <TabsTrigger 
                  key={index} 
                  value={index.toString()}
                  className="flex flex-col py-3"
                >
                  <span className="font-medium">{item.date}</span>
                  <span className="text-sm text-muted-foreground">{item.day}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {itineraryItems.map((item, dayIndex) => (
              <TabsContent key={dayIndex} value={dayIndex.toString()}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{item.date} · {item.day}</h3>
                    <div className="space-y-6">
                      {item.events.map((event, eventIndex) => (
                        <div 
                          key={eventIndex} 
                          className={`relative pl-10 timeline-dot ${
                            eventIndex === 0 ? 'first-timeline-item' : ''
                          } ${
                            eventIndex === item.events.length - 1 ? 'last-timeline-item' : ''
                          } timeline-line`}
                        >
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
