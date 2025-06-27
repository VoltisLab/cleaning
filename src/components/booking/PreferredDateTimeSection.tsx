"use client";

import { UseFormSetValue, UseFormWatch, FieldErrors } from "react-hook-form";
import { FormData } from "./BookingForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  setValue: UseFormSetValue<FormData>;
  watch: UseFormWatch<FormData>;
  errors: FieldErrors<FormData>;
};

export default function PreferredDateTimeSection({
  setValue,
  watch,
  errors,
}: Props) {
  const selectedDate = watch("date");

  const baseStyle =
    "w-full border-2 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:border-[#4977E5] focus:ring-[#4977E5] transition";

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Preferred Date & Time</h3>

      {/* Primary Date Picker */}
      <div>
        <div className="flex flex-col gap-1 lg:w-[50%] w-full ">
            <label className="font-medium text-sm">Date</label>
            <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => {
                if (date) {
                setValue("date", date, { shouldValidate: true });
                }
            }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select primary date & time"
            className={`${baseStyle} ${
                errors.date ? "border-red-500" : "border-gray-300"
            }`}
            />
            {errors.date && (
            <p className="text-sm text-red-500">{errors.date.message}</p>
            )}

        </div>
      </div>

      {/* Alternate Date (optional text input) */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-sm">Alternate date { "(If preferred is unavailable)"}</label>
        <input
          type="text"
          placeholder="Alternate date (optional)"
          className={`${baseStyle} border-gray-300`}
          {...watch("altDate")}
        />
      </div>

      {/* Preferred Time Slot */}
     <div>
  <p className="mb-2 font-medium">Preferred time slot</p>
  <div className="space-y-4">
    {[
      "Morning 8am - 11am",
      "Afternoon 12pm - 3pm",
      "Evening 4pm - 7pm",
    ].map((slot) => (
      <label key={slot} className="flex items-center space-x-2">
        <input
          type="radio"
          value={slot}
          checked={watch("timeSlot") === slot}
          onChange={(e) =>
            setValue("timeSlot", e.target.value, { shouldValidate: true })
          }
          className="form-radio text-blue-600"
          name="timeSlot"
        />
        <span className=" text-sm">{slot}</span>
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
