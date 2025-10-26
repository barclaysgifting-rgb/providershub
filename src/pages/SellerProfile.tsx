import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
import {
  Star,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  Heart,
  Share2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Eye,
  Users,
  Award,
  Shield,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Package as PackageIcon,
  Image as ImageIcon,
  Plus,
  Edit
} from 'lucide-react';

export default function SellerProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Comprehensive seller data
  const sellersData: Record<string, any> = {
    'sarah-mitchell': {
      id: 'sarah-mitchell',
      name: 'Sarah Mitchell',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      level: 'Level 2',
      badge: 'Top Rated',
      rating: 5.0,
      reviewCount: 127,
      location: 'London, UK',
      memberSince: 'January 2022',
      responseTime: '1 hour',
      recentDelivery: '2 hours ago',
      languages: ['English', 'French'],
      description: `I am a certified healthcare compliance specialist with over 8 years of experience in CQC registration, regulatory compliance, and healthcare documentation. I have helped more than 150 healthcare businesses successfully navigate the complex CQC registration process.

My expertise includes:
• Complete CQC registration applications
• Healthcare compliance audits
• Regulatory documentation preparation
• Care home licensing support
• Inspection preparation and guidance

I pride myself on delivering high-quality, accurate work that meets all regulatory requirements. My clients appreciate my attention to detail, clear communication, and ability to explain complex regulatory processes in simple terms.`,
      stats: {
        ordersInQueue: 3,
        ordersCompleted: 127,
        buyers: 89,
        reviews: 127
      },
      galleryImages: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
      ],
      portfolioItems: [
        {
          id: 1,
          title: 'CQC Registration for Private Dental Practice',
          description: 'Complete registration package including all necessary documentation and compliance checks.',
          image: 'https://images.unsplash.com/photo-1606811951341-75672ee0b5c2?w=400&h=300&fit=crop',
          category: 'CQC Registration',
          completionDate: 'December 2023',
          clientRating: 5.0
        },
        {
          id: 2,
          title: 'Healthcare Compliance Audit',
          description: 'Comprehensive audit of care home compliance with regulatory standards.',
          image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
          category: 'Compliance Audit',
          completionDate: 'November 2023',
          clientRating: 5.0
        }
      ],
      packages: [
        {
          id: 1,
          name: 'Basic CQC Registration Package',
          description: 'Complete CQC registration with essential documentation',
          price: 850,
          deliveryTime: '5 days',
          revisions: 2,
          features: [
            'Registration application preparation',
            'Essential documentation review',
            'Basic compliance checklist',
            'Email support during process'
          ],
          popular: false
        },
        {
          id: 2,
          name: 'Standard CQC Registration Package',
          description: 'Comprehensive CQC registration with full documentation support',
          price: 1250,
          deliveryTime: '7 days',
          revisions: 3,
          features: [
            'Complete registration application',
            'Full documentation package',
            'Compliance audit included',
            'Phone/video consultation',
            'Ongoing support for 30 days'
          ],
          popular: true
        }
      ],
      reviews: [
        {
          id: 1,
          client: {
            name: 'Dr. James Wilson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
            country: 'Manchester, UK'
          },
          rating: 5,
          package: 'Standard CQC Registration Package',
          comment: 'Sarah was absolutely fantastic! She guided us through the entire CQC registration process with patience and expertise. The documentation was perfect and we passed our inspection on the first attempt. Highly recommend!',
          date: '2 weeks ago',
          helpful: 12,
          project: {
            title: 'Dental Practice Registration',
            price: 1250
          }
        }
      ]
    },
    'david-thompson': {
      id: 'david-thompson',
      name: 'David Thompson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      level: 'Level 2',
      badge: 'Top Rated',
      rating: 4.9,
      reviewCount: 89,
      location: 'Manchester, UK',
      memberSince: 'March 2022',
      responseTime: '30 minutes',
      recentDelivery: '1 hour ago',
      languages: ['English'],
      description: `Healthcare compliance auditor with 6+ years of experience in regulatory compliance and quality assurance. Specializing in comprehensive compliance audits, risk assessments, and regulatory documentation for healthcare facilities.`,
      stats: {
        ordersInQueue: 2,
        ordersCompleted: 89,
        buyers: 67,
        reviews: 89
      },
      galleryImages: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
      ],
      portfolioItems: [
        {
          id: 1,
          title: 'Comprehensive Compliance Audit',
          description: 'Full regulatory compliance assessment for care home facility.',
          image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
          category: 'Compliance Audit',
          completionDate: 'November 2023',
          clientRating: 5.0
        }
      ],
      packages: [
        {
          id: 1,
          name: 'Healthcare Compliance Audit',
          description: 'Complete compliance assessment and audit report',
          price: 850,
          deliveryTime: '5 days',
          revisions: 2,
          features: [
            'Full compliance audit',
            'Detailed audit report',
            'Risk assessment',
            'Improvement recommendations'
          ],
          popular: false
        }
      ],
      reviews: [
        {
          id: 1,
          client: {
            name: 'Emma Wilson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
            country: 'Birmingham, UK'
          },
          rating: 5,
          package: 'Healthcare Compliance Audit',
          comment: 'David provided an excellent compliance audit. His attention to detail and knowledge of healthcare regulations is outstanding.',
          date: '1 month ago',
          helpful: 8,
          project: {
            title: 'Care Home Compliance Audit',
            price: 850
          }
        }
      ]
    },
    'emma-wilson': {
      id: 'emma-wilson',
      name: 'Emma Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      level: 'Level 1',
      badge: 'Rising Star',
      rating: 5.0,
      reviewCount: 52,
      location: 'Birmingham, UK',
      memberSince: 'June 2023',
      responseTime: '2 hours',
      recentDelivery: '3 hours ago',
      languages: ['English', 'Spanish'],
      description: `Specialized in care home licensing and regulatory compliance. Helping healthcare providers navigate the complex licensing process with expertise and personalized guidance.`,
      stats: {
        ordersInQueue: 1,
        ordersCompleted: 52,
        buyers: 45,
        reviews: 52
      },
      galleryImages: [
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop'
      ],
      portfolioItems: [
        {
          id: 1,
          title: 'Care Home Licensing Application',
          description: 'Complete licensing application for residential care facility.',
          image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
          category: 'Licensing',
          completionDate: 'October 2023',
          clientRating: 5.0
        }
      ],
      packages: [
        {
          id: 1,
          name: 'Care Home Licensing Support',
          description: 'Complete licensing application assistance',
          price: 2200,
          deliveryTime: '14 days',
          revisions: 3,
          features: [
            'Licensing application preparation',
            'Documentation review',
            'Regulatory guidance',
            'Ongoing support'
          ],
          popular: false
        }
      ],
      reviews: [
        {
          id: 1,
          client: {
            name: 'Michael Chen',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
            country: 'Leeds, UK'
          },
          rating: 5,
          package: 'Care Home Licensing Support',
          comment: 'Emma made the licensing process so much easier. Her guidance was invaluable.',
          date: '2 weeks ago',
          helpful: 5,
          project: {
            title: 'Care Home Licensing',
            price: 2200
          }
        }
      ]
    },
    'michael-chen': {
      id: 'michael-chen',
      name: 'Michael Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      level: 'Level 1',
      badge: 'Verified',
      rating: 4.8,
      reviewCount: 28,
      location: 'Leeds, UK',
      memberSince: 'September 2023',
      responseTime: '4 hours',
      recentDelivery: '6 hours ago',
      languages: ['English', 'Mandarin'],
      description: `Healthcare documentation specialist focused on regulatory compliance and documentation preparation. Expert in creating and reviewing healthcare regulatory documents.`,
      stats: {
        ordersInQueue: 1,
        ordersCompleted: 28,
        buyers: 24,
        reviews: 28
      },
      galleryImages: [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop'
      ],
      portfolioItems: [
        {
          id: 1,
          title: 'Regulatory Documentation Review',
          description: 'Comprehensive review and enhancement of regulatory documents.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
          category: 'Documentation',
          completionDate: 'September 2023',
          clientRating: 4.8
        }
      ],
      packages: [
        {
          id: 1,
          name: 'Regulatory Documentation Review',
          description: 'Complete review of regulatory documents',
          price: 650,
          deliveryTime: '3 days',
          revisions: 2,
          features: [
            'Document review',
            'Compliance check',
            'Improvement suggestions',
            'Final documentation'
          ],
          popular: false
        }
      ],
      reviews: [
        {
          id: 1,
          client: {
            name: 'Lisa Johnson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
            country: 'Sheffield, UK'
          },
          rating: 5,
          package: 'Regulatory Documentation Review',
          comment: 'Michael provided excellent documentation review. Very thorough and professional.',
          date: '1 week ago',
          helpful: 3,
          project: {
            title: 'Documentation Review',
            price: 650
          }
        }
      ]
    },
    'rachel-green': {
      id: 'rachel-green',
      name: 'Rachel Green',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
      level: 'Level 3',
      badge: 'Pro Seller',
      rating: 5.0,
      reviewCount: 156,
      location: 'London, UK',
      memberSince: 'January 2021',
      responseTime: '30 minutes',
      recentDelivery: '30 minutes ago',
      languages: ['English', 'German'],
      description: `Senior healthcare consultant with 10+ years of experience in full healthcare setup, regulatory compliance, and business development. Trusted advisor for healthcare entrepreneurs.`,
      stats: {
        ordersInQueue: 5,
        ordersCompleted: 156,
        buyers: 134,
        reviews: 156
      },
      galleryImages: [
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop'
      ],
      portfolioItems: [
        {
          id: 1,
          title: 'Full Healthcare Setup Consulting',
          description: 'End-to-end healthcare business setup and launch.',
          image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
          category: 'Business Setup',
          completionDate: 'December 2023',
          clientRating: 5.0
        }
      ],
      packages: [
        {
          id: 1,
          name: 'Full Healthcare Setup Package',
          description: 'Complete healthcare business setup and consulting',
          price: 3500,
          deliveryTime: '21 days',
          revisions: 5,
          features: [
            'Business structure setup',
            'Regulatory compliance',
            'Licensing assistance',
            'Staff training',
            'Marketing strategy',
            'Financial planning'
          ],
          popular: false
        }
      ],
      reviews: [
        {
          id: 1,
          client: {
            name: 'David Thompson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
            country: 'Manchester, UK'
          },
          rating: 5,
          package: 'Full Healthcare Setup Package',
          comment: 'Rachel is incredible! She helped us set up our entire healthcare business from scratch. Worth every penny.',
          date: '3 weeks ago',
          helpful: 15,
          project: {
            title: 'Healthcare Business Setup',
            price: 3500
          }
        }
      ]
    },
    'james-parker': {
      id: 'james-parker',
      name: 'James Parker',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      level: 'Level 2',
      badge: 'Top Rated',
      rating: 4.9,
      reviewCount: 71,
      location: 'Liverpool, UK',
      memberSince: 'August 2022',
      responseTime: '1 hour',
      recentDelivery: '2 hours ago',
      languages: ['English'],
      description: `CQC inspection preparation specialist. Helping healthcare providers prepare for and pass CQC inspections with confidence through comprehensive preparation and mock inspections.`,
      stats: {
        ordersInQueue: 2,
        ordersCompleted: 71,
        buyers: 58,
        reviews: 71
      },
      galleryImages: [
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop'
      ],
      portfolioItems: [
        {
          id: 1,
          title: 'CQC Inspection Preparation',
          description: 'Comprehensive preparation for CQC inspection including mock inspection.',
          image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
          category: 'Inspection Prep',
          completionDate: 'November 2023',
          clientRating: 4.9
        }
      ],
      packages: [
        {
          id: 1,
          name: 'CQC Inspection Preparation',
          description: 'Complete inspection preparation and mock inspection',
          price: 1800,
          deliveryTime: '10 days',
          revisions: 3,
          features: [
            'Inspection readiness assessment',
            'Mock inspection',
            'Improvement recommendations',
            'Documentation review',
            'Staff training guidance'
          ],
          popular: false
        }
      ],
      reviews: [
        {
          id: 1,
          client: {
            name: 'Rachel Green',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
            country: 'London, UK'
          },
          rating: 5,
          package: 'CQC Inspection Preparation',
          comment: 'James helped us prepare perfectly for our CQC inspection. We passed with flying colors!',
          date: '1 month ago',
          helpful: 10,
          project: {
            title: 'CQC Inspection Prep',
            price: 1800
          }
        }
      ]
    },
    'lisa-johnson': {
      id: 'lisa-johnson',
      name: 'Lisa Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      level: 'Level 1',
      badge: 'Verified',
      rating: 4.8,
      reviewCount: 34,
      location: 'Sheffield, UK',
      memberSince: 'December 2023',
      responseTime: '3 hours',
      recentDelivery: '4 hours ago',
      languages: ['English', 'Italian'],
      description: `Healthcare regulatory specialist focused on fast-track CQC registration and compliance solutions. Streamlining the registration process for busy healthcare providers.`,
      stats: {
        ordersInQueue: 1,
        ordersCompleted: 34,
        buyers: 29,
        reviews: 34
      },
      galleryImages: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
      ],
      portfolioItems: [
        {
          id: 1,
          title: 'CQC Registration Fast Track',
          description: 'Expedited CQC registration process for urgent needs.',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
          category: 'CQC Registration',
          completionDate: 'January 2024',
          clientRating: 4.8
        }
      ],
      packages: [
        {
          id: 1,
          name: 'CQC Registration Fast Track',
          description: 'Expedited CQC registration with priority processing',
          price: 950,
          deliveryTime: '3 days',
          revisions: 2,
          features: [
            'Priority processing',
            'Express documentation',
            'Dedicated support',
            'Fast-track submission'
          ],
          popular: false
        }
      ],
      reviews: [
        {
          id: 1,
          client: {
            name: 'Robert Taylor',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
            country: 'Newcastle, UK'
          },
          rating: 5,
          package: 'CQC Registration Fast Track',
          comment: 'Lisa delivered exactly when promised. Perfect for our urgent registration needs.',
          date: '2 weeks ago',
          helpful: 6,
          project: {
            title: 'Fast Track Registration',
            price: 950
          }
        }
      ]
    },
    'robert-taylor': {
      id: 'robert-taylor',
      name: 'Robert Taylor',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      level: 'Level 2',
      badge: 'CQC Expert',
      rating: 5.0,
      reviewCount: 46,
      location: 'Newcastle, UK',
      memberSince: 'May 2023',
      responseTime: '45 minutes',
      recentDelivery: '1 hour ago',
      languages: ['English', 'Welsh'],
      description: `CQC documentation expert specializing in comprehensive compliance documentation packages. Ensuring healthcare providers have all necessary documentation for regulatory compliance.`,
      stats: {
        ordersInQueue: 2,
        ordersCompleted: 46,
        buyers: 38,
        reviews: 46
      },
      galleryImages: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
      ],
      portfolioItems: [
        {
          id: 1,
          title: 'Compliance Documentation Package',
          description: 'Complete compliance documentation suite for healthcare facilities.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
          category: 'Documentation',
          completionDate: 'December 2023',
          clientRating: 5.0
        }
      ],
      packages: [
        {
          id: 1,
          name: 'Compliance Documentation Package',
          description: 'Complete compliance documentation suite',
          price: 1200,
          deliveryTime: '7 days',
          revisions: 3,
          features: [
            'Policy documents',
            'Procedure manuals',
            'Compliance checklists',
            'Training materials',
            'Audit preparation docs'
          ],
          popular: false
        }
      ],
      reviews: [
        {
          id: 1,
          client: {
            name: 'Lisa Johnson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
            country: 'Sheffield, UK'
          },
          rating: 5,
          package: 'Compliance Documentation Package',
          comment: 'Robert created comprehensive documentation that exceeded our expectations. Excellent quality and attention to detail.',
          date: '1 week ago',
          helpful: 7,
          project: {
            title: 'Compliance Documentation',
            price: 1200
          }
        }
      ]
    }
  };

  // Get seller data or return null if not found
  const seller = id ? sellersData[id] : null;

  if (!seller) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Seller Not Found</h3>
              <p>Seller profile not found or unavailable.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Keywords/Tags (what they rank for)
  const keywords = [
    'CQC Registration',
    'Healthcare Compliance',
    'Care Home Licensing',
    'Regulatory Documentation',
    'Medical Practice Setup',
    'Compliance Audit',
    'Healthcare Consulting',
    'CQC Application',
    'Care Quality Commission',
    'Healthcare Regulation',
    'Medical Compliance',
    'Nursing Home License',
    'Healthcare Accreditation'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="flex items-center" onClick={() => navigate('/home/userid')}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Seller Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <img src={seller.avatar} alt={seller.name} />
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h1 className="text-2xl font-bold">{seller.name}</h1>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {seller.badge}
                        </Badge>
                        <Badge variant="outline">
                          {seller.level}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-medium">{seller.rating}</span>
                          <span className="ml-1">({seller.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {seller.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {seller.responseTime} response
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Member since</div>
                    <div className="font-medium">{seller.memberSince}</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{seller.stats.ordersInQueue}</div>
                    <div className="text-sm text-gray-600">In Queue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{seller.stats.ordersCompleted}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{seller.stats.buyers}</div>
                    <div className="text-sm text-gray-600">Buyers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{seller.stats.reviews}</div>
                    <div className="text-sm text-gray-600">Reviews</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">About This Seller</h2>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {seller.description}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {seller.languages.map((lang: string, index: number) => (
                      <Badge key={index} variant="outline">{lang}</Badge>
                    ))}
                  </div>
                </div>

                {/* Keywords */}
                <div>
                  <h3 className="font-medium mb-2">Specializes in</h3>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image Gallery */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Portfolio Gallery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {seller.galleryImages.map((image: string, index: number) => (
                    <div
                      key={index}
                      className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                        selectedImage === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {selectedImage === index && (
                        <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                          <Eye className="h-6 w-6 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={seller.galleryImages[selectedImage]}
                    alt="Selected gallery image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Tabs for Portfolio, Packages, Reviews */}
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="portfolio">Portfolio ({seller.portfolioItems.length})</TabsTrigger>
                <TabsTrigger value="packages">Packages ({seller.packages.length})</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({seller.reviews.length})</TabsTrigger>
              </TabsList>

              {/* Portfolio Tab */}
              <TabsContent value="portfolio" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {seller.portfolioItems.map((item: any) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="bg-white/90 text-gray-800">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span>{item.clientRating}</span>
                          </div>
                          <span className="text-gray-500">{item.completionDate}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Packages Tab */}
              <TabsContent value="packages" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {seller.packages.map((pkg: any) => (
                    <Card key={pkg.id} className={`relative ${pkg.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                        <div className="text-2xl font-bold text-green-600">
                          £{pkg.price.toLocaleString()}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Delivery time</span>
                            <span>{pkg.deliveryTime}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Revisions</span>
                            <span>{pkg.revisions}</span>
                          </div>
                        </div>

                        <div className="space-y-2 mb-6">
                          {pkg.features.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button className="w-full">
                          Continue (£{pkg.price.toLocaleString()})
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {/* Review Summary */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-3xl font-bold">{seller.rating}</div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-2 text-gray-600">({seller.reviews} reviews)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Rating breakdown</div>
                          <div className="space-y-1 text-sm">
                            <div>5 stars: {Math.round(seller.reviews * 0.9)} ({Math.round((seller.reviews * 0.9 / seller.reviews) * 100)}%)</div>
                            <div>4 stars: {Math.round(seller.reviews * 0.08)} ({Math.round((seller.reviews * 0.08 / seller.reviews) * 100)}%)</div>
                            <div>3 stars: {Math.round(seller.reviews * 0.02)} ({Math.round((seller.reviews * 0.02 / seller.reviews) * 100)}%)</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Individual Reviews */}
                  <div className="space-y-6">
                    {seller.reviews.map((review: any) => (
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
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>

                              <div className="flex items-center mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>

                              <p className="text-gray-700 mb-3">"{review.comment}"</p>

                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                  Package: {review.package}
                                </div>
                                <Button variant="ghost" size="sm">
                                  Helpful ({review.helpful})
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Contact Seller</h3>
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Me
                  </Button>
                  <div className="text-center text-sm text-gray-600">
                    Average response time: {seller.responseTime}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seller Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Seller Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Orders in queue</span>
                    <span className="font-medium">{seller.stats.ordersInQueue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Orders completed</span>
                    <span className="font-medium">{seller.stats.ordersCompleted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Unique buyers</span>
                    <span className="font-medium">{seller.stats.buyers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Member since</span>
                    <span className="font-medium">{seller.memberSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recent delivery</span>
                    <span className="font-medium">{seller.recentDelivery}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges & Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Badges & Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm">CQC Registered Consultant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Top Rated Seller</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">Level 2 Seller</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
