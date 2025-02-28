const plans = [
    { name: "Free", price: "$0", features: ["Basic Setup", "1 Project"] },
    { name: "Pro", price: "$9/mo", features: ["Unlimited Projects", "Auto Updates"] },
    { name: "Enterprise", price: "$29/mo", features: ["Team Collaboration", "Priority Support"] }
  ];
  
  const Pricing = () => {
    return (
      <section className="py-12 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-md">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-xl">{plan.price}</p>
              <ul className="mt-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">{feature}</li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Pricing;
  