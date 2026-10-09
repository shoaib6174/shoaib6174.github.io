/** Opacity for an item given the active role. 1 when nothing is active or the item matches. */
export function computeDim(activeRole: string | null, itemRoles: string[]): number {
  if (!activeRole) return 1;
  return itemRoles.includes(activeRole) ? 1 : 0.4;
}

/** Toggle between the two film sort orders. */
export function nextSort(current: 'year' | 'country'): 'year' | 'country' {
  return current === 'year' ? 'country' : 'year';
}

/** Which year label should be active for a given scroll position. */
export function activeYear(entryTops: { year: string; top: number }[], line: number): string | null {
  let current: string | null = null;
  for (const e of entryTops) {
    if (e.top <= line) current = e.year;
  }
  return current;
}

export const reducedMotion = (): boolean =>
  typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
