import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth.tsx';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Alert, AlertDescription } from '../components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'provider' | 'client'>('client');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log('Attempting login...');
      await auth.login(email, password, role);
      console.log('Login API call completed');

      // Don't check auth state immediately - let the auth state change listener handle it
      // The useEffect below will detect when user becomes authenticated

    } catch (error) {
      console.error('Login failed:', error);
      setError(error instanceof Error ? error.message : 'Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  // Handle redirect after authentication - only when auth state naturally updates
  useEffect(() => {
    if (auth.isAuthenticated && auth.user && !auth.loading) {
      console.log('User authenticated, redirecting...', auth.user);
      // Redirect based on user role and actual user ID
      const redirectPath = auth.user.role === 'provider'
        ? `/home/sellers/${auth.user.id}`
        : `/home/${auth.user.id}`;
      console.log('Redirect path:', redirectPath);
      navigate(redirectPath, { replace: true });
    }
  }, [auth.isAuthenticated, auth.user, auth.loading, navigate]);

  // Add a fallback timeout in case auth state never updates
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        if (isLoading) {
          console.log('Login timeout - auth state never updated');
          setError('Login is taking longer than expected. Please try again.');
          setIsLoading(false);
        }
      }, 5000); // 5 second timeout

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Sign in to Providers Hub</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={role} onValueChange={(value) => setRole(value as 'provider' | 'client')} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="client">I'm a Buyer</TabsTrigger>
              <TabsTrigger value="provider">I'm a Seller</TabsTrigger>
            </TabsList>
          </Tabs>

          {error && (
            <Alert className="mb-6" variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                disabled={isLoading}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Signing in...
                </>
              ) : (
                `Sign in as ${role === 'provider' ? 'Seller' : 'Buyer'}`
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}