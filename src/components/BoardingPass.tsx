
import React, { useState } from 'react';
import { Ticket, Download, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockBoardingPasses } from '@/utils/mockData';

const BoardingPass = () => {
  const [username, setUsername] = useState<string>('');
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [boardingPasses, setBoardingPasses] = useState<any[]>([]);

  const handleLogin = () => {
    const lowerUsername = username.toLowerCase();
    if (mockBoardingPasses[lowerUsername as keyof typeof mockBoardingPasses]) {
      setBoardingPasses(mockBoardingPasses[lowerUsername as keyof typeof mockBoardingPasses]);
      setAuthenticated(true);
    } else if (lowerUsername) {
      // For demo purposes, show demo boarding passes
      setBoardingPasses(mockBoardingPasses.demo);
      setAuthenticated(true);
    }
  };

  return (
    <section id="boarding" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center">
            <Ticket className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Your Boarding Passes</h2>
        </div>

        {!authenticated ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Access Your Travel Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-center text-muted-foreground">
                  Enter your username to access your personalized boarding passes and hotel bookings.
                </p>
                <Input 
                  placeholder="Your username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button className="w-full gradient-bg" onClick={handleLogin}>
                  Access Documents
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Try "lisa", "john", or any text for a demo.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Your Flight Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boardingPasses.map((pass, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="bg-primary/10 p-4 flex justify-between items-center border-b">
                    <div>
                      <h4 className="font-medium">{pass.airline}</h4>
                      <p className="text-sm text-muted-foreground">Flight {pass.flight}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{pass.date}</p>
                      <p className="text-sm text-muted-foreground">Seat {pass.seat}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">From</p>
                        <p className="font-medium">{pass.from}</p>
                        <p className="text-lg font-bold">{pass.departureTime}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">To</p>
                        <p className="font-medium">{pass.to}</p>
                        <p className="text-lg font-bold">{pass.arrivalTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center border-t pt-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Gate</p>
                        <p>{pass.gate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Boarding</p>
                        <p>{pass.boardingTime}</p>
                      </div>
                      <Button variant="outline" className="flex gap-2 items-center">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="ghost" onClick={() => setAuthenticated(false)}>
                Log Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BoardingPass;
