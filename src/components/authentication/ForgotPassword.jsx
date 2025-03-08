import React, { useState } from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Handle forgot password logic here
    console.log('Sending reset link to:', email);
    setIsLoading(false);
  };

  const handleSendResetLink = () => {
    navigate("/reset-password");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white flex flex-col">
      

      {/* Main Content */}
      <div className="mt-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8 ">
            <span className="text-2xl font-thin tracking-wider">
              <a href="/">
                ScaffoldX<span className="text-pink-600 text-5xl">.</span>
              </a>
            </span>
          </div>

          {/* Forgot Password Form */}
          <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg">
            <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
              Forgot Password
            </h2>
            
            <p className="text-gray-400 text-sm mb-6 text-center">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-pink-600 focus:ring-0 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSendResetLink}
                disabled={isLoading}
                className="w-full bg-pink-600 text-black py-3 text-sm tracking-wider hover:bg-pink-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'SENDING LINK...' : 'SEND RESET LINK'}
              </button>

              {/* Back to Login Link */}
              <div className="text-center text-sm text-gray-400">
                Remember your password?{' '}
                <a href="/login" className="text-pink-600 hover:text-pink-400 transition-colors">
                  Back to login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}