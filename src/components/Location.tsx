
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { locationInfo } from '@/utils/mockData';
import TravelMap from './TravelMap';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Location = () => {
  // Ensure we're passing a tuple, not an array
  const coordinates: [number, number] = [locationInfo.coordinates[0], locationInfo.coordinates[1]];
  
  return (
    <section id="location" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Event Location</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden shadow-lg border-none">
            <CardContent className="p-0">
              <TravelMap 
                coordinates={coordinates} 
                className="h-80 w-full" 
              />
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-2xl font-semibold mb-3">{locationInfo.name}</h3>
            <p className="text-muted-foreground mb-4">{locationInfo.address}</p>
            <p className="mb-6">{locationInfo.description}</p>
            
            <h4 className="font-medium mb-2">Location Photos</h4>
            <Tabs defaultValue="0" className="w-full">
              <TabsList className="mb-2">
                {locationInfo.images.map((_, i) => (
                  <TabsTrigger key={i} value={i.toString()} className="rounded-full px-4">
                    {i + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              {locationInfo.images.map((img, i) => (
                <TabsContent key={i} value={i.toString()}>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${locationInfo.name} - Image ${i+1}`} 
                      className="w-full h-60 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
