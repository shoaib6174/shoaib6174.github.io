import { reducedMotion } from '../lib/ui';

// Work: chips filter the grid client-side and keep the URL in sync. Without JS the links still work.
function init() {
  const nav = document.querySelector<HTMLElement>('[data-filter]');
  const grid = document.querySelector<HTMLElement>('[data-filter-target]');
  if (!nav || !grid) return;
  const chips = [...nav.querySelectorAll<HTMLAnchorElement>('a[data-area]')];
  const cards = [...grid.querySelectorAll<HTMLElement>('[data-area]')];

  const apply = (area: string) => {
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.area === area)));
    const run = () =>
      cards.forEach((card) => {
        card.hidden = area !== 'all' && card.dataset.area !== area;
      });
    if (!reducedMotion() && 'startViewTransition' in document) {
      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(run);
    } else run();
  };

  chips.forEach((c) =>
    c.addEventListener('click', (e) => {
      e.preventDefault();
      const area = c.dataset.area ?? 'all';
      apply(area);
      const url = area === 'all' ? '/work/' : `/work/?area=${area}`;
      history.replaceState(null, '', url);
    }),
  );

  const initial = new URLSearchParams(location.search).get('area') ?? 'all';
  apply(initial);
}

init();
document.addEventListener('astro:after-swap', init);
