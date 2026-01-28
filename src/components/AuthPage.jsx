import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, Eye, EyeOff, Github, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const AuthPage = () => {
    const { user, loading, signUp, signIn, signInWithGoogle, signInWithGithub, resetPassword, error } = useAuth();
    const [mode, setMode] = useState('signin'); // 'signin', 'signup', 'forgot', 'verify'
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    // Motivational quotes for the auth page
    const quotes = {
        boys: "🏎️ That BMW M5 won't buy itself. Sign up and start your AI Engineering journey.",
        girls: "👑 Queens don't wait for opportunities - they create them. Start your transformation today."
    };
    const [currentQuote] = useState(() => Math.random() > 0.5 ? quotes.boys : quotes.girls);

    // If already authenticated, redirect to dashboard
    if (user && !loading) {
        return <Navigate to="/" replace />;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setMessage(null);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setMessage(null);

        if (formData.password !== formData.confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match' });
            return;
        }

        if (formData.password.length < 6) {
            setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
            return;
        }

        if (!formData.gender) {
            setMessage({ type: 'error', text: 'Please select your gender' });
            return;
        }

        setIsSubmitting(true);
        const { error, message: resultMessage } = await signUp(
            formData.email,
            formData.password,
            formData.fullName,
            formData.gender
        );
        setIsSubmitting(false);

        if (error) {
            setMessage({ type: 'error', text: error.message || 'Sign up failed' });
        } else if (resultMessage === 'signup_pending_verification') {
            setMode('verify');
            setMessage({ type: 'success', text: 'Check your email for verification link!' });
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setMessage(null);
        setIsSubmitting(true);

        const { error } = await signIn(formData.email, formData.password);
        setIsSubmitting(false);

        if (error) {
            setMessage({ type: 'error', text: error.message || 'Sign in failed' });
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setMessage(null);

        if (!formData.email) {
            setMessage({ type: 'error', text: 'Please enter your email address' });
            return;
        }

        setIsSubmitting(true);
        const { error } = await resetPassword(formData.email);
        setIsSubmitting(false);

        if (error) {
            setMessage({ type: 'error', text: error.message || 'Failed to send reset email' });
        } else {
            setMessage({ type: 'success', text: 'Password reset link sent to your email!' });
        }
    };

    const handleSocialLogin = async (provider) => {
        setMessage(null);
        if (provider === 'google') {
            await signInWithGoogle();
        } else if (provider === 'github') {
            await signInWithGithub();
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
                <Loader2 className="animate-spin text-white" size={48} />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
            <div className="w-full max-w-md">
                {/* Motivational Quote */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-white mb-2">Gen AI Mastery Hub</h1>
                    <p className="text-white/90 text-lg italic">{currentQuote}</p>
                </div>

                {/* Auth Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    {/* Tabs */}
                    {mode !== 'verify' && mode !== 'forgot' && (
                        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => { setMode('signin'); setMessage(null); }}
                                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${mode === 'signin'
                                    ? 'bg-blue-600 text-white shadow'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => { setMode('signup'); setMessage(null); }}
                                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${mode === 'signup'
                                    ? 'bg-blue-600 text-white shadow'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Sign Up
                            </button>
                        </div>
                    )}

                    {/* Alert Message */}
                    {(message || error) && (
                        <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${(message?.type === 'error' || error)
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : 'bg-green-50 text-green-700 border border-green-200'
                            }`}>
                            {(message?.type === 'error' || error)
                                ? <AlertCircle size={18} />
                                : <CheckCircle size={18} />}
                            <span className="text-sm">{message?.text || error}</span>
                        </div>
                    )}

                    {/* Verification Pending Screen */}
                    {mode === 'verify' && (
                        <div className="text-center py-6">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="text-green-600" size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Check Your Email</h2>
                            <p className="text-gray-600 mb-6">
                                We've sent a verification link to <strong>{formData.email}</strong>.
                                Click the link to activate your account.
                            </p>
                            <button
                                onClick={() => { setMode('signin'); setMessage(null); }}
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                ← Back to Sign In
                            </button>
                        </div>
                    )}

                    {/* Forgot Password Screen */}
                    {mode === 'forgot' && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h2>
                            <p className="text-gray-600 mb-6">Enter your email and we'll send you a reset link.</p>

                            <form onSubmit={handleForgotPassword}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting && <Loader2 className="animate-spin" size={18} />}
                                    Send Reset Link
                                </button>
                            </form>

                            <button
                                onClick={() => { setMode('signin'); setMessage(null); }}
                                className="w-full mt-4 text-blue-600 font-semibold hover:underline"
                            >
                                ← Back to Sign In
                            </button>
                        </div>
                    )}

                    {/* Sign In Form */}
                    {mode === 'signin' && (
                        <form onSubmit={handleSignIn}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-end mb-6">
                                <button
                                    type="button"
                                    onClick={() => setMode('forgot')}
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isSubmitting && <Loader2 className="animate-spin" size={18} />}
                                Sign In
                            </button>
                        </form>
                    )}

                    {/* Sign Up Form */}
                    {mode === 'signup' && (
                        <form onSubmit={handleSignUp}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Ravindra Kumar"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="••••••••"
                                        required
                                        minLength={6}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Gender Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, gender: 'male' }))}
                                        className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${formData.gender === 'male'
                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                            }`}
                                    >
                                        <span className="font-semibold">Male</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, gender: 'female' }))}
                                        className={`p-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${formData.gender === 'female'
                                            ? 'border-pink-500 bg-pink-50 text-pink-700'
                                            : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                            }`}
                                    >
                                        <span className="font-semibold">Female</span>
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isSubmitting && <Loader2 className="animate-spin" size={18} />}
                                Create Account
                            </button>
                        </form>
                    )}

                    {/* Social Login Divider */}
                    {(mode === 'signin' || mode === 'signup') && (
                        <>
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => handleSocialLogin('google')}
                                    className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    Google
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleSocialLogin('github')}
                                    className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
                                >
                                    <Github size={20} />
                                    GitHub
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="text-center mt-6 text-white/80 text-sm">
                    <p>Master AI Engineering in 6 months. Your journey starts here.</p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
