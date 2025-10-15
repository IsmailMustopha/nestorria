import React from "react";
import { assets } from "../assets/data";

const Cta = () => {
  return (
    <section className="bg-[#fffbee] pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center bg-white/70 backdrop-blur-sm border border-yellow-100 py-14 md:py-20 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-black/80 text-white px-4 py-1.5 ring-1 ring-slate-900/10 rounded-full text-xs uppercase tracking-wide">
            <img
              src={assets.rocket}
              alt="Rocket Icon"
              width={18}
              className="invert"
            />
            <span>Trusted by Experts</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mt-5 leading-snug text-slate-800">
            Sell or Rent Faster with{" "}
            <span className="text-secondary">Expert Strategies</span>
            <br />
            and Real Support!
          </h2>

          {/* Description */}
          <p className="text-slate-600 mt-4 max-w-xl text-sm md:text-base">
            Achieve your goals faster with personalized strategies, hands-on
            support, and results that speak for themselves.
          </p>

          {/* Button */}
          <button
            type="button"
            className="bg-secondary text-white font-medium px-6 py-3 mt-6 rounded-full shadow-md hover:bg-secondary/90 transition-all duration-300"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
