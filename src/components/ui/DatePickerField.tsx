// components/DatePickerField.tsx

'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerFieldProps {
  /** The selected date value (can be null). */
  value: Date | null;
  /** Callback function to update the selected date. */
  onChange: (date: Date | null) => void;
  /** Optional label to describe the field. */
  label?: string;
  /** Placeholder text shown when no date is selected. */
  placeholder?: string;
  /** Optional error message displayed below the input. */
  error?: string;
  /** Additional CSS classes for the input styling. */
  className?: string;
}

/**
 * `DatePickerField` is a reusable date & time picker input using react-datepicker.
 * It is controlled via props (`value` and `onChange`) and integrates with standard form state.
 *
 * @example
 * const [startDate, setStartDate] = useState<Date | null>(null);
 *
 * <DatePickerField
 *   value={startDate}
 *   onChange={(date) => setStartDate(date)}
 *   label="Appointment Date"
 *   placeholder="Select date and time"
 * />
 */

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  value,
  onChange,
  label,
  placeholder = 'Select date and time',
  error,
  className = '',
}) => {
  const baseStyle =
    'w-full px-4 py-3 border-2 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors';

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium text-sm">{label}</label>}
      <DatePicker
        selected={value}
        onChange={onChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText={placeholder}
        className={`${baseStyle} ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default DatePickerField;
