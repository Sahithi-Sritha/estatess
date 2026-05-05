"use client";

import { useState } from "react";
import { 
  Card, 
  TextInput, 
  Select, 
  SelectItem, 
  Textarea, 
  NumberInput, 
  Switch, 
  Button, 
  Badge,
  Text
} from "@tremor/react";
import { Upload, MapPin, Building, Ruler, IndianRupee, User, Phone } from "lucide-react";

export default function SellForm() {
  const [step, setStep] = useState(1);
  const [whatsapp, setWhatsapp] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const submitForm = () => {
    // Implement submission logic
    console.log("Form submitted");
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      
      {/* Progress Bar Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">List Your Property</h1>
        
        {/* Custom Progress Bar */}
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#2A2A2A] z-0"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#E8272A] z-0 transition-all duration-300"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>
          
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item} 
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300
                ${step >= item ? 'bg-[#E8272A] text-white shadow-[0_0_10px_rgba(232,39,42,0.5)]' : 'bg-[#141414] border-2 border-[#2A2A2A] text-gray-500'}
              `}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
            <span>Basics</span>
            <span>Details</span>
            <span>Photos</span>
            <span>Contact</span>
        </div>
      </div>

      {/* Main Form Card */}
      <Card className="bg-[#141414] border-[#2A2A2A] shadow-2xl">
        <div className="mb-6 flex justify-between items-center pb-4 border-b border-[#2A2A2A]">
          <h2 className="text-xl font-bold text-white">
            {step === 1 && "Property Basics"}
            {step === 2 && "Property Details"}
            {step === 3 && "Property Photos"}
            {step === 4 && "Contact Information"}
          </h2>
          <Badge className="bg-[#141414] text-[#E8272A] border border-[#E8272A] px-3">Step {step} of 4</Badge>
        </div>

        <div className="min-h-[300px]">
          {/* Step 1 */}
          {step === 1 && (
            <div className="flex flex-col gap-5 animate-in fade-in duration-300">
              <div>
                <Text className="text-gray-300 mb-2 font-medium">Property Title</Text>
                <TextInput icon={Building} placeholder="e.g. 5 Acre Agricultural Land in Shamshabad" className="bg-[#0A0A0A] border-[#2A2A2A] text-white" />
              </div>
              <div>
                <Text className="text-gray-300 mb-2 font-medium">Property Type</Text>
                <Select placeholder="Select Type" className="bg-[#0A0A0A] border-[#2A2A2A]">
                  <SelectItem value="agricultural">Agricultural</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Text className="text-gray-300 mb-2 font-medium">State</Text>
                  <Select placeholder="Select State" className="bg-[#0A0A0A] border-[#2A2A2A]">
                    <SelectItem value="telangana">Telangana</SelectItem>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="andhra">Andhra Pradesh</SelectItem>
                  </Select>
                </div>
                <div>
                  <Text className="text-gray-300 mb-2 font-medium">City / District</Text>
                  <TextInput icon={MapPin} placeholder="Enter city" className="bg-[#0A0A0A] border-[#2A2A2A] text-white" />
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="flex flex-col gap-5 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Text className="text-gray-300 mb-2 font-medium">Area / Size</Text>
                  <NumberInput icon={Ruler} placeholder="e.g. 1500" className="bg-[#0A0A0A] border-[#2A2A2A] text-white" />
                </div>
                <div>
                  <Text className="text-gray-300 mb-2 font-medium">Unit</Text>
                  <Select placeholder="Select Unit" className="bg-[#0A0A0A] border-[#2A2A2A]">
                    <SelectItem value="sqft">Sq Ft</SelectItem>
                    <SelectItem value="sqyards">Sq Yards</SelectItem>
                    <SelectItem value="acres">Acres</SelectItem>
                    <SelectItem value="hectares">Hectares</SelectItem>
                  </Select>
                </div>
              </div>
              <div>
                <Text className="text-gray-300 mb-2 font-medium">Price (₹)</Text>
                <NumberInput icon={IndianRupee} placeholder="Enter total price" className="bg-[#0A0A0A] border-[#2A2A2A] text-white" />
              </div>
              <div>
                <Text className="text-gray-300 mb-2 font-medium">Description</Text>
                <Textarea 
                  placeholder="Describe your property's key features, nearby landmarks, and potential..." 
                  className="bg-[#0A0A0A] border-[#2A2A2A] text-white h-32"
                />
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="flex flex-col gap-5 animate-in fade-in duration-300">
              <Text className="text-gray-400 text-sm mb-2 text-center">High quality photos increase engagement by up to 300%.</Text>
              
              <div className="w-full h-64 border-2 border-dashed border-[#2A2A2A] hover:border-[#E8272A] rounded-xl flex flex-col items-center justify-center gap-4 transition-colors bg-[#0A0A0A]/50 cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-[#141414] border border-[#2A2A2A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-[#E8272A]" />
                </div>
                <div className="text-center">
                  <Text className="text-white font-medium text-lg">Drag photos here or</Text>
                  <Text className="text-gray-500 text-sm mt-1">Supports JPG, PNG, WEBP (Max 5MB each)</Text>
                </div>
                <Button variant="secondary" className="mt-2 bg-[#141414] border-[#2A2A2A] text-white hover:border-[#E8272A] hover:bg-[#141414]">
                  Browse Files
                </Button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div>
                <Text className="text-gray-300 mb-2 font-medium">Full Name</Text>
                <TextInput icon={User} placeholder="Enter your full name" className="bg-[#0A0A0A] border-[#2A2A2A] text-white" />
              </div>
              <div>
                <Text className="text-gray-300 mb-2 font-medium">Phone Number</Text>
                <TextInput icon={Phone} placeholder="+91 XXXXX XXXXX" className="bg-[#0A0A0A] border-[#2A2A2A] text-white" />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg mt-2">
                <div>
                  <Text className="text-white font-medium">Also reachable on WhatsApp</Text>
                  <Text className="text-gray-500 text-xs mt-1">Allow buyers to message you directly</Text>
                </div>
                <Switch 
                  checked={whatsapp} 
                  onChange={setWhatsapp} 
                  className="ui-checked:bg-[#E8272A]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 pt-6 border-t border-[#2A2A2A] flex justify-between gap-4">
          <Button 
            variant="secondary" 
            onClick={prevStep}
            disabled={step === 1}
            className="w-1/3 bg-[#141414] border-[#2A2A2A] text-white hover:bg-[#2A2A2A] disabled:opacity-50"
          >
            Back
          </Button>
          
          {step < 4 ? (
            <Button 
              color="red" 
              onClick={nextStep}
              className="w-2/3 bg-[#E8272A] hover:bg-red-700 text-white border-none font-bold"
            >
              Next Step
            </Button>
          ) : (
            <Button 
              color="red" 
              onClick={submitForm}
              className="w-2/3 bg-[#E8272A] hover:bg-red-700 text-white border-none font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(232,39,42,0.4)]"
            >
              List for Free
            </Button>
          )}
        </div>
      </Card>
      
    </div>
  );
}
