export type Track = {
  title: string;
  artist: string;
  /** The track on Spotify. */
  url: string | undefined;
  /** Album art URL. */
  image: string | undefined;
  /** ISO date and time. */
  playedAt: string;
};

export type Game = {
  name: string;
  /** The game on the Steam store. */
  url: string | undefined;
  /** Steam capsule image URL. */
  image: string | undefined;
  minutesTwoWeeks: number;
  minutesTotal: number;
};

export type OffHours = {
  /** True while the page shows sample data, not real activity. */
  sample: boolean;
  tracks: readonly Track[];
  games: readonly Game[];
};

const TIME_ZONE = 'Asia/Manila';

/** "20 Nov, 2:05 pm" in Philippine time. */
export function formatPlayedAt(iso: string): string {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(new Date(iso));
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? '';
  const period = get('dayPeriod').toLowerCase();
  return `${get('day')} ${get('month')}, ${get('hour')}:${get('minute')} ${period}`;
}

/** "45 min", "1 hour", "12.5 hours". */
export function formatPlaytime(minutes: number): string {
  if (minutes < 60) return `${Math.max(1, Math.round(minutes))} min`;
  const hours = Math.round(minutes / 6) / 10;
  return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
}

/** "20 Nov 2026" in Philippine time. */
export function formatUpdated(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

// TODO(charlito): replace with real Spotify and Steam data (issue #29).
const SAMPLE: OffHours = {
  sample: true,
  tracks: [
    ['Sample track one', 'Sample artist A', '2026-11-20T06:42:00Z'],
    ['Sample track two', 'Sample artist B', '2026-11-20T06:38:00Z'],
    ['Sample track three', 'Sample artist A', '2026-11-20T06:34:00Z'],
    ['Sample track four', 'Sample artist C', '2026-11-20T03:12:00Z'],
    ['Sample track five', 'Sample artist D', '2026-11-19T14:55:00Z'],
    ['Sample track six', 'Sample artist B', '2026-11-19T14:51:00Z'],
  ].map(([title, artist, playedAt]) => ({
    title,
    artist,
    url: undefined,
    image: undefined,
    playedAt,
  })),
  games: [
    ['Sample game one', 754, 21_480],
    ['Sample game two', 312, 4_020],
    ['Sample game three', 45, 610],
  ].map(([name, minutesTwoWeeks, minutesTotal]) => ({
    name: String(name),
    url: undefined,
    image: undefined,
    minutesTwoWeeks: Number(minutesTwoWeeks),
    minutesTotal: Number(minutesTotal),
  })),
};

export async function getOffHours(): Promise<OffHours> {
  return SAMPLE;
}
