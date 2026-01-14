import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Rocket, AlertCircle, Loader } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import VerificationPending from './VerificationPending';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [verificationPending, setVerificationPending] = useState(false);
  const [pendingEmail, setPendingEmail] = useState('');
  
  const { signUp, signIn, error } = useAuth();

  const validateForm = () => {
    if (!email || !password) {
      setErrorMsg('Please fill in all fields');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address');
      return false;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long');
      return false;
    }

    if (isSignUp && password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setMessage(null);

    if (!validateForm()) return;

    setLoading(true);

    try {
      if (isSignUp) {
        const { data, error: signUpError, message: signupMsg } = await signUp(email, password);
        
        if (signUpError) {
          setErrorMsg(signUpError.message || 'Failed to sign up. Please try again.');
        } else {
          // ✅ Show verification pending screen
          setVerificationPending(true);
          setPendingEmail(email);
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        }
      } else {
        const { data, error: signInError } = await signIn(email, password);
        
        if (signInError) {
          // ✅ Check if error is about unverified email
          if (signInError.message.includes('verify')) {
            setErrorMsg(signInError.message);
          } else {
            setErrorMsg(signInError.message || 'Failed to sign in. Please check your credentials.');
          }
        } else {
          setMessage('✅ Sign in successful! Welcome back!');
        }
      }
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Show verification pending screen after signup
  if (verificationPending) {
    return (
      <VerificationPending 
        email={pendingEmail}
        onBackClick={() => {
          setVerificationPending(false);
          setPendingEmail('');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="text-blue-400 animate-bounce" size={32} />
            <h1 className="text-3xl font-bold text-white">BMW M5 🏁</h1>
          </div>
          <h2 className="text-xl text-gray-300 font-semibold">
            {isSignUp ? 'Join the Journey' : 'Welcome Back'}
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            {isSignUp 
              ? 'Create your account to start mastering AI' 
              : 'Sign in to continue your learning journey'}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Messages */}
          {message && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-100 text-sm">
              {message}
            </div>
          )}

          {errorMsg && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-start gap-3">
              <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-100 text-sm">{errorMsg}</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-start gap-3">
              <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-100 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {isSignUp && (
                <p className="text-xs text-gray-400 mt-1">
                  At least 6 characters
                </p>
              )}
            </div>

            {/* Confirm Password Input (Sign Up Only) */}
            {isSignUp && (
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition"
                    disabled={loading}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 mt-6"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  {isSignUp ? 'Creating account...' : 'Signing in...'}
                </>
              ) : (
                <>
                  <Rocket size={20} />
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </>
              )}
            </button>
          </form>

          {/* Toggle Sign Up / Sign In */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrorMsg(null);
                  setMessage(null);
                  setEmail('');
                  setPassword('');
                  setConfirmPassword('');
                }}
                className="text-blue-400 hover:text-blue-300 font-semibold transition"
                disabled={loading}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          {/* Features Info */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-xs text-center mb-3">
              {isSignUp ? '✨ What you get:' : '🎯 Ready to master AI?'}
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                20-week curriculum
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                Gamified learning
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                Progress tracking
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                Cloud sync
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-6">
          By signing up, you agree to our Terms & Privacy Policy
        </p>
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
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
