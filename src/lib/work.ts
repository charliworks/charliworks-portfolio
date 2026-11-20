export function sortWork<T extends { data: { order: number; draft: boolean } }>(
  entries: T[],
): T[] {
  return entries
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => a.data.order - b.data.order);
}
