import type { Metadata } from "next";
import MapSidebar from "@/components/map/MapSidebar";
import MapTopBar from "@/components/map/MapTopBar";
import MapLayersPanel from "@/components/map/MapLayersPanel";

export const metadata: Metadata = {
  title: "Interactive Map | Buy Deal Property",
  description: "Explore premium real estate properties using our interactive map with advanced institutional-grade data layers.",
};

export default function MapPage() {
  return (
    <div className="h-screen w-full bg-[#0A0A0A] overflow-hidden flex selection:bg-[#E8272A] selection:text-white">
      {/* Left Sidebar */}
      <MapSidebar />

      {/* Right Map Area */}
      <main className="flex-1 relative bg-[#0A0A0A] overflow-hidden">
        
        {/* Dark Styled Map Placeholder */}
        <div 
          id="map" 
          className="absolute inset-0 bg-[#0d0d0d] flex items-center justify-center opacity-80" 
          style={{ backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        >
          <div className="text-gray-600 font-bold tracking-[0.2em] uppercase flex flex-col items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
            Google Maps Goes Here
          </div>
        </div>

        {/* Custom map pins simulation */}
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
            <div className="bg-[#E8272A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(232,39,42,0.5)] border border-white/20 group-hover:scale-110 transition-transform">
                ₹ 2.4 Cr
            </div>
            <div className="w-1 h-3 bg-[#E8272A] mx-auto mt-0.5"></div>
        </div>
        
        <div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
            <div className="bg-[#141414] text-white text-xs font-bold px-3 py-1.5 rounded-full border border-gray-600 group-hover:border-[#E8272A] transition-colors relative z-0 group-hover:z-10">
                ₹ 5.1 Cr
            </div>
            <div className="w-1 h-3 bg-gray-600 mx-auto mt-0.5 group-hover:bg-[#E8272A] transition-colors"></div>
        </div>

        {/* Floating Top Bar Filters */}
        <MapTopBar />

        {/* Floating Layers Panel */}
        <MapLayersPanel />

        {/* Floating Zoom Controls (Bonus UI) */}
        <div className="absolute bottom-8 right-4 flex flex-col bg-[#141414]/90 backdrop-blur-md border border-[#2A2A2A] rounded-lg overflow-hidden shadow-xl w-10">
            <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 border-b border-[#2A2A2A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>
            </button>
        </div>

      </main>
    </div>
  );
}
