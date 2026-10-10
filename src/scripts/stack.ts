import { reducedMotion } from '../lib/ui';

// Home: the seven layers reveal one by one as they enter the viewport, and the margin line
// extends to the layer being read. Under reduced motion everything is simply shown.
let io: IntersectionObserver | null = null;

function init() {
  io?.disconnect();
  io = null;
  const root = document.querySelector<HTMLElement>('[data-stack]');
  if (!root) return;
  const stages = [...root.querySelectorAll<HTMLElement>('.stage')];
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    stages.forEach((s) => s.classList.add('is-in'));
    root.classList.add('is-done');
    return;
  }
  root.classList.add('is-animating');
  io = new IntersectionObserver(
    (list) => {
      list.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add('is-in');
          io?.unobserve(x.target);
        }
      });
      if (stages.every((s) => s.classList.contains('is-in'))) root.classList.add('is-done');
    },
    { rootMargin: '0px 0px -18% 0px', threshold: 0.2 },
  );
  stages.forEach((s) => io?.observe(s));
  // Safety: whatever the observer does, nothing stays hidden for long.
  setTimeout(() => { stages.forEach((s) => s.classList.add('is-in')); root.classList.add('is-done'); }, 2500);
}

init();
document.addEventListener('astro:after-swap', init);
