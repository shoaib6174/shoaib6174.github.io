import { activeYear } from '../lib/ui';

// Route: the dimension line points at the entry under the reading line; thread buttons dim the rest.
let controller: AbortController | null = null;

function init() {
  controller?.abort();
  controller = null;
  const root = document.querySelector<HTMLElement>('[data-journey]');
  if (!root) return;
  controller = new AbortController();
  const { signal } = controller;
  const entries = [...root.querySelectorAll<HTMLElement>('.entry')];
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('button[data-thread]')];
  const dots = [...root.querySelectorAll<SVGAElement>('.rmap__dot')];
  const lanes = [...root.querySelectorAll<SVGGElement>('.rmap__lane')];

  let ticking = false;
  const update = () => {
    ticking = false;
    const line = window.scrollY + window.innerHeight * 0.38;
    const tops = entries.map((e) => ({
      year: e.id,
      top: (e.querySelector('.entry__body') as HTMLElement).getBoundingClientRect().top + window.scrollY,
    }));
    const id = activeYear(tops, line);
    entries.forEach((e) => e.classList.toggle('is-active', e.id === id));
    dots.forEach((d) => d.classList.toggle('is-active', d.dataset.entry === id));
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  update();
  // Fragment links from the home page: make sure the entry is in view even when scroll is restored.
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target && target.classList.contains('entry') && window.scrollY === 0) {
    target.scrollIntoView({ block: 'start' });
  }
  window.addEventListener('scroll', onScroll, { passive: true, signal });
  window.addEventListener('resize', onScroll, { signal });

  let active: string | null = null;
  buttons.forEach((b) =>
    b.addEventListener(
      'click',
      () => {
        active = active === b.dataset.thread ? null : (b.dataset.thread ?? null);
        buttons.forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.thread === active)));
        entries.forEach((e) => {
          const mine = (e.dataset.threads ?? '').split(' ');
          e.classList.toggle('is-dim', active !== null && !mine.includes(active));
        });
        lanes.forEach((l) => l.classList.toggle('is-dim', active !== null && l.dataset.thread !== active));
        dots.forEach((d) => {
          const mine = (document.getElementById(d.dataset.entry ?? '')?.dataset.threads ?? '').split(' ');
          d.classList.toggle('is-dim', active !== null && !mine.includes(active));
        });
      },
      { signal },
    ),
  );
}

init();
document.addEventListener('astro:after-swap', init);
