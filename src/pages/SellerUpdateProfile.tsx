import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SellerDashboardHeader } from '../components/SellerDashboardHeader';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Label } from '../components/ui/label';
import { Progress } from '../components/ui/progress';
import { Avatar } from '../components/ui/avatar';
import {
  ArrowLeft,
  User,
  Camera,
  MapPin,
  Phone,
  Mail,
  Star,
  Award,
  CheckCircle,
  AlertCircle,
  Save,
  Upload
} from 'lucide-react';

export default function SellerUpdateProfile() {
  const navigate = useNavigate();

  // Mock current profile data
  const [profile, setProfile] = useState({
    name: 'John Anderson',
    title: 'Healthcare Compliance Specialist',
    bio: 'Experienced healthcare compliance consultant with 8+ years in regulatory affairs. Specializing in CQC registration, compliance audits, and regulatory documentation for care homes and healthcare facilities.',
    location: 'London, UK',
    phone: '+44 20 1234 5678',
    email: 'john.anderson@email.com',
    website: 'https://johnandersonconsulting.com',
    languages: ['English', 'Spanish'],
    experience: '8-10',
    hourlyRate: '85',
    profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    skills: [
      'CQC Registration',
      'Healthcare Compliance',
      'Regulatory Consulting',
      'Compliance Audits',
      'Quality Management'
    ],
    certifications: [
      'CQC Registered Consultant',
      'Healthcare Compliance Professional',
      'Data Protection Officer Certified'
    ],
    portfolioItems: 24,
    completedOrders: 156,
    rating: 4.9,
    reviews: 89
  });

  const [newSkill, setNewSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const experienceLevels = [
    { value: '1-2', label: '1-2 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '5-8', label: '5-8 years' },
    { value: '8-10', label: '8-10 years' },
    { value: '10+', label: '10+ years' }
  ];

  const handleProfileUpdate = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addLanguage = () => {
    if (newLanguage.trim() && !profile.languages.includes(newLanguage.trim())) {
      setProfile(prev => ({
        ...prev,
        languages: [...prev.languages, newLanguage.trim()]
      }));
      setNewLanguage('');
    }
  };

  const removeLanguage = (languageToRemove: string) => {
    setProfile(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang !== languageToRemove)
    }));
  };

  const handleSaveProfile = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    // Navigate back to dashboard or show success message
    navigate('/home/sellers/123');
  };

  const profileCompletion = 85; // Mock completion percentage

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

          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-2">Update Profile</h1>
            <p className="text-gray-600">
              Keep your profile up-to-date to attract more clients and improve your visibility.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Image */}
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <img src={profile.profileImage} alt={profile.name} />
                    </Avatar>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 rounded-full p-2"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{profile.name}</h3>
                    <p className="text-gray-600">{profile.title}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center text-sm text-gray-500 mr-4">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {profile.rating} ({profile.reviews} reviews)
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Level 2 Seller
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => handleProfileUpdate('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                      id="title"
                      value={profile.title}
                      onChange={(e) => handleProfileUpdate('title', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => handleProfileUpdate('bio', e.target.value)}
                    rows={4}
                    placeholder="Describe your experience, expertise, and what makes you unique..."
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {profile.bio.length}/500 characters
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="location"
                        value={profile.location}
                        onChange={(e) => handleProfileUpdate('location', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleProfileUpdate('email', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input
                    id="website"
                    type="url"
                    value={profile.website}
                    onChange={(e) => handleProfileUpdate('website', e.target.value)}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Professional Details */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select value={profile.experience} onValueChange={(value) => handleProfileUpdate('experience', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hourlyRate">Hourly Rate (£)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      value={profile.hourlyRate}
                      onChange={(e) => handleProfileUpdate('hourlyRate', e.target.value)}
                    />
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <Label>Skills</Label>
                  <div className="flex gap-2 mb-3">
                    <Input
                      placeholder="Add a skill (e.g., CQC Registration)"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    />
                    <Button type="button" onClick={addSkill} variant="outline">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <Label>Languages</Label>
                  <div className="flex gap-2 mb-3">
                    <Input
                      placeholder="Add a language (e.g., Spanish)"
                      value={newLanguage}
                      onChange={(e) => setNewLanguage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                    />
                    <Button type="button" onClick={addLanguage} variant="outline">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.languages.map((language) => (
                      <Badge key={language} variant="outline" className="flex items-center gap-1">
                        {language}
                        <button
                          type="button"
                          onClick={() => removeLanguage(language)}
                          className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {profileCompletion}%
                  </div>
                  <Progress value={profileCompletion} className="mb-4" />
                  <p className="text-sm text-gray-600 mb-4">
                    Complete your profile to attract more clients
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Profile photo</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Professional bio</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Skills & expertise</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Portfolio</span>
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex justify-between">
                      <span>Certifications</span>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Reviews</span>
                  <span className="font-semibold">{profile.reviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-semibold">{profile.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed Orders</span>
                  <span className="font-semibold">{profile.completedOrders}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Portfolio Items</span>
                  <span className="font-semibold">{profile.portfolioItems}</span>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profile.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <Upload className="h-4 w-4 mr-2" />
                    Add Certification
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <Card>
              <CardContent className="pt-6">
                <Button
                  onClick={handleSaveProfile}
                  disabled={isSaving}
                  className="w-full"
                  size="lg"
                >
                  <Save className="mr-2 h-5 w-5" />
                  {isSaving ? 'Saving...' : 'Save Profile'}
                </Button>
                <p className="text-sm text-gray-500 text-center mt-2">
                  Changes will be reviewed before going live
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
