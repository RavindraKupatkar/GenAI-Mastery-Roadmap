import React, { useEffect, useState } from 'react';
import { Check, AlertCircle, ArrowRight } from 'lucide-react';
import { supabase } from '../services/supabase';

const VerificationCallback = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    verifyEmail();
  }, []);

  const verifyEmail = async () => {
    try {
      // Get the token from the URL hash
      const hash = window.location.hash;
      
      if (!hash) {
        throw new Error('No verification token found in URL');
      }

      // Let Supabase handle the verification automatically
      // Just wait a moment for the session to be established
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if user is now authenticated with verified email
      const { data: { user }, error: getUserError } = await supabase.auth.getUser();

      if (getUserError) {
        throw new Error('Failed to verify email. Please try again.');
      }

      if (!user) {
        throw new Error('User not found. Verification may have failed.');
      }

      if (!user.email_confirmed_at) {
        throw new Error('Email verification failed. The link may have expired.');
      }

      // ✅ Email verified successfully!
      setSuccess(true);
      setLoading(false);

      // Redirect to dashboard after 3 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);

    } catch (err) {
      console.error('Verification error:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-semibold">Verifying your email...</p>
          <p className="text-gray-400 text-sm mt-2">Please wait, this should only take a moment</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md border border-white/20">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500">
              <AlertCircle className="text-red-400" size={32} />
            </div>
          </div>
          <h2 className="text-white text-2xl font-bold text-center mb-4">Verification Failed</h2>
          <p className="text-red-100 text-center mb-6">{error}</p>
          
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
            <p className="text-red-100 text-xs">
              <strong>What might have happened:</strong>
              <br/>
              • The verification link may have expired (24 hours)
              <br/>
              • The link was already used
              <br/>
              • There might be a network issue
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              Go Back Home
              <ArrowRight size={18} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              You can request a new verification email from the login page
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md border border-white/20">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500 animate-pulse">
              <Check className="text-green-400" size={32} />
            </div>
          </div>
          <h2 className="text-white text-2xl font-bold text-center mb-4">Email Verified! ✅</h2>
          <p className="text-green-100 text-center mb-6">
            Your email has been successfully verified. You are now fully registered!
          </p>

          <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6">
            <p className="text-green-100 text-sm">
              <strong>What happens next:</strong>
              <br/>
              You'll be automatically redirected to your dashboard in 3 seconds...
            </p>
          </div>

          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            Go to Dashboard Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default VerificationCallback;
