interface VerifyEmailFormProps {
  formData: {
    verificationCode: string[];
  };
  handleCodeChange: (index: number, value: string) => void;
  handleResendCode: () => void;
  handleVerifyEmail: () => void;
}

const VerifyEmailForm: React.FC<VerifyEmailFormProps> = ({
  formData,
  handleCodeChange,
  handleResendCode,
  handleVerifyEmail,
}) => {
  return (
    <div className="space-y-6">
      {/* Code Input */}
      <div className="space-y-4">
        <div className="flex gap-4 justify-center">
          {formData.verificationCode.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              className="w-16 h-16 text-center text-2xl font-bold border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white"
              maxLength={1}
            />
          ))}
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={handleResendCode}
            className="text-sm text-blue-500 hover:underline"
          >
            Resend code
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleVerifyEmail}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-full transition-colors duration-200"
      >
        Verify
      </button>
    </div>
  );
};

export default VerifyEmailForm;
