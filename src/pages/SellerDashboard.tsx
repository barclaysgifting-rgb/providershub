import { useAuth } from '../lib/auth.tsx';
import { useNavigate } from 'react-router-dom';
import { SellerDashboardHeader } from '../components/SellerDashboardHeader';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';
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

export default function SellerDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Seller-focused dummy data for stats
  const stats = {
    earnings: {
      monthly: 12450,
      weekly: 2850,
      total: 89450,
      pending: 2150,
      available: 10250
    },
    orders: {
      active: 8,
      completed: 127,
      cancelled: 3,
      inQueue: 12
    },
    reviews: {
      average: 4.9,
      total: 127,
      fiveStar: 115,
      responseTime: 1
    },
    profile: {
      completion: 85,
      level: 'Level 2',
      badge: 'Top Rated'
    }
  };

  // Active orders for seller
  const activeOrders = [
    {
      id: 1,
      title: 'CQC Registration Documentation Package',
      client: {
        name: 'Sarah Mitchell',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        location: 'London, UK'
      },
      status: 'In Progress',
      progress: 75,
      dueDate: '2024-01-15',
      amount: 1250,
      type: 'Standard',
      lastActivity: '2 hours ago',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Healthcare Compliance Audit',
      client: {
        name: 'David Thompson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        location: 'Manchester, UK'
      },
      status: 'Revision',
      progress: 90,
      dueDate: '2024-01-12',
      amount: 850,
      type: 'Premium',
      lastActivity: '5 minutes ago',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Care Home License Application',
      client: {
        name: 'Emma Wilson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        location: 'Birmingham, UK'
      },
      status: 'Delivered',
      progress: 100,
      dueDate: '2024-01-10',
      amount: 2200,
      type: 'Pro',
      lastActivity: '1 day ago',
      priority: 'High'
    }
  ];

  // Recent activity for seller
  const recentActivity = [
    {
      id: 1,
      type: 'order',
      title: 'New order received',
      description: 'CQC Registration Documentation Package from Sarah Mitchell',
      amount: '£1,250',
      time: '2 hours ago',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'review',
      title: 'New 5-star review',
      description: 'Excellent service! Highly recommended for CQC compliance.',
      rating: 5,
      time: '5 hours ago',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment received',
      description: 'Healthcare Compliance Audit completed',
      amount: '£850',
      time: '1 day ago',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      id: 4,
      type: 'milestone',
      title: 'Milestone reached',
      description: 'Completed 125 successful projects!',
      time: '2 days ago',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  // Messages for seller
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
      unread: 3,
      orderId: '#1234'
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
      unread: 0,
      orderId: '#1235'
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
      unread: 1,
      orderId: '#1236'
    }
  ];

  // Quick actions for sellers
  const quickActions = [
    {
      title: 'Create Service',
      description: 'Add new service offering',
      icon: Plus,
      color: 'bg-blue-500',
      href: '/create-service'
    },
    {
      title: 'View Earnings',
      description: 'Check revenue analytics',
      icon: DollarSign,
      color: 'bg-green-500',
      href: '/seller/earnings'
    },
    {
      title: 'Manage Orders',
      description: 'Track active orders',
      icon: Package,
      color: 'bg-purple-500',
      href: '/seller/manage-orders'
    },
    {
      title: 'Manage Portfolio',
      description: 'Showcase your work',
      icon: Users,
      color: 'bg-orange-500',
      href: '/seller/portfolio'
    }
  ];

  // Recent reviews for seller
  const recentReviews = [
    {
      id: 1,
      client: {
        name: 'Sarah Mitchell',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        country: 'London, UK'
      },
      rating: 5,
      package: 'Standard CQC Registration Package',
      comment: 'Outstanding service! Sarah was incredibly professional and delivered everything on time. Highly recommended for CQC compliance work.',
      time: '2 days ago',
      helpful: 12,
      amount: 1250
    },
    {
      id: 2,
      client: {
        name: 'David Thompson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        country: 'Manchester, UK'
      },
      rating: 5,
      package: 'Premium Healthcare Setup Package',
      comment: 'Excellent communication and attention to detail. Made the complex compliance process much easier to understand.',
      time: '5 days ago',
      helpful: 8,
      amount: 2200
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      title: 'Response Time',
      value: '1.2h',
      change: '-0.3h',
      trend: 'down',
      icon: Clock,
      color: 'text-green-600'
    },
    {
      title: 'Order Completion',
      value: '98%',
      change: '+2%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-blue-600'
    },
    {
      title: 'Client Satisfaction',
      value: '4.9/5',
      change: '+0.1',
      trend: 'up',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      title: 'Repeat Business',
      value: '67%',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerDashboardHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 mb-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-green-100 mb-4">
                You're doing great! Keep delivering exceptional healthcare compliance services.
              </p>
              <div className="flex items-center space-x-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  {stats.profile.level} Seller
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  {stats.profile.badge}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">£{stats.earnings.monthly.toLocaleString()}</div>
              <div className="text-green-100">Earned this month</div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Earnings</p>
                  <p className="text-2xl font-bold">£{stats.earnings.monthly.toLocaleString()}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% from last month
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
                  <p className="text-sm font-medium text-gray-600">Active Orders</p>
                  <p className="text-2xl font-bold">{stats.orders.active}</p>
                  <p className="text-xs text-blue-600 mt-1">
                    {stats.orders.inQueue} in queue
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
                  <p className="text-sm font-medium text-gray-600">Average Rating</p>
                  <p className="text-2xl font-bold flex items-center">
                    {stats.reviews.average}
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 ml-1" />
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {stats.reviews.total} reviews
                  </p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Response Time</p>
                  <p className="text-2xl font-bold">{stats.reviews.responseTime}h</p>
                  <p className="text-xs text-green-600 mt-1">
                    Excellent response rate
                  </p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Performance Metrics */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className={`text-xs mt-1 ${
                          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.change} from last month
                        </p>
                      </div>
                      <IconComponent className={`h-8 w-8 ${metric.color}`} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Orders & Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Orders */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Active Orders</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {activeOrders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{order.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <img src={order.client.avatar} alt={order.client.name} />
                              </Avatar>
                              {order.client.name}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {order.client.location}
                            </div>
                            <Badge variant={
                              order.status === 'In Progress' ? 'default' :
                              order.status === 'Revision' ? 'secondary' :
                              'outline'
                            }>
                              {order.status}
                            </Badge>
                            <Badge variant={
                              order.priority === 'High' ? 'destructive' :
                              order.priority === 'Medium' ? 'secondary' :
                              'outline'
                            }>
                              {order.priority} Priority
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{order.progress}%</span>
                            </div>
                            <Progress value={order.progress} className="h-2" />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">£{order.amount.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">{order.type}</div>
                          <div className="text-xs text-gray-400 mt-2">
                            Due: {new Date(order.dueDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          Last activity: {order.lastActivity}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Activity */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <Button variant="outline" size="sm">View All</Button>
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
                            {activity.amount && (
                              <p className="text-sm font-semibold text-green-600 mt-1">
                                {activity.amount}
                              </p>
                            )}
                            {activity.rating && (
                              <div className="flex items-center mt-1">
                                {[...Array(activity.rating)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Recent Reviews */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Reviews</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {recentReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <img src={review.client.avatar} alt={review.client.name} />
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold">{review.client.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {review.client.country}
                              </Badge>
                            </div>
                            <span className="text-sm text-gray-500">{review.time}</span>
                          </div>

                          <div className="flex items-center mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>

                          <p className="text-gray-700 mb-3">"{review.comment}"</p>

                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-600">
                              Package: {review.package}
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-semibold">£{review.amount.toLocaleString()}</span>
                              <Button variant="ghost" size="sm">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                Helpful ({review.helpful})
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Messages, Quick Actions, Earnings */}
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
                          <p className="text-xs text-gray-500">{message.orderId}</p>
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

            {/* Earnings Summary */}
            <section>
              <h2 className="text-xl font-bold mb-4">Earnings</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Available for withdrawal</span>
                      <span className="font-semibold text-green-600">£{stats.earnings.available.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pending clearance</span>
                      <span className="font-semibold">£{stats.earnings.pending.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total earned</span>
                      <span className="font-semibold">£{stats.earnings.total.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <Button className="w-full" variant="outline">
                        Withdraw Earnings
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                      <span>Description</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Portfolio</span>
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Phone verification</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline" onClick={() => navigate('/seller/update-profile')}>
                    Complete Profile
                  </Button>
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
