import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Briefcase,
  Laptop,
  GraduationCap,
  Building,
  Package,
} from "lucide-react";
import regulatoryImg from "@/assets/category-regulatory.jpg";
import consultingImg from "@/assets/category-consulting.jpg";
import softwareImg from "@/assets/category-software.jpg";
import trainingImg from "@/assets/category-training.jpg";
import professionalImg from "@/assets/category-professional.jpg";
import suppliesImg from "@/assets/category-supplies.jpg";

const categories = [
  {
    title: "Regulatory & Legal Compliance",
    icon: Shield,
    image: regulatoryImg,
    services: [
      "CQC Registration",
      "Ofsted Registration",
      "CQC Compliance Inspection",
      "Sponsor Visa Application",
      "Sponsor Visa Compliance",
    ],
    providerCount: "45+",
  },
  {
    title: "Consulting Services",
    icon: Briefcase,
    image: consultingImg,
    services: [
      "Tender Consultants",
      "Audit Management",
      "Safeguarding Consultation",
      "Medication Consultation",
      "Policies and Procedures",
    ],
    providerCount: "67+",
  },
  {
    title: "Care Management & Software",
    icon: Laptop,
    image: softwareImg,
    services: [
      "Care Management Software",
      "Home Care Setup",
      "Residential Care Setup",
      "Supported Living Setup",
      "Digital Solutions",
    ],
    providerCount: "32+",
  },
  {
    title: "Training & Development",
    icon: GraduationCap,
    image: trainingImg,
    services: [
      "Children's Training",
      "Home Care Training",
      "Residential Training",
      "LD Training",
      "Compliance Training",
    ],
    providerCount: "58+",
  },
  {
    title: "Professional Services",
    icon: Building,
    image: professionalImg,
    services: [
      "Accountants",
      "Insurance Brokers",
      "Website Designers",
      "Legal Services",
      "Marketing Agencies",
    ],
    providerCount: "41+",
  },
  {
    title: "Supplies & Equipment",
    icon: Package,
    image: suppliesImg,
    services: [
      "PPE Suppliers",
      "Equipment Suppliers",
      "Furniture Suppliers",
      "Medical Supplies",
      "Care Essentials",
    ],
    providerCount: "28+",
  },
];

export const ServiceCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run a compliant care business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {category.providerCount} verified providers
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="mr-2 text-accent">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
