import { Card, Badge, Metric, Text, Divider, Button } from "@tremor/react";
import { MapPin, Maximize } from "lucide-react";

interface PropertyCardProps {
  title: string;
  price: string;
  area: string;
  location: string;
  type: string;
  verified: boolean;
  sellerName: string;
  imageUrl: string;
}

export default function PropertyCard({
  title,
  price,
  area,
  location,
  type,
  verified,
  sellerName,
  imageUrl,
}: PropertyCardProps) {
  return (
    <Card className="bg-[#141414] border-[#2A2A2A] hover:border-[#E8272A] transition-colors p-0 overflow-hidden group">
      {/* Image */}
      <div className="h-52 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {verified && (
          <Badge
            color="red"
            className="absolute top-3 left-3 bg-[#E8272A] text-white border-none shadow-lg"
          >
            Verified
          </Badge>
        )}
        <Badge className="absolute top-3 right-3 bg-[#0A0A0A]/80 backdrop-blur-sm text-white border-none">
          {type}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <Metric className="text-[#E8272A] mb-1">{price}</Metric>
        <h3 className="text-lg font-bold text-white truncate mb-3">{title}</h3>

        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4 shrink-0" />
            <Text className="text-sm truncate">{location}</Text>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Maximize className="w-4 h-4 shrink-0" />
            <Text className="text-sm">{area}</Text>
          </div>
        </div>

        <Divider className="border-[#2A2A2A] my-4" />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center text-white font-bold text-xs">
              {sellerName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </div>
            <Text className="text-gray-300 text-sm font-medium">
              {sellerName}
            </Text>
          </div>
        </div>

        <Button
          color="red"
          className="w-full bg-[#E8272A] hover:bg-red-700 text-white border-none font-bold uppercase tracking-wider text-xs"
        >
          Call Directly
        </Button>
      </div>
    </Card>
  );
}
