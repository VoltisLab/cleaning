"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import ContactInformationSection from "./ContactInformationSection";
import ServiceAddressSection from "./ServiceAddressSection";
 import PropertyInformationSection from "./PropertyInformationSection";
import PreferredDateTimeSection from "./PreferredDateTimeSection";
import FrequencySection from "./FrequencySection";
import SpecialInstructionsSection from "./SpecialInstructionsSection";
import TermsAgreementSection from "./TermsAgreementSection";
import SubmitButton from "./SubmitButton";
import { formSchema } from "./schema";
import { useSearchParams } from "next/navigation";

export type FormData = z.infer<typeof formSchema>;

export default function BookingForm() {
      const searchParams = useSearchParams();
      const serviceType = searchParams.get("servicetype") ?? "Airbnb"

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    alert("Submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-3xl mx-auto px-4 py-10 space-y-8"
    >
      <h2 className="text-2xl font-semibold">{serviceType} booking</h2>
       <ContactInformationSection register={register} errors={errors} />
      <ServiceAddressSection register={register} errors={errors} />
     <PropertyInformationSection
        register={register}
        errors={errors}
        setValue={setValue}
        watch={watch}
      />
       <PreferredDateTimeSection setValue={setValue} watch={watch} errors={errors} />
      <FrequencySection register={register} watch={watch} />
      <SpecialInstructionsSection register={register} />
      <TermsAgreementSection register={register} errors={errors} />
      <SubmitButton />
    </form>
  );
}
