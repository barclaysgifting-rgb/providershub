import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar } from '../components/ui/avatar';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import {
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Filter,
  Search,
  ArrowLeft,
  MessageSquare,
  Calendar,
  Award
} from 'lucide-react';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const service = searchParams.get('service') || '';
  const location = searchParams.get('location') || '';

  const [sortBy, setSortBy] = useState('relevance');
  const [filterBy, setFilterBy] = useState('all');

  // Get service display name
  const getServiceDisplayName = (serviceCode: string) => {
    const serviceMap: { [key: string]: string } = {
      'cqc': 'CQC Registration',
      'consulting': 'Business Consulting',
      'software': 'Care Software',
      'training': 'Training Services',
      'visa': 'Sponsor Visa',
      'accounting': 'Accounting'
    };
    return serviceMap[serviceCode] || serviceCode;
  };

  // Mock freelancer data - in real app this would come from API
  const freelancers = [
    // CQC Registration Specialists
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      title: 'CQC Registration Specialist',
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 85,
      location: 'London, UK',
      completedOrders: 89,
      responseTime: '< 1 hour',
      level: 'Level 2',
      description: 'Expert CQC registration consultant with 8+ years experience. Helped 200+ healthcare providers achieve compliance.',
      skills: ['CQC Registration', 'Healthcare Compliance', 'Regulatory Consulting'],
      service: 'cqc',
      badges: ['Verified', 'Top Rated', 'Fast Response'],
      portfolioItems: 15,
      languages: ['English', 'Spanish']
    },
    {
      id: 2,
      name: 'David Thompson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      title: 'Business Compliance Auditor',
      rating: 4.7,
      reviewCount: 93,
      hourlyRate: 75,
      location: 'Manchester, UK',
      completedOrders: 67,
      responseTime: '< 2 hours',
      level: 'Level 1',
      description: 'Comprehensive business compliance audits and CQC preparation services for healthcare organizations.',
      skills: ['CQC Audits', 'Compliance Review', 'Risk Assessment'],
      service: 'cqc',
      badges: ['Verified', 'Experienced'],
      portfolioItems: 8,
      languages: ['English']
    },
    {
      id: 8,
      name: 'James Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      title: 'CQC Compliance Specialist',
      rating: 4.8,
      reviewCount: 167,
      hourlyRate: 88,
      location: 'Newcastle, UK',
      completedOrders: 124,
      responseTime: '< 1 hour',
      level: 'Level 2',
      description: 'Dedicated CQC registration and compliance specialist with proven track record.',
      skills: ['CQC Registration', 'Compliance', 'Quality Assurance'],
      service: 'cqc',
      badges: ['Verified', 'Top Rated', 'CQC Expert'],
      portfolioItems: 27,
      languages: ['English']
    },
    {
      id: 9,
      name: 'Rachel Green',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
      title: 'Healthcare Compliance Advisor',
      rating: 4.6,
      reviewCount: 98,
      hourlyRate: 78,
      location: 'Birmingham, UK',
      completedOrders: 76,
      responseTime: '< 3 hours',
      level: 'Level 1',
      description: 'Specialized in CQC registration and ongoing compliance maintenance for care homes.',
      skills: ['CQC Registration', 'Compliance Monitoring', 'Quality Management'],
      service: 'cqc',
      badges: ['Verified'],
      portfolioItems: 14,
      languages: ['English', 'French']
    },
    {
      id: 10,
      name: 'Mark Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark',
      title: 'Regulatory Compliance Expert',
      rating: 4.9,
      reviewCount: 145,
      hourlyRate: 92,
      location: 'Leeds, UK',
      completedOrders: 108,
      responseTime: '< 1 hour',
      level: 'Level 2',
      description: 'Expert CQC registration and compliance services with 10+ years in healthcare regulation.',
      skills: ['CQC Registration', 'Regulatory Compliance', 'Healthcare Law'],
      service: 'cqc',
      badges: ['Verified', 'Top Rated', 'Expert'],
      portfolioItems: 22,
      languages: ['English']
    },

    // Business Consulting
    {
      id: 4,
      name: 'Michael Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      title: 'Business Strategy Consultant',
      rating: 4.6,
      reviewCount: 78,
      hourlyRate: 80,
      location: 'Leeds, UK',
      completedOrders: 54,
      responseTime: '< 3 hours',
      level: 'Level 1',
      description: 'Strategic business consulting for healthcare startups and established care providers.',
      skills: ['Business Strategy', 'Growth Planning', 'Market Analysis'],
      service: 'consulting',
      badges: ['Verified'],
      portfolioItems: 12,
      languages: ['English', 'Mandarin']
    },
    {
      id: 11,
      name: 'Sophie Turner',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
      title: 'Healthcare Business Consultant',
      rating: 4.8,
      reviewCount: 112,
      hourlyRate: 85,
      location: 'Liverpool, UK',
      completedOrders: 89,
      responseTime: '< 2 hours',
      level: 'Level 2',
      description: 'Specialized consulting for healthcare business development and operational efficiency.',
      skills: ['Business Consulting', 'Operations Management', 'Strategic Planning'],
      service: 'consulting',
      badges: ['Verified', 'Top Rated'],
      portfolioItems: 18,
      languages: ['English', 'German']
    },
    {
      id: 12,
      name: 'Alex Rodriguez',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      title: 'Care Business Advisor',
      rating: 4.7,
      reviewCount: 89,
      hourlyRate: 82,
      location: 'Sheffield, UK',
      completedOrders: 67,
      responseTime: '< 4 hours',
      level: 'Level 1',
      description: 'Comprehensive business advisory services for care home operators and healthcare businesses.',
      skills: ['Business Advisory', 'Financial Planning', 'Operations'],
      service: 'consulting',
      badges: ['Verified'],
      portfolioItems: 16,
      languages: ['English', 'Spanish']
    },

    // Care Software
    {
      id: 3,
      name: 'Emma Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      title: 'Healthcare Software Consultant',
      rating: 4.8,
      reviewCount: 156,
      hourlyRate: 95,
      location: 'Birmingham, UK',
      completedOrders: 112,
      responseTime: '< 30 min',
      level: 'Level 2',
      description: 'Specialized in healthcare software implementation and digital transformation for care providers.',
      skills: ['Software Implementation', 'Digital Health', 'System Integration'],
      service: 'software',
      badges: ['Verified', 'Top Rated', 'Premium'],
      portfolioItems: 23,
      languages: ['English', 'French']
    },
    {
      id: 13,
      name: 'Tom Anderson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
      title: 'Digital Health Specialist',
      rating: 4.6,
      reviewCount: 94,
      hourlyRate: 88,
      location: 'Cardiff, UK',
      completedOrders: 71,
      responseTime: '< 2 hours',
      level: 'Level 2',
      description: 'Expert in healthcare software solutions, EHR systems, and care management platforms.',
      skills: ['EHR Systems', 'Care Software', 'Digital Transformation'],
      service: 'software',
      badges: ['Verified', 'Certified'],
      portfolioItems: 19,
      languages: ['English', 'Welsh']
    },
    {
      id: 14,
      name: 'Nina Patel',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nina',
      title: 'Healthcare IT Consultant',
      rating: 4.9,
      reviewCount: 134,
      hourlyRate: 98,
      location: 'Brighton, UK',
      completedOrders: 97,
      responseTime: '< 1 hour',
      level: 'Level 2',
      description: 'Specialized in healthcare IT solutions, software implementation, and digital health strategies.',
      skills: ['Healthcare IT', 'Software Solutions', 'Digital Health'],
      service: 'software',
      badges: ['Verified', 'Top Rated', 'IT Expert'],
      portfolioItems: 25,
      languages: ['English', 'Hindi']
    },

    // Training Services
    {
      id: 5,
      name: 'Lisa Park',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      title: 'Staff Training Specialist',
      rating: 4.9,
      reviewCount: 203,
      hourlyRate: 70,
      location: 'Liverpool, UK',
      completedOrders: 145,
      responseTime: '< 1 hour',
      level: 'Level 2',
      description: 'Comprehensive staff training programs for healthcare compliance and best practices.',
      skills: ['Staff Training', 'Compliance Training', 'Healthcare Education'],
      service: 'training',
      badges: ['Verified', 'Top Rated', 'Trainer Certified'],
      portfolioItems: 31,
      languages: ['English', 'Korean']
    },
    {
      id: 15,
      name: 'Karen Davis',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karen',
      title: 'Healthcare Training Consultant',
      rating: 4.7,
      reviewCount: 118,
      hourlyRate: 72,
      location: 'Nottingham, UK',
      completedOrders: 86,
      responseTime: '< 3 hours',
      level: 'Level 1',
      description: 'Specialized training programs for healthcare staff development and compliance requirements.',
      skills: ['Staff Training', 'Compliance Training', 'Healthcare Education'],
      service: 'training',
      badges: ['Verified', 'Certified Trainer'],
      portfolioItems: 20,
      languages: ['English']
    },
    {
      id: 16,
      name: 'Paul Miller',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Paul',
      title: 'Safety Training Expert',
      rating: 4.8,
      reviewCount: 156,
      hourlyRate: 75,
      location: 'Plymouth, UK',
      completedOrders: 113,
      responseTime: '< 2 hours',
      level: 'Level 2',
      description: 'Comprehensive health and safety training for healthcare environments and care settings.',
      skills: ['Safety Training', 'Compliance Training', 'Risk Management'],
      service: 'training',
      badges: ['Verified', 'Top Rated', 'Safety Expert'],
      portfolioItems: 28,
      languages: ['English']
    },

    // Sponsor Visa
    {
      id: 6,
      name: 'Robert Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      title: 'Immigration Consultant',
      rating: 4.5,
      reviewCount: 89,
      hourlyRate: 90,
      location: 'Bristol, UK',
      completedOrders: 71,
      responseTime: '< 4 hours',
      level: 'Level 1',
      description: 'Specialized in sponsor visa applications and immigration services for healthcare professionals.',
      skills: ['Visa Applications', 'Immigration Law', 'Work Permits'],
      service: 'visa',
      badges: ['Verified', 'Immigration Certified'],
      portfolioItems: 9,
      languages: ['English']
    },
    {
      id: 17,
      name: 'Maria Garcia',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      title: 'Visa & Immigration Specialist',
      rating: 4.6,
      reviewCount: 102,
      hourlyRate: 92,
      location: 'Oxford, UK',
      completedOrders: 78,
      responseTime: '< 3 hours',
      level: 'Level 1',
      description: 'Expert visa sponsorship services for healthcare workers and immigration compliance.',
      skills: ['Visa Sponsorship', 'Immigration', 'Work Permits'],
      service: 'visa',
      badges: ['Verified', 'Immigration Expert'],
      portfolioItems: 15,
      languages: ['English', 'Spanish', 'Portuguese']
    },

    // Accounting
    {
      id: 7,
      name: 'Anna Kowalski',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
      title: 'Financial Compliance Expert',
      rating: 4.7,
      reviewCount: 134,
      hourlyRate: 85,
      location: 'Sheffield, UK',
      completedOrders: 98,
      responseTime: '< 2 hours',
      level: 'Level 2',
      description: 'Expert accounting and financial compliance services for healthcare businesses.',
      skills: ['Financial Compliance', 'Tax Planning', 'Accounting'],
      service: 'accounting',
      badges: ['Verified', 'CPA Certified'],
      portfolioItems: 18,
      languages: ['English', 'Polish']
    },
    {
      id: 18,
      name: 'David Brown',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidB',
      title: 'Healthcare Accountant',
      rating: 4.8,
      reviewCount: 147,
      hourlyRate: 82,
      location: 'Cambridge, UK',
      completedOrders: 109,
      responseTime: '< 1 hour',
      level: 'Level 2',
      description: 'Specialized accounting services for healthcare businesses with regulatory compliance expertise.',
      skills: ['Healthcare Accounting', 'Tax Compliance', 'Financial Reporting'],
      service: 'accounting',
      badges: ['Verified', 'Top Rated', 'ACA Qualified'],
      portfolioItems: 24,
      languages: ['English']
    },
    {
      id: 19,
      name: 'Jennifer Liu',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
      title: 'Financial Services Consultant',
      rating: 4.6,
      reviewCount: 95,
      hourlyRate: 78,
      location: 'Glasgow, UK',
      completedOrders: 73,
      responseTime: '< 2 hours',
      level: 'Level 1',
      description: 'Comprehensive financial services and accounting support for healthcare organizations.',
      skills: ['Accounting', 'Financial Planning', 'Tax Services'],
      service: 'accounting',
      badges: ['Verified', 'Qualified'],
      portfolioItems: 17,
      languages: ['English', 'Cantonese']
    },
    {
      id: 20,
      name: 'Simon Taylor',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Simon',
      title: 'Healthcare Finance Specialist',
      rating: 4.9,
      reviewCount: 178,
      hourlyRate: 88,
      location: 'Edinburgh, UK',
      completedOrders: 132,
      responseTime: '< 1 hour',
      level: 'Level 2',
      description: 'Expert financial services and accounting for healthcare businesses with 12+ years experience.',
      skills: ['Healthcare Finance', 'Accounting', 'Financial Compliance'],
      service: 'accounting',
      badges: ['Verified', 'Top Rated', 'Expert'],
      portfolioItems: 29,
      languages: ['English', 'Scottish Gaelic']
    },

    // Additional freelancers for common search terms
    {
      id: 21,
      name: 'Christopher Evans',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chris',
      title: 'Healthcare Compliance Audit Specialist',
      rating: 4.9,
      reviewCount: 156,
      hourlyRate: 95,
      location: 'London, UK',
      completedOrders: 118,
      responseTime: '< 1 hour',
      level: 'Level 3',
      description: 'Expert healthcare compliance auditor with extensive experience in regulatory frameworks and audit preparation.',
      skills: ['Healthcare Compliance Audit', 'Regulatory Compliance', 'Risk Assessment', 'CQC Standards'],
      service: 'cqc',
      badges: ['Verified', 'Top Rated', 'Audit Expert'],
      portfolioItems: 32,
      languages: ['English']
    },
    {
      id: 22,
      name: 'Victoria Patel',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Victoria',
      title: 'Care Home Licensing Consultant',
      rating: 4.8,
      reviewCount: 142,
      hourlyRate: 88,
      location: 'Manchester, UK',
      completedOrders: 103,
      responseTime: '< 2 hours',
      level: 'Level 2',
      description: 'Specialized in care home licensing applications and regulatory compliance for residential care facilities.',
      skills: ['Care Home Licensing', 'Regulatory Documentation', 'Compliance Consulting', 'Licensing Support'],
      service: 'cqc',
      badges: ['Verified', 'Licensing Expert', 'Top Rated'],
      portfolioItems: 28,
      languages: ['English', 'Gujarati']
    },
    {
      id: 23,
      name: 'Andrew Mitchell',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andrew',
      title: 'Regulatory Documentation Specialist',
      rating: 4.7,
      reviewCount: 98,
      hourlyRate: 82,
      location: 'Birmingham, UK',
      completedOrders: 76,
      responseTime: '< 3 hours',
      level: 'Level 2',
      description: 'Expert in healthcare regulatory documentation, compliance reports, and regulatory submissions.',
      skills: ['Regulatory Documentation', 'Compliance Reporting', 'Healthcare Regulation', 'Documentation Review'],
      service: 'cqc',
      badges: ['Verified', 'Documentation Expert'],
      portfolioItems: 24,
      languages: ['English']
    },
    {
      id: 24,
      name: 'Sarah Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJ',
      title: 'Compliance Consulting Professional',
      rating: 4.9,
      reviewCount: 178,
      hourlyRate: 92,
      location: 'Leeds, UK',
      completedOrders: 134,
      responseTime: '< 1 hour',
      level: 'Level 3',
      description: 'Comprehensive compliance consulting services for healthcare organizations, including strategy and implementation.',
      skills: ['Compliance Consulting', 'Regulatory Strategy', 'Healthcare Compliance', 'Risk Management'],
      service: 'consulting',
      badges: ['Verified', 'Top Rated', 'Strategy Expert'],
      portfolioItems: 35,
      languages: ['English', 'French']
    },
    {
      id: 25,
      name: 'Michael Roberts',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelR',
      title: 'CQC Inspection Preparation Expert',
      rating: 4.8,
      reviewCount: 167,
      hourlyRate: 89,
      location: 'Liverpool, UK',
      completedOrders: 121,
      responseTime: '< 2 hours',
      level: 'Level 2',
      description: 'Specialized in CQC inspection preparation, mock inspections, and compliance improvement plans.',
      skills: ['CQC Inspection Preparation', 'Mock Inspections', 'Quality Improvement', 'Compliance Training'],
      service: 'training',
      badges: ['Verified', 'CQC Specialist', 'Top Rated'],
      portfolioItems: 30,
      languages: ['English']
    },
    {
      id: 26,
      name: 'Emma Thompson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaT',
      title: 'Healthcare Setup Consultant',
      rating: 4.7,
      reviewCount: 123,
      hourlyRate: 85,
      location: 'Sheffield, UK',
      completedOrders: 94,
      responseTime: '< 3 hours',
      level: 'Level 2',
      description: 'Expert healthcare setup consulting for new care facilities, including regulatory compliance and operational planning.',
      skills: ['Healthcare Setup Consulting', 'Facility Planning', 'Regulatory Compliance', 'Business Development'],
      service: 'consulting',
      badges: ['Verified', 'Setup Expert'],
      portfolioItems: 26,
      languages: ['English']
    },
    {
      id: 27,
      name: 'James Harrison',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JamesH',
      title: 'Nursing Home Registration Specialist',
      rating: 4.9,
      reviewCount: 189,
      hourlyRate: 94,
      location: 'Newcastle, UK',
      completedOrders: 142,
      responseTime: '< 1 hour',
      level: 'Level 3',
      description: 'Dedicated nursing home registration specialist with extensive experience in CQC applications and compliance.',
      skills: ['Nursing Home Registration', 'CQC Registration', 'Regulatory Compliance', 'Care Home Setup'],
      service: 'cqc',
      badges: ['Verified', 'Top Rated', 'Nursing Home Expert'],
      portfolioItems: 38,
      languages: ['English']
    },
    {
      id: 28,
      name: 'Lisa Anderson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LisaA',
      title: 'Medical Compliance Services Provider',
      rating: 4.6,
      reviewCount: 134,
      hourlyRate: 87,
      location: 'Bristol, UK',
      completedOrders: 98,
      responseTime: '< 2 hours',
      level: 'Level 2',
      description: 'Comprehensive medical compliance services including regulatory audits, documentation, and compliance training.',
      skills: ['Medical Compliance Services', 'Regulatory Audits', 'Compliance Training', 'Healthcare Regulation'],
      service: 'cqc',
      badges: ['Verified', 'Medical Expert'],
      portfolioItems: 29,
      languages: ['English', 'Spanish']
    },
    {
      id: 29,
      name: 'David Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidW',
      title: 'Healthcare Regulatory Support Specialist',
      rating: 4.8,
      reviewCount: 145,
      hourlyRate: 90,
      location: 'Cardiff, UK',
      completedOrders: 109,
      responseTime: '< 2 hours',
      level: 'Level 2',
      description: 'Full-service healthcare regulatory support including compliance monitoring, documentation, and regulatory guidance.',
      skills: ['Healthcare Regulatory Support', 'Compliance Monitoring', 'Regulatory Guidance', 'Documentation'],
      service: 'cqc',
      badges: ['Verified', 'Top Rated', 'Regulatory Expert'],
      portfolioItems: 31,
      languages: ['English', 'Welsh']
    },
    {
      id: 30,
      name: 'Rachel Adams',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelA',
      title: 'Care Quality Commission Consultant',
      rating: 4.9,
      reviewCount: 201,
      hourlyRate: 96,
      location: 'Brighton, UK',
      completedOrders: 156,
      responseTime: '< 1 hour',
      level: 'Level 3',
      description: 'Premier CQC consultant specializing in registration, inspections, and ongoing compliance management.',
      skills: ['Care Quality Commission', 'CQC Registration', 'Inspection Preparation', 'Compliance Management'],
      service: 'cqc',
      badges: ['Verified', 'Top Rated', 'CQC Authority'],
      portfolioItems: 42,
      languages: ['English']
    },
    {
      id: 31,
      name: 'Thomas Brown',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas',
      title: 'Nursing Home Compliance Advisor',
      rating: 4.7,
      reviewCount: 118,
      hourlyRate: 84,
      location: 'Nottingham, UK',
      completedOrders: 87,
      responseTime: '< 3 hours',
      level: 'Level 2',
      description: 'Specialized nursing home compliance advisory services focusing on regulatory requirements and best practices.',
      skills: ['Nursing Home Compliance', 'Regulatory Advisory', 'Compliance Best Practices', 'Quality Assurance'],
      service: 'consulting',
      badges: ['Verified', 'Nursing Home Specialist'],
      portfolioItems: 25,
      languages: ['English']
    },
    {
      id: 32,
      name: 'Amanda Foster',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda',
      title: 'Healthcare Documentation Specialist',
      rating: 4.6,
      reviewCount: 112,
      hourlyRate: 81,
      location: 'Plymouth, UK',
      completedOrders: 83,
      responseTime: '< 4 hours',
      level: 'Level 2',
      description: 'Expert healthcare documentation services including policy creation, procedure manuals, and compliance documentation.',
      skills: ['Healthcare Documentation', 'Policy Development', 'Procedure Manuals', 'Compliance Documentation'],
      service: 'cqc',
      badges: ['Verified', 'Documentation Specialist'],
      portfolioItems: 22,
      languages: ['English']
    },
    {
      id: 33,
      name: 'Kevin Murphy',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin',
      title: 'Regulatory Compliance Manager',
      rating: 4.8,
      reviewCount: 159,
      hourlyRate: 91,
      location: 'Oxford, UK',
      completedOrders: 117,
      responseTime: '< 2 hours',
      level: 'Level 3',
      description: 'Comprehensive regulatory compliance management services for healthcare organizations and care providers.',
      skills: ['Regulatory Compliance', 'Compliance Management', 'Healthcare Regulation', 'Risk Assessment'],
      service: 'consulting',
      badges: ['Verified', 'Top Rated', 'Compliance Manager'],
      portfolioItems: 33,
      languages: ['English']
    },
    {
      id: 34,
      name: 'Sophie Clark',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SophieC',
      title: 'Care Home Setup Specialist',
      rating: 4.7,
      reviewCount: 134,
      hourlyRate: 86,
      location: 'Cambridge, UK',
      completedOrders: 99,
      responseTime: '< 3 hours',
      level: 'Level 2',
      description: 'Complete care home setup services including licensing, regulatory compliance, and operational planning.',
      skills: ['Care Home Setup', 'Licensing Support', 'Regulatory Compliance', 'Operational Planning'],
      service: 'consulting',
      badges: ['Verified', 'Setup Specialist'],
      portfolioItems: 27,
      languages: ['English', 'Italian']
    }
  ];

  // Filter freelancers by service and location
  const filteredFreelancers = freelancers.filter(freelancer => {
    // Match service query against freelancer title, description, skills, or service type
    const serviceMatch = !service || (
      freelancer.title.toLowerCase().includes(service.toLowerCase()) ||
      freelancer.description.toLowerCase().includes(service.toLowerCase()) ||
      freelancer.skills.some(skill => skill.toLowerCase().includes(service.toLowerCase())) ||
      freelancer.service.toLowerCase().includes(service.toLowerCase()) ||
      getServiceDisplayName(freelancer.service).toLowerCase().includes(service.toLowerCase())
    );

    const locationMatch = !location || freelancer.location.toLowerCase().includes(location.toLowerCase());
    return serviceMatch && locationMatch;
  });

  // Sort freelancers
  const sortedFreelancers = [...filteredFreelancers].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.hourlyRate - b.hourlyRate;
      case 'price-high':
        return b.hourlyRate - a.hourlyRate;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
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

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                {service ? `Search Results for "${service}"` : 'All Freelancers'}
                {location && <span className="text-gray-600"> in {location}</span>}
              </h1>
              <p className="text-gray-600 mt-2">
                {sortedFreelancers.length} freelancers available
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedFreelancers.map((freelancer) => (
            <Card key={freelancer.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <Avatar className="h-20 w-20 mb-4">
                    <img src={freelancer.avatar} alt={freelancer.name} />
                  </Avatar>

                  {/* Main Content */}
                  <div className="w-full">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold">{freelancer.name}</h3>
                      <p className="text-gray-600 text-sm">{freelancer.title}</p>
                    </div>

                    {/* Rating and Price */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-semibold text-sm">{freelancer.rating}</span>
                        <span className="text-gray-600 text-xs ml-1">({freelancer.reviewCount})</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">
                          £{freelancer.hourlyRate}
                          <span className="text-xs font-normal text-gray-600">/hr</span>
                        </div>
                      </div>
                    </div>

                    {/* Location and Response Time */}
                    <div className="flex items-center justify-center space-x-4 mb-3 text-xs text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {freelancer.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {freelancer.responseTime}
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap justify-center gap-1 mb-3">
                      <Badge variant="secondary" className="text-xs">{freelancer.level}</Badge>
                      {freelancer.badges.slice(0, 2).map((badge, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{badge}</Badge>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{freelancer.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {freelancer.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="text-xs text-gray-600 mb-4 text-center">
                      <span>{freelancer.completedOrders} orders • {freelancer.portfolioItems} portfolio</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 w-full">
                    <Button size="sm" className="flex-1">
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {sortedFreelancers.length >= 20 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Freelancers
            </Button>
          </div>
        )}

        {/* No Results */}
        {sortedFreelancers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No freelancers found</h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or browse all freelancers.
            </p>
            <Button className="mt-4" onClick={() => navigate(-1)}>
              Back to Dashboard
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
