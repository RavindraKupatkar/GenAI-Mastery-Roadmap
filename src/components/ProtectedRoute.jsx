import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Loader2 } from 'lucide-react';

const ProtectedRoute = ({ children }) => {
    const { user, loading, isAuthenticated } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <Loader2 className="animate-spin text-blue-600 mx-auto mb-4" size={48} />
                    <p className="text-gray-600">Loading your progress...</p>
                </div>
            </div>
        );
    }

    // If not authenticated, redirect to auth page
    if (!user) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    // If authenticated but email not verified, show message
    if (user && !isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <div className="max-w-md text-center bg-white rounded-2xl shadow-lg p-8">
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">📧</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Email</h2>
                    <p className="text-gray-600 mb-4">
                        Please check your inbox and click the verification link to access the dashboard.
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                        Email sent to: <strong>{user.email}</strong>
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        I've Verified, Refresh
                    </button>
                </div>
            </div>
        );
    }

    return children;
};

export default ProtectedRoute;
