import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  secondAddress: z.string().optional(),
  postal: z.string().min(1, "Postal code required"),
  city: z.string().min(1, "City is required"),
  tour: z.string(),
  bedroom: z.number().min(0),
  bathroom: z.string(),
  roomDetails: z.string().optional(),
  propertySpec: z.string().optional(),
  date: z.date({ required_error: "Date is required" }),
  altDate: z.string().optional(),
  timeSlot: z.string(),
  frequency: z.string(),
  specialInstructions: z.string().optional(),
  position: z.string(),
  subCategory: z.string(),
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, { message: "You must agree to the terms" }),
  propertyType: z.string().optional(), // 👈 add this to fix the component
  propertyTypeNote: z.string().optional(), // 👈 also required
  additionalRoom: z.string().optional(), // 👈 also required
  additionalRoomNote: z.string().optional(), // 👈 also required
});

export type FormData = z.infer<typeof formSchema>;
