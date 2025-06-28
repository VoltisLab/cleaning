"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useEffect, useState } from "react";

export type FormData = z.infer<typeof formSchema>;

export default function BookingForm() {

      const searchParams = useSearchParams();
       const [serviceType, setServiceType] = useState("Airbnb");

  // ✅ Safely extract query param only on client
  useEffect(() => {
    const param = searchParams.get("servicetype");
    if (param) setServiceType(param);
  }, [searchParams]);
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
      <h2 className="text-2xl font-semibold">
        {serviceType
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")}{" "}
         Booking</h2>
       <ContactInformationSection register={register} errors={errors} />
      <ServiceAddressSection register={register} errors={errors} />
     <PropertyInformationSection
        register={register}
        // errors={errors}
        setValue={setValue}
        watch={watch}
      />
    <PreferredDateTimeSection
    register={register}
    setValue={setValue}
    watch={watch}
    errors={errors}
    />      
    <FrequencySection register={register}  />
      <SpecialInstructionsSection register={register} />
      <TermsAgreementSection register={register} errors={errors} />
      <SubmitButton />
    </form>
  );
}
