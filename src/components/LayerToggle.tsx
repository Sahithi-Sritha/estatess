"use client";

import { Card, Text, Divider, Switch } from "@tremor/react";
import { Layers } from "lucide-react";

interface Layer {
  id: string;
  name: string;
  active: boolean;
}

interface LayerToggleProps {
  layers: Layer[];
  onToggle: (id: string, active: boolean) => void;
}

export default function LayerToggle({ layers, onToggle }: LayerToggleProps) {
  return (
    <Card className="bg-[#141414] border-[#2A2A2A] shadow-2xl">
      <div className="flex items-center gap-2 mb-1">
        <Layers className="w-4 h-4 text-gray-400" />
        <Text className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          Map Layers
        </Text>
      </div>

      <Divider className="border-[#2A2A2A] my-3" />

      <div className="flex flex-col gap-4">
        {layers.map((layer) => (
          <div key={layer.id} className="flex items-center justify-between">
            <Text
              className={`font-medium text-sm ${
                layer.active ? "text-white" : "text-gray-400"
              } transition-colors`}
            >
              {layer.name}
            </Text>
            <Switch
              checked={layer.active}
              onChange={(val) => onToggle(layer.id, val)}
              className="ui-checked:bg-[#E8272A]"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
