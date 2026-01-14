import React, { useState } from 'react';
import { Mail, Rocket, AlertCircle, RefreshCw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const VerificationPending = ({ email, onBackClick }) => {
  const [resending, setResending] = useState(false);
  const [resendMessage, setResendMessage] = useState(null);
  const [resendError, setResendError] = useState(null);
  const { resendVerificationEmail } = useAuth();

  const handleResendEmail = async () => {
    setResending(true);
    setResendMessage(null);
    setResendError(null);

    try {
      const { error } = await resendVerificationEmail(email);
      
      if (error) {
        setResendError('Failed to resend email. Please try again.');
      } else {
        setResendMessage('✅ Verification email sent! Check your inbox.');
      }
    } catch (err) {
      setResendError('An error occurred. Please try again.');
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500">
                <Mail className="text-blue-400" size={32} />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Check Your Email!</h2>
            <p className="text-gray-300 text-sm">
              We've sent a verification link to:
            </p>
            <p className="text-blue-300 font-semibold mt-2 break-all">{email}</p>
          </div>

          {/* Instructions */}
          <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-4 mb-6">
            <h3 className="text-blue-100 font-bold mb-3 flex items-center gap-2">
              <Rocket size={18} />
              What to do next:
            </h3>
            <ol className="text-blue-100 text-sm space-y-2">
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">1.</span>
                <span>Open your email inbox</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">2.</span>
                <span>Look for an email from noreply@supabase.io</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">3.</span>
                <span>Click the "Verify Email" button</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">4.</span>
                <span>You'll be automatically logged in ✅</span>
              </li>
            </ol>
          </div>

          {/* Messages */}
          {resendMessage && (
            <div className="mb-6 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-100 text-sm">
              {resendMessage}
            </div>
          )}

          {resendError && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500 rounded-lg flex items-start gap-2">
              <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-100 text-sm">{resendError}</p>
            </div>
          )}

          {/* Info Box */}
          <div className="bg-gray-500/20 border border-gray-500 rounded-lg p-4 mb-6">
            <p className="text-gray-300 text-xs">
              <strong>Verification link expires in:</strong> 24 hours
              <br/>
              <strong>Can't find the email?</strong> Check your spam/junk folder
            </p>
          </div>

          {/* Resend Button */}
          <button
            onClick={handleResendEmail}
            disabled={resending}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 mb-4"
          >
            {resending ? (
              <>
                <RefreshCw size={20} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Mail size={20} />
                Resend Verification Email
              </>
            )}
          </button>

          {/* Back Button */}
          <button
            onClick={onBackClick}
            className="w-full bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 font-semibold py-3 rounded-lg transition"
          >
            Back to Login
          </button>

          {/* Footer */}
          <p className="text-center text-gray-400 text-xs mt-6">
            This is a security feature to protect your account
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default VerificationPending;
