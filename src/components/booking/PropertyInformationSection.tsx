"use client";

import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormData } from "./BookingForm";

type Props = {
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  watch: UseFormWatch<FormData>;
};

const propertyTypes = ["Flat", "Duplex", "Bungalow", "Detached"];
const additionalRooms = ["Hallway", "Garage", "Study", "Pantry"];
const bedroomOptions = ["0", "1", "2", "3", "4", "5+"];

export default function PropertyInformationSection({
  register,
  setValue,
  watch,
}: Props) {
  const type = watch("propertyType");
  const bedrooms = watch("bedroom");
  const additionalRoom = watch("additionalRoom");

  const selectStyle =
    "w-full px-4 py-3 pr-16 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors appearance-none bg-white cursor-pointer";

  const icon = (
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
  );

  return (
    <section className="space-y-6">
      <h3 className="text-lg font-semibold">Property Information</h3>

      {/* Property Type */}
      <div className="flex lg:flex-row flex-col items-center gap-3">
        <div className="w-full relative">
          <select
            value={type || ""}
            onChange={(e) => setValue("propertyType", e.target.value, { shouldValidate: true })}
            className={selectStyle}
          >
            <option value="" disabled>
              Select property type
            </option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {icon}
        </div>

        {/* Property Type Note */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Please specify (if not listed)"
            className="w-full border-2 border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:border-[#4977E5] focus:ring-[#4977E5] transition"
            {...register("propertyTypeNote")}
          />
        </div>

      </div>

      {/* Bedrooms */}
      <div className="w-full lg:w-[50%] relative">
        <select
          value={bedrooms || ""}
          onChange={(e) =>
            setValue("bedroom", Number(e.target.value), { shouldValidate: true })
          }
          className={selectStyle}
        >
          <option value="" disabled>
            Number of bedrooms
          </option>
          {bedroomOptions.map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
        {icon}
      </div>

      {/* Additional Room */}
      <div className="flex flex-col lg:flex-row items-center gap-3 ">
        <div className="w-full relative">
          <select
            value={additionalRoom || ""}
            onChange={(e) =>
              setValue("additionalRoom", e.target.value, { shouldValidate: true })
            }
            className={selectStyle}
          >
            <option value="" disabled>
              Additional room type
            </option>
            {additionalRooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
          {icon}
        </div>

        {/* Additional Room Note */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Please specify (if not listed)"
            className="w-full border-2 border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:border-[#4977E5] focus:ring-[#4977E5] transition"
            {...register("additionalRoomNote")}
          />
        </div>

      </div>
    </section>
  );
}
