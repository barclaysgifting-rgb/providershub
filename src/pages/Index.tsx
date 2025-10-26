import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth.tsx';
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
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
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect authenticated users to their dashboard
    if (isAuthenticated && user) {
      if (user.role === 'provider') {
        navigate(`/home/sellers/${user.id}`, { replace: true });
      } else {
        navigate(`/home/${user.id}`, { replace: true });
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBy />
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
