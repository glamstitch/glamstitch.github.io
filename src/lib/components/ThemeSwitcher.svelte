<script lang="ts">
  import { onMount } from 'svelte';
  import { applyTheme, getInitialTheme, saveTheme, forceTheme } from '$lib/utils/theme';
  
  let isDark = $state(false);
  
  onMount(() => {
    // Initialize theme
    isDark = getInitialTheme();
    applyTheme(isDark);
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        isDark = e.matches;
        applyTheme(isDark);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  });
  
  function toggleDarkMode() {
    isDark = !isDark;
    
    // Apply theme immediately
    applyTheme(isDark);
    
    // Save to localStorage
    saveTheme(isDark);
    
    // Debug log
    console.log('Theme switched to:', isDark ? 'dark' : 'light');
  }
</script>

<!-- Simple Theme Toggle Switch -->
<button 
  onclick={toggleDarkMode}
  class="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
  aria-label="Toggle dark mode"
>
  <!-- Toggle Circle -->
  <div class="absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-gray-100 rounded-full shadow-lg transition-transform duration-300 {isDark ? 'translate-x-7' : 'translate-x-0'} flex items-center justify-center">
    <!-- Sun Icon (Light Mode) -->
    {#if !isDark}
      <svg class="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
      </svg>
    {/if}
    
    <!-- Moon Icon (Dark Mode) -->
    {#if isDark}
      <svg class="w-3.5 h-3.5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    {/if}
  </div>
</button>
