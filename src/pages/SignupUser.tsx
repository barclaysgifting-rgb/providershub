import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { useAuth } from '../lib/auth.tsx';

interface RegistrationData {
  service: string;
  urgency: string;
  budget: string;
  notes: string;
  email: string;
  password: string;
  confirmPassword: string;
  businessType: string;
  businessSize: string;
  location: string;
  phone: string;
}

interface SignupUserProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialService?: string;
  initialLocation?: string;
}

export default function SignupUser({ open, onOpenChange, initialService, initialLocation }: SignupUserProps) {
  const navigate = useNavigate();
  const auth = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationData>({
    service: initialService || '',
    urgency: '',
    budget: '',
    notes: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessType: '',
    businessSize: '',
    location: initialLocation || '',
    phone: '',
  });

  // Reset form when modal opens with new initial data
  useEffect(() => {
    if (open) {
      setCurrentStep(1);
      setFormData({
        service: initialService || '',
        urgency: '',
        budget: '',
        notes: '',
        email: '',
        password: '',
        confirmPassword: '',
        businessType: '',
        businessSize: '',
        location: initialLocation || '',
        phone: '',
      });
    }
  }, [open, initialService, initialLocation]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      // TODO: Implement user registration API call
      console.log('User registration:', formData);

      // After successful registration, automatically log in the user
      await auth.login(formData.email, formData.password);

      // Close modal and navigate to dashboard
      onOpenChange(false);
      navigate('/home/user123'); // User ID would come from registration response in real app
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-center mb-2">What service do you need?</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Select the primary service you're looking for
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { value: "cqc", label: "CQC Registration", desc: "Get compliant with Care Quality Commission" },
                { value: "consulting", label: "Business Consulting", desc: "Strategic business advice and planning" },
                { value: "software", label: "Care Software", desc: "Digital solutions for care management" },
                { value: "training", label: "Training Services", desc: "Staff development and compliance training" },
                { value: "visa", label: "Sponsor Visa", desc: "Work visa sponsorship services" },
                { value: "accounting", label: "Accounting", desc: "Financial services and bookkeeping" },
              ].map((service) => (
                <div
                  key={service.value}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.service === service.value
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => handleChange('service', service.value)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      formData.service === service.value
                        ? 'border-primary bg-primary'
                        : 'border-gray-300'
                    }`}>
                      {formData.service === service.value && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{service.label}</div>
                      <div className="text-sm text-muted-foreground">{service.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-center mb-2">When do you need this service?</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                How soon are you looking to get started?
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { value: "asap", label: "ASAP", desc: "Within the next week - urgent need", icon: "🚨" },
                { value: "soon", label: "Soon", desc: "Within the next month", icon: "📅" },
                { value: "flexible", label: "Flexible", desc: "No specific timeline", icon: "🕐" },
              ].map((option) => (
                <div
                  key={option.value}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.urgency === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => handleChange('urgency', option.value)}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm text-muted-foreground">{option.desc}</div>
                    </div>
                    {formData.urgency === option.value && (
                      <div className="ml-auto w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-center mb-2">What's your budget range?</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Help us find services that match your budget
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { value: "under-1000", label: "Under £1,000", desc: "Basic services and consultations" },
                { value: "1000-5000", label: "£1,000 - £5,000", desc: "Standard service packages" },
                { value: "5000-15000", label: "£5,000 - £15,000", desc: "Comprehensive solutions" },
                { value: "over-15000", label: "Over £15,000", desc: "Enterprise-level services" },
                { value: "discuss", label: "Let's discuss", desc: "Prefer to discuss pricing options" },
              ].map((budget) => (
                <div
                  key={budget.value}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.budget === budget.value
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => handleChange('budget', budget.value)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{budget.label}</div>
                      <div className="text-sm text-muted-foreground">{budget.desc}</div>
                    </div>
                    {formData.budget === budget.value && (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-center mb-2">Create your account</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Set up your login credentials to get started
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="mt-1"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  className="mt-1"
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  className="mt-1"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Your Service Request:</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Service:</span> {formData.service || 'Not selected'}</p>
                <p><span className="font-medium">Timeline:</span> {formData.urgency || 'Not selected'}</p>
                <p><span className="font-medium">Budget:</span> {formData.budget || 'Not selected'}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            Join Providers Hub
            <div className="text-sm font-normal text-muted-foreground mt-2">
              Step {currentStep} of 4
            </div>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={(e) => { e.preventDefault(); currentStep === 4 ? handleSubmit() : nextStep(); }} className="space-y-6">
          {renderStepContent()}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            <div className="ml-auto">
              <Button type="submit">
                {currentStep === 4 ? 'Create Account' : 'Next'}
              </Button>
            </div>
          </div>
        </form>

        {currentStep === 1 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <a href="/login" className="text-primary hover:underline">
                Sign in here
              </a>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
