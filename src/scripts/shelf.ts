// Shelf: sort the films list by year or by country.
function init() {
  const list = document.querySelector<HTMLElement>('[data-films]');
  const buttons = [...document.querySelectorAll<HTMLButtonElement>('[data-sort]')];
  if (!list || !buttons.length) return;
  const items = [...list.children] as HTMLElement[];

  const apply = (mode: string) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.sort === mode)));
    const sorted = [...items].sort((a, b) =>
      mode === 'country'
        ? (a.dataset.country ?? '').localeCompare(b.dataset.country ?? '') || Number(a.dataset.year) - Number(b.dataset.year)
        : Number(a.dataset.year) - Number(b.dataset.year),
    );
    sorted.forEach((el) => list.appendChild(el));
  };
  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.sort ?? 'year')));
}

init();
document.addEventListener('astro:after-swap', init);
