import { activeYear, reducedMotion } from '../lib/ui';

// Journey: the year rail follows scroll, thread buttons dim non-matching entries, entries reveal once.
function init() {
  const root = document.querySelector<HTMLElement>('[data-journey]');
  if (!root) return;
  const entries = [...root.querySelectorAll<HTMLElement>('.entry')];
  const years = [...root.querySelectorAll<HTMLElement>('.rail__years li')];
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-thread]')];

  // Year rail
  const update = () => {
    const line = window.scrollY + window.innerHeight * 0.35;
    const tops = entries.map((e) => ({ year: e.dataset.year ?? '', top: e.getBoundingClientRect().top + window.scrollY }));
    const y = activeYear(tops, line);
    years.forEach((li) => li.classList.toggle('is-active', li.dataset.year === y));
  };
  update();
  window.addEventListener('scroll', update, { passive: true });

  // Thread dimming
  let active: string | null = null;
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      active = active === b.dataset.thread ? null : (b.dataset.thread ?? null);
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.thread === active)));
      entries.forEach((e) => {
        const mine = (e.dataset.threads ?? '').split(' ');
        e.classList.toggle('is-dim', active !== null && !mine.includes(active));
      });
    }),
  );

  // Reveal once
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    entries.forEach((e) => e.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (list) => list.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('is-in'); io.unobserve(x.target); } }),
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  entries.forEach((e) => io.observe(e));
}

init();
document.addEventListener('astro:after-swap', init);
