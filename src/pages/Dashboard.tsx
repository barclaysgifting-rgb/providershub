import { DashboardHeader } from '../components/DashboardHeader';
import { Footer } from '../components/Footer';
import { MobileBottomNavbar } from '../components/MobileBottomNavbar';
import { DashboardLayout } from '../components/DashboardLayout';
import { useAuth } from '../lib/auth.tsx';
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
import { useBuyerProjects } from '../hooks/useProjects';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { projects, loading: projectsLoading } = useBuyerProjects(user?.id);

  // Empty arrays - ready for database queries
  const stats = {
    orders: { active: 0, completed: 0, totalSpent: 0, saved: 0 },
    activity: { searches: 0, messages: 0, reviews: 0, savedServices: 0 },
    profile: { completion: 0, level: 'New', memberSince: '2024' }
  };

  const recentActivity = [];
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

  const justForYouServices = [];
  const featuredServices = [];
  const basedOnSearchesServices = [];

  return (
    <DashboardLayout>
      <main className="container mx-auto px-4 py-8 pb-20 md:pb-8">
        {/* Welcome Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back{user?.name ? `, ${user.name}` : ''}!</h1>
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
                    0 unread
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
                    disabled
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    View All
                  </Button>
                </div>
              </div>
              <div className="text-center py-8 text-gray-500">
                No personalized recommendations yet
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
                    disabled
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    View All
                  </Button>
                </div>
              </div>
              <div className="text-center py-8 text-gray-500">
                No featured services available
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
                    disabled
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    View All
                  </Button>
                </div>
              </div>
              <div className="text-center py-8 text-gray-500">
                No search-based recommendations yet
              </div>
            </section>
          </div>

          {/* Right Column - Recent Activity & Quick Actions */}
          <div className="space-y-8">
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

            {/* My Projects */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">My Projects</h2>
                <Button variant="outline" size="sm" onClick={() => navigate('/my-projects')}>
                  View All
                </Button>
              </div>
              <Card>
                <CardContent className="p-6">
                  {projectsLoading ? (
                    <div className="text-center py-4 text-gray-500">Loading projects...</div>
                  ) : projects.length > 0 ? (
                    <div className="space-y-4">
                      {projects.slice(0, 3).map((project) => (
                        <div key={project.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-sm line-clamp-2">{project.title}</h4>
                            <Badge
                              variant={project.status === 'open' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <span>£{project.budget}</span>
                            <span>{new Date(project.created_at).toLocaleDateString()}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-2 h-7 px-2 text-xs"
                            onClick={() => navigate(`/project/${project.id}`)}
                          >
                            View Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      No projects posted yet
                      <Button
                        variant="link"
                        className="block mt-2 text-primary"
                        onClick={() => navigate('/post-project')}
                      >
                        Post Your First Project
                      </Button>
                    </div>
                  )}
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
          </div>
        </div>
      </main>
      <Footer />
    </DashboardLayout>
  );
}
