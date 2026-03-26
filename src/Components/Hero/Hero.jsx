import Background from "./Background";
import Mandala from "./Mandala";
import Particles from "./Particles";
import Navbar from "./Navbar";
import Content from "./Content";
import ScrollHint from "./ScrollHint";
export default function Hero() {
  return (
    <div className="h-screen w-full bg-black text-white relative overflow-hidden font-cinzel">
      <Background />
      <Mandala />
      <Particles />
      <Navbar />
      <Content />
      <ScrollHint />
      <style>{`
        @keyframes particleMove {
          0% { transform: translate(0,0); opacity:0.3 }
          50% { transform: translate(10px,-15px); opacity:1 }
          100% { transform: translate(-10px,10px); opacity:0.3 }
        }
        .animate-particle {
          animation: particleMove 6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}