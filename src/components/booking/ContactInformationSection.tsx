"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./BookingForm";
import InputField from "../ui/InputField";

type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function ContactInformationSection({ register, errors }: Props) {
  
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Contact Information</h3>

      {/* Full Name */}
      <InputField
        name="name"
        placeholder="Full name"
        register={register("name")}
        error={errors.name?.message}
      />

      {/* Email */}
      
      <InputField
        name="email"
        type="email"
        placeholder="Email Address"
        register={register("email")}
        error={errors.email?.message}
      />

      {/* Phone */}
      
      <InputField
        type="tel"
        name="phone"
        placeholder="Mobile number"
        register={register("phone")}
        error={errors.phone?.message}
      />
    </section>
  );
}
