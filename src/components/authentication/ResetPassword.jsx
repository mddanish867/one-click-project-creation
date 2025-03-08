import React, { useState } from 'react';
import { ArrowLeft, Lock, Eye, EyeOff } from 'lucide-react';

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Handle reset password logic here
    console.log('Reset password data:', formData);
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

          {/* Reset Password Form */}
          <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg">
            <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
              Reset Password
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Password Input */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  NEW PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-12 text-white placeholder-gray-500 focus:border-pink-600 focus:ring-0 focus:outline-none transition-colors"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  CONFIRM PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-12 text-white placeholder-gray-500 focus:border-pink-600 focus:ring-0 focus:outline-none transition-colors"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="text-xs text-gray-400 space-y-1">
                <p>Password must:</p>
                <ul className="pl-4">
                  <li>Be at least 8 characters long</li>
                  <li>Include at least one uppercase letter</li>
                  <li>Include at least one number</li>
                  <li>Include at least one special character</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-pink-600 text-black py-3 text-sm tracking-wider hover:bg-pink-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'RESETTING PASSWORD...' : 'RESET PASSWORD'}
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