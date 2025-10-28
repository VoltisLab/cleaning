'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface FormData {
  fullName: string;
  dob: string;
  niNumber: string;
  homeAddress: string;
  postcode: string;
  city: string;
  mobileNumber: string;
  emailAddress: string;
  rightToWork: 'yes' | 'no' | '';
  ukDriversLicense: 'yes' | 'no' | '';
  euDriversLicense: 'yes' | 'no' | '';
  // Section 2
  position: string;
  workingPattern: string;
  // Section 3
  availability: {
    [key: string]: string;
  };
  cleaningExperience: 'yes' | 'no' | '';
  experienceDetails: string;
  // Section 4
  previousCleaningExperience: 'yes' | 'no' | '';
  experienceDescription: string;
  cleaningType: string;
  cleaningProducts: string;
  // Section 5
  educationRows: Array<{
    school: string;
    dateAttended: string;
    qualifications: string;
  }>;
  // Section 6
  employmentRows: Array<{
    employer: string;
    position: string;
    dates: string;
    reasonForLeaving: string;
  }>;
  // Section 7
  referenceRows: Array<{
    name: string;
    relationship: string;
    phone: string;
    email: string;
  }>;
  // Section 8
  criminalConvictions: 'yes' | 'no' | '';
  convictionDetails: string;
  // Section 9
  declaration: boolean;
}

