import { Card, Badge, Button, Grid, Metric, Text, Divider, List, ListItem } from "@tremor/react";
import { CheckCircle2, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import HeroSearch from "@/components/HeroSearch";
import DataLayers from "@/components/DataLayers";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden pb-10">
      
      {/* 1. Navbar */}
      <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center border-b border-[#2A2A2A] sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="text-2xl font-bold tracking-widest uppercase">
          <span className="text-[#E8272A]">B</span>
          <span className="text-white">D</span>
          <span className="text-[#E8272A]">P</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <Link href="/map" className="hover:text-[#E8272A] transition-colors">Interactive Map</Link>
          <Link href="/subscribe" className="hover:text-[#E8272A] transition-colors">Pricing</Link>
          <a href="#" className="hover:text-[#E8272A] transition-colors">About Us</a>
        </nav>
        <div className="flex gap-4 items-center">
          <Button variant="secondary" className="hidden md:block border-[#2A2A2A] text-gray-300 hover:text-white bg-transparent hover:bg-[#141414]">
            Login
          </Button>
          <Link href="/sell">
            <Button color="red" className="bg-[#E8272A] hover:bg-red-700 border-none font-bold uppercase tracking-wider text-xs">
              List Property
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex flex-col items-center px-4 md:px-8 w-full max-w-7xl mx-auto">
        
        {/* 2. Hero Section */}
        <section className="py-24 w-full flex flex-col items-center text-center relative">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#E8272A] opacity-5 rounded-full blur-3xl pointer-events-none"></div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight max-w-4xl">
            <span className="text-[#E8272A]">Find Your</span> <span className="text-white">Deal.</span><br/>
            <span className="text-white">Own Your</span> <span className="text-[#E8272A]">Property.</span>
          </h1>
          
          <Text className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium">
            The most exclusive real estate opportunities at your fingertips. Discover premium properties with direct contact and verified sellers.
          </Text>

          {/* Interactive Hero Search */}
          <HeroSearch />

          {/* Stat Chips */}
          <div className="flex flex-wrap justify-center gap-6 mt-20 w-full">
            <Card className="bg-[#141414] border-[#2A2A2A] max-w-[240px] text-center p-4">
              <Metric className="text-[#E8272A]">10,000+</Metric>
              <Text className="text-gray-400 mt-1 font-medium uppercase text-xs tracking-wider">Listings</Text>
            </Card>
            <Card className="bg-[#141414] border-[#2A2A2A] max-w-[240px] text-center p-4">
              <Metric className="text-white">Verified</Metric>
              <Text className="text-gray-400 mt-1 font-medium uppercase text-xs tracking-wider">Sellers</Text>
            </Card>
            <Card className="bg-[#141414] border-[#2A2A2A] max-w-[240px] text-center p-4">
              <Metric className="text-white">Direct</Metric>
              <Text className="text-gray-400 mt-1 font-medium uppercase text-xs tracking-wider">Contact</Text>
            </Card>
          </div>
        </section>

        <Divider className="border-[#2A2A2A]" />

        {/* 3. Featured Listings */}
        <section className="py-16 w-full">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Deals</h2>
              <Text className="text-gray-400">Handpicked properties just for you.</Text>
            </div>
            <a href="#" className="text-[#E8272A] hover:text-white font-medium text-sm flex items-center gap-1 transition-colors">
              View All <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-8">
            <Card className="bg-[#141414] border-[#2A2A2A] p-0 overflow-hidden group">
              <div className="h-56 relative overflow-hidden bg-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" alt="Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <Badge color="red" className="absolute top-4 left-4 bg-[#E8272A] text-white border-none">Verified</Badge>
              </div>
              <div className="p-6">
                <Metric className="text-[#E8272A] mb-2">₹ 2.4 Cr</Metric>
                <h3 className="text-xl font-bold text-white truncate">Premium Villa in Jubilee Hills</h3>
                <div className="flex items-center gap-2 mt-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <Text className="text-sm">Jubilee Hills, Hyderabad • 3,200 sqft</Text>
                </div>
                <Link href="/map">
                  <Button className="w-full mt-6 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border-none transition-colors">
                    View on Map
                  </Button>
                </Link>
              </div>
            </Card>
            
            <Card className="bg-[#141414] border-[#2A2A2A] p-0 overflow-hidden group">
              <div className="h-56 relative overflow-hidden bg-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Commercial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white border-none">Commercial</Badge>
              </div>
              <div className="p-6">
                <Metric className="text-[#E8272A] mb-2">₹ 5.1 Cr</Metric>
                <h3 className="text-xl font-bold text-white truncate">Modern Office Space</h3>
                <div className="flex items-center gap-2 mt-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <Text className="text-sm">HITEC City, Hyderabad • 1,200 sqft</Text>
                </div>
                <Link href="/map">
                  <Button className="w-full mt-6 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border-none transition-colors">
                    View on Map
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="bg-[#141414] border-[#2A2A2A] p-0 overflow-hidden group">
              <div className="h-56 relative overflow-hidden bg-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" alt="Land" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <Badge color="green" className="absolute top-4 left-4 bg-green-600 text-white border-none">Agricultural</Badge>
              </div>
              <div className="p-6">
                <Metric className="text-[#E8272A] mb-2">₹ 85 Lacs</Metric>
                <h3 className="text-xl font-bold text-white truncate">Prime Agricultural Land</h3>
                <div className="flex items-center gap-2 mt-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <Text className="text-sm">Shamshabad, Hyderabad • 4,500 sqft</Text>
                </div>
                <Link href="/map">
                  <Button className="w-full mt-6 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border-none transition-colors">
                    View on Map
                  </Button>
                </Link>
              </div>
            </Card>
          </Grid>
        </section>

        <Divider className="border-[#2A2A2A]" />

        {/* 4. Data Layers */}
        <section className="py-16 w-full text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Powerful Map Layers</h2>
          <Text className="text-gray-400 max-w-2xl mx-auto mb-10">Access institutional-grade data directly on your map view. Make informed decisions with comprehensive overlays.</Text>
          <DataLayers />
        </section>

        <Divider className="border-[#2A2A2A]" />

        {/* 5. Pricing Teaser */}
        <section className="py-16 w-full max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <Text className="text-gray-400">Start for free, upgrade when you need more power.</Text>
          </div>

          <Grid numItems={1} numItemsMd={2} className="gap-8">
            <Card className="bg-[#141414] border-[#2A2A2A] p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Free Plan</h3>
              <Metric className="text-white mb-6">₹0 <span className="text-lg font-normal text-gray-500">/ forever</span></Metric>
              <List className="mt-2 text-gray-400 flex-grow">
                <ListItem className="border-[#2A2A2A]">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Basic property search</span>
                </ListItem>
                <ListItem className="border-[#2A2A2A]">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Standard map view</span>
                </ListItem>
                <ListItem className="border-[#2A2A2A]">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Contact 3 sellers/month</span>
                </ListItem>
              </List>
              <Button className="w-full mt-8 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border-none">Get Started Free</Button>
            </Card>

            <Card className="bg-[#141414] border-[#E8272A] p-8 relative flex flex-col shadow-[0_0_30px_rgba(232,39,42,0.15)]">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8272A] text-white border-none px-4 py-1">Most Popular</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">Pro Plan</h3>
              <Metric className="text-[#E8272A] mb-6">₹999 <span className="text-lg font-normal text-gray-500">/ month</span></Metric>
              <List className="mt-2 text-gray-400 flex-grow">
                <ListItem className="border-[#2A2A2A]">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8272A]" /> Unlimited direct contacts</span>
                </ListItem>
                <ListItem className="border-[#2A2A2A]">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8272A]" /> All premium map layers</span>
                </ListItem>
                <ListItem className="border-[#2A2A2A]">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8272A]" /> Masterplan & CRZ data</span>
                </ListItem>
                <ListItem className="border-[#2A2A2A]">
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8272A]" /> Advanced pricing analytics</span>
                </ListItem>
              </List>
            <Link href="/subscribe">
              <Button color="red" className="w-full mt-8 bg-[#E8272A] hover:bg-red-700 text-white border-none font-bold">Upgrade to Pro</Button>
            </Link>
            </Card>
          </Grid>
        </section>

      </main>

      {/* 6. Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-10">
        <Divider className="border-[#2A2A2A]" />
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4">
          <div className="text-xl font-bold tracking-widest uppercase">
            <span className="text-[#E8272A]">B</span><span className="text-white">D</span><span className="text-[#E8272A]">P</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-[#E8272A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="hover:text-[#E8272A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="hover:text-[#E8272A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-[#E8272A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
        <div className="text-center pb-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Buy Deal Property. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
