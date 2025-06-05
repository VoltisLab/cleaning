const steps = [
  {
    id: 1,
    title: "Booking",
    description: "From the category, select the service you are looking for.",
  },
  {
    id: 2,
    title: "Book your schedule",
    description: "Select your convenient time slot.",
  },
  {
    id: 3,
    title: "Place Order",
    description: "Confirm your order by clicking ‘Place order’.",
  },
  {
    id: 4,
    title: "Live",
    description: "From the category, select the service you are looking for.",
  },
];

export default function HowWeWork() {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-bold text-[#051625] mb-4">How We Work</h1>
      <div className="text-[#838B95] space-y-6 relative mb-10">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-3 relative z-10">
            <p className="size-16 border border-[#838B952B] rounded-full flex items-center justify-center text-2xl font-bold text-[#4977E5] bg-white shrink-0">
              {step.id}
            </p>

            <div>
              <h2 className="font-bold text-[#051625] text-lg">{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
        <div className="absolute h-[80%] top-5 md:top-0 left-8 md:h-full border-r border-[#4977E5] border-dashed"></div>
      </div>
      <div className="h-px bg-[#838B95]"></div>
    </section>
  );
}
