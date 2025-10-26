import { useState } from 'react';
import { DashboardHeader } from '../components/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Alert, AlertDescription } from '../components/ui/alert';
import {
  Users,
  MessageSquare,
  Shield,
  DollarSign,
  FileText,
  Ban,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  BarChart3,
  Activity,
  TrendingUp,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Calendar,
  Star,
  CreditCard,
  Receipt,
  Package,
  Crown,
  Zap,
  Lock,
  Unlock,
  Sidebar,
  Menu,
  Bell,
  UserPlus,
  FileCheck,
  Flag,
  Archive,
  RefreshCw,
  Plus
} from 'lucide-react';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data for admin panel
  const stats = {
    totalUsers: 15420,
    activeSellers: 2340,
    totalOrders: 8920,
    pendingApprovals: 45,
    reportedMessages: 23,
    revenue: 245680,
    pendingPayments: 45670
  };

  // Messages for moderation
  const messages = [
    {
      id: 1,
      sender: 'john.doe@example.com',
      recipient: 'sarah.mitchell@healthcare.com',
      content: 'Hello Sarah, I need urgent help with CQC registration. My deadline is approaching.',
      timestamp: '2024-01-15 10:30:00',
      flagged: true,
      flagReason: 'Urgent language',
      status: 'pending'
    },
    {
      id: 2,
      sender: 'emma.wilson@clinic.com',
      recipient: 'david.thompson@consultant.com',
      content: 'Thank you for the excellent service! The documentation was perfect.',
      timestamp: '2024-01-15 09:15:00',
      flagged: false,
      status: 'approved'
    },
    {
      id: 3,
      sender: 'spam.sender@fake.com',
      recipient: 'multiple',
      content: 'Get rich quick scheme! Invest in healthcare stocks now!!!',
      timestamp: '2024-01-15 08:45:00',
      flagged: true,
      flagReason: 'Spam content',
      status: 'pending'
    }
  ];

  // Pending approvals
  const pendingApprovals = [
    {
      id: 1,
      type: 'seller_profile',
      user: {
        name: 'Michael Chen',
        email: 'michael.chen@newclinic.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
      },
      submittedDate: '2024-01-14',
      status: 'pending',
      content: 'New healthcare consultant profile submission'
    },
    {
      id: 2,
      type: 'service_posting',
      user: {
        name: 'Lisa Park',
        email: 'lisa.park@consulting.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
      },
      submittedDate: '2024-01-13',
      status: 'pending',
      content: 'CQC compliance service package'
    },
    {
      id: 3,
      type: 'review',
      user: {
        name: 'Robert Johnson',
        email: 'robert.j@hospital.com',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert'
      },
      submittedDate: '2024-01-12',
      status: 'pending',
      content: 'Review for Sarah Mitchell\'s services'
    }
  ];

  // Sellers management
  const sellers = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      email: 'sarah.mitchell@consultant.com',
      status: 'active',
      level: 'Level 2',
      rating: 4.9,
      ordersCompleted: 127,
      earnings: 45250,
      joinDate: '2023-06-15',
      lastActive: '2 hours ago',
      warnings: 0,
      banned: false
    },
    {
      id: 2,
      name: 'David Thompson',
      email: 'david.thompson@audit.com',
      status: 'active',
      level: 'Level 1',
      rating: 4.7,
      ordersCompleted: 89,
      earnings: 32100,
      joinDate: '2023-09-20',
      lastActive: '1 day ago',
      warnings: 1,
      banned: false
    },
    {
      id: 3,
      name: 'Emma Wilson',
      email: 'emma.wilson@compliance.com',
      status: 'suspended',
      level: 'Level 2',
      rating: 4.8,
      ordersCompleted: 156,
      earnings: 56800,
      joinDate: '2023-03-10',
      lastActive: '1 week ago',
      warnings: 3,
      banned: false
    }
  ];

  // Payment management
  const payments = [
    {
      id: 1,
      orderId: 'ORD-2024-001',
      seller: 'Sarah Mitchell',
      buyer: 'John Doe Clinic',
      amount: 1250,
      fee: 125,
      netAmount: 1125,
      status: 'pending',
      date: '2024-01-15',
      dueDate: '2024-01-20'
    },
    {
      id: 2,
      orderId: 'ORD-2024-002',
      seller: 'David Thompson',
      buyer: 'City Hospital',
      amount: 2200,
      fee: 220,
      netAmount: 1980,
      status: 'processing',
      date: '2024-01-14',
      dueDate: '2024-01-19'
    },
    {
      id: 3,
      orderId: 'ORD-2024-003',
      seller: 'Emma Wilson',
      buyer: 'Private Practice Ltd',
      amount: 850,
      fee: 85,
      netAmount: 765,
      status: 'completed',
      date: '2024-01-13',
      dueDate: '2024-01-18'
    }
  ];

  // Seller plans (Token packages)
  const sellerPlans = [
    {
      id: 1,
      name: 'Starter Pack',
      tokens: 10,
      price: 9.99,
      description: 'Perfect for trying out the platform',
      activePurchases: 450,
      revenue: 4495.50
    },
    {
      id: 2,
      name: 'Professional Pack',
      tokens: 50,
      price: 39.99,
      description: 'Most popular choice for active sellers',
      activePurchases: 890,
      revenue: 35591.10,
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise Pack',
      tokens: 200,
      price: 149.99,
      description: 'Best value for high-volume sellers',
      activePurchases: 120,
      revenue: 17998.80
    },
    {
      id: 4,
      name: 'Unlimited Monthly',
      tokens: -1, // unlimited
      price: 299.99,
      description: 'Unlimited applications for power users',
      activePurchases: 45,
      revenue: 13499.55
    }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'messages', label: 'Message Moderation', icon: MessageSquare },
    { id: 'approvals', label: 'Content Approvals', icon: FileCheck },
    { id: 'sellers', label: 'Seller Management', icon: Shield },
    { id: 'payments', label: 'Payment Management', icon: DollarSign },
    { id: 'plans', label: 'Seller Plans', icon: Package },
    { id: 'reviews', label: 'Review Management', icon: Star },
    { id: 'reports', label: 'Reports & Analytics', icon: Activity },
    { id: 'settings', label: 'Platform Settings', icon: Settings }
  ];

  const renderSidebar = () => (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      sidebarOpen ? 'w-64' : 'w-16'
    }`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className={`font-bold text-lg ${sidebarOpen ? 'block' : 'hidden'}`}>
            Admin Panel
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? 'default' : 'ghost'}
              className={`w-full justify-start ${sidebarOpen ? '' : 'px-2'}`}
              onClick={() => setActiveTab(item.id)}
            >
              <IconComponent className="h-4 w-4 mr-2" />
              {sidebarOpen && item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Sellers</p>
                <p className="text-2xl font-bold">{stats.activeSellers.toLocaleString()}</p>
              </div>
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold">{stats.totalOrders.toLocaleString()}</p>
              </div>
              <Package className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold">£{stats.revenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Pending Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Content Approvals</span>
                <Badge variant="destructive">{stats.pendingApprovals}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Reported Messages</span>
                <Badge variant="destructive">{stats.reportedMessages}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Pending Payments</span>
                <Badge variant="secondary">£{stats.pendingPayments.toLocaleString()}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Platform Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>New users this month</span>
                <span className="font-semibold text-green-600">+1,240</span>
              </div>
              <div className="flex justify-between">
                <span>New sellers this month</span>
                <span className="font-semibold text-green-600">+85</span>
              </div>
              <div className="flex justify-between">
                <span>Orders this month</span>
                <span className="font-semibold text-green-600">+420</span>
              </div>
              <div className="flex justify-between">
                <span>Revenue this month</span>
                <span className="font-semibold text-green-600">+£18,500</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Message Moderation</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <Card key={message.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold">{message.sender}</span>
                    <span className="text-gray-500">→</span>
                    <span className="font-semibold">{message.recipient}</span>
                    {message.flagged && (
                      <Badge variant="destructive" className="text-xs">
                        <Flag className="h-3 w-3 mr-1" />
                        Flagged
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-700 mb-2">{message.content}</p>
                  {message.flagReason && (
                    <Alert className="mb-4">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        Flag reason: {message.flagReason}
                      </AlertDescription>
                    </Alert>
                  )}
                  <div className="text-sm text-gray-500">
                    {message.timestamp}
                  </div>
                </div>
                <Badge variant={
                  message.status === 'approved' ? 'default' :
                  message.status === 'pending' ? 'secondary' : 'destructive'
                }>
                  {message.status}
                </Badge>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  View Conversation
                </Button>
                {message.status === 'pending' && (
                  <>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive">
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </>
                )}
                <Button size="sm" variant="outline">
                  <Ban className="h-4 w-4 mr-1" />
                  Ban User
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderApprovals = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Content Approvals</h2>
        <div className="flex space-x-2">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {pendingApprovals.map((approval) => (
          <Card key={approval.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <Avatar>
                    <img src={approval.user.avatar} alt={approval.user.name} />
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold">{approval.user.name}</span>
                      <span className="text-gray-500">{approval.user.email}</span>
                      <Badge variant="outline" className="text-xs">
                        {approval.type.replace('_', ' ').toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-2">{approval.content}</p>
                    <div className="text-sm text-gray-500">
                      Submitted: {approval.submittedDate}
                    </div>
                  </div>
                </div>
                <Badge variant={
                  approval.status === 'approved' ? 'default' :
                  approval.status === 'pending' ? 'secondary' : 'destructive'
                }>
                  {approval.status}
                </Badge>
              </div>

              <div className="flex space-x-2 mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      Review
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Content Review</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Content Details</label>
                        <Textarea
                          value={approval.content}
                          readOnly
                          className="mt-1"
                          rows={4}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Submitter</label>
                          <Input value={approval.user.name} readOnly className="mt-1" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Type</label>
                          <Input value={approval.type} readOnly className="mt-1" />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button variant="destructive">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                        <Button variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Request Changes
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Quick Approve
                </Button>
                <Button size="sm" variant="destructive">
                  <XCircle className="h-4 w-4 mr-1" />
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSellers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Seller Management</h2>
        <div className="flex space-x-2">
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add Seller
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Seller</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Orders</TableHead>
            <TableHead>Earnings</TableHead>
            <TableHead>Warnings</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sellers.map((seller) => (
            <TableRow key={seller.id}>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seller.name}`} alt={seller.name} />
                  </Avatar>
                  <div>
                    <div className="font-medium">{seller.name}</div>
                    <div className="text-sm text-gray-500">{seller.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={
                  seller.status === 'active' ? 'default' :
                  seller.status === 'suspended' ? 'destructive' : 'secondary'
                }>
                  {seller.status}
                </Badge>
              </TableCell>
              <TableCell>{seller.level}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  {seller.rating}
                </div>
              </TableCell>
              <TableCell>{seller.ordersCompleted}</TableCell>
              <TableCell>£{seller.earnings.toLocaleString()}</TableCell>
              <TableCell>
                {seller.warnings > 0 && (
                  <Badge variant="destructive">{seller.warnings}</Badge>
                )}
              </TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {!seller.banned && (
                    <Button size="sm" variant="outline">
                      <AlertTriangle className="h-4 w-4" />
                    </Button>
                  )}
                  <Button size="sm" variant={seller.banned ? "outline" : "destructive"}>
                    {seller.banned ? <Unlock className="h-4 w-4" /> : <Ban className="h-4 w-4" />}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Payment Management</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Process Payments
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">£{stats.pendingPayments.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Pending Payments</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">£{(stats.pendingPayments * 0.1).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Platform Fees</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">£{(stats.pendingPayments * 0.9).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Seller Payouts</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Seller</TableHead>
            <TableHead>Buyer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Net Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-mono">{payment.orderId}</TableCell>
              <TableCell>{payment.seller}</TableCell>
              <TableCell>{payment.buyer}</TableCell>
              <TableCell>£{payment.amount.toLocaleString()}</TableCell>
              <TableCell>£{payment.fee.toLocaleString()}</TableCell>
              <TableCell className="font-semibold">£{payment.netAmount.toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant={
                  payment.status === 'completed' ? 'default' :
                  payment.status === 'processing' ? 'secondary' : 'outline'
                }>
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell>{payment.dueDate}</TableCell>
              <TableCell>
                <div className="flex space-x-1">
                  {payment.status === 'pending' && (
                    <Button size="sm">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Release
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  const renderPlans = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Token Package Management</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create New Package
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sellerPlans.map((plan) => (
          <Card key={plan.id} className={plan.popular ? 'ring-2 ring-blue-500' : ''}>
            {plan.popular && (
              <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{plan.name}</span>
                <Badge variant="secondary">£{plan.price}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {plan.tokens === -1 ? '∞' : plan.tokens}
                  </div>
                  <div className="text-sm text-gray-600">
                    {plan.tokens === -1 ? 'Unlimited' : 'Application'} Tokens
                  </div>
                </div>

                <p className="text-sm text-gray-600 text-center">{plan.description}</p>

                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Active Purchases:</span>
                    <span className="font-semibold">{plan.activePurchases}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total Revenue:</span>
                    <span className="font-semibold">£{plan.revenue.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Archive className="h-4 w-4 mr-1" />
                    Archive
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Token Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">1,505</div>
              <div className="text-sm text-gray-600">Total Token Packages Sold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">£72,584</div>
              <div className="text-sm text-gray-600">Token Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">47.2%</div>
              <div className="text-sm text-gray-600">Average Token Utilization</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">23.4</div>
              <div className="text-sm text-gray-600">Avg Tokens per Purchase</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="flex">
        {renderSidebar()}

        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Healthcare Nexus Admin Panel</h1>
              <p className="text-gray-600 mt-2">Complete platform control and moderation</p>
            </div>

            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'messages' && renderMessages()}
            {activeTab === 'approvals' && renderApprovals()}
            {activeTab === 'sellers' && renderSellers()}
            {activeTab === 'payments' && renderPayments()}
            {activeTab === 'plans' && renderPlans()}
          </div>
        </div>
      </div>
    </div>
  );
}
