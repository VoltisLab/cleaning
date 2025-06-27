"use client";

import { UseFormRegister } from "react-hook-form";
import { FormData } from "./BookingForm";

type Props = {
  register: UseFormRegister<FormData>;
};

export default function SpecialInstructionsSection({ register }: Props) {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Special Instructions</h3>

      <textarea
        rows={4}
        placeholder="Any special notes for the cleaner? e.g. pets, gate code, etc."
        {...register("specialInstructions")}
        className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:border-[#4977E5] focus:ring-[#4977E5] transition resize-none"
      />
    </section>
  );
}
