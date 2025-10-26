import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SellerDashboardHeader } from '../components/SellerDashboardHeader';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
  Package,
  DollarSign,
  Star,
  Calendar,
  Eye,
  FileText,
  Send,
  User,
  MapPin
} from 'lucide-react';

export default function SellerManageOrders() {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock orders data for seller
  const activeOrders = [
    {
      id: 'ORD-001',
      title: 'CQC Registration Package',
      client: {
        name: 'Sarah Mitchell',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        location: 'London, UK',
        rating: 4.8,
        reviews: 23
      },
      status: 'In Progress',
      progress: 75,
      amount: 1250,
      deadline: '2024-02-15',
      startDate: '2024-01-10',
      lastActivity: '2 hours ago',
      type: 'Premium Package',
      description: 'Complete CQC registration assistance for new care home facility',
      requirements: ['CQC application forms', 'Site inspection preparation', 'Documentation review']
    },
    {
      id: 'ORD-002',
      title: 'Healthcare Compliance Audit',
      client: {
        name: 'David Thompson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        location: 'Manchester, UK',
        rating: 4.6,
        reviews: 18
      },
      status: 'Revision',
      progress: 60,
      amount: 850,
      deadline: '2024-02-10',
      startDate: '2024-01-08',
      lastActivity: '1 day ago',
      type: 'Standard Package',
      description: 'Comprehensive compliance audit for existing healthcare facility',
      requirements: ['On-site audit', 'Compliance report', 'Improvement recommendations']
    },
    {
      id: 'ORD-003',
      title: 'Care Home Licensing Support',
      client: {
        name: 'Emma Wilson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        location: 'Birmingham, UK',
        rating: 4.9,
        reviews: 31
      },
      status: 'Delivered',
      progress: 100,
      amount: 2200,
      deadline: '2024-01-20',
      startDate: '2024-01-01',
      lastActivity: '3 days ago',
      type: 'Pro Package',
      description: 'Complete licensing application and regulatory compliance support',
      requirements: ['Licensing application', 'Regulatory documentation', 'Compliance training']
    }
  ];

  const newInquiries = [
    {
      id: 'INQ-001',
      title: 'Nursing Home Setup Consultation',
      client: {
        name: 'James Parker',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
        location: 'Leeds, UK',
        rating: 4.7,
        reviews: 15
      },
      amount: 1800,
      inquiryDate: '2024-01-16',
      type: 'Consultation',
      message: 'Hi, I need help setting up a new nursing home facility. Looking for comprehensive regulatory guidance and compliance support.',
      skills: ['Nursing Home Setup', 'Regulatory Compliance', 'Facility Planning']
    },
    {
      id: 'INQ-002',
      title: 'CQC Inspection Preparation',
      client: {
        name: 'Lisa Johnson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
        location: 'Sheffield, UK',
        rating: 4.5,
        reviews: 12
      },
      amount: 950,
      inquiryDate: '2024-01-15',
      type: 'Service',
      message: 'Need urgent help preparing for upcoming CQC inspection. Have 2 weeks to get everything ready.',
      skills: ['CQC Inspection Preparation', 'Quality Assurance', 'Compliance Training']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Revision': return 'bg-yellow-100 text-yellow-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = activeOrders.filter(order => {
    if (filterStatus === 'all') return true;
    return order.status === filterStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerDashboardHeader />

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

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Manage Orders</h1>
              <p className="text-gray-600">
                Track active projects, respond to inquiries, and manage your service delivery.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Orders</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Revision">Revision</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Order Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Orders</p>
                  <p className="text-2xl font-bold">{activeOrders.filter(o => o.status === 'In Progress').length}</p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Revision</p>
                  <p className="text-2xl font-bold">{activeOrders.filter(o => o.status === 'Revision').length}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">New Inquiries</p>
                  <p className="text-2xl font-bold">{newInquiries.length}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month's Revenue</p>
                  <p className="text-2xl font-bold">£{activeOrders.reduce((sum, order) => sum + order.amount, 0).toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">
              Active Orders ({filteredOrders.length})
            </TabsTrigger>
            <TabsTrigger value="inquiries">
              New Inquiries ({newInquiries.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6">
            <div className="space-y-6">
              {filteredOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold">{order.title}</h3>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              £{order.amount.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">{order.type}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <img src={order.client.avatar} alt={order.client.name} />
                            </Avatar>
                            <div>
                              <p className="font-medium">{order.client.name}</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                {order.client.rating} ({order.client.reviews} reviews)
                              </div>
                            </div>
                          </div>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            {order.client.location}
                          </div>
                        </div>

                        <p className="text-gray-700 mb-3">{order.description}</p>

                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{order.progress}%</span>
                          </div>
                          <Progress value={order.progress} className="h-2" />
                        </div>

                        <div className="text-sm text-gray-600">
                          <div className="flex items-center space-x-4">
                            <span>Started: {new Date(order.startDate).toLocaleDateString()}</span>
                            <span>Deadline: {new Date(order.deadline).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        <div>Last activity: {order.lastActivity}</div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Message Client
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          Update Progress
                        </Button>
                        <Button size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredOrders.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Package className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      {filterStatus === 'all' ? 'No Active Orders' : `No ${filterStatus} Orders`}
                    </h3>
                    <p className="text-gray-500">
                      {filterStatus === 'all'
                        ? 'You don\'t have any active orders at the moment.'
                        : `You don't have any orders with status "${filterStatus}".`
                      }
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="inquiries" className="mt-6">
            <div className="space-y-6">
              {newInquiries.map((inquiry) => (
                <Card key={inquiry.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold">{inquiry.title}</h3>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              £{inquiry.amount.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">{inquiry.type}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <img src={inquiry.client.avatar} alt={inquiry.client.name} />
                            </Avatar>
                            <div>
                              <p className="font-medium">{inquiry.client.name}</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                {inquiry.client.rating} ({inquiry.client.reviews} reviews)
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            {inquiry.client.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(inquiry.inquiryDate).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mb-3">
                          <p className="text-gray-700 italic">"{inquiry.message}"</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {inquiry.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        <div>New inquiry • Respond within 24 hours</div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Profile
                        </Button>
                        <Button size="sm">
                          <Send className="h-4 w-4 mr-1" />
                          Send Proposal
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {newInquiries.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <MessageSquare className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">No New Inquiries</h3>
                    <p className="text-gray-500">
                      You don't have any new inquiries at the moment. Check back later!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
