import React from "react";
import { PricingCard } from "../components/PricingCard";

function Pricing() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      </div>
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className=" mb-4 pt-10">
            Simple, Transparent Pricing for Teams of All Sizes
          </h2>
          <p className=" text-lg max-w-2xl mx-auto">
            Start for free and scale as you go. No hidden fees, ever.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            name="Starter"
            price="$0"
            priceNote="/ month"
            features={[
              "1 Project",
              "10,000 API Calls/mo",
              "Basic Analytics",
              "Community Support",
            ]}
            button="Start for Free"
          />
          <PricingCard
            name="Pro"
            price="$49"
            priceNote="/ month"
            features={[
              "10 Projects",
              "1 Million API Calls/mo",
              "AI-Powered Analytics",
              "Advanced Security",
              "Email Support",
            ]}
            button="Choose Pro"
            highlight
          />
          <PricingCard
            name="Enterprise"
            price="Let's Talk"
            features={[
              "Unlimited Projects",
              "Custom API Call Volume",
              "On-Premise Deployment",
              "Security Audits",
              "Dedicated 24/7 Support",
            ]}
            button="Contact Sales"
          />
        </div>
      </section>
    </div>
  );
}

export default Pricing;
