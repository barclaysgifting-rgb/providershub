import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const popularSearches = [
  "CQC Registration",
  "Care Software",
  "Sponsor Visa",
  "Health & Safety",
  "Accountants",
  "PPE Suppliers",
];

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Find Trusted Healthcare Professionals
          <br />
          for Your Care Business
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-slide-up">
          Connect with CQC-compliant services, expert consultants, and essential suppliers
        </p>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-3 mb-8 animate-scale-in">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <Select>
                <SelectTrigger className="h-14 text-base">
                  <SelectValue placeholder="What service are you looking for?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cqc">CQC Registration</SelectItem>
                  <SelectItem value="consulting">Business Consulting</SelectItem>
                  <SelectItem value="software">Care Software</SelectItem>
                  <SelectItem value="training">Training Services</SelectItem>
                  <SelectItem value="visa">Sponsor Visa</SelectItem>
                  <SelectItem value="accounting">Accounting</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:w-64">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Enter your postcode"
                  className="h-14 pl-10 text-base"
                />
              </div>
            </div>
            
            <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="flex flex-wrap justify-center gap-2 animate-fade-in">
          <span className="text-white/80 text-sm">Popular:</span>
          {popularSearches.map((search) => (
            <button
              key={search}
              className="px-4 py-1.5 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition-colors duration-200"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
