import { computeDim } from '../lib/ui';

// Home: pointing at one of the three role paragraphs dims everything tagged with another role.
// Mouse only: touch and keyboard users get the plain page.
let controller: AbortController | null = null;

function init() {
  controller?.abort();
  controller = null;
  const roles = document.querySelectorAll<HTMLElement>('[data-roles] [data-role]');
  if (!roles.length) return;
  controller = new AbortController();
  const { signal } = controller;
  const targets = document.querySelectorAll<HTMLElement>('[data-role]:not([data-roles] [data-role])');

  const apply = (active: string | null) => {
    targets.forEach((t) => {
      const mine = (t.dataset.role ?? '').split(' ');
      t.style.opacity = String(computeDim(active, mine));
    });
    roles.forEach((r) => r.classList.toggle('is-muted', active !== null && r.dataset.role !== active));
  };

  roles.forEach((r) => {
    r.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') apply(r.dataset.role ?? null); }, { signal });
    r.addEventListener('pointerleave', () => apply(null), { signal });
  });
}

init();
document.addEventListener('astro:after-swap', init);
