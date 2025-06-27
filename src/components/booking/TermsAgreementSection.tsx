"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "./BookingForm";

type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export default function TermsAgreementSection({ register, errors }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="agreeToTerms"
          {...register("agreeToTerms")}
          className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-[#4977E5] focus:outline-none cursor-pointer"
        />
        <label htmlFor="agreeToTerms" className="text-sm text-gray-700 cursor-pointer">
          I agree to the{" "}
          <a href="/terms" className="text-[#4977E5] underline" target="_blank">
            terms and conditions
          </a>
        </label>
      </div>
      {errors.agreeToTerms && (
        <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
      )}
    </section>
  );
}
