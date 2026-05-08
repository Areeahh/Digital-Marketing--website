// Utility functions for NexusDigital

export function formatNumber(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
  return String(n);
}

export function formatCurrency(n) {
  return '$' + n.toLocaleString('en-US');
}

export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
