import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { CompanyLogos } from "@/components/CompanyLogos";
import { ServiceCategories } from "@/components/ServiceCategories";
import { HowItWorks } from "@/components/HowItWorks";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { WrittenTestimonials } from "@/components/WrittenTestimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ForCareProviders } from "@/components/ForCareProviders";
import { ForProfessionals } from "@/components/ForProfessionals";
import { Insights } from "@/components/Insights";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBy />
      <CompanyLogos />
      <ServiceCategories />
      <HowItWorks />
      <VideoTestimonials />
      <WrittenTestimonials />
      <WhyChooseUs />
      <ForCareProviders />
      <ForProfessionals />
      <Insights />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
