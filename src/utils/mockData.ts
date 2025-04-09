
import { 
  MapPin,
  Calendar,
  Building,
  CloudSun,
  Briefcase,
  PhoneCall,
  FileText,
  Ticket,
  Globe,
  CreditCard,
  Utensils,
  AlertCircle
} from "lucide-react";

export const navLinks = [
  { name: "Itinerary", href: "#itinerary", icon: Calendar },
  { name: "Location", href: "#location", icon: MapPin },
  { name: "Accommodation", href: "#accommodation", icon: Building },
  { name: "Weather", href: "#weather", icon: CloudSun },
  { name: "Packing", href: "#packing", icon: Briefcase },
  { name: "Contacts", href: "#contacts", icon: PhoneCall },
  { name: "Company Policies", href: "#policies", icon: FileText },
  { name: "Boarding Passes", href: "#boarding", icon: Ticket },
];

export const eventDetails = {
  name: "Annual Company Retreat 2024",
  date: "June 15-19, 2024",
  location: "Amalfi Coast, Italy",
  description: "Join us for an unforgettable experience on the stunning Amalfi Coast. This year's retreat combines strategic planning with team building in one of Europe's most beautiful coastal regions.",
};

export const itineraryItems = [
  {
    date: "June 15",
    day: "Saturday",
    events: [
      { time: "08:00 - 12:30", title: "Arrival & Airport Transfers" },
      { time: "13:00 - 14:30", title: "Welcome Lunch" },
      { time: "15:00 - 17:00", title: "Hotel Check-in & Free Time" },
      { time: "19:00 - 22:00", title: "Welcome Dinner & Orientation" },
    ]
  },
  {
    date: "June 16",
    day: "Sunday",
    events: [
      { time: "07:30 - 08:30", title: "Breakfast" },
      { time: "09:00 - 12:00", title: "Strategic Planning Workshop" },
      { time: "12:30 - 14:00", title: "Lunch" },
      { time: "14:30 - 17:30", title: "Team Building Activity: Coastal Hike" },
      { time: "19:00 - 21:00", title: "Dinner at Local Restaurant" },
    ]
  },
  {
    date: "June 17",
    day: "Monday",
    events: [
      { time: "07:30 - 08:30", title: "Breakfast" },
      { time: "09:00 - 12:00", title: "Product Roadmap Session" },
      { time: "12:30 - 14:00", title: "Lunch" },
      { time: "14:30 - 17:30", title: "Boat Tour Along the Coast" },
      { time: "19:00 - 21:00", title: "Beach Dinner" },
    ]
  },
  {
    date: "June 18",
    day: "Tuesday",
    events: [
      { time: "07:30 - 08:30", title: "Breakfast" },
      { time: "09:00 - 12:00", title: "Innovation Workshop" },
      { time: "12:30 - 14:00", title: "Lunch" },
      { time: "14:30 - 17:30", title: "Free Time / Optional Cooking Class" },
      { time: "19:00 - 22:00", title: "Gala Dinner & Awards" },
    ]
  },
  {
    date: "June 19",
    day: "Wednesday",
    events: [
      { time: "07:30 - 09:00", title: "Breakfast" },
      { time: "09:30 - 11:00", title: "Closing Session" },
      { time: "11:00 - 12:00", title: "Hotel Check-out" },
      { time: "12:30 - 14:00", title: "Farewell Lunch" },
      { time: "14:30 - 18:00", title: "Airport Transfers & Departures" },
    ]
  }
];

export const locationInfo = {
  name: "Hotel Belvedere",
  address: "Via Marina Grande 217, 84017 Positano, Italy",
  description: "Perched on the cliffs overlooking the Mediterranean, Hotel Belvedere offers breathtaking views of the Amalfi Coast. The venue features modern conference facilities, an infinity pool, and easy access to the beach.",
  coordinates: [40.6281, 14.4850], // Positano coordinates
  images: [
    "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    "https://images.unsplash.com/photo-1548484352-ea579e5233a8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    "https://images.unsplash.com/photo-1535991632666-5a1c365468f8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
  ]
};

export const accommodationInfo = {
  name: "Hotel Belvedere",
  description: "You'll be staying in our selected rooms at Hotel Belvedere, with stunning sea views and all modern amenities.",
  amenities: ["Free Wi-Fi", "Air Conditioning", "Room Service", "Spa Access", "Pool Access", "Fitness Center"],
  checkInTime: "15:00",
  checkOutTime: "12:00",
  images: [
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
  ]
};

export const weatherInfo = {
  forecast: [
    { day: "June 15", high: "27°C", low: "19°C", condition: "Sunny", icon: "☀️" },
    { day: "June 16", high: "28°C", low: "20°C", condition: "Partly Cloudy", icon: "⛅" },
    { day: "June 17", high: "26°C", low: "19°C", condition: "Partly Cloudy", icon: "⛅" },
    { day: "June 18", high: "25°C", low: "18°C", condition: "Sunny", icon: "☀️" },
    { day: "June 19", high: "27°C", low: "19°C", condition: "Sunny", icon: "☀️" },
  ],
  averageTemperature: "26°C / 19°C",
  sunriseTime: "5:35 AM",
  sunsetTime: "8:45 PM"
};

export const packingList = {
  essentials: ["Passport", "Travel Insurance", "Medications", "Phone & Charger", "Company ID", "Laptop & Charger"],
  clothing: ["Business Casual Attire", "Formal Attire (1 outfit)", "Swimwear", "Comfortable Walking Shoes", "Light Jacket/Sweater", "Hat/Cap"],
  personal: ["Sunscreen (SPF 30+)", "Sunglasses", "Insect Repellent", "Travel Adapter (Type C/F/L)", "Beach Towel", "Water Bottle"]
};

