"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./BookingForm";

type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function ContactInformationSection({ register, errors }: Props) {
  const baseStyle =
    "w-full border-2 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:border-[#4977E5] focus:ring-[#4977E5] transition";

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Contact Information</h3>

      {/* Full Name */}
      <div>
        <input
          type="text"
          placeholder="Full name"
          className={`${baseStyle} ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          {...register("name")}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className={`${baseStyle} ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          {...register("email")}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <input
          type="tel"
          placeholder="Mobile number"
          className={`${baseStyle} ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          {...register("phone")}
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
      </div>
    </section>
  );
}
