// components/DropdownField.tsx

'use client';

import React from 'react';

interface DropdownFieldProps {
  /** Name of the dropdown input (useful for form integration). */
  name: string;
  /** Current selected value of the dropdown. */
  value: string | number;
  /** Handler to update the selected value. */
  onChange: (value: string) => void;
  /** List of options available in the dropdown. */
  options: string[];
  /** Placeholder text displayed when no option is selected. */
  placeholder: string;
}

/**
 * `DropdownField` is a reusable controlled select component.
 * Ideal for form inputs that require selection from a list of string options.
 *
 * @example
 * const [selected, setSelected] = useState('');
 * 
 * <DropdownField
 *   name="service"
 *   value={selected}
 *   onChange={(val) => setSelected(val)}
 *   options={['Cleaning', 'Laundry', 'Airbnb']}
 *   placeholder="Select a service"
 * />
 */

const DropdownField: React.FC<DropdownFieldProps> = ({
  name,
  value,
  onChange,
  options,
  placeholder,
}) => {
  const selectStyle =
    'w-full px-4 py-3 pr-16 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors appearance-none bg-white cursor-pointer';

  const icon = (
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-[#4977E5] rounded-full flex items-center justify-center">
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 text-[#4977E5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="w-full relative">
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={selectStyle}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {icon}
    </div>
  );
};

export default DropdownField;
