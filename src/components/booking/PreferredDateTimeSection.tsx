'use client';

import {
  UseFormSetValue,
  UseFormWatch,
  UseFormRegister,
  FieldErrors,
} from 'react-hook-form';
import { FormData } from './BookingForm';
import DatePickerField from '../ui/DatePickerField';
import InputField from '../ui/InputField';

type Props = {
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  watch: UseFormWatch<FormData>;
  errors: FieldErrors<FormData>;
};

export default function PreferredDateTimeSection({
  register,
  setValue,
  watch,
  errors,
}: Props) {
  const selectedDate = watch('date');
  const selectedTimeSlot = watch('timeSlot');

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Preferred Date & Time</h3>

      {/* Primary Date Picker */}
      <div className="lg:w-[50%] w-full">
        <DatePickerField
          label="Date"
          value={selectedDate}
          onChange={(date) => {
            if (date instanceof Date && !isNaN(date.getTime())) {
              setValue('date', date, { shouldValidate: true });
            }
          }}
  error={errors.date?.message}
/>

      </div>

      {/* Alternate Date (optional) */}
      <div className="lg:w-[50%] w-full">
        <InputField
          label='Alternate date (If preferred is unavailable)'
          name="altDate"
          placeholder="Alternate date (optional)"
          register={register('altDate')}
          error={errors.altDate?.message}
        />
      </div>

      {/* Preferred Time Slot */}
      <div>
        <p className="mb-2 font-medium">Preferred time slot</p>
        <div className="space-y-4">
          {['Morning 8am - 11am', 'Afternoon 12pm - 3pm', 'Evening 4pm - 7pm'].map((slot) => (
            <label key={slot} className="flex items-center space-x-2">
              <input
                type="radio"
                value={slot}
                checked={selectedTimeSlot === slot}
                onChange={(e) =>
                  setValue('timeSlot', e.target.value, { shouldValidate: true })
                }
                className="form-radio text-blue-600"
                name="timeSlot"
              />
              <span className="text-sm">{slot}</span>
            </label>
          ))}
        </div>
        {errors.timeSlot && (
          <p className="text-sm text-red-500 mt-1">{errors.timeSlot.message}</p>
        )}
      </div>
    </section>
  );
}
