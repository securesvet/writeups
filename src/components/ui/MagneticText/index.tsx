import { useRef, useEffect, useState } from "react";

type MagneticTextType = {
  text: string;
  startBold?: boolean;
  hint?: boolean;
};

const MagneticText = ({ text, startBold = false, hint }: MagneticTextType) => {
  const maxWeight = 900;
  const minWeight = 400;
  const containerRef = useRef<HTMLDivElement>(null);
  const [weights, setWeights] = useState<number[]>(
    new Array(text.length).fill(startBold ? maxWeight : minWeight)
  );

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll("span");
    const newWeights: number[] = [];

    letters.forEach((span) => {
      const rect = span.getBoundingClientRect();
      // Calculate distance from center
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const multiplier = 5;

      const weight = startBold
        ? Math.min(minWeight + multiplier * dist, maxWeight)
        : Math.max(minWeight, maxWeight - multiplier * dist);
      newWeights.push(weight);
    });

    setWeights(newWeights);
  };

  useEffect(() => {
    const handleLeave = () => {
      setWeights(
        new Array(text.length).fill(startBold ? maxWeight : minWeight)
      );
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);
    container?.addEventListener("mouseleave", handleLeave);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
      container?.removeEventListener("mouseleave", handleLeave);
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="flex gap-[0.05em] cursor-pointer"
      style={{
        fontFamily: '"Inter var", sans-serif', // Make sure variable font is loaded
        userSelect: "text", // Ensure the text is selectable
      }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            fontVariationSettings: `"wght" ${weights[i] || 400}`,
            transition: "font-variation-settings 0.3s ease", // Smooth transition
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default MagneticText;
