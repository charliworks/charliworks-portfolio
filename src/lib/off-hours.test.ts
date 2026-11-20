import { describe, expect, it } from 'vitest';
import { formatPlayedAt, formatPlaytime, formatUpdated } from './off-hours';

describe('formatPlayedAt', () => {
  it('shows Philippine time', () => {
    expect(formatPlayedAt('2026-11-20T06:05:00Z')).toBe('20 Nov, 2:05 pm');
  });

  it('moves to the next day after midnight in Manila', () => {
    expect(formatPlayedAt('2026-11-19T16:30:00Z')).toBe('20 Nov, 12:30 am');
  });
});

describe('formatPlaytime', () => {
  it('uses minutes under one hour', () => {
    expect(formatPlaytime(45)).toBe('45 min');
  });

  it('never shows 0 min', () => {
    expect(formatPlaytime(0.2)).toBe('1 min');
  });

  it('uses one hour in the singular', () => {
    expect(formatPlaytime(60)).toBe('1 hour');
  });

  it('rounds hours to one decimal', () => {
    expect(formatPlaytime(754)).toBe('12.6 hours');
  });
});

describe('formatUpdated', () => {
  it('shows the date in Philippine time', () => {
    expect(formatUpdated(new Date('2026-11-19T17:00:00Z'))).toBe('20 Nov 2026');
  });
});
