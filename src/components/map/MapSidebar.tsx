"use client";

import { TextInput, Select, SelectItem, Card, Badge, Metric, Text, Button } from "@tremor/react";
import { Search, MapPin } from "lucide-react";

export default function MapSidebar() {
  return (
    <aside className="w-[320px] h-full flex flex-col bg-[#0A0A0A] border-r border-[#2A2A2A] shrink-0 z-10 relative">
      
      {/* Top Header / Branding */}
      <div className="p-4 border-b border-[#2A2A2A] shrink-0 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-widest uppercase">
          <span className="text-[#E8272A]">B</span><span className="text-white">D</span><span className="text-[#E8272A]">P</span>
        </a>
        <Button variant="secondary" className="text-xs bg-transparent border-[#2A2A2A] text-gray-400 hover:text-white px-3 py-1">
          Exit Map
        </Button>
      </div>

      {/* Filters Section */}
      <div className="p-4 flex flex-col gap-3 shrink-0 border-b border-[#2A2A2A]">
        <TextInput 
          icon={Search} 
          placeholder="Search location..." 
          className="bg-[#141414] border-[#2A2A2A] text-white"
        />
        <Select placeholder="Property Type" className="bg-[#141414] border-[#2A2A2A]">
          <SelectItem value="residential">Residential</SelectItem>
          <SelectItem value="commercial">Commercial</SelectItem>
          <SelectItem value="agricultural">Agricultural</SelectItem>
          <SelectItem value="land">Land</SelectItem>
        </Select>
      </div>

      {/* Results Header */}
      <div className="p-4 shrink-0">
        <h2 className="font-bold text-white text-lg">24 Properties Found</h2>
        <Text className="text-xs text-gray-400">Showing results for current map area</Text>
      </div>

      {/* Scrollable Listings */}
      <div className="flex-1 overflow-y-auto p-4 pt-0 flex flex-col gap-4 custom-scrollbar">
        
        {/* Card 1 */}
        <Card className="bg-[#141414] border-[#2A2A2A] p-0 overflow-hidden">
          <div className="h-40 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80" alt="Villa" className="w-full h-full object-cover" />
            <Badge color="red" className="absolute top-2 left-2 bg-[#E8272A] border-none text-white">Verified</Badge>
          </div>
          <div className="p-4">
            <Metric className="text-[#E8272A] text-xl mb-1">₹ 2.4 Cr</Metric>
            <h3 className="font-bold text-white text-md truncate mb-2">Premium Villa in Jubilee Hills</h3>
            <div className="flex items-center gap-1 text-gray-400 mb-4">
              <MapPin className="w-3 h-3" />
              <Text className="text-xs">3,200 sqft</Text>
            </div>
            <Button color="red" className="w-full bg-[#E8272A] hover:bg-red-700 text-white border-none font-bold uppercase tracking-wider text-xs">
              Call Now
            </Button>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="bg-[#141414] border-[#2A2A2A] p-0 overflow-hidden">
          <div className="h-40 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" alt="Commercial" className="w-full h-full object-cover" />
            <Badge className="absolute top-2 left-2 bg-blue-600 border-none text-white">Commercial</Badge>
          </div>
          <div className="p-4">
            <Metric className="text-[#E8272A] text-xl mb-1">₹ 5.1 Cr</Metric>
            <h3 className="font-bold text-white text-md truncate mb-2">Modern Office Space</h3>
            <div className="flex items-center gap-1 text-gray-400 mb-4">
              <MapPin className="w-3 h-3" />
              <Text className="text-xs">1,200 sqft</Text>
            </div>
            <Button color="red" className="w-full bg-[#E8272A] hover:bg-red-700 text-white border-none font-bold uppercase tracking-wider text-xs">
              Call Now
            </Button>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="bg-[#141414] border-[#2A2A2A] p-0 overflow-hidden">
          <div className="h-40 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80" alt="Agricultural" className="w-full h-full object-cover" />
            <Badge color="green" className="absolute top-2 left-2 bg-green-600 border-none text-white">Agricultural</Badge>
          </div>
          <div className="p-4">
            <Metric className="text-[#E8272A] text-xl mb-1">₹ 85 Lacs</Metric>
            <h3 className="font-bold text-white text-md truncate mb-2">Prime Land Parcel</h3>
            <div className="flex items-center gap-1 text-gray-400 mb-4">
              <MapPin className="w-3 h-3" />
              <Text className="text-xs">4,500 sqft</Text>
            </div>
            <Button color="red" className="w-full bg-[#E8272A] hover:bg-red-700 text-white border-none font-bold uppercase tracking-wider text-xs">
              Call Now
            </Button>
          </div>
        </Card>

      </div>
    </aside>
  );
}
