"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Schema with `position` added
const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(50),
  email: z.string().email("Invalid email"),
  address: z.string().min(1, "Address is required"),
  date: z.date({ required_error: "Date is required" }),
    position: z.string().min(1, "position is required"),
});

type FormData = z.infer<typeof formSchema>;


const DropdownField = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string ;
  onChange: (value: string  ) => void;
}) => (
  <div className="relative w-full">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 pr-16 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors appearance-none bg-white cursor-pointer"
    >
      <option value="" disabled>
        {placeholder}
      </option>
    <option value="Office Cleaning">Office Cleaning</option>
    <option value="Laundry Cleaning">Laundry Cleaning</option>
    <option value="Airbnb Cleaning">Airbnb Cleaning</option>
    <option value="weekly Cleaning">weekly Cleaning</option>
    <option value="One-off Cleaning">One-off Cleaning</option>
    <option value="Deep Cleaning">Deep Cleaning</option>

    </select>
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-[#4977E5] rounded-full flex items-center justify-center">
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 text-[#4977E5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
);

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
  const position = watch("position");


  const onSubmit = (data: FormData) => {
  // your submit logic
      console.log("Submitted:", data);

  alert("Submitted"); // This is the prompt
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full md:w-[75%] lg:w-[50%]  ">
      {/* Name */}
      <div >
        <input
          type="text"
          placeholder="Name"
          className={`w-full border-1 rounded-[18px] px-4 py-2 focus:outline-none focus:border-[#4977E5] focus:ring-1 focus:ring-[#4977E5] ${
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
          className={`w-full border-1 rounded-[18px] px-4 py-2 focus:outline-none focus:border-[#4977E5] focus:ring-1 focus:ring-[#4977E5] ${
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
          className={`w-full border-1 rounded-[18px] px-4 py-2 focus:outline-none focus:border-[#4977E5] focus:ring-1 focus:ring-[#4977E5] ${
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
            if (date) setValue("date", date, { shouldValidate: true });
          }}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select date and time"
          className={`w-full border-1 rounded-[18px] px-4 py-2 focus:outline-none focus:border-[#4977E5] focus:ring-1 focus:ring-[#4977E5] ${
            errors.date ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
      </div>

    

      {/* Position Dropdown */}
      <div>
        <div className="flex items-center mb-4">
          <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
          <span className="text-gray-900 font-medium text-sm">
            Job Type
          </span>
        </div>
        <DropdownField
          placeholder="Select an available job type"
          value={position || ""}
          onChange={(value) => setValue("position", value, { shouldValidate: true })}
        />
        {errors.position && <p className="text-red-500 text-sm">{errors.position.message}</p>}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white px-6 py-2 rounded-[18px] w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
