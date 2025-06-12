"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Define allowed positions as a union type
type Position =
  | "Domestic Cleaner"
  | "Commercial Cleaner"
  | "Team Supervisor"
  | "Laundry Assistant"
  | "On-call Cleaner / Floater"
  | "Admin Support";

// Validation schema using zod
const formSchema = z.object({
  position: z.enum([
    "Domestic Cleaner",
    "Commercial Cleaner",
    "Team Supervisor",
    "Laundry Assistant",
    "On-call Cleaner / Floater",
    "Admin Support",
  ], { required_error: "Position is required" }),
});

type FormData = z.infer<typeof formSchema>;

// DropdownField component
const DropdownField = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 pr-16 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors appearance-none bg-white cursor-pointer"
    >
      <option value="" disabled className="text-gray-400">
        {placeholder}
      </option>
      <option value="Domestic Cleaner">Domestic Cleaner</option>
      <option value="Commercial Cleaner">Commercial Cleaner</option>
      <option value="Team Supervisor">Team Supervisor</option>
      <option value="Laundry Assistant">Laundry Assistant</option>
      <option value="On-call Cleaner / Floater">On-call Cleaner / Floater</option>
      <option value="Admin Support">Admin Support</option>
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
    const router = useRouter()
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { position: "" as Position },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // alert(`You applied for: ${data.position}`);
    router.push(`/application-form?position=${data.position}`)

  };
  const selectedPosition = watch("position");


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="flex flex-col lg:flex-row justify-center items-end gap-3 lg:gap-8 w-full"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full lg:w-[900px] flex flex-col gap-3">
          <h2 className="font-[700] text-4xl">Available Roles</h2>
          <p className="text-sm font-[400] text-[#838B95]">
            We’re always looking for reliable, hardworking people to join our growing team. If you’re looking for flexible hours, or a chance to grow in the cleaning industry, we
            have roles to suit you. Check out our current openings below.
          </p>

          <DropdownField
            placeholder="Select an available role"
            value={watch("position") || ""}
            onChange={(value) => setValue("position", value as Position, { shouldValidate: true })}
          />
          {errors.position && <p className="text-red-500 text-sm">{errors.position.message}</p>}
        </div>

        <div className="w-full lg:w-fit">
         <button
            type="submit"
            disabled={!selectedPosition}
            className={`px-10 py-3 w-full lg:w-fit h-fit rounded-full text-white cursor-pointer transition-colors ${
                selectedPosition ? "bg-[#4977E5] hover:bg-blue-800" : "bg-[#B9CEFF]"
            }`}
            >
            Apply
            </button>
        </div>
      </motion.div>
    </form>
  );
}
