
import React from 'react';
import { CloudSun, Briefcase } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { weatherInfo, packingList } from '@/utils/mockData';

const Weather = () => {
  return (
    <section id="weather" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
            <CloudSun className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Weather & Packing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Weather Forecast</h3>
            <p className="mb-6">
              Expect warm, Mediterranean weather during our stay with an average daily temperature of {weatherInfo.averageTemperature}.
              Sunrise is around {weatherInfo.sunriseTime} and sunset at {weatherInfo.sunsetTime}.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {weatherInfo.forecast.map((day, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-4 text-center">
                    <p className="text-3xl mb-1">{day.icon}</p>
                    <p className="font-medium">{day.day}</p>
                    <p className="text-sm text-muted-foreground">{day.condition}</p>
                    <div className="flex justify-center gap-2 mt-2">
                      <span className="text-sm font-medium">{day.high}</span>
                      <span className="text-sm text-muted-foreground">{day.low}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div id="packing">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Suggested Packing List</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Essentials</h4>
                  <ul className="space-y-1">
                    {packingList.essentials.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Clothing</h4>
                  <ul className="space-y-1">
                    {packingList.clothing.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Personal Items</h4>
                  <ul className="space-y-1">
                    {packingList.personal.map((item, index) => (
                      <li key={index} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
