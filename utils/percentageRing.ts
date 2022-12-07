import resolveConfig from "tailwindcss/resolveConfig";
import { Config } from "tailwindcss";

import tailwindConfig from "tailwind.config.js";

const config = resolveConfig(tailwindConfig as Config) as any;
const theme = config.theme;

interface PercentageRingOptions {
  percentage: number;
  text?: string;
  radius?: number;
  strokeWidth?: number;
  colors?: string[];
  speed?: number;
}

export default class PercentageRing {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  centerX: number;
  centerY: number;
  percentage: number;
  text?: string;
  radius: number;
  strokeWidth: number;
  colors: string[];
  speed: number;

  constructor(
    canvasElement: HTMLCanvasElement,
    options: PercentageRingOptions
  ) {
    const {
      percentage,
      text,
      radius = 72,
      strokeWidth = 16,
      colors = ["#34C759", "#0A84FF", "#AF52DE"],
      speed = 2,
    } = options;
    const canvas = canvasElement;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Unable to get canvas context");
    }

    this.scaleCanvas(canvas, ctx);
    const rect = canvas.getBoundingClientRect();
    // calculate center values based on bounding rect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    this.canvas = canvas;
    this.ctx = ctx;
    this.centerX = centerX;
    this.centerY = centerY;
    this.percentage = percentage;
    this.text = text;
    this.radius = radius;
    this.strokeWidth = strokeWidth;
    this.colors = colors;
    this.speed = speed;
  }

  scaleCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
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

  init(): void {
    window.requestAnimationFrame(() => this.draw(0));
  }

  draw(currentPathLength: number): void {
    // increment the ring's path length based on speed value
    currentPathLength += this.speed;

    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.text) {
      this.drawText(this.text);
    }

    this.drawBackgroundArc();
    this.drawArc(currentPathLength);
    this.ctx.restore();

    // short circuit when path length reaches percentage of total path
    if (currentPathLength >= this.percentage) {
      return;
    }

    window.requestAnimationFrame(() => this.draw(currentPathLength));
  }

  drawText(text: string): void {
    const FONT_SIZE = "12px";
    const TEXT_BASELINE = "middle";
    const TEXT_ALIGN = "center";

    const font = `${FONT_SIZE} ${theme.fontFamily.mono[0]}`;

    this.ctx.fillStyle = document.documentElement.classList.contains("dark")
      ? "white"
      : "black";
    this.ctx.font = font;
    this.ctx.textBaseline = TEXT_BASELINE;
    this.ctx.textAlign = TEXT_ALIGN;
    this.ctx.fillText(text, this.centerX, this.centerY);
  }

  drawBackgroundArc(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
    this.ctx.lineWidth = this.strokeWidth;
    this.ctx.strokeStyle = document.documentElement.classList.contains("dark")
      ? theme.colors.gray[1100]
      : theme.colors.gray[200];
    this.ctx.stroke();
  }

  drawArc(currentPathLength: number): void {
    const LINE_CAP = "round";

    const gradient = this.buildConicGradient();

    this.ctx.beginPath();
    // rotate -90deg so that the arc begins at the top
    this.ctx.translate(this.centerX, this.centerY);
    this.ctx.rotate((-90 * Math.PI) / 180);
    this.ctx.translate(-this.centerX, -this.centerY);
    // draw arc
    this.ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      (currentPathLength / 100) * 2 * Math.PI,
      false
    );
    this.ctx.strokeStyle = gradient;
    this.ctx.lineCap = LINE_CAP;
    this.ctx.lineWidth = this.strokeWidth;
    this.ctx.stroke();
  }

  buildConicGradient(): CanvasGradient {
    const OFFSET = 0.04;
    // gradient starts slightly before start of arc to account for round linecap
    const gradient = this.ctx.createConicGradient(
      (2 - OFFSET) * Math.PI,
      this.centerX,
      this.centerY
    );
    // applies each gradient evenly distributed throughout arc
    this.colors.forEach((color, i) => {
      gradient.addColorStop(i / (this.colors.length - 1), color);
    });

    return gradient;
  }
}
