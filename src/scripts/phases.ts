/**
 * The time of day along the ride. Each page section names a phase index
 * (data-sky), and the sky, the light and the page tone move between them.
 * Shared by the 3D scene and the CSS sky that stands in for it.
 */
export type Phase = {
  /** Sky at the zenith, in the middle and at the horizon. */
  top: string;
  mid: string;
  horizon: string;
  /** Sun (or moon) colour and its light strength. */
  sun: string;
  sunIntensity: number;
  /** Sun height above the horizon, in radians. */
  sunElevation: number;
  hemiSky: string;
  hemiGround: string;
  hemiIntensity: number;
  /** 0 at day, 1 at full night: stars, fireflies, the headlight. */
  night: number;
};

export const PHASES: readonly Phase[] = [
  // 0 · golden hour
  {
    top: '#e47a58',
    mid: '#f2a768',
    horizon: '#fde1a8',
    sun: '#fff0c4',
    sunIntensity: 2.4,
    sunElevation: 0.11,
    hemiSky: '#ffd6a3',
    hemiGround: '#4d6a34',
    hemiIntensity: 1.25,
    night: 0,
  },
  // 1 · sunset
  {
    top: '#6e2c52',
    mid: '#c0585c',
    horizon: '#f6a061',
    sun: '#ffb469',
    sunIntensity: 1.7,
    sunElevation: 0.035,
    hemiSky: '#f09a7a',
    hemiGround: '#3b4a2c',
    hemiIntensity: 0.95,
    night: 0.1,
  },
  // 2 · dusk
  {
    top: '#2c1d4c',
    mid: '#6c3466',
    horizon: '#e0786a',
    sun: '#ff8d63',
    sunIntensity: 0.9,
    sunElevation: -0.02,
    hemiSky: '#9a6a9a',
    hemiGround: '#2a2f2a',
    hemiIntensity: 0.75,
    night: 0.45,
  },
  // 3 · first dark
  {
    top: '#161d48',
    mid: '#2a2a5e',
    horizon: '#6a3c6c',
    sun: '#a9b4ff',
    sunIntensity: 0.35,
    sunElevation: -0.06,
    hemiSky: '#4a4f8a',
    hemiGround: '#151a22',
    hemiIntensity: 0.6,
    night: 0.85,
  },
  // 4 · night
  {
    top: '#0e1540',
    mid: '#151d4a',
    horizon: '#2b3364',
    sun: '#b9c2ff',
    sunIntensity: 0.25,
    sunElevation: -0.1,
    hemiSky: '#3a4478',
    hemiGround: '#0d1018',
    hemiIntensity: 0.55,
    night: 1,
  },
];

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function mixHex(a: string, b: string, t: number): string {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  const c = (x: number, y: number) =>
    Math.round(x + (y - x) * t)
      .toString(16)
      .padStart(2, '0');
  return `#${c(ar, br)}${c(ag, bg)}${c(ab, bb)}`;
}

/** The sky colours at a fractional phase, for the CSS stand-in. */
export function skyAt(phase: number): {
  top: string;
  mid: string;
  horizon: string;
} {
  const p = Math.min(Math.max(phase, 0), PHASES.length - 1);
  const i = Math.min(Math.floor(p), PHASES.length - 2);
  const t = p - i;
  const a = PHASES[i];
  const b = PHASES[i + 1];
  return {
    top: mixHex(a.top, b.top, t),
    mid: mixHex(a.mid, b.mid, t),
    horizon: mixHex(a.horizon, b.horizon, t),
  };
}
