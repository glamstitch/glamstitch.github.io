<script lang="ts">
	import { onMount } from 'svelte';
	import { applyTheme, getInitialTheme, toggleTheme } from '$lib/utils/theme';

	let isDark = $state(false);
	let isInitialized = $state(false);

	onMount(() => {
		// Initialize theme from saved preference only
		isDark = getInitialTheme();
		applyTheme(isDark);
		isInitialized = true;

		// Listen for storage events to sync across tabs
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === 'theme' && e.newValue) {
				isDark = e.newValue === 'dark';
				applyTheme(isDark);
			}
		};

		window.addEventListener('storage', handleStorageChange);

		// Cleanup
		return () => {
			window.removeEventListener('storage', handleStorageChange);
		};
	});

	function handleToggle() {
		isDark = toggleTheme(isDark);
	}
</script>

<button
	onclick={handleToggle}
	class="relative h-6 w-11 rounded-full bg-gray-200 transition-colors duration-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:outline-none dark:bg-gray-700 dark:focus:ring-offset-gray-800"
	aria-label="Toggle dark mode"
	disabled={!isInitialized}
>
	<div
		class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-lg transition-transform duration-300 dark:bg-gray-100 {isDark
			? 'translate-x-5'
			: 'translate-x-0'} flex items-center justify-center"
	>
		{#if !isDark}
			<svg class="h-3 w-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
					clip-rule="evenodd"
				/>
			</svg>
		{/if}

		{#if isDark}
			<svg class="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
				<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
			</svg>
		{/if}
	</div>
</button>
