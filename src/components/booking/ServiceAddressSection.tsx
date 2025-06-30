"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./BookingForm";
import InputField from "../ui/InputField";

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
      <InputField
        name="address"
        placeholder="First line address"
        register={register('address')}
        error={errors.address?.message}
      />

      {/* Second Address (optional) */}
      <InputField
        name="secondAddress"
        placeholder="Second line address"
        register={register('secondAddress')}
      />

      {/* Postal & City */}
      <div className="flex flex-col lg:flex-row gap-4 w-full ">
        {/* Postal Code */}
        <InputField
          name="postal"
          placeholder="Postal code"
          register={register('postal')}
          error={errors.postal?.message}
        />

        {/* City */}
        <InputField
          name="city"
          placeholder="Town"
          register={register('city')}
          error={errors.city?.message}
        />
      </div>
    </section>
  );
}
