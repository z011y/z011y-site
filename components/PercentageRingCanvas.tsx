import { useEffect, useRef } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import type { Config } from "tailwindcss";
import tailwindConfig from "../tailwind.config.js";

const config = resolveConfig(tailwindConfig as Config);
const theme = config.theme;

interface Props {
  id: string;
  percentage: number;
  text: string;
}

export default function PercentageRingCanvas({ id, percentage, text }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function init() {
    window.requestAnimationFrame(() => draw(0));
  }

  function scaleCanvas(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) {
    // Get the DPR and size of the canvas
    const dpr = window.devicePixelRatio;
    const rect = canvas.getBoundingClientRect();
    // Set the "actual" size of the canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    // Scale the context to ensure correct drawing operations
    ctx.scale(dpr, dpr);
    // Set the "drawn" size of the canvas
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }

  function draw(currentPathLength: number) {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (canvas && ctx) {
      scaleCanvas(canvas, ctx);
      const rect = canvas.getBoundingClientRect();
      // calculate center values based on bounding rect
      const x = rect.width / 2;
      const y = rect.height / 2;
      const radius = 72;
      const colors = ["#34C759", "#0A84FF", "#AF52DE"];
      const strokeWidth = 16;
      const maxPathLength = percentage; // out of 100
      const speed = 2; // rate of change per frame

      currentPathLength += speed;

      // gradient starts slightly before start of arc to account for round linecap
      const gradient = ctx.createConicGradient(1.96 * Math.PI, x, y);
      // applies each gradient evenly distributed throughout arc
      colors.forEach((color, i) => {
        gradient.addColorStop(i / (colors.length - 1), color);
      });

      // draw text
      ctx.fillStyle = document.documentElement.classList.contains("dark")
        ? "white"
        : "black";
      ctx.font = "12px JetBrains Mono";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(text, x, y);

      // draw background arc
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = document.documentElement.classList.contains("dark")
        ? theme?.colors?.gray[1100]
        : theme?.colors?.gray[200];
      ctx.stroke();

      ctx.save();
      ctx.beginPath();
      // rotate -90deg so that the arc begins at the top
      ctx.translate(x, y);
      ctx.rotate((-90 * Math.PI) / 180);
      ctx.translate(-x, -y);
      // draw arc
      ctx.arc(x, y, radius, 0, (currentPathLength / 100) * 2 * Math.PI, false);
      ctx.strokeStyle = gradient;
      ctx.lineCap = "round";
      ctx.lineWidth = strokeWidth;
      ctx.stroke();
      ctx.restore();

      // short circuit when maxPathLength reached
      if (currentPathLength >= maxPathLength) {
        return;
      }

      window.requestAnimationFrame(() => draw(currentPathLength));
    }
  }

  // TODO: rerender on theme change
  useEffect(() => {
    init();
  });

  return <canvas ref={canvasRef} height="176" width="176" id={id} />;
}
