import { describe, expect, it } from 'vitest';
import { shipping, shortDate, sortWork } from './work';

const entry = (order: number, draft = false) => ({ data: { order, draft } });

describe('sortWork', () => {
  it('sortWork drops drafts', () => {
    const result = sortWork([entry(2), entry(1, true)]);
    expect(result).toHaveLength(1);
    expect(result[0].data.order).toBe(2);
  });

  it('sortWork sorts by order', () => {
    const result = sortWork([entry(3), entry(1), entry(2)]);
    expect(result.map((e) => e.data.order)).toEqual([1, 2, 3]);
  });
});

describe('shipping', () => {
  const releases = [
    { version: 'v1.0.0', date: '2026-11-04', note: 'first' },
    { version: 'v1.1.0', date: '2026-11-05', note: 'b' },
    { version: 'v2.0.1', date: '2026-11-12', note: 'last' },
  ];

  it('counts releases and calendar days, first to last inclusive', () => {
    const s = shipping(releases)!;
    expect(s.count).toBe(3);
    expect(s.days).toBe(9);
    expect(s.first.version).toBe('v1.0.0');
    expect(s.latest.version).toBe('v2.0.1');
  });

  it('works whatever order the releases are listed in', () => {
    const s = shipping([...releases].reverse())!;
    expect(s.first.version).toBe('v1.0.0');
    expect(s.latest.version).toBe('v2.0.1');
  });

  it('places each release along the road by date, 0 to 1', () => {
    const s = shipping(releases)!;
    expect(s.stops.map((r) => r.at)).toEqual([0, 0.125, 1]);
  });

  it('formats a release date as day and short month', () => {
    expect(shortDate('2026-11-04')).toBe('4 Nov');
    expect(shortDate('2026-11-04', true)).toBe('4 Nov 2026');
  });

  it('returns null with no releases', () => {
    expect(shipping([])).toBeNull();
  });

  it('returns null when the releases are missing', () => {
    expect(shipping(undefined)).toBeNull();
  });
});
