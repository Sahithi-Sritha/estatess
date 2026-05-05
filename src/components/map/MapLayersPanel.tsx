"use client";

import { Card, Switch, Text } from "@tremor/react";
import { useState } from "react";
import { Layers } from "lucide-react";

export default function MapLayersPanel() {
  const [masterplan, setMasterplan] = useState(true);
  const [roads, setRoads] = useState(false);
  const [surveys, setSurveys] = useState(false);
  const [crz, setCrz] = useState(false);

  return (
    <div className="absolute top-20 right-4 z-10">
      <Card className="bg-[#141414]/95 backdrop-blur-md border-[#2A2A2A] w-56 shadow-2xl">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#2A2A2A]">
          <Layers className="w-4 h-4 text-gray-400" />
          <Text className="text-xs font-bold text-gray-400 uppercase tracking-wider">Map Layers</Text>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Text className="text-gray-300 font-medium text-sm">Masterplan</Text>
            <Switch 
              checked={masterplan} 
              onChange={setMasterplan} 
              className="ui-checked:bg-[#E8272A]"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Text className="text-gray-300 font-medium text-sm">Road Networks</Text>
            <Switch 
              checked={roads} 
              onChange={setRoads} 
              className="ui-checked:bg-[#E8272A]"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Text className="text-gray-300 font-medium text-sm">Survey Numbers</Text>
            <Switch 
              checked={surveys} 
              onChange={setSurveys} 
              className="ui-checked:bg-[#E8272A]"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Text className="text-gray-300 font-medium text-sm">CRZ Zones</Text>
            <Switch 
              checked={crz} 
              onChange={setCrz} 
              className="ui-checked:bg-[#E8272A]"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
