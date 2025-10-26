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
import { ArrowLeft, Plus, X, DollarSign, Clock, Users, AlertCircle, Tag } from 'lucide-react';

export default function CreateService() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    header: '',
    description: '',
    category: '',
    hourlyRate: '',
    experience: '',
    keywords: [] as string[],
    portfolioItems: 0,
    languages: [] as string[],
    availability: 'full-time',
    responseTime: '24'
  });

  const [keywordInput, setKeywordInput] = useState('');
  const [languageInput, setLanguageInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    'CQC Registration',
    'Business Consulting',
    'Care Software',
    'Training Services',
    'Accounting',
    'Immigration Services',
    'Healthcare Compliance',
    'Nursing Home Setup',
    'Regulatory Documentation',
    'Safety Training',
    'Financial Planning'
  ];

  const experienceLevels = [
    { value: '1-2', label: '1-2 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '5-10', label: '5-10 years' },
    { value: '10+', label: '10+ years' }
  ];

  const availabilityOptions = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'project-based', label: 'Project-based' }
  ];

  const responseTimeOptions = [
    { value: '1', label: '1 hour' },
    { value: '6', label: '6 hours' },
    { value: '12', label: '12 hours' },
    { value: '24', label: '24 hours' },
    { value: '48', label: '48 hours' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addKeyword = () => {
    if (keywordInput.trim() &&
        !formData.keywords.includes(keywordInput.trim()) &&
        formData.keywords.length < 5) {
      setFormData(prev => ({
        ...prev,
        keywords: [...prev.keywords, keywordInput.trim()]
      }));
      setKeywordInput('');
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      keywords: prev.keywords.filter(keyword => keyword !== keywordToRemove)
    }));
  };

  const addLanguage = () => {
    if (languageInput.trim() && !formData.languages.includes(languageInput.trim())) {
      setFormData(prev => ({
        ...prev,
        languages: [...prev.languages, languageInput.trim()]
      }));
      setLanguageInput('');
    }
  };

  const removeLanguage = (languageToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter(language => language !== languageToRemove)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.header.trim()) newErrors.header = 'Service header is required';
    if (formData.header.length > 180) newErrors.header = 'Header must be 180 characters or less';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (formData.description.length > 2500) newErrors.description = 'Description must be 2500 characters or less';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.hourlyRate) newErrors.hourlyRate = 'Hourly rate is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (formData.keywords.length === 0) newErrors.keywords = 'At least one keyword is required';
    if (formData.keywords.length > 5) newErrors.keywords = 'Maximum 5 keywords allowed';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // TODO: Submit service to API
      console.log('Service created:', formData);
      // Navigate back to seller dashboard
      navigate('/home/sellers/123'); // TODO: Use actual seller ID
    }
  };

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
            <h1 className="text-3xl font-bold mb-2">Create New Service</h1>
            <p className="text-gray-600">
              Set up your professional service and help clients find your expertise.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Service Header */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Header *</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Textarea
                      placeholder="Brief, compelling description of your service (max 180 characters)"
                      value={formData.header}
                      onChange={(e) => handleInputChange('header', e.target.value)}
                      rows={2}
                      maxLength={180}
                      className={errors.header ? 'border-red-500' : ''}
                    />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-500">
                        {formData.header.length}/180 characters
                      </span>
                      {errors.header && (
                        <p className="text-red-500 text-sm flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.header}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Description *</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Textarea
                      placeholder="Detailed description of your service, experience, and what clients can expect..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={8}
                      maxLength={2500}
                      className={errors.description ? 'border-red-500' : ''}
                    />
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gray-500">
                        {formData.description.length}/2500 characters
                      </span>
                      {errors.description && (
                        <p className="text-red-500 text-sm flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Keywords */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    Keywords (1-5) *
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Add up to 5 keywords that best describe your service
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g., CQC Registration, Healthcare Compliance"
                        value={keywordInput}
                        onChange={(e) => setKeywordInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                        disabled={formData.keywords.length >= 5}
                      />
                      <Button
                        type="button"
                        onClick={addKeyword}
                        variant="outline"
                        disabled={formData.keywords.length >= 5}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {formData.keywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary" className="flex items-center gap-1">
                          {keyword}
                          <button
                            type="button"
                            onClick={() => removeKeyword(keyword)}
                            className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>

                    <p className="text-sm text-gray-500">
                      {formData.keywords.length}/5 keywords added
                    </p>

                    {errors.keywords && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.keywords}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g., English, Spanish"
                        value={languageInput}
                        onChange={(e) => setLanguageInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())}
                      />
                      <Button type="button" onClick={addLanguage} variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {formData.languages.map((language) => (
                        <Badge key={language} variant="outline" className="flex items-center gap-1">
                          {language}
                          <button
                            type="button"
                            onClick={() => removeLanguage(language)}
                            className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                          >
                            <X className="h-3 w-3" />
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
              {/* Service Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.category && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.category}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="hourlyRate">Hourly Rate (£) *</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="hourlyRate"
                        type="number"
                        placeholder="75"
                        value={formData.hourlyRate}
                        onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                        className={`pl-10 ${errors.hourlyRate ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.hourlyRate && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.hourlyRate}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="experience">Experience Level *</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger className={errors.experience ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.experience && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.experience}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {availabilityOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="responseTime">Response Time</Label>
                    <Select value={formData.responseTime} onValueChange={(value) => handleInputChange('responseTime', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {responseTimeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="portfolioItems">Portfolio Items</Label>
                    <Input
                      id="portfolioItems"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={formData.portfolioItems}
                      onChange={(e) => handleInputChange('portfolioItems', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit */}
              <Card>
                <CardContent className="pt-6">
                  <Button type="submit" className="w-full" size="lg">
                    <Plus className="mr-2 h-5 w-5" />
                    Create Service
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Your service will be reviewed before being published
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
