export function applyThemeClass(theme: 'light' | 'dark') {
  // avoid className overwrite, just toggle classes
  if (typeof document === 'undefined') return;
  const el = document.documentElement;
  el.classList.remove('light', 'dark');
  el.classList.add(theme);
}
