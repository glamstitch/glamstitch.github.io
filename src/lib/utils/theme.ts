// Theme utility functions
export function applyTheme(isDark: boolean) {
  if (typeof document === 'undefined') return;
  
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark');
    document.body.style.backgroundColor = '#111827';
    document.body.style.color = '#f9fafb';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('dark');
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#111827';
  }
}

export function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return false;
  
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme === 'dark';
  } else {
    return systemPrefersDark;
  }
}

export function saveTheme(isDark: boolean) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

export function initializeTheme() {
  const isDark = getInitialTheme();
  applyTheme(isDark);
  return isDark;
}

// Force theme application for immediate effect
export function forceTheme(isDark: boolean) {
  if (typeof document === 'undefined') return;
  
  // Remove all existing theme classes
  document.documentElement.classList.remove('dark');
  document.body.classList.remove('dark');
  
  // Apply new theme
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('dark');
    document.body.style.backgroundColor = '#111827';
    document.body.style.color = '#f9fafb';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#111827';
  }
}
