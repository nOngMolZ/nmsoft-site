import React from "react";
import { abilities } from "../constants";

const FeatureCards = () => {

  return (
    <section id="services" className="w-full padding-x-lg py-20 relative z-10 bg-black-100">
      <div className="flex flex-col gap-5 text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-sm md:text-base font-bold tracking-widest uppercase text-blue-50">Why NMSoft</h2>
        <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-accent)' }}>
          Our Approach to Engineering
        </h3>
        <p className="text-text-muted mt-2 text-lg">
          We combine technical excellence with strategic thinking to deliver solutions that scale.
        </p>
      </div>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            className="card-border rounded-2xl p-8 flex flex-col gap-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(109,69,206,0.12)] group"
            style={{
              transform: "translateZ(0)",
            }}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500">
              <img src={imgPath} alt={title} className="w-8 h-8 object-contain filter invert opacity-80 group-hover:opacity-100 group-hover:brightness-150 transition-all duration-500" />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-3 tracking-wide group-hover:text-blue-50 transition-colors duration-300">{title}</h3>
              <p className="text-text-muted text-base leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
