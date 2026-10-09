import { computeDim } from '../lib/ui';

// Home: hovering or focusing a role paragraph dims everything tagged with another role.
function init() {
  const roles = document.querySelectorAll<HTMLElement>('[data-roles] [data-role]');
  if (!roles.length) return;
  const targets = document.querySelectorAll<HTMLElement>('[data-role]:not([data-roles] [data-role])');

  const apply = (active: string | null) => {
    targets.forEach((t) => {
      const mine = (t.dataset.role ?? '').split(' ');
      t.style.opacity = String(computeDim(active, mine));
    });
    roles.forEach((r) => {
      r.classList.toggle('is-active', r.dataset.role === active);
      r.classList.toggle('is-muted', active !== null && r.dataset.role !== active);
    });
  };

  roles.forEach((r) => {
    const on = () => apply(r.dataset.role ?? null);
    const off = () => apply(null);
    r.addEventListener('mouseenter', on);
    r.addEventListener('mouseleave', off);
    r.addEventListener('focus', on);
    r.addEventListener('blur', off);
  });
}

init();
document.addEventListener('astro:after-swap', init);
