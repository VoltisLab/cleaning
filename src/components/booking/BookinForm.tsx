"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

// 1. Schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(50),
  email: z.string().email("Invalid email"),
  address: z.string().min(1, "Address is required"),
  date: z.date({ required_error: "Date is required" }),
  jobType: z.enum(["Full-Time", "Part-Time", "Contract", "Internship"], {
    required_error: "Job type is required",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const selectedDate = watch("date");

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      {/* Name */}
      <div>
        <input
          type="text"
          placeholder="Name"
          className={`w-full border-1 rounded-[18px]  px-4 py-2 focus:outline-none focus:border-[#4977E5] focus:ring-1 focus:ring-[#4977E5] ${
                errors.name ? "border-red-500" : "border-gray-300"
            }`}
          {...register("name")}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          className={`w-full border-1 rounded-[18px]  px-4 py-2 focus:outline-none focus:border-[#4977E5] focus:ring-1 focus:ring-[#4977E5] ${
                errors.email ? "border-red-500" : "border-gray-300"
            }`}
          {...register("email")}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      {/* Address */}
      <div>
        <input
          type="text"
          placeholder="Address"
          className={`w-full border-1 rounded-[18px]  px-4 py-2 focus:outline-none focus:border-[#4977E5] focus:ring-1 focus:ring-[#4977E5] ${
                errors.address ? "border-red-500" : "border-gray-300"
            }`}
          {...register("address")}
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
      </div>

      {/* Date Picker */}
      <div>
        <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => {
                if (date) setValue("date", date);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select date"
            className={`w-full border-1 rounded-[18px]  px-4 py-2 focus:outline-none focus:border-[#4977E5] focus:ring-1 focus:ring-[#4977E5] ${
                errors.date ? "border-red-500" : "border-gray-300"
            }`}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
      </div>

      {/* Job Type */}
      <div>
        <select
          {...register("jobType")}
          className={`w-full border-1 rounded-[18px]  px-4 py-2 focus:outline-none focus:border-[#4977E5] focus:ring-1 focus:ring-[#4977E5] ${
                errors.jobType ? "border-red-500" : "border-gray-300"
            }`}
        >
          <option value="">Select job type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
        {errors.jobType && <p className="text-red-500 text-sm">{errors.jobType.message}</p>}
      </div>

      {/* Submit */}
      <div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white px-6 py-2 rounded-[18px] w-full">
          Submit
        </button>
      </div>
    </form>
  );
}
