import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle } from 'lucide-react';

export default function VerificationSuccess() {
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleVerification = async () => {
      try {
        // Handle email confirmation with token_hash (verifyOtp)
        const search = new URLSearchParams(window.location.search);
        const token_hash = search.get('token_hash');
        const type = (search.get('type') as any) || undefined;
        const email = search.get('email') || undefined;

        if (token_hash && type) {
          const { data, error } = await supabase.auth.verifyOtp({
            token_hash,
            type,
            email,
          } as any);

          if (error) {
            console.error('Error verifying OTP:', error);
            setVerificationStatus('error');
            setError(error.message);
          } else {
            console.log('OTP verified successfully:', data);
            setVerificationStatus('success');

            // Signal to parent window that verification is complete
            if (window.opener && !window.opener.closed) {
              console.log('Sending verification success to parent window:', {
                type: 'EMAIL_VERIFIED',
                user: data.user,
                session: data.session
              });
              window.opener.postMessage({
                type: 'EMAIL_VERIFIED',
                user: data.user,
                session: data.session
              }, window.location.origin);
            } else {
              console.log('No parent window found or window is closed');
            }
          }
        } else {
          setVerificationStatus('error');
          setError('Invalid verification link');
        }
      } catch (e) {
        console.error('Verification error:', e);
        setVerificationStatus('error');
        setError('An error occurred during verification');
      } finally {
        setIsVerifying(false);
      }
    };

    handleVerification();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {verificationStatus === 'verifying' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Verifying your account...
            </h2>
            <p className="text-gray-600">
              Please wait while we confirm your email address.
            </p>
          </>
        )}

        {verificationStatus === 'success' && (
          <>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Email Verified Successfully!
            </h2>
            <p className="text-gray-600 mb-4">
              Your account has been verified. Please return to the signup page to continue.
            </p>
            <p className="text-sm text-gray-500">
              You can close this window now.
            </p>
            <button
              onClick={() => window.close()}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Close Window
            </button>
          </>
        )}

        {verificationStatus === 'error' && (
          <>
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Verification Failed
            </h2>
            <p className="text-gray-600 mb-4">
              {error || 'There was an error verifying your email. Please try again.'}
            </p>
            <button
              onClick={() => window.close()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Close Window
            </button>
          </>
        )}
      </div>
    </div>
  );
}
