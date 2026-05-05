"use client";

import { Card, TabGroup, TabList, Tab } from "@tremor/react";

export default function MapTopBar() {
  return (
    <div className="absolute top-4 left-4 right-4 z-10 flex justify-center pointer-events-none">
      <Card className="bg-[#141414]/90 backdrop-blur-md border-[#2A2A2A] p-2 w-auto pointer-events-auto rounded-full shadow-2xl">
        <TabGroup>
          <TabList className="flex border-none" variant="solid">
            <Tab className="rounded-full px-6 ui-selected:bg-[#E8272A] ui-selected:text-white text-gray-400 hover:text-white">All Properties</Tab>
            <Tab className="rounded-full px-6 ui-selected:bg-[#E8272A] ui-selected:text-white text-gray-400 hover:text-white">Residential</Tab>
            <Tab className="rounded-full px-6 ui-selected:bg-[#E8272A] ui-selected:text-white text-gray-400 hover:text-white">Commercial</Tab>
            <Tab className="rounded-full px-6 ui-selected:bg-[#E8272A] ui-selected:text-white text-gray-400 hover:text-white">Agricultural</Tab>
          </TabList>
        </TabGroup>
      </Card>
    </div>
  );
}
