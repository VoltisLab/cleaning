interface ForgotPasswordFormProps {
  formData: {
    email: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleForgotPassword: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  formData,
  handleInputChange,
  handleForgotPassword,
}) => {
  return (
    <div className="space-y-6 ">
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

      {/* Submit Button */}
      <button
        onClick={handleForgotPassword}
        className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-full transition-colors duration-200"
      >
        Reset Password
      </button>
    </div>
  );
};

export default ForgotPasswordForm;
