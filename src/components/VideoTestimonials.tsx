import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Care Home Manager",
    organization: "Oakwood Residential Care",
    service: "CQC Registration",
    quote: "Found our consultant in days, not weeks!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 5,
  },
  {
    name: "David Patel",
    title: "Operations Manager",
    organization: "HomeFirst Care Services",
    service: "Care Software",
    quote: "Transformed how we operate completely!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    title: "Director",
    organization: "New Beginnings Care",
    service: "Consulting",
    quote: "Professional service, incredible results!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Registered Manager",
    organization: "Sunrise Home Care",
    service: "Training",
    quote: "Best training provider we've worked with!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 5,
  },
  {
    name: "Lisa Williams",
    title: "Care Coordinator",
    organization: "Meadowview Residential",
    service: "Compliance",
    quote: "Made CQC compliance stress-free!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 5,
  },
];

export const VideoTestimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Stories from Real Care Providers
          </h2>
          <p className="text-xl text-muted-foreground">
            See how Providers Hub helped them succeed
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[9/16] bg-muted group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-white/80 text-xs">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {testimonial.service}
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.organization}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
