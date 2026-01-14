import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
        // Check if email is verified
        if (user) {
          setEmailVerified(user.email_confirmed_at !== null);
        }
      } catch (error) {
        // Silently fail - could be network issue or Supabase not initialized
        console.debug('Auth check failed (this is normal if Supabase is not configured):', error?.message);
        setUser(null);
        setEmailVerified(false);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user);
          setEmailVerified(session.user.email_confirmed_at !== null);
        } else {
          setUser(null);
          setEmailVerified(false);
        }
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const signUp = async (email, password) => {
    setError(null);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // ✅ Supabase will send verification email to this URL
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
      
      // ✅ User created but email NOT yet verified
      // Return success message to show "Check Email" screen
      return { 
        data, 
        error: null,
        message: 'signup_pending_verification'
      };
    } catch (error) {
      const errorMessage = error?.message || 'Failed to sign up. Please try again.';
      setError(errorMessage);
      return { data: null, error, message: null };
    }
  };

  const signIn = async (email, password) => {
    setError(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // ✅ Check if email is verified before allowing login
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user && !user.email_confirmed_at) {
        // ❌ User exists but email not verified
        // Sign them out and show verification message
        await supabase.auth.signOut();
        throw new Error(
          'Please verify your email first. Check your inbox for the verification link.'
        );
      }

      setUser(user);
      setEmailVerified(true);
      
      return { data, error: null };

    } catch (error) {
      const errorMessage = error?.message || 'Failed to sign in. Please check your credentials.';
      setError(errorMessage);
      return { data: null, error };
    }
  };

  const signOut = async () => {
    setError(null);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setEmailVerified(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const resendVerificationEmail = async (email) => {
    setError(null);
    try {
      // Resend the signup confirmation email
      const { error } = await supabase.auth.resendPasswordEnvelope(email, 'signup');

      if (error) throw error;
      return { error: null };
    } catch (error) {
      const errorMessage = error?.message || 'Failed to resend verification email.';
      setError(errorMessage);
      return { error };
    }
  };

  const resetPassword = async (email) => {
    setError(null);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) throw error;
      return { error: null };
    } catch (error) {
      const errorMessage = error?.message || 'Failed to reset password.';
      setError(errorMessage);
      return { error };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        emailVerified,
        signUp,
        signIn,
        signOut,
        resetPassword,
        resendVerificationEmail,
        isAuthenticated: !!user && emailVerified,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
