"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import DropdownField from "../ui/DropdownField";

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
            name="position"
            placeholder="Select an available role"
            value={watch("position") || ""}
            onChange={(val) => setValue("position", val as Position, { shouldValidate: true })}
            options={[
              "Domestic Cleaner",
              "Commercial Cleaner",
              "Team Supervisor",
              "Laundry Assistant",
              "On-call Cleaner / Floater",
              "Admin Support",
            ]}
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
