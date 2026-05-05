"use client";

import { Card, TextInput, Select, SelectItem, Button } from "@tremor/react";
import { Search, Navigation } from "lucide-react";

export default function SearchBar() {
  return (
    <Card className="bg-[#141414] border-[#2A2A2A] p-3">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-grow">
          <TextInput
            icon={Search}
            placeholder="Search location, city, or zip..."
            className="bg-[#0A0A0A] border-[#2A2A2A] text-white h-11"
          />
        </div>

        <div className="w-full md:w-48">
          <Select
            placeholder="Property Type"
            className="bg-[#0A0A0A] border-[#2A2A2A] h-11"
          >
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="agricultural">Agricultural</SelectItem>
            <SelectItem value="residential">Residential</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </Select>
        </div>

        <Button
          color="red"
          className="bg-[#E8272A] hover:bg-red-700 border-none font-bold uppercase tracking-wider text-xs h-11 px-8"
        >
          Search
        </Button>

        <Button
          variant="secondary"
          icon={Navigation}
          className="bg-transparent border-[#2A2A2A] text-gray-300 hover:text-white hover:bg-[#0A0A0A] h-11"
        >
          Near Me
        </Button>
      </div>
    </Card>
  );
}
