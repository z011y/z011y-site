export default function GradientText(text: string) {
  return (
    <svg width="768" height="72">
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#34C759" />
          <stop offset="50%" stopColor="#0A84FF" />
          <stop offset="100%" stopColor="#AF52DE" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="url(#gradient)"
        className="text-7xl font-black"
      >
        {text}
      </text>
    </svg>
  );
}
