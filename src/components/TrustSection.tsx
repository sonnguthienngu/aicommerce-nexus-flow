
const logos = [
  { name: "Microsoft", src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
  { name: "Google", src: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" },
  { name: "Amazon", src: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" },
  { name: "Meta", src: "https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png" },
  { name: "IBM", src: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png" },
  { name: "Salesforce", src: "https://logos-world.net/wp-content/uploads/2020/12/Salesforce-Logo.png" }
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
            Trusted by leading companies worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo) => (
              <div key={logo.name} className="flex justify-center items-center">
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-2">500K+</div>
            <p className="text-gray-600">Automations Deployed</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
            <p className="text-gray-600">Uptime Guarantee</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
            <p className="text-gray-600">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
