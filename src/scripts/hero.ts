import { reducedMotion } from '../lib/ui';

// Home hero: the instruction types in once, then the plan steps appear and complete, one by one.
// Without JavaScript, or under reduced motion, the finished plan is simply shown.
function init() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero || hero.dataset.played === '1') return;
  hero.dataset.played = '1';
  if (reducedMotion()) return;
  // Once per browser session; a return visit within the session sees the finished plan.
  let seen = false;
  try { seen = sessionStorage.getItem('hero-played') === '1'; sessionStorage.setItem('hero-played', '1'); } catch { /* storage unavailable: play */ }
  if (seen) return;

  const typed = hero.querySelector<HTMLElement>('[data-typed]');
  const steps = [...hero.querySelectorAll<HTMLElement>('.hero__plan li')];
  if (!typed) return;
  const text = typed.textContent ?? '';
  typed.textContent = '';
  hero.classList.add('is-animating', 'is-typing');

  let i = 0;
  const type = () => {
    if (i <= text.length) {
      typed.textContent = text.slice(0, i++);
      setTimeout(type, 28);
    } else {
      hero.classList.remove('is-typing');
      setTimeout(() => step(0), 350);
    }
  };
  const step = (n: number) => {
    if (n >= steps.length) return;
    steps[n].classList.add('is-in');
    setTimeout(() => {
      steps[n].classList.add('is-done');
      setTimeout(() => step(n + 1), 140);
    }, 320);
  };
  setTimeout(type, 400);
}

init();
document.addEventListener('astro:after-swap', init);
