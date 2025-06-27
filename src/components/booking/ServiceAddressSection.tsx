"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./BookingForm";

type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function ServiceAddressSection({ register, errors }: Props) {
  const baseStyle =
    "w-full border-2 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:border-[#4977E5] focus:ring-[#4977E5] transition";

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Service Address</h3>

      {/* Main Address */}
      <div>
        <input
          type="text"
          placeholder="First line address"
          className={`${baseStyle} ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
          {...register("address")}
        />
        {errors.address && (
          <p className="text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/* Second Address (optional) */}
      <div>
        <input
          type="text"
          placeholder="Second line address"
          className={`${baseStyle} border-gray-300`}
          {...register("secondAddress")}
        />
      </div>

      {/* Postal & City */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Postal Code */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Postal code"
            className={`${baseStyle} ${
              errors.postal ? "border-red-500" : "border-gray-300"
            }`}
            {...register("postal")}
          />
          {errors.postal && (
            <p className="text-sm text-red-500">{errors.postal.message}</p>
          )}
        </div>

        {/* City */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Town"
            className={`${baseStyle} ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
            {...register("city")}
          />
          {errors.city && (
            <p className="text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
