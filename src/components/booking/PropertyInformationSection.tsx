"use client";

import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
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

  const inputStyle =
    "w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#4977E5] focus:border-[#4977E5] transition";

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold">Property Information</h3>

      <div className=" flex flex-col gap-5">
        {/* Property Type */}
        <div className="flex flex-col lg:flex-row items-center w-full gap-4">
        <div className="flex items-center gap-3 w-full">
          <label className=" text-sm font-medium">Type</label>
          <select
            className={inputStyle}
            value={type || ""}
            onChange={(e) =>
              setValue("propertyType", e.target.value, {
                shouldValidate: true,
              })
            }
          >
            <option value="" disabled>
              Select type
            </option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Type Specifier (Text) */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Please Specify..."
            className={inputStyle}
            {...register("propertyTypeNote")}
          />
        </div>

        </div>

        {/* Bedrooms */}
        <div className="flex items-center gap-3 w-full  lg:w-[50%]">
          <label className=" text-sm font-medium">Bedrooms:</label>
          <select
            className={inputStyle}
            value={bedrooms || ""}
            onChange={(e) =>
              setValue("bedroom", Number(e.target.value), {
                shouldValidate: true,
              })
            }
          >
            {bedroomOptions.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>

        {/* Additional Room */}
        <div className="flex flex-col lg:flex-row w-full gap-3">
            <div className="flex items-center gap-1 w-full">
            <label className="w-fit text-sm font-medium">Additional rooms</label>
            <select
                className={inputStyle}
                value={additionalRoom || ""}
                onChange={(e) =>
                setValue("additionalRoom", e.target.value, {
                    shouldValidate: true,
                })
                }
            >
                <option value="" disabled>
                Select room
                </option>
                {additionalRooms.map((room) => (
                <option key={room} value={room}>
                    {room}
                </option>
                ))}
            </select>
            </div>

            {/* Additional Room Note */}
            <div className="w-full">
            <input
                type="text"
                placeholder="Please Specify..."
                className={inputStyle}
                {...register("additionalRoomNote")}
            />
            </div>

        </div>
      </div>
    </section>
  );
}
