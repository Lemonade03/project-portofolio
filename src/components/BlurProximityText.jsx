import { useState } from "react";
import BlurText from "./BlurText";
import VariableProximity from "./VariableProximity";

export default function BlurProximityText({
  text,
  containerRef,
  delay = 150,
  direction = "top",
  className = "",
}) {
  const [showProximity, setShowProximity] = useState(false);

  return (
    <div className={className}>
      {!showProximity ? (
        // Tahap pertama: tampil dengan animasi blur
        <BlurText
          text={text}
          delay={delay}
          animateBy="words"
          direction={direction}
          onAnimationComplete={() => setShowProximity(true)}
          className={className}
        />
      ) : (
        // Tahap kedua: setelah blur selesai, ganti jadi VariableProximity
        <VariableProximity
          label={text}
          className="variable-proximity-demo"
          fromFontVariationSettings="'wght' 800, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      )}
    </div>
  );
}
