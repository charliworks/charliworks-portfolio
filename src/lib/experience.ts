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

// A date is 'YYYY' or 'YYYY-MM'.
function label(date: string, withYear: boolean): string {
  const [year, month] = date.split('-');
  if (!month) return year;
  const name = MONTHS[Number(month) - 1];
  return withYear ? `${name} ${year}` : name;
}

export function jobDates(
  start: string,
  end: string | undefined,
): { start: string; end: string | undefined } {
  const sameYear =
    end !== undefined &&
    start.includes('-') &&
    end.includes('-') &&
    start.slice(0, 4) === end.slice(0, 4);
  return {
    start: label(start, !sameYear),
    end: end === undefined ? undefined : label(end, true),
  };
}