const ApplicationForm = () => {
    const searchParams = useSearchParams();


  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dob: '',
    niNumber: '',
    homeAddress: '',
    postcode: '',
    city: '',
    mobileNumber: '',
    emailAddress: '',
    rightToWork: '',
    ukDriversLicense: '',
    euDriversLicense: '',
    position: '',
    workingPattern: '',
    availability: {
      monday1: '',
      monday2: '',
      monday3: '',
      monday4: '',
      monday5: '',
      monday6: '',
      monday7: '',
    },
    cleaningExperience: '',
    experienceDetails: '',
    previousCleaningExperience: '',
    experienceDescription: '',
    cleaningType: '',
    cleaningProducts: '',
    educationRows: [
      { school: '', dateAttended: '', qualifications: '' }
    ],
    employmentRows: [
      { employer: '', position: '', dates: '', reasonForLeaving: '' }
    ],
    referenceRows: [
      { name: '', relationship: '', phone: '', email: '' }
    ],
    criminalConvictions: '',
    convictionDetails: '',
    declaration: false
  });

  useEffect(() => {
    const positionParam = searchParams.get("position");
    if (positionParam && positionParam.trim() !== "") {
      setFormData(prev => ({
        ...prev,
        position: positionParam
      }));
    }
  }, [searchParams]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAvailabilityChange = (day: string, timeSlot: 'mornings' | 'afternoons' | 'evenings') => {
    setFormData(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: timeSlot
      }
    }));
  };

  // Education functions
  const addEducationRow = () => {
    setFormData(prev => ({
      ...prev,
      educationRows: [
        ...prev.educationRows,
        { school: '', dateAttended: '', qualifications: '' }
      ]
    }));
  };

  const updateEducationRow = (index: number, field: keyof FormData['educationRows'][0], value: string) => {
    setFormData(prev => ({
      ...prev,
      educationRows: prev.educationRows.map((row, i) => 
        i === index ? { ...row, [field]: value } : row
      )
    }));
  };

  // Employment functions
  const addEmploymentRow = () => {
    setFormData(prev => ({
      ...prev,
      employmentRows: [
        ...prev.employmentRows,
        { employer: '', position: '', dates: '', reasonForLeaving: '' }
      ]
    }));
  };

  const updateEmploymentRow = (index: number, field: keyof FormData['employmentRows'][0], value: string) => {
    setFormData(prev => ({
      ...prev,
      employmentRows: prev.employmentRows.map((row, i) => 
        i === index ? { ...row, [field]: value } : row
      )
    }));
  };

  // Reference functions
  const addReferenceRow = () => {
    setFormData(prev => ({
      ...prev,
      referenceRows: [
        ...prev.referenceRows,
        { name: '', relationship: '', phone: '', email: '' }
      ]
    }));
  };

  const updateReferenceRow = (index: number, field: keyof FormData['referenceRows'][0], value: string) => {
    setFormData(prev => ({
      ...prev,
      referenceRows: prev.referenceRows.map((row, i) => 
        i === index ? { ...row, [field]: value } : row
      )
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  // Component definitions
  const RadioGroup = ({ 
    question, 
    value, 
    onChange 
  }: { 
    question: string; 
    value: 'yes' | 'no' | ''; 
    onChange: (value: 'yes' | 'no') => void;
  }) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
      <span className="text-gray-900 font-medium text-sm sm:flex-1 sm:mr-6">
        {question}
      </span>
      <div className="flex items-center space-x-6 sm:space-x-8">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="radio"
              name={question}
              value="yes"
              checked={value === 'yes'}
              onChange={() => onChange('yes')}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              value === 'yes' 
                ? 'border-[#4977E5] bg-[#4977E5]' 
                : 'border-gray-300 bg-white'
            }`}>
              {value === 'yes' && (
                <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </div>
          </div>
          <span className="ml-2 text-sm text-gray-700 font-medium">Yes</span>
        </label>
        
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="radio"
              name={question}
              value="no"
              checked={value === 'no'}
              onChange={() => onChange('no')}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              value === 'no' 
                ? 'border-[#4977E5] bg-[#4977E5]' 
                : 'border-gray-300 bg-white'
            }`}>
              {value === 'no' && (
                <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </div>
          </div>
          <span className="ml-2 text-sm text-gray-700 font-medium">No</span>
        </label>
      </div>
    </div>
  );

  const DropdownField = ({ 
    placeholder, 
    value, 
    onChange 
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
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#4977E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  const WorkingPatternDropdown = ({ 
    placeholder, 
    value, 
    onChange 
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
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
        <option value="flexible">Flexible</option>
        <option value="weekends">Weekends Only</option>
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-[#4977E5] rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#4977E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  const RadioCell = ({ 
    checked, 
    onChange,
    name,
    value
  }: { 
    checked: boolean; 
    onChange: () => void;
    name: string;
    value: string;
  }) => (
    <div className="flex justify-center">
      <label className="cursor-pointer">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
          checked 
            ? 'border-[#4977E5] bg-[#4977E5]' 
            : 'border-gray-300 bg-white'
        }`}>
          {checked && (
            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
      </label>
    </div>
  );

  const CleaningTypeDropdown = ({ 
    placeholder, 
    value, 
    onChange 
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
        <option value="homes">Homes</option>
        <option value="offices">Offices</option>
        <option value="airbnb">Airbnb</option>
        <option value="after-builders">After-builders</option>
        <option value="commercial">Commercial</option>
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-[#4977E5] rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#4977E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  const QualificationsDropdown = ({ 
    value, 
    onChange 
  }: { 
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
          BSc
        </option>
        <option value="bsc">BSc</option>
        <option value="msc">MSc</option>
        <option value="phd">PhD</option>
        <option value="diploma">Diploma</option>
        <option value="certificate">Certificate</option>
        <option value="gcse">GCSE</option>
        <option value="a-level">A-Level</option>
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-[#4977E5] rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#4977E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className='max-w-[1280px] mx-auto pt-16 pb-40 md:pb-32 xl:py-16 px-4 sm:px-6 xl:px-8'>
    <div className='w-full xl:w-2/3 xl:px-0'>
      <div className="bg-white py-4 md:py-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Application Form</h1>
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-6 md:mb-8">Section 1 - Personal Details</h2>
        </div>

        {/* Section 1 - Form Fields */}
        <div className="space-y-4 md:space-y-6">
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
            />
          </div>

          {/* DOB */}
          <div>
            <input
              type="text"
              placeholder="DOB"
              value={formData.dob}
              onChange={(e) => handleInputChange('dob', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
            />
          </div>

          {/* NI Number */}
          <div>
            <input
              type="text"
              placeholder="NI Number"
              value={formData.niNumber}
              onChange={(e) => handleInputChange('niNumber', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
            />
          </div>

          {/* Home Address */}
          <div>
            <input
              type="text"
              placeholder="Home address"
              value={formData.homeAddress}
              onChange={(e) => handleInputChange('homeAddress', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
            />
          </div>

          {/* Postcode and City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Postcode"
              value={formData.postcode}
              onChange={(e) => handleInputChange('postcode', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
            />
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
            />
          </div>

          {/* Mobile Number and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Mobile number"
              value={formData.mobileNumber}
              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.emailAddress}
              onChange={(e) => handleInputChange('emailAddress', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
            />
          </div>
        </div>

        {/* Radio Button Questions */}
        <div className="mt-8 md:mt-12 space-y-1">
          <RadioGroup
            question="Do you have the right to work in the UK?"
            value={formData.rightToWork}
            onChange={(value) => handleInputChange('rightToWork', value)}
          />
          
          <RadioGroup
            question="Do you have a valid UK driver's license?"
            value={formData.ukDriversLicense}
            onChange={(value) => handleInputChange('ukDriversLicense', value)}
          />
          
          <RadioGroup
            question="Do you have a valid EU driver's license?"
            value={formData.euDriversLicense}
            onChange={(value) => handleInputChange('euDriversLicense', value)}
          />
        </div>

        {/* Section 2 - Position Details */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-6 md:mb-8">Section 2 - Position Details</h2>
          
          <div className="space-y-6">
            {/* Position Question */}
            <div>
              <div className="flex items-center mb-4">
                <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                <span className="text-gray-900 font-medium text-sm">
                  What Position are you applying for?
                </span>
              </div>
              <DropdownField
                placeholder="Select an available role"
                value={formData.position}
                onChange={(value) => handleInputChange('position', value)}
              />
            </div>

            {/* Working Pattern Question */}
            <div>
              <div className="flex items-center mb-4">
                <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                <span className="text-gray-900 font-medium text-sm">
                  What&apos;s your preferred working pattern?
                </span>
              </div>
              <WorkingPatternDropdown
                placeholder="Select an available role"
                value={formData.workingPattern}
                onChange={(value) => handleInputChange('workingPattern', value)}
              />
            </div>
          </div>
        </div>

        {/* Section 3 - Availability */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-6 md:mb-8">Section 3 - Availability</h2>
          
          {/* When are you available */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
              <span className="text-gray-900 font-medium text-sm">
                When are you available?
              </span>
            </div>

            {/* Availability Table - Mobile Optimized */}
            <div className="overflow-x-auto">
              {/* Desktop/Tablet Table */}
              <div className="hidden sm:block">
                {/* Table Header */}
                <div className="grid grid-cols-4 mb-4">
                  <div className="px-2 md:px-4 py-3 text-xs md:text-sm font-medium text-gray-900">
                    Day/Time
                  </div>
                  <div className="px-2 md:px-4 py-3 text-xs md:text-sm font-medium text-gray-900 text-center">
                    Mornings (9-12)
                  </div>
                  <div className="px-2 md:px-4 py-3 text-xs md:text-sm font-medium text-gray-900 text-center">
                    Afternoons(12-4)
                  </div>
                  <div className="px-2 md:px-4 py-3 text-xs md:text-sm font-medium text-gray-900 text-center">
                    Evenings (12-4)
                  </div>
                </div>

                {/* Table Rows */}
                {Object.keys(formData.availability).map((day) => (
                  <div key={day} className="grid grid-cols-4 mb-2">
                    <div className="px-2 md:px-4 py-4 text-xs md:text-sm text-gray-900">
                      Monday
                    </div>
                    <div className="px-2 md:px-4 py-4 relative" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <RadioCell
    checked={formData.availability[day] === 'mornings'}
    onChange={() => handleAvailabilityChange(day, 'mornings')}
    name={day}
    value="mornings"
  />
</div>
<div className="px-2 md:px-4 py-4 relative" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <RadioCell
    checked={formData.availability[day] === 'afternoons'}
    onChange={() => handleAvailabilityChange(day, 'afternoons')}
    name={day}
    value="afternoons"
  />
</div>
<div className="px-2 md:px-4 py-4 relative" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <RadioCell
    checked={formData.availability[day] === 'evenings'}
    onChange={() => handleAvailabilityChange(day, 'evenings')}
    name={day}
    value="evenings"
  />
</div>
                  </div>
                ))}
              </div>

              {/* Mobile Table */}
              <div className="sm:hidden">
                {Object.keys(formData.availability).map((day) => (
                  <div key={day} className="mb-6 p-4 border border-gray-200 rounded-lg">
                    <div className="text-sm font-medium text-gray-900 mb-4">Monday</div>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm text-gray-700">Mornings (9-12)</span>
                        <input
                          type="radio"
                          name={day}
                          value="mornings"
                          checked={formData.availability[day] === 'mornings'}
                          onChange={() => handleAvailabilityChange(day, 'mornings')}
                          className="w-4 h-4 text-[#4977E5] focus:ring-[#4977E5]"
                        />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm text-gray-700">Afternoons (12-4)</span>
                        <input
                          type="radio"
                          name={day}
                          value="afternoons"
                          checked={formData.availability[day] === 'afternoons'}
                          onChange={() => handleAvailabilityChange(day, 'afternoons')}
                          className="w-4 h-4 text-[#4977E5] focus:ring-[#4977E5]"
                        />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm text-gray-700">Evenings (12-4)</span>
                        <input
                          type="radio"
                          name={day}
                          value="evenings"
                          checked={formData.availability[day] === 'evenings'}
                          onChange={() => handleAvailabilityChange(day, 'evenings')}
                          className="w-4 h-4 text-[#4977E5] focus:ring-[#4977E5]"
                        />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cleaning Experience Question */}
          <div className="mt-12">
            <RadioGroup
              question="Do you have previous cleaning experience?"
              value={formData.cleaningExperience}
              onChange={(value) => handleInputChange('cleaningExperience', value)}
            />
          </div>

          {/* Experience Details Text Field */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Please provide details of your experience"
              value={formData.experienceDetails}
              onChange={(e) => handleInputChange('experienceDetails', e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
            />
          </div>
        </div>

        {/* Section 4 - Experience */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-6 md:mb-8">Section 4 - Experience</h2>
          
          {/* Previous Cleaning Experience Question */}
          <div className="mb-8">
            <RadioGroup
              question="Do you have previous cleaning experience?"
              value={formData.previousCleaningExperience}
              onChange={(value) => handleInputChange('previousCleaningExperience', value)}
            />
          </div>

          {/* Experience Description */}
          <div className="mb-6">
            <div className="relative">
              <textarea
                placeholder="If yes, please describe your experience"
                value={formData.experienceDescription}
                onChange={(e) => handleInputChange('experienceDescription', e.target.value)}
                maxLength={1000}
                rows={4}
                className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors resize-none"
              />
              <div className="absolute bottom-3 right-4 text-xs text-gray-400">
                {1000 - formData.experienceDescription.length} left
              </div>
            </div>
          </div>

          {/* Cleaning Type Question */}
          <div className="mb-6">
            <div className="flex items-start mb-4">
              <span className="w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
              <span className="text-gray-900 font-medium text-sm leading-relaxed">
                What kind of cleaning are you most experienced in? (e.g. homes, offices, Airbnb, after-builders)
              </span>
            </div>
            <CleaningTypeDropdown
              placeholder="Select an option"
              value={formData.cleaningType}
              onChange={(value) => handleInputChange('cleaningType', value)}
            />
          </div>

          {/* Cleaning Products/Equipment */}
          <div className="mb-6">
            <div className="flex items-start mb-4">
              <span className="w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
              <span className="text-gray-900 font-medium text-sm leading-relaxed">
                List any cleaning products/equipment you&apos;re confident using:
              </span>
            </div>
            <textarea
              placeholder="List here or N/A"
              value={formData.cleaningProducts}
              onChange={(e) => handleInputChange('cleaningProducts', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors resize-none"
            />
          </div>
        </div>

        {/* Section 5 - Education and Qualifications */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-6 md:mb-8">Section 5 - Education and Qualifications</h2>
          
          {formData.educationRows.map((row, index) => (
            <div key={index} className="mb-6">
              {/* Mobile Layout */}
              <div className="space-y-4 sm:hidden">
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">School / College</label>
                  <input
                    type="text"
                    placeholder="Write an answer"
                    value={row.school}
                    onChange={(e) => updateEducationRow(index, 'school', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Date attended</label>
                  <input
                    type="text"
                    placeholder="Write an answer"
                    value={row.dateAttended}
                    onChange={(e) => updateEducationRow(index, 'dateAttended', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Qualifications</label>
                  <QualificationsDropdown
                    value={row.qualifications}
                    onChange={(value) => updateEducationRow(index, 'qualifications', value)}
                  />
                </div>
              </div>

              {/* Desktop/Tablet Layout */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">School / College</label>
                  <input
                    type="text"
                    placeholder="Write an answer"
                    value={row.school}
                    onChange={(e) => updateEducationRow(index, 'school', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Date attended</label>
                  <input
                    type="text"
                    placeholder="Write an answer"
                    value={row.dateAttended}
                    onChange={(e) => updateEducationRow(index, 'dateAttended', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Qualifications</label>
                  <QualificationsDropdown
                    value={row.qualifications}
                    onChange={(value) => updateEducationRow(index, 'qualifications', value)}
                  />
                </div>
              </div>
            </div>
          ))}
          
          <button
            type="button"
            onClick={addEducationRow}
            className="bg-[#4977E5] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors mt-4 w-full sm:w-auto"
          >
            Add row
          </button>
        </div>

        {/* Section 6 - Employment History */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-6 md:mb-8">Section 6 - Employment History</h2>
          
          {formData.employmentRows.map((row, index) => (
            <div key={index} className="mb-8">
              {/* Mobile Layout */}
              <div className="space-y-4 sm:hidden">
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Employer</label>
                  <input
                    type="text"
                    placeholder="Write an answer"
                    value={row.employer}
                    onChange={(e) => updateEmploymentRow(index, 'employer', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Position</label>
                  <input
                    type="text"
                    placeholder="Write an answer"
                    value={row.position}
                    onChange={(e) => updateEmploymentRow(index, 'position', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Dates</label>
                  <input
                    type="text"
                    placeholder="BSc"
                    value={row.dates}
                    onChange={(e) => updateEmploymentRow(index, 'dates', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">
                    Reason for leaving
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="Write an answer"
                      value={row.reasonForLeaving}
                      onChange={(e) => updateEmploymentRow(index, 'reasonForLeaving', e.target.value)}
                      maxLength={1000}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors resize-none"
                    />
                    <div className="absolute bottom-3 right-4 text-xs text-gray-400">
                      {1000 - row.reasonForLeaving.length} Remaining
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop/Tablet Layout */}
              <div className="hidden sm:block">
                {/* Employer, Position, Dates Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-2 block">Employer</label>
                    <input
                      type="text"
                      placeholder="Write an answer"
                      value={row.employer}
                      onChange={(e) => updateEmploymentRow(index, 'employer', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-2 block">Position</label>
                    <input
                      type="text"
                      placeholder="Write an answer"
                      value={row.position}
                      onChange={(e) => updateEmploymentRow(index, 'position', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-2 block">Dates</label>
                    <input
                      type="text"
                      placeholder="BSc"
                      value={row.dates}
                      onChange={(e) => updateEmploymentRow(index, 'dates', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                    />
                  </div>
                </div>
                
                {/* Reason for leaving */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-gray-900 mb-2 block">
                    Reason for leaving
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="Write an answer"
                      value={row.reasonForLeaving}
                      onChange={(e) => updateEmploymentRow(index, 'reasonForLeaving', e.target.value)}
                      maxLength={1000}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors resize-none"
                    />
                    <div className="absolute bottom-3 right-4 text-xs text-gray-400">
                      {1000 - row.reasonForLeaving.length} Remaining
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <button
            type="button"
            onClick={addEmploymentRow}
            className="bg-[#4977E5] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors mb-8 w-full sm:w-auto"
          >
            Add row
          </button>
        </div>

        {/* Section 7 - References */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-6 md:mb-8">Section 7 - References</h2>
          
          {formData.referenceRows.map((row, index) => (
            <div key={index} className="mb-8">
              {/* Mobile Layout */}
              <div className="space-y-4 sm:hidden">
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Write an answer"
                    value={row.name}
                    onChange={(e) => updateReferenceRow(index, 'name', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Relationship</label>
                  <input
                    type="text"
                    placeholder="Write an answer"
                    value={row.relationship}
                    onChange={(e) => updateReferenceRow(index, 'relationship', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter Phone number"
                    value={row.phone}
                    onChange={(e) => updateReferenceRow(index, 'phone', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={row.email}
                    onChange={(e) => updateReferenceRow(index, 'email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                  />
                </div>
              </div>

              {/* Desktop/Tablet Layout */}
              <div className="hidden sm:block">
                {/* Name, Relationship, Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-2 block">Name</label>
                    <input
                      type="text"
                      placeholder="Write an answer"
                      value={row.name}
                      onChange={(e) => updateReferenceRow(index, 'name', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-2 block">Relationship</label>
                    <input
                      type="text"
                      placeholder="Write an answer"
                      value={row.relationship}
                      onChange={(e) => updateReferenceRow(index, 'relationship', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-900 mb-2 block">Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter Phone number"
                      value={row.phone}
                      onChange={(e) => updateReferenceRow(index, 'phone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-gray-900 mb-2 block">Email</label>
                  <div className="max-w-xs">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={row.email}
                      onChange={(e) => updateReferenceRow(index, 'email', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-full text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <button
            type="button"
            onClick={addReferenceRow}
            className="bg-[#4977E5] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors mb-8 w-full sm:w-auto"
          >
            Add row
          </button>
        </div>

        {/* Section 8 - Additional Information */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-6 md:mb-8">Section 8 - Additional Information</h2>
          
          {/* Criminal Convictions Question */}
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-4 sm:space-y-0">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mr-3 mt-1"></span>
                <span className="text-gray-900 font-medium text-sm leading-relaxed">
                  Do you have any unspent criminal convictions?
                </span>
              </div>
              <div className="flex items-center space-x-6 sm:space-x-8">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="criminalConvictions"
                      value="yes"
                      checked={formData.criminalConvictions === 'yes'}
                      onChange={() => handleInputChange('criminalConvictions', 'yes')}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                      formData.criminalConvictions === 'yes' 
                        ? 'border-[#4977E5] bg-[#4977E5]' 
                        : 'border-gray-300 bg-white'
                    }`}>
                      {formData.criminalConvictions === 'yes' && (
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm text-gray-700 font-medium">Yes</span>
                </label>
                
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="criminalConvictions"
                      value="no"
                      checked={formData.criminalConvictions === 'no'}
                      onChange={() => handleInputChange('criminalConvictions', 'no')}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                      formData.criminalConvictions === 'no' 
                        ? 'border-[#4977E5] bg-[#4977E5]' 
                        : 'border-gray-300 bg-white'
                    }`}>
                      {formData.criminalConvictions === 'no' && (
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm text-gray-700 font-medium">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-4 italic">
            (If yes, please give brief details - this will not automatically disqualify you!)
          </div>

          {/* Conviction Details */}
          <div className="mb-6">
            <div className="relative">
              <textarea
                placeholder="If yes, please describe your experience"
                value={formData.convictionDetails}
                onChange={(e) => handleInputChange('convictionDetails', e.target.value)}
                maxLength={1000}
                rows={4}
                className="w-full px-4 py-3 border-2 border-[#C7C7C7] rounded-2xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#4977E5] transition-colors resize-none"
              />
              <div className="absolute bottom-3 right-4 text-xs text-gray-400">
                {1000 - formData.convictionDetails.length} left
              </div>
            </div>
          </div>
        </div>

        {/* Section 9 - Declaration */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-6 md:mb-8">Section 9 - Declaration</h2>
        </div>
      </div>

      
    </div>
    {/* Declaration and Submit */}
      <div className="mb-6 md:mb-8">
        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            checked={formData.declaration}
            onChange={(e) => setFormData(prev => ({ ...prev, declaration: e.target.checked }))}
            className="sr-only"
          />
          <div className={`w-5 h-5 border-2 rounded mt-0.5 mr-3 flex-shrink-0 transition-all duration-200 ${
            formData.declaration 
              ? 'border-[#4977E5] bg-[#4977E5]' 
              : 'border-gray-300 bg-white'
          }`}>
            {formData.declaration && (
              <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className="text-sm md:text-base font-lato text-gray-900 leading-relaxed">
            By ticking this box, I can I confirm that the information given in this application is true and complete. I understand that false information may disqualify me from employment or lead to dismissal.
          </span>
        </label>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-[#4977E5] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors w-full sm:w-auto"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default ApplicationForm;