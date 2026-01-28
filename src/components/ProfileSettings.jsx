import React, { useState, useEffect } from 'react';
import { User, Save, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../services/supabase';

const ProfileSettings = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        fullName: '',
        gender: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    // Load existing user data on mount
    useEffect(() => {
        if (user?.user_metadata) {
            setFormData({
                fullName: user.user_metadata.full_name || '',
                gender: user.user_metadata.gender || ''
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setMessage(null);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setMessage(null);

        if (!formData.fullName.trim()) {
            setMessage({ type: 'error', text: 'Please enter your name' });
            return;
        }

        if (!formData.gender) {
            setMessage({ type: 'error', text: 'Please select your gender' });
            return;
        }

        setIsLoading(true);

        try {
            const { error } = await supabase.auth.updateUser({
                data: {
                    full_name: formData.fullName.trim(),
                    gender: formData.gender
                }
            });

            if (error) throw error;

            setMessage({ type: 'success', text: 'Profile updated successfully! Refreshing...' });

            // Refresh the page to update all components with new data
            setTimeout(() => {
                window.location.reload();
            }, 1500);

        } catch (error) {
            setMessage({ type: 'error', text: error.message || 'Failed to update profile' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="text-white" size={32} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Profile Settings</h1>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>
                </div>

                {/* Alert Message */}
                {message && (
                    <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'error'
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : 'bg-green-50 text-green-700 border border-green-200'
                        }`}>
                        {message.type === 'error' ? <AlertCircle size={20} /> : <CheckCircle size={20} />}
                        <span>{message.text}</span>
                    </div>
                )}

                <form onSubmit={handleSave} className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Gender Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, gender: 'male' }))}
                                className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${formData.gender === 'male'
                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                    }`}
                            >
                                <span className="font-semibold">Male</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, gender: 'female' }))}
                                className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${formData.gender === 'female'
                                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                    }`}
                            >
                                <span className="font-semibold">Female</span>
                            </button>
                        </div>
                    </div>

                    {/* Motivational Quote Preview */}
                    <div className={`p-4 rounded-lg ${formData.gender === 'female'
                            ? 'bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200'
                            : 'bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200'
                        }`}>
                        <p className="text-sm font-medium text-gray-700 mb-1">Quote Style Preview:</p>
                        <p className="text-gray-600 italic">
                            {formData.gender === 'female'
                                ? '"👑 Your AI skills are like your self-worth — invaluable and non-negotiable."'
                                : '"🏎️ Your BMW M5 Competition isn\'t just a car. It\'s proof that you conquered AI engineering."'
                            }
                        </p>
                    </div>

                    {/* Save Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Save size={20} />
                                Save Changes
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileSettings;
