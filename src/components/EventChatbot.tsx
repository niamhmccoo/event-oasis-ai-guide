
import React, { useState, useRef, useEffect } from 'react';
import { SendHorizontal, X, Bot, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { aiTravelTips, eventDetails, locationInfo } from '@/utils/mockData';

type Message = {
  content: string;
  sender: 'user' | 'bot';
};

const EventChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      content: `Hello! I'm your Event Oasis AI assistant for the ${eventDetails.name}. How can I help you today?`,
      sender: 'bot'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { content: message, sender: 'user' }]);
    
    // Simulate AI response
    setIsTyping(true);
    
    setTimeout(() => {
      // Simple keyword matching for demo
      let response = "I'm not sure about that. Could you ask something about the event, location, or travel advice?";
      
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('weather') || lowerMessage.includes('temperature')) {
        response = "The weather in Amalfi Coast in June is typically warm and sunny with temperatures around 26°C (79°F). It's perfect for outdoor activities, but don't forget to bring sunscreen!";
      } 
      else if (lowerMessage.includes('currency') || lowerMessage.includes('money') || lowerMessage.includes('payment')) {
        response = "Italy uses the Euro (€). Most restaurants and shops in tourist areas like the Amalfi Coast accept credit cards, but it's always good to carry some cash for smaller establishments or markets.";
      }
      else if (lowerMessage.includes('food') || lowerMessage.includes('restaurant') || lowerMessage.includes('eat')) {
        response = "The Amalfi Coast is known for its amazing seafood, pasta dishes, and limoncello! Some local specialties include Scialatielli ai Frutti di Mare (seafood pasta), Delizia al Limone (lemon dessert), and fresh buffalo mozzarella.";
      }
      else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        response = `Hello! I'm here to assist you with any questions about the ${eventDetails.name} at ${locationInfo.name}. What would you like to know?`;
      }
      else if (lowerMessage.includes('itinerary') || lowerMessage.includes('schedule')) {
        response = "The event runs from June 15-19, 2024. It includes strategic planning workshops, team building activities, and an exploration of the beautiful Amalfi Coast. Check the Itinerary section for a detailed day-by-day schedule!";
      }
      else if (lowerMessage.includes('hotel') || lowerMessage.includes('stay') || lowerMessage.includes('accommodation')) {
        response = `You'll be staying at ${accommodationInfo.name}, which offers beautiful sea views, free Wi-Fi, air conditioning, and access to a spa and pool. Check-in time is ${accommodationInfo.checkInTime} and check-out is at ${accommodationInfo.checkOutTime}.`;
      }
      
      setMessages(prev => [...prev, { content: response, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
    
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        className={`fixed right-6 bottom-6 w-12 h-12 rounded-full shadow-lg gradient-bg text-white flex items-center justify-center ${isOpen ? 'rotate-90' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Bot />}
      </Button>
      
      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed right-6 bottom-20 w-full max-w-[360px] max-h-[500px] shadow-lg flex flex-col">
          <div className="gradient-bg p-3 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-medium">Event AI Assistant</span>
            </div>
            <Button variant="ghost" className="h-8 w-8 p-0 text-white" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <CardContent className="p-0 flex-grow flex flex-col">
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-secondary/10 text-foreground'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary/10 text-foreground max-w-[80%] rounded-lg p-3 flex items-center gap-1">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <Input 
                  placeholder="Ask me anything..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-grow"
                />
                <Button 
                  onClick={handleSend} 
                  className="gradient-bg"
                  disabled={!message.trim() || isTyping}
                >
                  <SendHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                I can answer questions about the event, location, and travel tips!
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default EventChatbot;
