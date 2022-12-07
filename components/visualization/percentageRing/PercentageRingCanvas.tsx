import { useEffect, useRef } from "react";
import { useAtom } from "jotai";

import PercentageRing from "utils/percentageRing";
import { themeAtom } from "components/ThemeToggle";

interface PercentageRingCanvasProps {
  id: string;
  percentage: number;
  text: string;
}

export default function PercentageRingCanvas({
  id,
  percentage,
  text,
}: PercentageRingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theme] = useAtom(themeAtom);

  useEffect(() => {
    if (canvasRef.current) {
      const percentageRing = new PercentageRing(canvasRef.current, {
        percentage: percentage,
        text: text,
      });

      console.log(percentageRing);

      percentageRing.init();
    }
  }, [theme]);

  return <canvas ref={canvasRef} height="176" width="176" id={id} />;
}
