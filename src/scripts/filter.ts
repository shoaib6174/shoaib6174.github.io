import { reducedMotion } from '../lib/ui';

// Work: chips filter the rows client-side and keep ?area= in the URL.
// The chip bar is hidden until this script runs, so without JavaScript the full list simply shows.
let controller: AbortController | null = null;

function init() {
  controller?.abort();
  const nav = document.querySelector<HTMLElement>('[data-filter]');
  const grid = document.querySelector<HTMLElement>('[data-filter-target]');
  const live = document.querySelector<HTMLElement>('[data-filter-live]');
  if (!nav || !grid) return;
  controller = new AbortController();
  const { signal } = controller;

  const chips = [...nav.querySelectorAll<HTMLButtonElement>('button[data-area]')];
  const rows = [...grid.querySelectorAll<HTMLElement>('[data-area]')];
  const valid = new Set(chips.map((c) => c.dataset.area ?? 'all'));
  nav.hidden = false;

  const run = (area: string) => {
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.area === area)));
    let shown = 0;
    rows.forEach((row) => {
      const hide = area !== 'all' && row.dataset.area !== area;
      row.hidden = hide;
      if (!hide) shown++;
    });
    if (live) live.textContent = area === 'all' ? '' : `Showing ${shown} of ${rows.length}.`;
  };

  const choose = (area: string) => {
    const doc = document as Document & { startViewTransition?: (cb: () => void) => void };
    if (!reducedMotion() && doc.startViewTransition) doc.startViewTransition(() => run(area));
    else run(area);
    const url = area === 'all' ? '/work/' : `/work/?area=${area}`;
    history.replaceState(history.state, '', url);
  };

  chips.forEach((c) => c.addEventListener('click', () => choose(c.dataset.area ?? 'all'), { signal }));

  const initial = new URLSearchParams(location.search).get('area') ?? 'all';
  run(valid.has(initial) ? initial : 'all');
}

init();
document.addEventListener('astro:after-swap', init);
