'use client';

import React from 'react';

interface ControlledInputFieldProps {
  /** The type of the input field (e.g. "text", "email", "password"). Defaults to "text". */
  type?: string;
  /** The name attribute of the input (used for identification in forms). */
  name: string;
  /** The current value of the input field (controlled by parent component). */
  value: string;
  /** Function to handle changes to the input field (e.g. setState). */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Placeholder text for the input field. */
  placeholder?: string;
  /** Additional className for custom styling. */
  className?: string;
  /** Error message to display below the input. */
  error?: string;
  /** Optional label text for the input. */
  label?: string;
  /** Disables the input when set to true. */
  disabled?: boolean;
}

/**
 * ControlledInputField is a reusable controlled input component that works with `useState` or similar state managers.
 * It is useful when managing form inputs outside react-hook-form.
 *
 * @example
 * const [formData, setFormData] = useState({ name: '' });
 *
 * const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *   setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
 * };
 *
 * <ControlledInputField
 *   name="name"
 *   value={formData.name}
 *   onChange={handleChange}
 *   placeholder="Enter your name"
 *   label="Full Name"
 * />
 */

const ControlledInputField: React.FC<ControlledInputFieldProps> = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  className = '',
  error,
  label,
  disabled = false,
}) => {
  return (
    <div className="space-y-1 w-full flex flex-col gap-1">
      {label && <label htmlFor={name} className="font-medium text-sm">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border-2 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default ControlledInputField;
