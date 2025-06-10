const serviceStats = [
  { name: "Regular Cleaning", percentage: 70 },
  { name: "Pest Control Services", percentage: 80 },
  { name: "Specialize Cleaning Service", percentage: 45 },
];

export default function Services() {
  return (
    <section className="space-y-8 text-[#838B95]">
      <div className="space-y-5 text-[#838B95]">
        <h2 className="font-bold text-xl text-[#051625]">What to Expect</h2>
        <ul className="space-y-3 text-[15px]">
          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>Usage of professional cleaning tools</span>
          </li>

          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>Reasonable price</span>
          </li>

          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>Removal of deep stain</span>
          </li>
        </ul>
      </div>

      <div className="space-y-5 text-[#838B95]">
        <h2 className="font-bold text-xl text-[#051625]">
          Our Home Cleaning Services
        </h2>

        <ul className="space-y-3 text-[15px]">
          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>Bathroom Deep Cleaning (Withou Bathtub, Shower Corener)</span>
          </li>

          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>
              Sofa/Chair Cleaning (If need price will be share accordingly)
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>
              Kitchen Cleaning (Without Kitchen Hood, inside Cabinet clean, If
              need price will add accordingly)
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>Carpet Cleaning</span>
          </li>
        </ul>
      </div>

      <p className="text-[15px]">
        Whether you’re on the hunt for a remote job or are already working
        virtually, check out this list of the advantages of working from home,
        along with some of the top companies that hire for remote jobs.
      </p>

      <div className="space-y-6 w-full md:w-[70%] font-bold text-[15px]">
        {serviceStats.map((stat, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">{stat.name}</span>
              <span className="text-gray-700">{stat.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${stat.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[15px]">
        Hether you’re on the hunt for a remote job or are already working
        virtually, check out this list of the advantages of working from home,
        along with some of the top companies that hire for remote jobs.
      </p>

      <div className="space-y-5 text-[#838B95]">
        <h2 className="font-bold text-2xl md:text-3xl text-[#051625]">
          Only Use A Company You Know You Can Trust!
        </h2>

        <ul className="space-y-3 text-[15px]">
          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>
              As an artist you can leverage generative AI to overcome creative.
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>
              AI tools give access to abilities and functions for those without
              the budget.
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>
              AI can enhance existing art with additional stylizations and
              technical improvements
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <p className="size-1.5 bg-[#4977E5] rounded-full"></p>
            <span>
              Conceptualizing, drafting, and creating WIPs is easier with AI,
              cutting down the preparation time needed to create art.
            </span>
          </li>
        </ul>
      </div>

      {/* logos  */}
      <div className="font-extrabold text-3xl md:text-4xl flex flex-wrap justify-center gap-2 md:justify-between text-black">
        <div className="text-cyan-600">Busha</div>
        <div className="text-red-600">Betway</div>
        <div>fundall</div>
        <div className="text-green-500">Kuda</div>
      </div>

      <div className="h-px bg-[#838B95]"></div>
    </section>
  );
}
