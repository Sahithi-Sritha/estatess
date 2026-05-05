"use client";

import { TabGroup, TabList, Tab, TabPanels, TabPanel, Text } from "@tremor/react";
import { Layers, Map, Share2, Compass } from "lucide-react";

export default function DataLayers() {
  return (
    <div className="mt-8 w-full max-w-5xl mx-auto">
      <TabGroup>
        <TabList className="mb-6 flex flex-wrap justify-center border-b border-[#2A2A2A]">
          <Tab icon={Map} className="text-gray-400 ui-selected:text-[#E8272A] ui-selected:border-[#E8272A]">Masterplan</Tab>
          <Tab icon={Share2} className="text-gray-400 ui-selected:text-[#E8272A] ui-selected:border-[#E8272A]">Road Networks</Tab>
          <Tab icon={Compass} className="text-gray-400 ui-selected:text-[#E8272A] ui-selected:border-[#E8272A]">Survey Numbers</Tab>
          <Tab icon={Layers} className="text-gray-400 ui-selected:text-[#E8272A] ui-selected:border-[#E8272A]">CRZ Zones</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="w-full h-80 bg-[#111111] border border-[#2A2A2A] rounded-xl flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#E8272A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               <Map className="w-16 h-16 text-[#E8272A] mb-4 opacity-80 group-hover:scale-110 transition-transform" />
               <Text className="text-gray-300 font-medium z-10 text-lg">Masterplan Overlay Active</Text>
               <Text className="text-gray-500 text-sm mt-2 z-10 max-w-md text-center">Explore detailed city masterplans superimposed on real-world geography.</Text>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-full h-80 bg-[#111111] border border-[#2A2A2A] rounded-xl flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#E8272A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               <Share2 className="w-16 h-16 text-[#E8272A] mb-4 opacity-80 group-hover:scale-110 transition-transform" />
               <Text className="text-gray-300 font-medium z-10 text-lg">Road Networks Overlay Active</Text>
               <Text className="text-gray-500 text-sm mt-2 z-10 max-w-md text-center">Analyze current and proposed road networks and infrastructure projects.</Text>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-full h-80 bg-[#111111] border border-[#2A2A2A] rounded-xl flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#E8272A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               <Compass className="w-16 h-16 text-[#E8272A] mb-4 opacity-80 group-hover:scale-110 transition-transform" />
               <Text className="text-gray-300 font-medium z-10 text-lg">Survey Numbers Overlay Active</Text>
               <Text className="text-gray-500 text-sm mt-2 z-10 max-w-md text-center">Find exact parcel boundaries and official survey numbers instantly.</Text>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-full h-80 bg-[#111111] border border-[#2A2A2A] rounded-xl flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#E8272A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               <Layers className="w-16 h-16 text-[#E8272A] mb-4 opacity-80 group-hover:scale-110 transition-transform" />
               <Text className="text-gray-300 font-medium z-10 text-lg">CRZ Zones Overlay Active</Text>
               <Text className="text-gray-500 text-sm mt-2 z-10 max-w-md text-center">Identify Coastal Regulation Zones to ensure development compliance.</Text>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
