import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar } from '../components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import {
  Star,
  MapPin,
  Filter,
  Search,
  SlidersHorizontal,
  Grid,
  List,
  ArrowLeft,
  Heart,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  provider: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
    level: string;
    badge: string;
  };
  image: string;
  price: number;
  deliveryTime: string;
  location: string;
}

export default function AllServicesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { services, title, subtitle } = location.state || {};

  const [sortBy, setSortBy] = useState('recommended');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  // If no services data, show error or redirect
  if (!services || !title) {
    return (
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-4">No services data available.</p>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter services based on current filters
  const filteredServices = services.filter(service => {
    if (priceRange === 'under-500' && service.price >= 500) return false;
    if (priceRange === '500-2000' && (service.price < 500 || service.price > 2000)) return false;
    if (priceRange === 'over-2000' && service.price <= 2000) return false;

    if (ratingFilter === '4-plus' && service.provider.rating < 4) return false;
    if (ratingFilter === '4.5-plus' && service.provider.rating < 4.5) return false;

    return true;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.provider.rating - a.provider.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
            <p className="text-sm text-gray-500 mt-2">
              {sortedServices.length} services available
            </p>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg border p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium">Filters:</span>
              </div>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-500">Under £500</SelectItem>
                  <SelectItem value="500-2000">£500 - £2,000</SelectItem>
                  <SelectItem value="over-2000">Over £2,000</SelectItem>
                </SelectContent>
              </Select>

              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="4-plus">4+ Stars</SelectItem>
                  <SelectItem value="4.5-plus">4.5+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedServices.map((service) => (
              <Link key={service.id} to={`/seller/${service.provider.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="aspect-video relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar className="h-8 w-8">
                        <img src={service.provider.avatar} alt={service.provider.name} />
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{service.provider.name}</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs ml-1">{service.provider.rating}</span>
                            <span className="text-xs text-gray-500 ml-1">
                              ({service.provider.reviews})
                            </span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {service.provider.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {service.location}
                      </div>
                      <span className="text-xs text-gray-500">
                        {service.deliveryTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {service.provider.badge}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">From £{service.price.toLocaleString()}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <Avatar className="h-6 w-6">
                              <img src={service.provider.avatar} alt={service.provider.name} />
                            </Avatar>
                            <span className="text-sm font-medium">{service.provider.name}</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs ml-1">{service.provider.rating}</span>
                              <span className="text-xs text-gray-500 ml-1">
                                ({service.provider.reviews} reviews)
                              </span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {service.provider.level}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {service.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {service.deliveryTime}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-2">
                            £{service.price.toLocaleString()}
                          </div>
                          <Badge variant="outline" className="mb-2">
                            {service.provider.badge}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Heart className="h-4 w-4 mr-1" />
                              Save
                            </Button>
                            <Button size="sm" asChild>
                              <Link to={`/seller/${service.provider.id}`}>
                                View Details
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Load More */}
        {sortedServices.length >= 12 && (
          <div className="text-center mt-8">
            <Button variant="outline">
              Load More Services
            </Button>
          </div>
        )}

        {/* Empty State */}
        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your filters or search criteria.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setPriceRange('all');
                setRatingFilter('all');
                setSortBy('recommended');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
