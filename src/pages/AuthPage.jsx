import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { AlertCircle } from 'lucide-react';
import AuthBranding from '../components/auth/AuthBranding';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');

  const { login, register } = useAuth();
  const navigate = useNavigate();

  // Handle Login Submit
  const handleLoginSubmit = (data) => {
    if (!data.email || !data.password) {
      setError('Please enter both email and password.');
      return;
    }

    const res = login(data.email, data.password);
    if (!res.success) {
      setError(res.message);
      return;
    }

    setError('');
    navigate('/app');
  };

  // Handle Register Submit
  const handleRegisterSubmit = (data) => {
    if (!data.fullName || !data.email || !data.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (data.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const res = register(data.fullName, data.email, data.password);
    if (!res.success) {
      setError(res.message);
      return;
    }

    setError('');
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-slate-100 flex items-center justify-center p-4 md:p-8 font-sans relative overflow-hidden selection:bg-[#ff5722] selection:text-white">
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#ff5722]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e64a19]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl grid lg:grid-cols-12 rounded-3xl bg-[#11131a]/80 border border-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden z-10">
        
        <AuthBranding />

        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-[#0d0e14]/60">
          
          {error && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {isSignUp ? (
            <RegisterForm
              onSubmit={handleRegisterSubmit}
              onSwitchToLogin={() => {
                setIsSignUp(false);
                setError('');
              }}
            />
          ) : (
            <LoginForm
              onSubmit={handleLoginSubmit}
              onSwitchToRegister={() => {
                setIsSignUp(true);
                setError('');
              }}
            />
          )}

        </div>
      </div>
    </div>
  );
}