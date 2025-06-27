"use client";

type Props = {
  isSubmitting?: boolean;
};

export default function SubmitButton({ isSubmitting = false }: Props) {
  return (
    <div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#4977E5] hover:bg-[#3a63c2] text-white font-medium py-3 rounded-full transition ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit Booking"}
      </button>
    </div>
  );
}
