<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import logoGlint from '$lib/assets/image/logo glint.png';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { onMount } from 'svelte';
  
	let { children } = $props();
	
	// State for dropdown menus
	let productsDropdownOpen = $state(false);
	let discoverDropdownOpen = $state(false);
	
	// Toggle functions
	function toggleProductsDropdown() {
		productsDropdownOpen = !productsDropdownOpen;
		discoverDropdownOpen = false; // Close other dropdown
		
		// Reset animations when closing
		if (!productsDropdownOpen) {
			resetDropdownAnimations();
		}
	}
	
	function toggleDiscoverDropdown() {
		discoverDropdownOpen = !discoverDropdownOpen;
		productsDropdownOpen = false; // Close other dropdown
		
		// Reset animations when closing
		if (!discoverDropdownOpen) {
			resetDropdownAnimations();
		}
	}
	
	// Close dropdowns when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.dropdown-container')) {
			productsDropdownOpen = false;
			discoverDropdownOpen = false;
			resetDropdownAnimations();
		}
	}
	
	// Reset dropdown animations
	function resetDropdownAnimations() {
		const items = document.querySelectorAll('.dropdown-item');
		items.forEach(item => {
			item.classList.remove('show');
		});
	}
	
	// Add click outside listener
	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<style>
	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}
	
	/* Fast dark mode transitions */
	:global(*) {
		transition-property: background-color, border-color, color, fill, stroke, box-shadow, opacity, transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
	}
	
	/* Ensure dark mode works properly */
	:global(html.dark) {
		color-scheme: dark;
	}
	
	:global(html:not(.dark)) {
		color-scheme: light;
	}
	
	/* Force dark mode styles */
	:global(html.dark body) {
		background-color: #111827;
		color: #f9fafb;
	}
	
	:global(html:not(.dark) body) {
		background-color: #ffffff;
		color: #111827;
	}
	
	/* Ensure all elements respect dark mode */
	:global(html.dark) {
		color-scheme: dark;
	}
	
	:global(html:not(.dark)) {
		color-scheme: light;
	}
	
	/* Fast theme application */
	:global(html.dark *) {
		transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
					color 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
					border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					fill 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					stroke 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Ensure all elements respect theme */
	:global(html.dark) {
		background-color: #111827;
		color: #f9fafb;
	}
	
	:global(html:not(.dark)) {
		background-color: #ffffff;
		color: #111827;
	}
	
	/* Force dark mode on all elements */
	:global(html.dark body),
	:global(html.dark main),
	:global(html.dark section),
	:global(html.dark div),
	:global(html.dark p),
	:global(html.dark h1),
	:global(html.dark h2),
	:global(html.dark h3),
	:global(html.dark h4),
	:global(html.dark h5),
	:global(html.dark h6) {
		background-color: inherit;
		color: inherit;
	}
	
	/* Mobile dropdown animations */
	:global(.peer-checked\/products:max-h-80) {
		max-height: 20rem;
	}
	
	:global(.peer-checked\/discover:max-h-80) {
		max-height: 20rem;
	}
	
	/* Smooth dropdown transitions */
	:global(.overflow-hidden) {
		transition: max-height 0.3s ease-in-out;
	}
	
	/* Mobile menu improvements */
	:global(.mobile-menu-item) {
		transition: all 0.2s ease-in-out;
	}
	
	:global(.mobile-menu-item:hover) {
		transform: translateX(4px);
	}
	
	/* Fast theme transitioning class */
	:global(html.theme-transitioning *) {
		transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
					color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					fill 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					stroke 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Fast theme transitions for navbar */
	:global(html.theme-transitioning nav) {
		transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
					color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Fast theme transitions for buttons and links */
	:global(html.theme-transitioning button),
	:global(html.theme-transitioning a) {
		transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), 
					color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1),
					transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Dropdown container */
	:global(.dropdown-container) {
		position: relative;
	}
	
	/* Dropdown menu */
	:global(.dropdown-menu) {
		opacity: 1;
		transform: translateY(0);
		transition: all 0.2s ease-in-out;
		pointer-events: auto;
	}
	
	/* Dropdown items */
	:global(.dropdown-item) {
		transform: translateX(0);
		opacity: 1;
		transition: all 0.2s ease-in-out;
	}
	
	/* Hover effects for dropdown items */
	:global(.dropdown-item:hover) {
		transform: translateX(2px);
		transition: all 0.2s ease-in-out;
	}
	
	/* Responsive dropdown positioning */
	@media (max-width: 1024px) {
		:global(.dropdown-menu) {
			right: 0;
			left: auto;
			width: 200px;
		}
	}
	
	@media (max-width: 768px) {
		:global(.dropdown-menu) {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 90vw;
			max-width: 300px;
			z-index: 9999;
		}
	}
	
	/* Mobile dropdown improvements */
	@media (max-width: 640px) {
		:global(.dropdown-menu) {
			width: 95vw;
			max-width: 280px;
			font-size: 0.9rem;
		}
		
		:global(.dropdown-item) {
			padding: 0.75rem 1rem;
		}
	}
	
	/* Mobile menu dropdown animations */
	:global(.peer-checked\/products:max-h-80) {
		max-height: 20rem;
	}
	
	:global(.peer-checked\/discover:max-h-80) {
		max-height: 20rem;
	}
	
	/* Smooth dropdown transitions */
	:global(.overflow-hidden) {
		transition: max-height 0.3s ease-in-out;
	}
	
	/* Mobile menu improvements */
	:global(.mobile-menu-item) {
		transition: all 0.2s ease-in-out;
	}
	
	:global(.mobile-menu-item:hover) {
		transform: translateX(4px);
	}
	
	
	/* Force navbar dark mode styling */
	:global(html.dark nav rounded-full) {
		background-color: #111827 !important;
		color: #f9fafb !important;
	}
	
	:global(html.dark nav div) {
		background-color: #111827 !important;
		color: #f9fafb !important;
	}
	
	:global(html.dark nav a) {
		color: #e5e7eb !important;
	}
	
	:global(html.dark nav button) {
		color: #e5e7eb !important;
	}
	
	:global(html.dark nav span) {
		color: #ffffff !important;
	}
	
	
	
	:global(html.dark .navbar-link) {
		color: #e5e7eb !important;
	}
	
	:global(html.dark .navbar-link:hover) {
		color: #818cf8 !important;
	}
	
	/* Specific navbar container dark mode */
	:global(html.dark nav .mx-auto) {
		background-color: #111827 !important;
	}
	
	/* Force all navbar elements to respect dark mode */
	:global(html.dark nav *) {
		transition: color 0.2s ease, background-color 0.2s ease;
	}
	
	/* Hamburger icon styling for dark mode - removed conflicting rules */
	
	/* Override any conflicting styles */
	:global(html.dark nav a.navbar-link) {
		color: #e5e7eb !important;
	}
	
	:global(html.dark nav button.navbar-link) {
		color: #e5e7eb !important;
	}
	
	:global(html.dark nav a.navbar-link:hover) {
		color: #818cf8 !important;
	}
	
	:global(html.dark nav button.navbar-link:hover) {
		color: #818cf8 !important;
	}
	
	/* Dark mode dropdown styling */
	:global(html.dark .dropdown-menu) {
		background-color: #111827 !important;
		border: none !important;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
	}
	
	/* Dark mode dropdown items hover */
	:global(html.dark .dropdown-item:hover) {
		background-color: #1f2937 !important;
		transform: translateX(2px);
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Remove any borders from dark mode dropdown */
	:global(html.dark .dropdown-menu) {
		border: 0 !important;
		outline: none !important;
	}
	
	/* Global: Remove all dark overlays that cover images */
	:global(html.dark .bg-black\/50),
	:global(html.dark .bg-black\/60),
	:global(html.dark .bg-black\/40),
	:global(html.dark .bg-black\/30),
	:global(html.dark .bg-black\/20),
	:global(html.dark .bg-black\/10) {
		background-color: transparent !important;
		display: none !important;
	}
	
	/* Global: Remove any div with bg-black classes that cover images */
	:global(html.dark div[class*="bg-black"]) {
		background-color: transparent !important;
		display: none !important;
	}
	
	/* Global: Ensure hero sections don't have dark overlays */
	:global(html.dark .hero-section) {
		background-color: transparent !important;
	}
	
	/* Global: Force all sections to not have dark overlays */
	:global(html.dark section) {
		background-color: transparent !important;
	}
	
	/* Global: Remove dark overlays from any absolute positioned elements */
	:global(html.dark .absolute.inset-0.-z-10.bg-black\/50),
	:global(html.dark .absolute.inset-0.-z-10.bg-black\/60),
	:global(html.dark .absolute.inset-0.-z-10.bg-black\/40),
	:global(html.dark .absolute.inset-0.-z-10.bg-black\/30),
	:global(html.dark .absolute.inset-0.-z-10.bg-black\/20),
	:global(html.dark .absolute.inset-0.-z-10.bg-black\/10) {
		background-color: transparent !important;
		display: none !important;
	}
	
	/* Mobile menu dark mode improvements */
	:global(html.dark .mobile-menu-item) {
		transition: all 0.2s ease-in-out;
	}
	
	:global(html.dark .mobile-menu-item:hover) {
		transform: translateX(4px);
		background-color: rgba(75, 85, 99, 0.1) !important;
	}
	
	/* Mobile menu dropdown animations for dark mode */
	:global(html.dark .peer-checked\/products:max-h-80) {
		max-height: 20rem;
	}
	
	:global(html.dark .peer-checked\/discover:max-h-80) {
		max-height: 20rem;
	}
	
	/* Smooth dropdown transitions for dark mode */
	:global(html.dark .overflow-hidden) {
		transition: max-height 0.3s ease-in-out;
	}
	
	/* Mobile menu hover effects for dark mode */
	:global(html.dark nav .mobile-menu-item:hover) {
		background-color: rgba(99, 102, 241, 0.1) !important;
		color: #a5b4fc !important;
		transform: translateX(4px);
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Mobile menu label hover effects for dark mode */
	:global(html.dark nav label:hover) {
		background-color: rgba(75, 85, 99, 0.1) !important;
		transform: translateX(2px);
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Mobile menu close button hover for dark mode */
	:global(html.dark .mobile-menu-close:hover) {
		background-color: rgba(75, 85, 99, 0.2) !important;
		transform: scale(1.05);
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Ensure close button X is clearly visible in dark mode */
	:global(html.dark .mobile-menu-close svg) {
		color: #9f9f9f !important;

	}
	
	
	:global(html.dark .mobile-menu-close:hover) {
		background-color: rgba(69, 75, 84, 0.3) !important;
		border-color: rgba(75, 85, 99, 0.5);
	}
</style>

{@render children()}
  
<!-- Navbar -->
<nav class="fixed top-4 inset-x-4 z-50">
	<div class="mx-auto max-w-7xl px-6 py-4 bg-white/95 dark:bg-gray-900/95 border border-gray-100 shadow-lg flex items-center justify-between rounded-full transition-colors duration-200">
		<!-- Logo -->
		<a href="{base}/" class="flex items-center gap-2">
			<img src={logoGlint} alt="Glam Stitch Logo" class="h-10 w-10 object-contain">
			<span class="hidden sm:block text-lg font-semibold text-gray-900 dark:text-white">Glam Stitch</span>
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden lg:flex items-center space-x-8">
			<a href="{base}/" class="navbar-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
				Beranda
			</a>

			<!-- Products Dropdown -->
			<div class="relative dropdown-container">
				<button onclick={toggleProductsDropdown} class="navbar-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors duration-200">
					Produk
					<svg class="w-4 h-4 transition-transform duration-200 {productsDropdownOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</button>
				{#if productsDropdownOpen}
					<div class="dropdown-menu absolute left-0 lg:left-0 xl:left-0 top-full mt-2 w-48 lg:w-52 xl:w-56 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border-0 z-50 backdrop-blur-sm">
					<div class="py-2">
						<a href="{base}/tshirt" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
								Kaos
							</span>
						</a>
						<a href="{base}/polo" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
								Kaos Polo
							</span>
						</a>
						<a href="{base}/jersey" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
								Jersey
							</span>
						</a>
						<a href="{base}/jacket" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
								Jaket
							</span>
						</a>
						<a href="{base}/shirts" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
								Kemeja
							</span>
						</a>
					</div>
					</div>
				{/if}
			</div>

			<a href="{base}/services" class="navbar-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
				Layanan
			</a>

			<!-- Discover Us Dropdown -->
			<div class="relative dropdown-container">
				<button onclick={toggleDiscoverDropdown} class="navbar-link text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 transition-colors duration-200">
					Jelajahi
					<svg class="w-4 h-4 transition-transform duration-200 {discoverDropdownOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</button>
				{#if discoverDropdownOpen}
					<div class="dropdown-menu absolute left-0 lg:left-0 xl:left-0 top-full mt-2 w-48 lg:w-52 xl:w-56 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border-0 z-50 backdrop-blur-sm">
					<div class="py-2">
						<a href="{base}/about-us" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								Tentang Kami
							</span>
						</a>
						<a href="{base}/blog" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
								</svg>
								Blog
							</span>
						</a>
						<a href="{base}/faq" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								FAQ
							</span>
						</a>
						<a href="{base}/contact-us" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
								Hubungi Kami
							</span>
						</a>
						<a href="{base}/store-location" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20l-4.172-4.172a2 2 0 00-2.828 0L4 18.172V4a2 2 0 012-2h12a2 2 0 012 2v12.172l-2.343-2.343a2 2 0 00-2.828 0z" />
								</svg>
								Lokasi Toko
							</span>
						</a>
						<a href="{base}/gallery" class="dropdown-item block px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 rounded-lg mx-2">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
								Galeri
							</span>
						</a>
					</div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Right Side Actions -->
		<div class="flex items-center gap-4">
			<!-- Theme Switcher Component -->
			<ThemeSwitcher />

			<!-- Mobile Menu Toggle -->
			<label for="menu-toggle" class="lg:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
				<svg class="w-6 h-6 text-gray-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</label>
		</div>
	</div>
</nav>
  
<!-- Mobile Menu Container -->
<div class="lg:hidden">
	<!-- Toggle Checkbox -->
	<input type="checkbox" id="menu-toggle" class="peer hidden" autocomplete="off" />

	<!-- Backdrop -->
	<label for="menu-toggle" class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-300 cursor-pointer"></label>
	
	<!-- Menu Panel -->
	<div class="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white dark:bg-gray-900 shadow-2xl transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-out overflow-y-auto">
		<!-- Header -->
		<div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
			<div class="flex items-center gap-2">
				<img src={logoGlint} alt="Logo" class="h-10 w-10" />
				<span class="text-lg font-semibold text-gray-900 dark:text-white">Glam Stitch</span>
			</div>
			<label for="menu-toggle" class="mobile-menu-close p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
				<svg class="w-6 h-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</label>
		</div>

		<!-- Navigation -->
		<nav class="p-4 space-y-2">
			<a href="{base}/" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-gray-100 font-medium transition-all">
				Beranda
			</a>

			<!-- Products Dropdown -->
			<div class="relative">
				<input type="checkbox" id="mobile-products" class="peer/products hidden" />
				<label for="mobile-products" class="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer transition-all">
					<span>Produk</span>
					<svg class="w-5 h-5 transition-transform duration-300 peer-checked/products:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</label>
				<div class="overflow-hidden max-h-0 peer-checked/products:max-h-80 transition-all duration-300 ease-in-out ml-4 space-y-1">
					<a href="{base}/tshirt" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							Kaos
						</span>
					</a>
					<a href="{base}/polo" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							Kaos Polo
						</span>
					</a>
					<a href="{base}/jersey" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							Jersey
						</span>
					</a>
					<a href="{base}/jacket" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							Jaket
						</span>
					</a>
					<a href="{base}/shirts" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							Kemeja
						</span>
					</a>
				</div>
			</div>

			<a href="{base}/services" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-gray-100 font-medium transition-all">
				Layanan
			</a>

			<!-- Discover Dropdown -->
			<div class="relative">
				<input type="checkbox" id="mobile-discover" class="peer/discover hidden" />
				<label for="mobile-discover" class="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer transition-all">
					<span>Jelajahi</span>
					<svg class="w-5 h-5 transition-transform duration-300 peer-checked/discover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</label>
				<div class="overflow-hidden max-h-0 peer-checked/discover:max-h-80 transition-all duration-300 ease-in-out ml-4 space-y-1">
					<a href="{base}/about-us" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							Tentang Kami
						</span>
					</a>
					<a href="{base}/blog" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
							</svg>
							Blog
						</span>
					</a>
					<a href="{base}/faq" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							FAQ
						</span>
					</a>
					<a href="{base}/contact-us" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							Hubungi Kami
						</span>
					</a>
					<a href="{base}/store-location" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							Lokasi Toko
						</span>
					</a>
					<a href="{base}/gallery" class="mobile-menu-item block px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200">
						<span class="flex items-center gap-3">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							Galeri
						</span>
					</a>
				</div>
			</div>
		</nav>

		<!-- Footer in Mobile Menu -->
		<div class="p-6 border-t border-gray-200 dark:border-gray-800 mt-4">
			<p class="text-sm text-gray-500 dark:text-gray-400 text-center">© 2025 Glam Stitch</p>
		</div>
	</div>
</div>
  
