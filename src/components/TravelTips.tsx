
import React from 'react';
import { Lightbulb, Palmtree } from 'lucide-react';
import { aiTravelTips, pointsOfInterest } from '@/utils/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TravelTips = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
            <Lightbulb className="h-5 w-5 text-rose-500" />
          </div>
          <h2 className="text-3xl font-bold">AI Travel Tips</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Destination Knowledge</h3>
            <div className="space-y-3">
              {aiTravelTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-rose-50 rounded-2xl hover-lift">
                  <div className="mt-1 text-lg">💡</div>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                <Palmtree className="h-4 w-4 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold">Points of Interest</h3>
            </div>
            
            <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-4">
                <div className="space-y-4">
                  {pointsOfInterest.map((poi, index) => (
                    <div key={index} className="border-b pb-3 last:border-0 last:pb-0 hover-lift">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{poi.name}</h4>
                          <Badge variant="outline" className="mt-1 mb-2 bg-rose-50 text-rose-700 border-rose-200">{poi.type}</Badge>
                          <p className="text-sm">{poi.description}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{poi.distance}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
