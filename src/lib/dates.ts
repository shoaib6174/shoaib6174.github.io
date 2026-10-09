const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

/** "2017" -> "2017"; "2023-12" -> "Dec 2023" */
export function formatDate(d: string): string {
  const [y, m] = d.split('-');
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
}

/** Sortable integer: year*100 + month (0 when absent). */
export function sortKey(d: string): number {
  const [y, m] = d.split('-');
  return Number(y) * 100 + (m ? Number(m) : 0);
}

/** "2023-12 – 2024-07" style ranges from two date strings. */
export function formatRange(from: string, to?: string): string {
  if (!to) return `${formatDate(from)} – now`;
  return `${formatDate(from)} – ${formatDate(to)}`;
}
