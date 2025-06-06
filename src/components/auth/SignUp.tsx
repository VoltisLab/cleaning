import React from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Assuming you're using lucide-react for icons

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface SignupFormProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignup: () => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentForm: (form: 'login' | 'signup') => void;
}

const SignupForm: React.FC<SignupFormProps> = ({
  formData,
  handleInputChange,
  handleSignup,
  showPassword,
  setShowPassword,
  setCurrentForm
}) => {
  return (
    <div className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm bg-white"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="creativeitem@gmail.com"
          className="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm bg-white"
        />
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Min 8 character"
            className="w-full px-4 py-3 pr-12 rounded-full border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm bg-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSignup}
        className="w-full bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium py-3 rounded-full transition-colors duration-200"
      >
        Sign in
      </button>

      {/* Login Link */}
      <p className="text-center text-sm text-gray-600">
        Already registered?{' '}
        <button
          type="button"
          onClick={() => setCurrentForm('login')}
          className="text-blue-500 cursor-pointer hover:underline font-medium"
        >
          Log in
        </button>
      </p>
    </div>
  );
};

export default SignupForm;
