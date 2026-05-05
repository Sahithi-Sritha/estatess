import type { Metadata } from "next";
import SellForm from "@/components/sell/SellForm";
import { Button } from "@tremor/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sell Your Property | Buy Deal Property",
  description: "List your property on Buy Deal Property to connect directly with verified buyers. Fast, transparent, and completely free.",
};

export default function SellPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] selection:bg-[#E8272A] selection:text-white">
      
      {/* Minimal Header */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center border-b border-[#2A2A2A] bg-[#0A0A0A]">
        <Link href="/">
            <div className="text-xl font-bold tracking-widest uppercase hover:opacity-80 transition-opacity">
            <span className="text-[#E8272A]">B</span><span className="text-white">D</span><span className="text-[#E8272A]">P</span>
            </div>
        </Link>
        <Link href="/">
            <Button variant="secondary" className="text-xs bg-transparent border-[#2A2A2A] text-gray-400 hover:text-white hover:bg-[#141414] px-3 py-1 flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Back to Home
            </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="bg-[#0A0A0A]">
        <SellForm />
      </main>

    </div>
  );
}
