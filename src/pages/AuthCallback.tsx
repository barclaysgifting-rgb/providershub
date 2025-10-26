import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth.tsx';
import { supabase } from '../lib/supabase';

export default function AuthCallback() {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading } = useAuth();
  const [hasRedirected, setHasRedirected] = useState(false);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    // Explicitly handle Supabase callback scenarios
    const processCallback = async () => {
      try {
        // 1) Handle hash fragment tokens (e.g., access_token, refresh_token)
        if (window.location.hash) {
          const hash = new URLSearchParams(window.location.hash.substring(1));
          const access_token = hash.get('access_token');
          const refresh_token = hash.get('refresh_token');
          if (access_token && refresh_token) {
            const { error } = await supabase.auth.setSession({ access_token, refresh_token });
            if (error) {
              console.error('Error setting session from hash:', error);
            }
          }
        }

        // 2) Handle email confirmation with token_hash (verifyOtp)
        const search = new URLSearchParams(window.location.search);
        const token_hash = search.get('token_hash');
        const type = (search.get('type') as any) || undefined; // 'signup' | 'invite' | 'email_change'
        const email = search.get('email') || undefined;
        if (token_hash && type) {
          const { data, error } = await supabase.auth.verifyOtp({
            token_hash,
            type,
            email,
          } as any);
          if (error) {
            console.error('Error verifying OTP:', error);
          } else {
            console.log('OTP verified:', data);
          }
        }
      } catch (e) {
        console.error('Auth callback processing error:', e);
      } finally {
        setProcessing(false);
      }
    };

    processCallback();
  }, []);

  useEffect(() => {
    // Only redirect once
    if (hasRedirected) return;

    // If user is authenticated and we have user data, redirect to their dashboard
    if (!processing && isAuthenticated && user && !loading) {
      setHasRedirected(true);
      console.log('AuthCallback: User authenticated, redirecting based on role:', {
        userId: user.id,
        role: user.role,
        email: user.email,
        hasUser: !!user
      });
      // Redirect based on user role
      if (user.role === 'provider') {
        console.log('Redirecting provider to seller dashboard:', `/home/sellers/${user.id}`);
        navigate(`/home/sellers/${user.id}`, { replace: true });
      } else {
        console.log('Redirecting client to user dashboard:', `/home/${user.id}`);
        navigate(`/home/${user.id}`, { replace: true });
      }
    }
    // If not authenticated yet, wait for auth state to change
    // The AuthProvider's onAuthStateChange will handle the login
  }, [processing, isAuthenticated, user, loading, navigate, hasRedirected]);

  // Add a timeout to prevent infinite loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasRedirected) {
        console.log('Auth callback timeout, redirecting to home');
        navigate('/', { replace: true });
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [navigate, hasRedirected]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Confirming your account...
        </h2>
        <p className="text-gray-600 mb-4">
          Please wait while we set up your account.
        </p>
        {(loading || processing) && (
          <p className="text-sm text-gray-500">
            Loading your profile...
          </p>
        )}
      </div>
    </div>
  );
}
