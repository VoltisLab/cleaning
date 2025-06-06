import { Eye, EyeOff } from "lucide-react";

interface CreatePasswordFormProps {
  showPassword: boolean;
  showConfirmPassword: boolean;
  formData: {
    password: string;
    confirmPassword: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShowPassword: (value: boolean) => void;
  setShowConfirmPassword: (value: boolean) => void;
  handleCreatePassword: () => void;
}

const CreatePasswordForm: React.FC<CreatePasswordFormProps> = ({
  showPassword,
  showConfirmPassword,
  formData,
  handleInputChange,
  setShowPassword,
  setShowConfirmPassword,
  handleCreatePassword,
}) => {
  return (
    <div className="space-y-6 h-full">
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
            className="absolute right-4 top-1/2 cursor-pointer transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Min 8 character"
            className="w-full px-4 py-3 pr-12 rounded-full border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm bg-white"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleCreatePassword}
        className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-full transition-colors duration-200"
      >
        Confirm
      </button>
    </div>
  );
};

export default CreatePasswordForm;
