// Theme utility functions - Manual control only, no system preference detection

/**
 * Apply theme to the document
 * @param isDark - Whether to apply dark mode
 */
export function applyTheme(isDark: boolean): void {
	if (typeof document === 'undefined') return;

	try {
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
	} catch (error) {
		console.error('Error applying theme:', error);
	}
}

/**
 * Get initial theme from localStorage ONLY
 * NEVER follows system preference - manual control only
 * @returns boolean - true if dark mode, false if light mode (default)
 */
export function getInitialTheme(): boolean {
	if (typeof window === 'undefined') return false;

	try {
		const savedTheme = localStorage.getItem('theme');

		// ONLY use saved theme, NEVER follow system preference
		if (savedTheme === 'dark') {
			return true;
		} else if (savedTheme === 'light') {
			return false;
		} else {
			// Default to light mode if no preference is saved
			return false;
		}
	} catch (error) {
		console.error('Error getting initial theme:', error);
		return false; // Default to light mode on error
	}
}

/**
 * Save theme preference to localStorage
 * @param isDark - Whether dark mode is enabled
 */
export function saveTheme(isDark: boolean): void {
	if (typeof window === 'undefined') return;

	try {
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	} catch (error) {
		console.error('Error saving theme:', error);
	}
}

/**
 * Initialize theme on page load
 * @returns boolean - Current theme state
 */
export function initializeTheme(): boolean {
	const isDark = getInitialTheme();
	applyTheme(isDark);
	return isDark;
}

/**
 * Toggle between light and dark mode
 * @param currentTheme - Current theme state
 * @returns boolean - New theme state
 */
export function toggleTheme(currentTheme: boolean): boolean {
	const newTheme = !currentTheme;
	applyTheme(newTheme);
	saveTheme(newTheme);
	return newTheme;
}

/**
 * Get current theme from document
 * @returns boolean - true if dark mode is active
 */
export function getCurrentTheme(): boolean {
	if (typeof document === 'undefined') return false;
	return document.documentElement.classList.contains('dark');
}
