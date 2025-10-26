import { useAuth } from '../lib/auth.tsx';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Avatar } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Star,
  TrendingUp,
  Package,
  DollarSign,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  Calendar,
  Users,
  Award,
  Bell,
  Heart,
  Share2,
  ThumbsUp,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Activity,
  Target,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // User-focused dummy data for stats
  const stats = {
    orders: {
      active: 12,
      completed: 45,
      totalSpent: 8450,
      saved: 2340
    },
    activity: {
      searches: 28,
      messages: 15,
      reviews: 23,
      savedServices: 18
    },
    profile: {
      completion: 92,
      level: 'Premium',
      memberSince: '2023'
    }
  };

  // User-focused recent activity
  const recentActivity = [
    {
      id: 1,
      type: 'search',
      title: 'Searched for "CQC Registration"',
      description: 'Found 12 matching services',
      time: '2 hours ago',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'message',
      title: 'New message from Sarah Mitchell',
      description: 'Regarding your CQC registration project',
      time: '3 hours ago',
      icon: MessageSquare,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'review',
      title: 'Left a review',
      description: '5-star review for David Thompson\'s compliance audit',
      time: '1 day ago',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      id: 4,
      type: 'save',
      title: 'Saved a service',
      description: 'Healthcare Licensing Specialist by Emma Wilson',
      time: '2 days ago',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      id: 5,
      type: 'project',
      title: 'Project completed',
      description: 'Care Home License Application finished successfully',
      time: '3 days ago',
      icon: CheckCircle,
      color: 'text-green-600'
    }
  ];

  // Messages dummy data
  const messages = [
    {
      id: 1,
      sender: {
        name: 'Sarah Mitchell',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        status: 'online'
      },
      lastMessage: 'Thank you for the quick response! When can we schedule the consultation?',
      time: '2 min ago',
      unread: 3
    },
    {
      id: 2,
      sender: {
        name: 'David Thompson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        status: 'offline'
      },
      lastMessage: 'The documentation looks perfect. Ready for submission.',
      time: '1 hour ago',
      unread: 0
    },
    {
      id: 3,
      sender: {
        name: 'Emma Wilson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        status: 'online'
      },
      lastMessage: 'Can you help with the follow-up inspection requirements?',
      time: '3 hours ago',
      unread: 1
    }
  ];

  // Quick actions for users
  const quickActions = [
    {
      title: 'Post New Order',
      description: 'Find the perfect provider',
      icon: Plus,
      color: 'bg-blue-500',
      href: '/post-project'
    },
    {
      title: 'Browse Services',
      description: 'Explore healthcare services',
      icon: Eye,
      color: 'bg-green-500',
      href: '/searchresults?service='
    },
    {
      title: 'My Orders',
      description: 'Track active orders',
      icon: Package,
      color: 'bg-purple-500',
      href: '/my-orders'
    },
    {
      title: 'Saved Services',
      description: 'View saved favorites',
      icon: Heart,
      color: 'bg-red-500',
      href: '/saved-services'
    }
  ];

  // Service providers data for carousels
  const justForYouServices = [
    {
      id: 1,
      title: 'Complete CQC Registration Package',
      provider: {
        id: 'sarah-mitchell',
        name: 'Sarah Mitchell',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        rating: 5.0,
        reviews: 39,
        level: 'Level 2',
        badge: 'CQC Verified'
      },
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: 1250,
      deliveryTime: '3 days',
      location: 'London, UK'
    },
    {
      id: 2,
      title: 'Healthcare Compliance Audit',
      provider: {
        id: 'david-thompson',
        name: 'David Thompson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        rating: 4.9,
        reviews: 67,
        level: 'Level 2',
        badge: 'Top Rated'
      },
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      price: 850,
      deliveryTime: '5 days',
      location: 'Manchester, UK'
    },
    {
      id: 3,
      title: 'Care Home Licensing Support',
      provider: {
        id: 'emma-wilson',
        name: 'Emma Wilson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        rating: 5.0,
        reviews: 52,
        level: 'Level 1',
        badge: 'Rising Star'
      },
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
      price: 2200,
      deliveryTime: '7 days',
      location: 'Birmingham, UK'
    },
    {
      id: 4,
      title: 'Regulatory Documentation Review',
      provider: {
        id: 'michael-chen',
        name: 'Michael Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
        rating: 4.8,
        reviews: 28,
        level: 'Level 1',
        badge: 'Verified'
      },
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      price: 650,
      deliveryTime: '2 days',
      location: 'Leeds, UK'
    }
  ];

  const featuredServices = [
    {
      id: 5,
      title: 'Full Healthcare Setup Consulting',
      provider: {
        id: 'rachel-green',
        name: 'Rachel Green',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
        rating: 5.0,
        reviews: 89,
        level: 'Level 3',
        badge: 'Pro Seller'
      },
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
      price: 3500,
      deliveryTime: '10 days',
      location: 'London, UK'
    },
    {
      id: 6,
      title: 'CQC Inspection Preparation',
      provider: {
        id: 'james-parker',
        name: 'James Parker',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
        rating: 4.9,
        reviews: 71,
        level: 'Level 2',
        badge: 'Top Rated'
      },
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      price: 1800,
      deliveryTime: '4 days',
      location: 'Liverpool, UK'
    }
  ];

  const basedOnSearchesServices = [
    {
      id: 7,
      title: 'CQC Registration Fast Track',
      provider: {
        id: 'lisa-johnson',
        name: 'Lisa Johnson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
        rating: 4.8,
        reviews: 34,
        level: 'Level 1',
        badge: 'Verified'
      },
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      price: 950,
      deliveryTime: '2 days',
      location: 'Sheffield, UK'
    },
    {
      id: 8,
      title: 'Compliance Documentation Package',
      provider: {
        id: 'robert-taylor',
        name: 'Robert Taylor',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
        rating: 5.0,
        reviews: 46,
        level: 'Level 2',
        badge: 'CQC Expert'
      },
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      price: 1200,
      deliveryTime: '3 days',
      location: 'Newcastle, UK'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-blue-100 mb-4">
                Ready to find the perfect healthcare service provider for your business?
              </p>
              <div className="flex items-center space-x-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  {stats.profile.level} Member
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  Member since {stats.profile.memberSince}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">£{stats.orders.totalSpent.toLocaleString()}</div>
              <div className="text-blue-100">Total spent</div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Orders</p>
                  <p className="text-2xl font-bold">{stats.orders.active}</p>
                  <p className="text-xs text-blue-600 mt-1">
                    {stats.orders.completed} completed
                  </p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold">£{stats.orders.totalSpent.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-1">
                    Saved £{stats.orders.saved.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Messages</p>
                  <p className="text-2xl font-bold">{stats.activity.messages}</p>
                  <p className="text-xs text-blue-600 mt-1">
                    {messages.filter(m => m.unread > 0).length} unread
                  </p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Saved Services</p>
                  <p className="text-2xl font-bold">{stats.activity.savedServices}</p>
                  <p className="text-xs text-purple-600 mt-1">
                    Healthcare specialists
                  </p>
                </div>
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Service Carousels */}
          <div className="lg:col-span-2 space-y-8">
            {/* Just For You Carousel */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">Just For You</h2>
                  <p className="text-sm text-gray-600">
                    Personalized recommendations based on your activity
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const viewport = document.getElementById('just-for-you-viewport');
                      if (viewport) {
                        const cardWidth = 320;
                        const gap = window.innerWidth < 640 ? 16 : 24;
                        viewport.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
                      }
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const viewport = document.getElementById('just-for-you-viewport');
                      if (viewport) {
                        const cardWidth = 320;
                        const gap = window.innerWidth < 640 ? 16 : 24;
                        viewport.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
                      }
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigate('/services/just-for-you', {
                    state: {
                      services: justForYouServices,
                      title: 'Just For You',
                      subtitle: 'Personalized recommendations based on your activity'
                    }
                  })}>
                    View All
                  </Button>
                </div>
              </div>
              <div className="relative w-full">
                <div
                  id="just-for-you-viewport"
                  className="overflow-x-auto scrollbar-hide"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  <div
                    id="just-for-you-track"
                    className="flex gap-4 sm:gap-6 pb-4 w-max"
                  >
                    {justForYouServices.map((service) => (
                      <Link key={service.id} to={`/seller/${service.provider.id}`}>
                        <Card className="w-[320px] shrink-0 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                              onClick={(e) => e.preventDefault()} // Prevent navigation when clicking favorite
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
                </div>
              </div>
            </section>

            {/* Featured Services Carousel */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">Featured Services</h2>
                  <p className="text-sm text-gray-600">
                    Handpicked top-rated healthcare service providers
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const viewport = document.getElementById('featured-services-viewport');
                      if (viewport) {
                        const cardWidth = 320;
                        const gap = 24;
                        viewport.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
                      }
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const viewport = document.getElementById('featured-services-viewport');
                      if (viewport) {
                        const cardWidth = 320;
                        const gap = 24;
                        viewport.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
                      }
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigate('/services/featured', {
                    state: {
                      services: featuredServices,
                      title: 'Featured Services',
                      subtitle: 'Handpicked top-rated healthcare service providers'
                    }
                  })}>
                    View All
                  </Button>
                </div>
              </div>
              <div className="relative w-full overflow-hidden">
                <div
                  id="featured-services-viewport"
                  className="overflow-x-auto scrollbar-hide"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  <div
                    id="featured-services-track"
                    className="flex gap-6 pb-4 w-max"
                  >
                    {featuredServices.map((service) => (
                      <Link key={service.id} to={`/seller/${service.provider.id}`}>
                        <Card className="w-[320px] shrink-0 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                              onClick={(e) => e.preventDefault()} // Prevent navigation when clicking favorite
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
                </div>
              </div>
            </section>

            {/* Based on Searches Carousel */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">Based on Your Searches</h2>
                  <p className="text-sm text-gray-600">
                    More services related to your recent searches
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const viewport = document.getElementById('based-on-searches-viewport');
                      if (viewport) {
                        const cardWidth = 320;
                        const gap = 24;
                        viewport.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
                      }
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const viewport = document.getElementById('based-on-searches-viewport');
                      if (viewport) {
                        const cardWidth = 320;
                        const gap = 24;
                        viewport.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
                      }
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigate('/services/searched', {
                    state: {
                      services: basedOnSearchesServices,
                      title: 'Based on Your Searches',
                      subtitle: 'More services related to your recent searches'
                    }
                  })}>
                    View All
                  </Button>
                </div>
              </div>
              <div className="relative w-full overflow-hidden">
                <div
                  id="based-on-searches-scroll"
                  className="flex gap-6 pb-4"
                  style={{
                    scrollBehavior: 'smooth',
                    width: 'max-content',
                    overflowX: 'auto'
                  }}
                >
                  {basedOnSearchesServices.map((service) => (
                    <Link key={service.id} to={`/seller/${service.provider.id}`}>
                      <Card className="w-[320px] shrink-0 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                            onClick={(e) => e.preventDefault()} // Prevent navigation when clicking favorite
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
              </div>
            </section>

            {/* Recent Activity */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <Button variant="outline" size="sm" onClick={() => navigate('/recent-activity')}>
                  View All
                </Button>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity) => {
                      const IconComponent = activity.icon;
                      return (
                        <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50">
                          <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-sm">{activity.title}</p>
                                <p className="text-sm text-gray-600">{activity.description}</p>
                              </div>
                              <span className="text-xs text-gray-400">{activity.time}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Right Column - Messages, Quick Actions, Profile */}
          <div className="space-y-8">
            {/* Messages */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Messages</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {messages.map((message) => (
                      <div key={message.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <img src={message.sender.avatar} alt={message.sender.name} />
                          </Avatar>
                          {message.sender.status === 'online' && (
                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-sm truncate">{message.sender.name}</p>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{message.lastMessage}</p>
                        </div>
                        {message.unread > 0 && (
                          <Badge className="bg-green-500 text-white">
                            {message.unread}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quick Actions */}
            <section>
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <Link key={index} to={action.href}>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4 text-center">
                          <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                          <p className="text-xs text-gray-600">{action.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Profile Completion */}
            <section>
              <h2 className="text-xl font-bold mb-4">Profile Completion</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">{stats.profile.completion}% Complete</span>
                    <Badge variant="secondary">{stats.profile.level}</Badge>
                  </div>
                  <Progress value={stats.profile.completion} className="mb-4" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Profile photo</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Business details</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Payment methods</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Phone verification</span>
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Complete Profile
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Spending Summary */}
            <section>
              <h2 className="text-xl font-bold mb-4">This Month</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total spent</span>
                      <span className="font-semibold">£{stats.orders.totalSpent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Orders completed</span>
                      <span className="font-semibold">{stats.orders.completed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average order cost</span>
                      <span className="font-semibold">
                        £{Math.round(stats.orders.totalSpent / stats.orders.completed).toLocaleString()}
                      </span>
                    </div>
                    <div className="pt-2 border-t">
                      <Button className="w-full" onClick={() => navigate('/payment-history')}>
                        View Payment History
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}