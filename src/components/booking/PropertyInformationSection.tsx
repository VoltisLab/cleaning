'use client';

import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { FormData } from './BookingForm';
import InputField from '../ui/InputField';
import DropdownField from '../ui/DropdownField';

type Props = {
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  watch: UseFormWatch<FormData>;
};

const propertyTypes = ['Flat', 'Duplex', 'Bungalow', 'Detached', 'Other'];
const additionalRooms = ['Hallway', 'Garage', 'Study', 'Pantry', 'Other'];
const bedroomOptions = ['0', '1', '2', '3', '4', '5+'];

export default function PropertyInformationSection({
  register,
  setValue,
  watch,
}: Props) {
  const type = watch('propertyType');
  const bedrooms = watch('bedroom');
  const additionalRoom = watch('additionalRoom');

  return (
    <section className="space-y-6">
      <h3 className="text-lg font-semibold">Property Information</h3>

      {/* Property Type */}
      <div className="flex lg:flex-row flex-col items-center gap-3">
        <DropdownField
          name="propertyType"
          value={type || ''}
          onChange={(val) => setValue('propertyType', val, { shouldValidate: true })}
          options={propertyTypes}
          placeholder="Select property type"
        />

        <InputField
          name="propertyTypeNote"
          placeholder="Please specify (if not listed)"
          register={register('propertyTypeNote')}
          disabled={type !== 'Other'}
        />
      </div>

      {/* Bedrooms */}
      <div className="w-full lg:w-[50%]">
        <DropdownField
          name="bedroom"
          value={bedrooms || ''}
          onChange={(val) => setValue('bedroom', Number(val), { shouldValidate: true })}
          options={bedroomOptions}
          placeholder="Number of bedrooms"
        />
      </div>

      {/* Additional Room */}
      <div className="flex flex-col lg:flex-row items-center gap-3">
        <DropdownField
          name="additionalRoom"
          value={additionalRoom || ''}
          onChange={(val) => setValue('additionalRoom', val, { shouldValidate: true })}
          options={additionalRooms}
          placeholder="Additional room type"
        />

        <InputField
          name="additionalRoomNote"
          placeholder="Please specify (if not listed)"
          register={register('additionalRoomNote')}
          disabled={additionalRoom !== 'Other'}
        />
      </div>
    </section>
  );
}
