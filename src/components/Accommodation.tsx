
import React from 'react';
import { Building, Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { accommodationInfo } from '@/utils/mockData';
import TravelMap from './TravelMap';
import { locationInfo } from '@/utils/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Accommodation = () => {
  return (
    <section id="accommodation" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
            <Building className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Accommodation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3">{accommodationInfo.name}</h3>
            <p className="mb-6">{accommodationInfo.description}</p>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">Check-in/Check-out Times</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Check-in</p>
                  <p className="font-medium">{accommodationInfo.checkInTime}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Check-out</p>
                  <p className="font-medium">{accommodationInfo.checkOutTime}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Amenities</h4>
              <div className="grid grid-cols-2 gap-2">
                {accommodationInfo.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Room Photos</h4>
            <Tabs defaultValue="0" className="w-full">
              <TabsList className="mb-2">
                {accommodationInfo.images.map((_, i) => (
                  <TabsTrigger key={i} value={i.toString()}>
                    {i + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              {accommodationInfo.images.map((img, i) => (
                <TabsContent key={i} value={i.toString()}>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Room - Image ${i+1}`} 
                      className="w-full h-60 object-cover"
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <TravelMap 
                    coordinates={locationInfo.coordinates} 
                    className="h-60 w-full" 
                    zoom={16}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
