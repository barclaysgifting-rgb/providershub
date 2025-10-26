import { useAuth } from '../lib/auth.tsx';
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

  console.log('SellerDashboard render:', { user: user?.id, userRole: user?.role });

  // Empty arrays - ready for database queries
  const stats = {
    earnings: {
      monthly: 0,
      weekly: 0,
      total: 0,
      pending: 0,
      available: 0
    },
    orders: {
      active: 0,
      completed: 0,
      cancelled: 0,
      inQueue: 0
    },
    reviews: {
      average: 0,
      total: 0,
      fiveStar: 0,
      responseTime: 0
    },
    profile: {
      completion: 0,
      level: 'New',
      badge: 'New Seller'
    }
  };

  const activeOrders = [];
  const recentActivity = [];
  const messages = [];
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

  const recentReviews = [];
  const performanceMetrics = [];

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerDashboardHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 mb-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back{user?.name ? `, ${user.name}` : ''}!</h1>
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
                    +0% from last month
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
            <div className="text-center py-8 text-gray-500">
              No performance metrics available
            </div>
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
                <Button variant="outline" size="sm" disabled>
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                <div className="text-center py-8 text-gray-500">
                  No active orders
                </div>
              </div>
            </section>

            {/* Recent Activity */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Activity</h2>
                <Button variant="outline" size="sm" disabled>
                  View All
                </Button>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-center py-4 text-gray-500">
                      No recent activity
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Recent Reviews */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Reviews</h2>
                <Button variant="outline" size="sm" disabled>
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                <div className="text-center py-8 text-gray-500">
                  No reviews yet
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Messages, Quick Actions, Earnings */}
          <div className="space-y-8">
            {/* Messages */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Messages</h2>
                <Button variant="outline" size="sm" disabled>
                  View All
                </Button>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="text-center py-4 text-gray-500">
                      No messages
                    </div>
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
                      <Button className="w-full" variant="outline" disabled>
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
                  <Button className="w-full mt-4" variant="outline" disabled>
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
