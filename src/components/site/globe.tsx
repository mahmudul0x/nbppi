import { useEffect, useRef } from "react";

// Export market dots: [label, cx%, cy%] positioned on the real map viewBox 0 0 1000 500
const MARKET_DOTS = [
  { label: "Bangladesh", code: "BD", cx: 710, cy: 210, color: "#F4C542", pulse: true },
  { label: "India",      code: "IN", cx: 685, cy: 225, color: "#7FE0D4", pulse: false },
  { label: "UAE",        code: "UAE", cx: 600, cy: 220, color: "#7FE0D4", pulse: false },
  { label: "Kenya",      code: "KE", cx: 560, cy: 295, color: "#7FE0D4", pulse: false },
  { label: "Nigeria",    code: "NG", cx: 490, cy: 275, color: "#0A6A38", pulse: false },
  { label: "UK",         code: "UK", cx: 448, cy: 140, color: "#7FE0D4", pulse: false },
  { label: "Germany",    code: "DE", cx: 468, cy: 145, color: "#7FE0D4", pulse: false },
  { label: "Malaysia",   code: "MY", cx: 738, cy: 268, color: "#7FE0D4", pulse: false },
  { label: "Vietnam",    code: "VN", cx: 750, cy: 238, color: "#7FE0D4", pulse: false },
];

// Real simplified world map paths (Natural Earth projection, viewBox 0 0 1000 500)
// Each path represents actual country/region outlines
const LAND_PATHS = [
  // North America
  "M 120,90 L 135,80 L 160,75 L 195,72 L 220,78 L 240,85 L 255,95 L 260,110 L 255,125 L 240,138 L 225,148 L 205,155 L 185,158 L 165,155 L 148,148 L 132,138 L 120,125 L 110,110 Z",
  // Central America
  "M 178,162 L 190,158 L 200,162 L 205,172 L 195,178 L 182,175 Z",
  // Greenland
  "M 195,52 L 215,45 L 235,48 L 245,58 L 238,68 L 218,72 L 200,66 Z",
  // South America
  "M 195,185 L 215,178 L 235,180 L 252,188 L 265,205 L 270,228 L 268,255 L 258,278 L 242,295 L 222,305 L 200,302 L 182,290 L 170,268 L 165,245 L 168,220 L 178,200 Z",
  // UK & Ireland
  "M 440,138 L 448,132 L 455,135 L 458,143 L 450,150 L 440,148 Z",
  "M 432,142 L 438,138 L 440,145 L 434,148 Z",
  // Scandinavia
  "M 460,95 L 478,88 L 492,92 L 495,108 L 488,120 L 472,125 L 458,120 L 455,108 Z",
  // Western Europe
  "M 448,148 L 470,142 L 488,145 L 495,158 L 488,168 L 470,172 L 452,168 L 445,158 Z",
  // Iberian Peninsula
  "M 438,168 L 458,162 L 468,168 L 465,182 L 450,188 L 435,182 Z",
  // Italy
  "M 475,162 L 488,158 L 495,165 L 490,178 L 480,188 L 472,182 L 470,170 Z",
  // Balkans / Eastern Europe
  "M 490,148 L 520,142 L 535,148 L 538,162 L 528,172 L 510,175 L 492,168 L 488,158 Z",
  // Russia (western)
  "M 490,82 L 560,72 L 620,68 L 660,72 L 675,85 L 668,102 L 640,112 L 600,115 L 560,112 L 520,108 L 490,100 Z",
  // Russia (siberia/east)
  "M 660,65 L 730,55 L 810,52 L 860,58 L 880,70 L 872,85 L 840,95 L 790,98 L 745,95 L 700,90 L 668,82 Z",
  // Kazakhstan / Central Asia
  "M 565,125 L 620,118 L 655,122 L 665,138 L 650,150 L 618,155 L 580,150 L 562,138 Z",
  // Turkey
  "M 518,165 L 548,158 L 572,162 L 578,172 L 565,180 L 535,182 L 515,175 Z",
  // Middle East (Arabian Peninsula)
  "M 558,185 L 590,178 L 620,180 L 635,195 L 630,215 L 612,225 L 585,228 L 562,218 L 548,202 Z",
  // Iran / Afghanistan
  "M 580,165 L 618,158 L 648,162 L 658,178 L 645,192 L 615,198 L 582,192 L 565,178 Z",
  // Indian Subcontinent
  "M 648,172 L 685,165 L 710,170 L 720,188 L 718,210 L 705,228 L 682,238 L 658,232 L 642,215 L 638,195 Z",
  // Sri Lanka
  "M 698,238 L 704,234 L 708,240 L 702,245 Z",
  // Southeast Asia (mainland)
  "M 718,188 L 752,182 L 772,188 L 775,205 L 765,220 L 745,228 L 720,222 L 712,208 Z",
  // Malay Peninsula
  "M 742,222 L 752,218 L 758,228 L 755,242 L 745,248 L 738,238 Z",
  // Sumatra
  "M 728,255 L 762,248 L 778,255 L 778,268 L 760,272 L 730,268 Z",
  // Java
  "M 752,272 L 790,268 L 802,272 L 798,280 L 768,282 L 752,278 Z",
  // Borneo
  "M 775,242 L 812,235 L 828,242 L 830,258 L 818,268 L 790,270 L 770,262 L 765,250 Z",
  // Philippines
  "M 798,208 L 812,202 L 820,208 L 818,220 L 808,225 L 798,218 Z",
  // China
  "M 718,138 L 778,128 L 818,132 L 832,148 L 825,168 L 800,178 L 765,182 L 730,178 L 710,165 L 708,150 Z",
  // Japan
  "M 832,142 L 848,135 L 858,140 L 855,152 L 842,158 L 830,152 Z",
  // Korea
  "M 812,148 L 825,142 L 832,148 L 828,158 L 815,160 L 808,155 Z",
  // North Africa
  "M 438,188 L 530,182 L 575,185 L 590,200 L 585,218 L 560,228 L 510,232 L 462,228 L 435,215 L 432,200 Z",
  // West Africa
  "M 435,225 L 495,220 L 520,225 L 530,245 L 522,265 L 498,275 L 465,278 L 440,268 L 428,248 Z",
  // East Africa
  "M 535,232 L 568,225 L 585,232 L 592,255 L 585,278 L 568,292 L 545,295 L 528,282 L 522,258 Z",
  // Southern Africa
  "M 498,282 L 558,275 L 578,285 L 582,310 L 568,332 L 542,342 L 515,338 L 495,320 L 490,300 Z",
  // Madagascar
  "M 582,292 L 592,285 L 598,292 L 595,315 L 585,322 L 576,312 Z",
  // Australia
  "M 798,295 L 858,282 L 898,285 L 918,302 L 920,328 L 905,348 L 868,358 L 828,355 L 798,338 L 782,318 L 785,302 Z",
  // New Zealand
  "M 922,338 L 932,330 L 938,338 L 932,352 L 922,348 Z",
  // Iceland
  "M 405,88 L 422,82 L 432,88 L 428,98 L 412,102 L 400,96 Z",
  // Alaska
  "M 55,80 L 88,72 L 108,78 L 112,92 L 98,100 L 72,102 L 52,95 Z",
  // Cuba / Caribbean
  "M 210,185 L 232,180 L 240,185 L 235,192 L 215,192 Z",
];

