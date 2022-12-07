interface PercentageRingProps {
  text: string;
  size: number;
  percentage: number;
  strokeWidth: number;
}

export default function PercentageRing({
  text,
  size,
  percentage,
  strokeWidth,
}: PercentageRingProps) {
  const radius = size / 2;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        className="absolute top-0"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-black font-mono text-xs uppercase tracking-widest dark:fill-white"
        >
          {text}
        </text>
        <circle
          cx={radius}
          cy={radius}
          strokeWidth={strokeWidth}
          r={radius - strokeWidth}
          strokeLinecap="round"
          fill="none"
          className="stroke-gray-200 dark:stroke-gray-1000"
        />
        <circle
          cx={radius}
          cy={radius}
          strokeWidth={strokeWidth}
          r={radius - strokeWidth}
          pathLength="100"
          strokeDasharray={`${Math.floor(percentage * 100)} 100`}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90, ${radius}, ${radius})`}
          className="stroke-blue"
        >
          <animate
            attributeName="stroke-dasharray"
            values={`0 100;${Math.floor(percentage * 100)} 100`}
            keyTimes="0;1"
            keySplines="0.5 0 0.5 1"
            dur="1"
            calcMode="spline"
          />
        </circle>
      </svg>
    </div>
  );
}
