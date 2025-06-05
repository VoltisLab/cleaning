"use client";
import { Calendar, Calendar1Icon, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdMail } from "react-icons/md";

// Date regex: DD/MM/YYYY or DD-MM-YYYY
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])([/-])(0[1-9]|1[0-2])\2(\d{4})$/;

// Time regex: HH:mm (24-hour format)
const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;

// Define validation schema with Zod
const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  date: z
    .string()
    .min(1, "Date is required")
    .regex(dateRegex, "Invalid date format. Use DD/MM/YYYY or DD-MM-YYYY"),
  time: z
    .string()
    .min(1, "Time is required")
    .regex(timeRegex, "Invalid time format. Use HH:mm (24-hour, e.g., 14:30)"),
  period: z.enum(["AM", "PM"]),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message is too long"),
});

type FormData = z.infer<typeof formSchema>;

export default function BookNow() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched", // Validate on blur after first submit attempt
  });

  const period = watch("period", "AM"); // Default to AM

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate random success/failure for demonstration
      const shouldFail = Math.random() > 0.8; // 20% chance of failure

      if (shouldFail) {
        throw new Error("Server error: Please try again later");
      }

      console.log("Form submitted:", data);
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 py-5 max-w-sm mx-auto w-full md:w-[22.5rem] lg:-translate-y-1/2 z-10 rounded-3xl bg-white shadow-md shrink-0 h-fit">
      <h1 className="font-bold text-2xl mb-7">Book now</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Display submission error/success messages */}
        {submitError && (
          <div className="p-3 bg-red-100 text-red-700 rounded-[18px] text-sm">
            {submitError}
          </div>
        )}

        {submitSuccess && (
          <div className="p-3 bg-green-100 text-green-700 rounded-[18px] text-sm">
            Form submitted successfully! We'll contact you soon.
          </div>
        )}

        {/* Name Field */}
        <div>
          <input
            type="text"
            className={`w-full outline-none border ${
              errors.name ? "border-red-500" : "border-[#93949E]/40"
            } rounded-[18px] px-[1.15rem] py-2.5 placeholder:text-[#93949E]`}
            placeholder="Enter your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="text"
            className={`w-full outline-none border ${
              errors.email ? "border-red-500" : "border-[#93949E]/40"
            } rounded-[18px] px-[1.15rem] py-2.5 placeholder:text-[#93949E]`}
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Date and Time Fields */}
        <div className="flex items-center gap-2">
          {/* Date Field */}
          <div className=" w-full">
            <div className="relative ">
              <input
                className={`w-full outline-none border ${
                  errors.date ? "border-red-500" : "border-[#93949E]/40"
                } rounded-[18px] px-[1.15rem] py-2.5 placeholder:text-[#93949E]`}
                placeholder="Date"
                {...register("date")}
              />
              <p className="flex absolute px-2 right-0 top-[50%] -translate-y-1/2 items-center gap-1 text-[#93949E] text-xs">
                <Calendar1Icon size={18} />
              </p>
            </div>
            {errors.date && (
              <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>
            )}
          </div>

          {/* Time Field */}

          <div className=" w-full">
            <div className="relative ">
              <input
                className={`w-full outline-none border ${
                  errors.time ? "border-red-500" : "border-[#93949E]/40"
                } rounded-[18px] px-[1.15rem] py-2.5 placeholder:text-[#93949E]`}
                placeholder="Time"
                {...register("time")}
              />
              <div className="absolute px-1 right-0 top-[50%] border-l border-[#93949E]/40 -translate-y-1/2 flex items-center gap-1 text-[#93949E] text-xs">
                <button
                  type="button"
                  onClick={() => setShowPeriodDropdown(!showPeriodDropdown)}
                  className="flex items-center gap-1"
                >
                  <span>{period}</span>
                  <ChevronDown />
                </button>
                {showPeriodDropdown && (
                  <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md z-10">
                    <button
                      type="button"
                      className="block w-full px-3 py-1 text-left hover:bg-gray-100"
                      onClick={() => {
                        setValue("period", "AM");
                        setShowPeriodDropdown(false);
                      }}
                    >
                      AM
                    </button>
                    <button
                      type="button"
                      className="block w-full px-3 py-1 text-left hover:bg-gray-100"
                      onClick={() => {
                        setValue("period", "PM");
                        setShowPeriodDropdown(false);
                      }}
                    >
                      PM
                    </button>
                  </div>
                )}
              </div>
            </div>
            {errors.time && (
              <p className="mt-1 text-xs text-red-500">{errors.time.message}</p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <textarea
            className={`w-full outline-none border ${
              errors.message ? "border-red-500" : "border-[#93949E]/40"
            } rounded-[18px] px-[1.15rem] py-2.5`}
            placeholder="Write here"
            rows={4}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`rounded-4xl px-5 py-2 bg-[#4977E5] text-white font-medium text-sm cursor-pointer hover:bg-blue-800 transition ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* line  */}
      <div className="my-5 h-px w-full bg-[#93949E]/40"></div>

      {/* Contact details */}
      <div>
        <h1 className="font-bold text-2xl mb-7">Contact Details</h1>
        <div className="space-y-4 text-[#838B95]">
          <p className="flex gap-3">
            <FaLocationDot size={18} className="text-[#4977E5]" />
            <span className="leading-[160%]">
              785 15h Street, Office 468 Berlin, De 845612
            </span>
          </p>

          <p className="flex gap-3">
            <MdMail size={18} className="text-[#4977E5]" />
            <span className="leading-[160%]">creativeitem@gmail.com</span>
          </p>

          <p className="flex gap-3">
            <MdCall size={18} className="text-[#4977E5]" />
            <span className="leading-[160%]">+45654121344</span>
          </p>
        </div>
      </div>
    </div>
  );
}
