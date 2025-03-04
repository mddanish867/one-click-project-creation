import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Luxe Essential",
      price: "$199",
      features: [
        "Premium Analytics",
        "Dedicated Support",
        "Custom Dashboard",
        "Priority Access",
      ],
      gradient: "from-rose-100 to-teal-100",
      popular: false,
    },
    {
      name: "Luxe Prestige",
      price: "$499",
      features: [
        "Advanced Intelligence",
        "24/7 Concierge",
        "Bespoke Solutions",
        "VIP Benefits",
      ],
      gradient: "from-purple-100 to-rose-100",
      popular: true,
    },
    {
      name: "Luxe Elite",
      price: "Custom",
      features: [
        "White-glove Service",
        "Personal Account Director",
        "Custom Development",
        "Enterprise Scale",
      ],
      gradient: "from-amber-100 to-violet-100",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-5xl font-extralight tracking-wider mb-6">
          Our Investment Plans
        </h2>
        <p className="text-center text-gray-400 max-w-md mx-auto mb-12">
          Choose the plan that best aligns with your luxury aspirations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-10 rounded-none shadow-xl bg-gradient-to-br ${plan.gradient} relative transition-all duration-500 hover:scale-105`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-rose-500 text-white py-1 px-4 rounded-full text-xs font-semibold">
                  Most Exclusive
                </span>
              )}
              <h3 className="text-3xl font-light mb-4 tracking-wide text-gray-900">
                {plan.name}
              </h3>
              <p className="text-5xl font-bold mb-6 text-gray-800">
                {plan.price}
                {plan.price !== "Custom" && <span className="text-lg">/mo</span>}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 tracking-wide">
                    <CheckCircle className="w-5 h-5 mr-3 text-rose-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-8 py-4 rounded-sm text-white bg-gradient-to-r from-rose-500 to-purple-500 transition-all duration-500 hover:from-purple-500 hover:to-rose-500">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
