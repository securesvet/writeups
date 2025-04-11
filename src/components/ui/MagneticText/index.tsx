import { useRef, useEffect, useState } from "react";

type MagneticTextType = {
  text: string;
  startBold?: boolean;
};

const MagneticText = ({ text, startBold = false }: MagneticTextType) => {
  const maxWeight = 900;
  const minWeight = 400;
  const containerRef = useRef<HTMLDivElement>(null);
  const [weights, setWeights] = useState<number[]>(
    new Array(text.length).fill(startBold ? maxWeight : minWeight)
  );

  const handleInteractionMove = (x: number, y: number) => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll("span");
    const newWeights: number[] = [];

    letters.forEach((span) => {
      const rect = span.getBoundingClientRect();
      const dx = x - (rect.left + rect.width / 2);
      const dy = y - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const multiplier = 5;

      const weight = startBold
        ? Math.min(minWeight + multiplier * dist, maxWeight)
        : Math.max(minWeight, maxWeight - multiplier * dist);
      newWeights.push(weight);
    });

    setWeights(newWeights);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleInteractionMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    if (touch) {
      handleInteractionMove(touch.clientX, touch.clientY);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const resetWeights = () =>
      setWeights(
        new Array(text.length).fill(startBold ? maxWeight : minWeight)
      );

    container?.addEventListener("mousemove", handleMouseMove);
    container?.addEventListener("mouseleave", resetWeights);
    container?.addEventListener("touchmove", handleTouchMove);
    container?.addEventListener("touchend", resetWeights);
    container?.addEventListener("touchcancel", resetWeights);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
      container?.removeEventListener("mouseleave", resetWeights);
      container?.removeEventListener("touchmove", handleTouchMove);
      container?.removeEventListener("touchend", resetWeights);
      container?.removeEventListener("touchcancel", resetWeights);
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="flex gap-[0.05em] cursor-pointer"
      style={{
        fontFamily: '"Inter var", sans-serif',
        userSelect: "text",
        WebkitTapHighlightColor: "transparent", // removes tap highlight on mobile
      }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            fontVariationSettings: `"wght" ${weights[i] || 400}`,
            transition: "font-variation-settings 0.3s ease",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default MagneticText;
