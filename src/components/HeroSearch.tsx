"use client";

import { TextInput, Select, SelectItem, Button } from "@tremor/react";
import { MapPin } from "lucide-react";

export default function HeroSearch() {
  return (
    <div className="w-full max-w-4xl flex flex-col md:flex-row gap-2 mt-8">
      <div className="flex-grow">
        <TextInput 
          icon={MapPin} 
          placeholder="Enter location, city, or zip code..." 
          className="w-full h-12 bg-[#141414] border-[#2A2A2A] text-white"
        />
      </div>
      <div className="w-full md:w-56">
        <Select placeholder="Property Type" className="h-12 bg-[#141414] border-[#2A2A2A]">
          <SelectItem value="residential">Residential</SelectItem>
          <SelectItem value="commercial">Commercial</SelectItem>
          <SelectItem value="land">Land</SelectItem>
          <SelectItem value="agricultural">Agricultural</SelectItem>
        </Select>
      </div>
      <Button color="red" variant="primary" className="h-12 px-8 font-bold text-white uppercase tracking-wider bg-[#E8272A] hover:bg-red-700 border-none">
        Search Properties
      </Button>
    </div>
  );
}
