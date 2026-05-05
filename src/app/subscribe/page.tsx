import type { Metadata } from "next";
import { Grid, Card, Badge, List, ListItem, Metric, Text, Divider, Button } from "@tremor/react";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subscribe | Buy Deal Property",
  description: "Choose the right plan to accelerate your real estate deals. Compare our Free, Pro, and Enterprise packages.",
};

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E8272A] selection:text-white pb-20">
      
      {/* Header */}
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
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Plan</h1>
          <Text className="text-gray-400 max-w-2xl mx-auto text-lg">
            Scale your real estate business with the most advanced institutional-grade data and direct seller access.
          </Text>
        </div>

        <Grid numItems={1} numItemsSm={1} numItemsLg={3} className="gap-8">
          
          {/* Free Plan */}
          <Card className="bg-[#141414] border-[#2A2A2A] flex flex-col p-8">
            <Text className="text-xl font-semibold text-white mb-2">Free</Text>
            <Metric className="text-white">₹0</Metric>
            <Divider className="border-[#2A2A2A] my-6" />
            <List className="text-gray-400 flex-1 mb-8">
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-500 shrink-0" />
                <span>Basic property search</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-500 shrink-0" />
                <span>Standard map view</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-500 shrink-0" />
                <span>Contact up to 3 sellers/month</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-500 shrink-0" />
                <span>Save 5 favorite properties</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-500 shrink-0" />
                <span>Email support</span>
              </ListItem>
            </List>
            <Button variant="secondary" className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white border-none transition-colors py-3">
              Get Started
            </Button>
          </Card>

          {/* Pro Plan */}
          <Card className="bg-[#141414] border-[#E8272A] shadow-[0_0_20px_rgba(232,39,42,0.2)] flex flex-col p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge color="red" className="bg-[#E8272A] text-white border-none px-4 py-1 uppercase tracking-wider font-bold">
                Most Popular
                </Badge>
            </div>
            
            <Text className="text-xl font-semibold text-white mb-2">Pro</Text>
            <div className="flex items-baseline gap-1">
              <Metric className="text-[#E8272A]">₹999</Metric>
              <Text className="text-gray-500">/month</Text>
            </div>
            <Divider className="border-[#2A2A2A] my-6" />
            <List className="text-gray-300 flex-1 mb-8">
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>Everything in Free</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>Unlimited direct contacts</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>Premium map layers access</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>Masterplan & CRZ data</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>Survey numbers lookup</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>Advanced pricing analytics</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>Unlimited saved properties</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>Priority placement for listings</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>Real-time price alerts</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-[#E8272A] shrink-0" />
                <span>24/7 Priority support</span>
              </ListItem>
            </List>
            <Button color="red" className="w-full bg-[#E8272A] hover:bg-red-700 text-white border-none font-bold py-3 transition-colors shadow-[0_0_15px_rgba(232,39,42,0.4)]">
              Start Pro
            </Button>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-[#141414] border-[#2A2A2A] flex flex-col p-8">
            <Text className="text-xl font-semibold text-white mb-2">Enterprise</Text>
            <Metric className="text-white">Custom</Metric>
            <Divider className="border-[#2A2A2A] my-6" />
            <List className="text-gray-400 flex-1 mb-8">
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-300 shrink-0" />
                <span>Everything in Pro</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-300 shrink-0" />
                <span>Dedicated Account Manager</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-300 shrink-0" />
                <span>API Access to Listings</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-300 shrink-0" />
                <span>Bulk Property Uploads</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-300 shrink-0" />
                <span>White-label Reports</span>
              </ListItem>
              <ListItem className="border-none justify-start gap-3 py-2">
                <Check className="w-5 h-5 text-gray-300 shrink-0" />
                <span>Custom Team Roles</span>
              </ListItem>
            </List>
            <Button variant="secondary" className="w-full bg-transparent border-2 border-[#2A2A2A] hover:border-gray-500 text-white transition-colors py-3">
              Contact Us
            </Button>
          </Card>

        </Grid>
      </main>

    </div>
  );
}