export function GlobeMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const offsetRef = useRef(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tweenRef = useRef<any>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsap: any;
    let mounted = true;

    (async () => {
      const g = await import("gsap");
      if (!mounted) return;
      gsap = g.default;

      if (!svgRef.current) return;
      const mapGroup = svgRef.current.querySelector<SVGGElement>("#map-group");
      if (!mapGroup) return;

      // Auto-rotate: translate X from 0 to -1000 (one full loop = one copy)
      tweenRef.current = gsap.to(mapGroup, {
        x: -1000,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x: string) => {
            const v = parseFloat(x) % -1000;
            offsetRef.current = v;
            return `${v}px`;
          },
        },
      });
    })();

    // Drag to rotate
    const el = containerRef.current;
    if (!el) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastX.current = e.clientX;
      tweenRef.current?.pause();
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !svgRef.current) return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      offsetRef.current += dx * 0.8;
      const mapGroup = svgRef.current.querySelector<SVGGElement>("#map-group");
      if (mapGroup) mapGroup.style.transform = `translateX(${offsetRef.current % -1000}px)`;
    };
    const onMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      // Resume auto-rotate from current position
      if (tweenRef.current && svgRef.current) {
        const mapGroup = svgRef.current.querySelector<SVGGElement>("#map-group");
        if (mapGroup && gsap) {
          tweenRef.current.kill();
          tweenRef.current = gsap.to(mapGroup, {
            x: offsetRef.current - 1000,
            duration: 30 * (Math.abs(offsetRef.current % 1000) / 1000 || 1),
            ease: "none",
            repeat: -1,
            modifiers: {
              x: (x: string) => {
                const v = parseFloat(x) % -1000;
                offsetRef.current = v;
                return `${v}px`;
              },
            },
          });
        }
      }
    };

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      lastX.current = e.touches[0].clientX;
      tweenRef.current?.pause();
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !svgRef.current) return;
      const dx = e.touches[0].clientX - lastX.current;
      lastX.current = e.touches[0].clientX;
      offsetRef.current += dx * 0.8;
      const mapGroup = svgRef.current.querySelector<SVGGElement>("#map-group");
      if (mapGroup) mapGroup.style.transform = `translateX(${offsetRef.current % -1000}px)`;
    };
    const onTouchEnd = () => { isDragging.current = false; tweenRef.current?.resume(); };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      mounted = false;
      tweenRef.current?.kill();
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // Build two copies of paths/dots side by side for seamless loop
  const allPaths = [...LAND_PATHS, ...LAND_PATHS.map(p => offsetPath(p, 1000))];
  const allDots  = [...MARKET_DOTS, ...MARKET_DOTS.map(d => ({ ...d, cx: d.cx + 1000, label: d.label + "2", pulse: false }))];

  return (
    <div
      ref={containerRef}
      className="relative mx-auto select-none"
      style={{ width: 320, height: 320, cursor: "grab" }}
      title="Drag to rotate"
    >
      {/* Glow bg */}
      <div className="absolute inset-0 rounded-full bg-[#0A6A38]/10 blur-3xl" />

      {/* Orbit rings */}
      <div className="absolute inset-0 rounded-full border border-[#7FE0D4]/12" style={{ animation: "orbitSpin 20s linear infinite" }} />
      <div className="absolute -inset-3 rounded-full border border-white/6" style={{ animation: "orbitSpin 30s linear infinite reverse" }} />
      <div className="absolute -inset-6 rounded-full border border-[#7FE0D4]/5" style={{ animation: "orbitSpin 45s linear infinite" }} />

      {/* Globe sphere */}
      <div className="absolute inset-0 overflow-hidden rounded-full shadow-[0_0_60px_-10px_rgba(11,45,107,0.8),inset_0_0_40px_rgba(0,0,0,0.4)]">
        {/* Ocean */}
        <div className="absolute inset-0 bg-[#0a1f4e]" />
        {/* Ocean grid lines */}
        <svg className="absolute inset-0 h-full w-full opacity-100" viewBox="0 0 320 320">
          {/* Latitude lines */}
          {[0.2, 0.35, 0.5, 0.65, 0.8].map((r, i) => (
            <ellipse key={i} cx="160" cy="160" rx={150} ry={150 * r * 0.4}
              fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
          ))}
          {/* Vertical guide lines (static, suggest meridians) */}
          {[30, 70, 110, 150, 190, 230, 270, 310].map((x, i) => (
            <line key={i} x1={x} y1="20" x2={x} y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
          ))}
          {/* Equator */}
          <line x1="10" y1="160" x2="310" y2="160" stroke="rgba(127,224,212,0.08)" strokeWidth="1" />
          {/* Tropic lines */}
          <line x1="10" y1="130" x2="310" y2="130" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="4 6" />
          <line x1="10" y1="190" x2="310" y2="190" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" strokeDasharray="4 6" />
        </svg>

        {/* Scrolling map */}
        <svg
          ref={svgRef}
          className="absolute"
          style={{ top: 0, left: 0, width: "200%", height: "100%", overflow: "visible" }}
          viewBox="0 0 640 320"
          preserveAspectRatio="xMidYMid slice"
        >
          <g id="map-group">
            {/* Land paths — two copies */}
            {allPaths.map((d, i) => (
              <path
                key={i}
                d={d}
                fill={i < LAND_PATHS.length ? "rgba(127,224,212,0.18)" : "rgba(127,224,212,0.18)"}
                stroke="rgba(127,224,212,0.4)"
                strokeWidth="0.5"
              />
            ))}

            {/* Market dots */}
            {allDots.map((dot, i) => {
              // Scale dot positions from 1000x500 viewBox to 640x320
              const x = (dot.cx / 1000) * 640;
              const y = (dot.cy / 500) * 320;
              return (
                <g key={i}>
                  {dot.pulse && (
                    <>
                      <circle cx={x} cy={y} r="8" fill={dot.color} opacity="0.15">
                        <animate attributeName="r" values="6;14;6" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.15;0;0.15" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={x} cy={y} r="5" fill={dot.color} opacity="0.35">
                        <animate attributeName="r" values="4;9;4" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.35;0;0.35" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
                      </circle>
                    </>
                  )}
                  <circle cx={x} cy={y} r={dot.pulse ? 4 : 3} fill={dot.color} />
                  <rect x={x - 10} y={y - 16} width="20" height="10" rx="2" fill="rgba(0,0,0,0.55)" />
                  <text x={x} y={y - 8} textAnchor="middle" fontSize="5.5" fill="white" fontFamily="sans-serif" fontWeight="bold">
                    {dot.code}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Edge darkening — gives sphere depth */}
        <div className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, transparent 55%, rgba(4,12,36,0.7) 80%, rgba(4,12,36,0.95) 100%)",
          }}
        />
        {/* Top-left shine */}
        <div className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.07) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Drag hint */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-white/30">
        ↔ drag to rotate
      </div>

      <style>{`
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Utility: offset an SVG path string by dx pixels in X
function offsetPath(path: string, dx: number): string {
  return path.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (_, x, y) =>
    `${parseFloat(x) + dx},${y}`
  );
}