export const contactInfo = [
  { name: "Event Coordinator", contact: "Sarah Johnson", phone: "+1-555-123-4567", email: "sarah.j@company.com" },
  { name: "Hotel Belvedere", contact: "Front Desk", phone: "+39-089-875-1234", email: "info@hotelbelvedere.it" },
  { name: "Airport Transfer Service", contact: "Naples Express", phone: "+39-081-456-7890", email: "bookings@naplesexpress.it" },
  { name: "Company Emergency Line", contact: "24/7 Support", phone: "+1-555-999-8888", email: "emergency@company.com" },
];

export const companyPolicies = [
  {
    title: "Expense Reimbursement",
    icon: CreditCard,
    content: "All business-related expenses will be covered. Keep receipts for meals, transport, and business activities. Submit expenses through the company portal within 14 days."
  },
  {
    title: "Travel Arrangements",
    icon: Globe,
    content: "All flights and accommodations have been pre-arranged and paid for. Any changes must be approved by your department head."
  },
  {
    title: "Meals & Entertainment",
    icon: Utensils,
    content: "All scheduled meals are covered. Personal expenses such as mini-bar, room service, or non-scheduled meals require separate payment."
  },
  {
    title: "Emergency Procedures",
    icon: AlertCircle,
    content: "In case of emergency, contact the company emergency line. Medical insurance coverage details are available in your personalized itinerary."
  }
];

export const mockBoardingPasses = {
  "lisa": [
    {
      airline: "British Airways",
      flight: "BA1492",
      from: "London Heathrow (LHR)",
      to: "Naples (NAP)",
      date: "June 15, 2024",
      departureTime: "06:45",
      arrivalTime: "10:25",
      seat: "14A",
      gate: "C12",
      boardingTime: "06:00",
      pdf: "/boarding-pass-outbound.pdf"
    },
    {
      airline: "British Airways",
      flight: "BA1493",
      from: "Naples (NAP)",
      to: "London Heathrow (LHR)",
      date: "June 19, 2024",
      departureTime: "18:30",
      arrivalTime: "20:15",
      seat: "21F",
      gate: "B8",
      boardingTime: "17:45",
      pdf: "/boarding-pass-return.pdf"
    }
  ],
  "john": [
    {
      airline: "Lufthansa",
      flight: "LH1456",
      from: "Frankfurt (FRA)",
      to: "Naples (NAP)",
      date: "June 15, 2024",
      departureTime: "07:30",
      arrivalTime: "09:45",
      seat: "22C",
      gate: "A15",
      boardingTime: "06:45",
      pdf: "/boarding-pass-outbound.pdf"
    },
    {
      airline: "Lufthansa",
      flight: "LH1457",
      from: "Naples (NAP)",
      to: "Frankfurt (FRA)",
      date: "June 19, 2024",
      departureTime: "19:15",
      arrivalTime: "21:30",
      seat: "18D",
      gate: "C5",
      boardingTime: "18:30",
      pdf: "/boarding-pass-return.pdf"
    }
  ],
  "demo": [
    {
      airline: "Demo Airlines",
      flight: "DA1234",
      from: "Your City (YCT)",
      to: "Naples (NAP)",
      date: "June 15, 2024",
      departureTime: "08:30",
      arrivalTime: "11:45",
      seat: "12B",
      gate: "D10",
      boardingTime: "07:45",
      pdf: "/boarding-pass-demo.pdf"
    },
    {
      airline: "Demo Airlines",
      flight: "DA5678",
      from: "Naples (NAP)",
      to: "Your City (YCT)",
      date: "June 19, 2024",
      departureTime: "16:30",
      arrivalTime: "19:45",
      seat: "24A",
      gate: "E5",
      boardingTime: "15:45",
      pdf: "/boarding-pass-demo.pdf"
    }
  ]
};

export const aiTravelTips = [
  "The Amalfi Coast weather is typically warm and sunny in June, with average temperatures around 26°C (79°F).",
  "Most restaurants and shops in tourist areas accept credit cards, but smaller establishments might be cash-only. The currency is the Euro (€).",
  "Sunscreen with high SPF is essential as the Mediterranean sun can be intense, even on cloudy days.",
  "Comfortable walking shoes are a must as many streets in Positano and Amalfi are steep and cobblestoned.",
  "Local buses are an excellent way to travel between towns on the coast, but they can get crowded in peak season.",
  "Don't miss trying local specialties like Limoncello, fresh seafood, and Delizia al Limone (lemon dessert).",
  "Many restaurants and attractions close during the afternoon hours (typically 3-6 PM) for the traditional Italian 'riposo'."
];

export const pointsOfInterest = [
  {
    name: "Path of the Gods",
    type: "Hiking Trail",
    description: "A spectacular hiking path with breathtaking views of the coastline.",
    distance: "3.5 km from hotel"
  },
  {
    name: "Da Adolfo",
    type: "Restaurant",
    description: "Famous beach restaurant serving fresh seafood with amazing views.",
    distance: "1.2 km from hotel"
  },
  {
    name: "Church of Santa Maria Assunta",
    type: "Historic Site",
    description: "Beautiful church with distinctive majolica-tiled dome.",
    distance: "0.8 km from hotel"
  },
  {
    name: "Franco's Bar",
    type: "Bar",
    description: "Upscale cocktail bar with stunning sunset views.",
    distance: "0.5 km from hotel"
  },
  {
    name: "La Sponda",
    type: "Restaurant",
    description: "Michelin-starred restaurant with romantic candlelit atmosphere.",
    distance: "0.3 km from hotel"
  }
];
