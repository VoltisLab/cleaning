// components/TextInput.tsx

'use client';

import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
  /** Type of input field (e.g., text, email, password). Defaults to 'text'. */
  type?: string;
  /** Name of the input field (used for form integration). */
  name?: string;
  /** Placeholder text displayed inside the input. */
  placeholder?: string;
  /** Additional Tailwind CSS classes for styling. */
  className?: string;
  /** Error message to display below the input (if any). */
  error?: string;
  /** `register` function from react-hook-form to connect the input to the form. */
  register?: UseFormRegisterReturn;
  /** Optional label text displayed above the input. */
  label?: string;
  /** Whether the input is disabled. */
  disabled?: boolean;
}

/**
 * `InputField` is a reusable input component for forms.
 * Compatible with `react-hook-form` and styled using Tailwind CSS.
 *
 * @example
 * import { useForm } from 'react-hook-form';
 * 
 * const { register, formState: { errors } } = useForm();
 * 
 * <InputField
 *   label="Email"
 *   name="email"
 *   type="email"
 *   placeholder="Enter your email"
 *   register={register('email')}
 *   error={errors.email?.message}
 * />
 */

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  name,
  placeholder = '',
  className = '',
  error,
  register,
  label,
  disabled,
}) => {
  return (
    <div className="space-y-1 w-full flex flex-col gap-1">
      {label && <label htmlFor={name} className="font-medium text-sm">{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border-2 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        {...register}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
