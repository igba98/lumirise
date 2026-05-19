import { routes } from "@/lib/content/routes";

const hub = { x: 446, y: 300, label: "Dar es Salaam" };

/** Schematic positions of the 7 destinations (viewBox 600×460). */
const nodes: Record<string, { x: number; y: number }> = {
  Kigali: { x: 250, y: 196 },
  Bujumbura: { x: 236, y: 246 },
  Lusaka: { x: 300, y: 392 },
  Blantyre: { x: 386, y: 384 },
  Nairobi: { x: 402, y: 150 },
  Kampala: { x: 296, y: 126 },
  Kinshasa: { x: 132, y: 280 },
};

/** Spec §4.8 / §8.2 — stylised regional map, Tanzania glowing gold,
 *  route lines pulsing out to the 7 destinations (§14). */
export function RouteMap() {
  return (
    <svg
      viewBox="0 0 600 460"
      className="h-auto w-full"
      role="img"
      aria-label="Cross-border routes from Dar es Salaam to seven countries"
    >
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a437" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#d4a437" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Abstract landmass */}
      <path
        d="M120 120 Q220 60 340 96 Q470 70 520 170 Q560 250 500 340 Q470 420 360 420 Q240 440 170 380 Q90 320 96 230 Q92 160 120 120 Z"
        fill="#143a63"
        stroke="#1e4daf"
        strokeWidth="1.5"
        opacity="0.55"
      />

      {/* Routes */}
      {routes.map((r, i) => {
        const n = nodes[r.to];
        if (!n) return null;
        return (
          <g key={r.to}>
            <line
              x1={hub.x}
              y1={hub.y}
              x2={n.x}
              y2={n.y}
              stroke="#d4a437"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity="0.45"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-24"
                dur="1.4s"
                begin={`${i * 0.15}s`}
                repeatCount="indefinite"
              />
            </line>
            <circle cx={n.x} cy={n.y} r="6" fill="#f4e5b8" />
            <circle cx={n.x} cy={n.y} r="6" fill="none" stroke="#d4a437">
              <animate
                attributeName="r"
                from="6"
                to="16"
                dur="2.4s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.8"
                to="0"
                dur="2.4s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={n.x}
              y={n.y - 14}
              textAnchor="middle"
              className="fill-white/70"
              fontSize="13"
              fontWeight="600"
            >
              {r.to}
            </text>
          </g>
        );
      })}

      {/* Hub: Dar es Salaam */}
      <circle cx={hub.x} cy={hub.y} r="60" fill="url(#hubGlow)" />
      <circle cx={hub.x} cy={hub.y} r="9" fill="#d4a437" />
      <text
        x={hub.x}
        y={hub.y + 30}
        textAnchor="middle"
        className="fill-gold"
        fontSize="14"
        fontWeight="700"
      >
        {hub.label}
      </text>
    </svg>
  );
}
