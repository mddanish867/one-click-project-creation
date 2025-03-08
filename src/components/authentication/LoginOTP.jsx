import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, Send, Check } from 'lucide-react';

export default function LoginOTP() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Sending OTP to:', email);
    setIsLoading(false);
    setStep(2);
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Verifying OTP:', otp);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white flex flex-col">
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-2xl font-thin tracking-wider">
              <a href="/">
                ScaffoldX<span className="text-pink-600 text-3xl">.</span>
              </a>
            </span>
          </div>

          {/* Login Form */}
          <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg">
            <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
              Login with OTP
            </h2>

            {step === 1 ? (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-sm tracking-wider text-gray-400">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-pink-600 focus:ring-0 focus:outline-none transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Send OTP Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-pink-600 text-black py-3 text-sm tracking-wider hover:bg-pink-400 transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'SENDING...' : (
                    <>
                      SEND OTP
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
                
                {/* Back to Login Link */}
                <div className="text-center text-sm text-gray-400">
                  <a href="/login" className="text-pink-600 hover:text-pink-400 transition-colors">
                    Back to password login
                  </a>
                </div>
              </form>
            ) : (
              <form onSubmit={handleOTPSubmit} className="space-y-6">
                {/* OTP Input */}
                <div className="space-y-2">
                  <label className="block text-sm tracking-wider text-gray-400">
                    ENTER OTP
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-pink-600 focus:ring-0 focus:outline-none transition-colors"
                      placeholder="Enter the code sent to your email"
                      required
                    />
                  </div>
                </div>

                {/* Verify OTP Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-pink-600 text-black py-3 text-sm tracking-wider hover:bg-pink-400 transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'VERIFYING...' : (
                    <>
                      VERIFY OTP
                      <Check className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
                
                {/* Resend OTP Link */}
                <div className="text-center text-sm text-gray-400">
                  Didn't receive the code?{' '}
                  <button 
                    type="button" 
                    onClick={() => setStep(1)} 
                    className="text-pink-600 hover:text-pink-400 transition-colors"
                  >
                    Resend OTP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}