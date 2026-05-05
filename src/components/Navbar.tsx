"use client";

import { Button, Text } from "@tremor/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Map View", href: "/map" },
  { label: "Buy", href: "/#listings" },
  { label: "Sell", href: "/sell" },
  { label: "Premium", href: "/subscribe" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#141414] border-b border-[#2A2A2A] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="font-black text-2xl tracking-widest uppercase select-none">
            <span className="text-[#E8272A]">B</span>
            <span className="text-white">D</span>
            <span className="text-[#E8272A]">P</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Text className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide cursor-pointer">
                {link.label}
              </Text>
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="secondary"
            className="bg-transparent border-[#2A2A2A] text-gray-300 hover:text-white hover:bg-[#0A0A0A]"
          >
            Login
          </Button>
          <Link href="/sell">
            <Button
              color="red"
              className="bg-[#E8272A] hover:bg-red-700 border-none font-bold uppercase tracking-wider text-xs"
            >
              List Property
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-[#141414] border-l border-[#2A2A2A] z-50 flex flex-col p-6 gap-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="font-black text-xl tracking-widest uppercase">
            <span className="text-[#E8272A]">B</span>
            <span className="text-white">D</span>
            <span className="text-[#E8272A]">P</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white font-medium text-lg transition-colors py-2 border-b border-[#2A2A2A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <Button
            variant="secondary"
            className="w-full bg-transparent border-[#2A2A2A] text-gray-300 hover:text-white"
          >
            Login
          </Button>
          <Link href="/sell" onClick={() => setOpen(false)}>
            <Button
              color="red"
              className="w-full bg-[#E8272A] hover:bg-red-700 border-none font-bold uppercase tracking-wider text-xs"
            >
              List Property
            </Button>
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
