"use client";

import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FormData } from "./BookingForm";

type Props = {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
};

const frequencyOptions = ["One Time", "Weekly", "Bi-Weekly", "Monthly"];

export default function FrequencySection({ register, watch }: Props) {
  const selected = watch("frequency");

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Cleaning Frequency</h3>

      <div className="space-y-5">
         {frequencyOptions.map((option) => (
    <label key={option} className="flex items-center space-x-2">
      <input
        type="radio"
        value={option}
        {...register("frequency")}
        className="form-radio text-blue-600"
      />
      <span>{option}</span>
    </label>
  ))}
  {/* {errors.frequency && (
    <p className="text-sm text-red-500 mt-1">{errors.frequency.message}</p>
  )} */}
      </div>
    </section>
  );
}
