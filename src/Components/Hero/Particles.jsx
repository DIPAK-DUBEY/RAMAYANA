import React from "react";
 const Particles = () => (
  <div className="absolute inset-0">
    {Array.from({ length: 220 }).map((_, i) => {
      const isBlue = Math.random() > 0.5;
      return (
        <span
          key={i}
          className="absolute rounded-full animate-particle"
          style={{
            background: isBlue
              ? "rgba(59,130,246,0.8)"
              : "rgba(255,255,255,0.8)",
            width: Math.random() * 2 + "px",
            height: Math.random() * 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 5 + "s"
          }}
        />
      );
    })}
  </div>
);
export default Particles;