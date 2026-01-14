import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

const VerificationCallbackPage = () => {
  const [verificationStatus, setVerificationStatus] = useState('processing');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const handleEmailVerification = async () => {
      try {
        // Get the hash fragment from the URL
        const hash = window.location.hash;
        
        if (!hash) {
          setVerificationStatus('error');
          setErrorMessage('No verification token found. Please try signing up again.');
          return;
        }

        // Supabase will automatically handle the session token from the URL
        // Just need to check the current user
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error) {
          console.error('Verification error:', error);
          setVerificationStatus('error');
          setErrorMessage(error.message || 'Failed to verify email. Please try again.');
          return;
        }

        if (user && user.email_confirmed_at) {
          setVerificationStatus('success');
          setSuccessMessage('Email verified successfully! Redirecting to login...');
          
          // Redirect to login after 2 seconds
          setTimeout(() => {
            window.location.href = '/auth/login';
          }, 2000);
        } else if (user) {
          setVerificationStatus('error');
          setErrorMessage('Email verification failed. Please try again.');
        } else {
          setVerificationStatus('error');
          setErrorMessage('User session not found. Please sign up again.');
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        setVerificationStatus('error');
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    };

    handleEmailVerification();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <div className="text-center">
          {verificationStatus === 'processing' && (
            <>
              <Loader className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Verifying Email</h1>
              <p className="text-gray-600">Please wait while we verify your email address...</p>
            </>
          )}

          {verificationStatus === 'success' && (
            <>
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Email Verified!</h1>
              <p className="text-green-600 mb-4">{successMessage}</p>
              <p className="text-sm text-gray-500">Redirecting to login...</p>
            </>
          )}

          {verificationStatus === 'error' && (
            <>
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Verification Failed</h1>
              <p className="text-red-600 mb-4">{errorMessage}</p>
              <a 
                href="/auth/login"
                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Back to Login
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerificationCallbackPage;
