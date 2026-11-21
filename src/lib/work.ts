export function sortWork<T extends { data: { order: number; draft: boolean } }>(
  entries: T[],
): T[] {
  return entries
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => a.data.order - b.data.order);
}

export type Release = { version: string; date: string; note: string };

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DAY = 86_400_000;
const time = (date: string) => Date.parse(`${date}T00:00:00Z`);

/** '2026-11-04' → '4 Nov', or '4 Nov 2026' with the year. */
export function shortDate(date: string, withYear = false): string {
  const [y, m, d] = date.split('-').map(Number);
  const label = `${d} ${MONTHS[m - 1]}`;
  return withYear ? `${label} ${y}` : label;
}

/**
 * A project's shipping record: how many releases, over how many calendar
 * days, and where each release sits along the delivery road (0 to 1, by
 * date). Null when there are no releases.
 */
export function shipping(releases: readonly Release[] | undefined) {
  if (!releases || releases.length === 0) return null;
  const sorted = [...releases].sort(
    (a, b) => time(a.date) - time(b.date) || a.version.localeCompare(b.version),
  );
  const first = sorted[0];
  const latest = sorted[sorted.length - 1];
  const span = time(latest.date) - time(first.date);
  return {
    count: sorted.length,
    days: Math.round(span / DAY) + 1,
    first,
    latest,
    stops: sorted.map((r) => ({
      ...r,
      at: span === 0 ? 1 : (time(r.date) - time(first.date)) / span,
    })),
  };
}
