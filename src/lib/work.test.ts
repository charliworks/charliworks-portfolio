import { describe, expect, it } from 'vitest';
import { sortWork } from './work';

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
