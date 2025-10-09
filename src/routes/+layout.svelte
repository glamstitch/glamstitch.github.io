<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import logoGlint from '$lib/assets/image/logo glint.png';
	import instagramIcon from '$lib/assets/image/instagram.svg';
	import facebookIcon from '$lib/assets/image/facebook.svg';
	import youtubeIcon from '$lib/assets/image/youtube.svg';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import LoadingScreen from '$lib/components/LoadingScreen.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { navigating } from '$app/stores';

	let { children } = $props();

	// State for dropdown menus
	let companyDropdownOpen = $state(false);
	let socialDropdownOpen = $state(false);
	let companyTimeout: ReturnType<typeof setTimeout> | undefined;
	let socialTimeout: ReturnType<typeof setTimeout> | undefined;

	// State for mobile menu
	let mobileMenuOpen = $state(false);

	function handleCompanyMouseEnter() {
		if (companyTimeout) {
			clearTimeout(companyTimeout);
			companyTimeout = undefined;
		}
		companyDropdownOpen = true;
	}

	function handleCompanyMouseLeave() {
		companyTimeout = setTimeout(() => {
			companyDropdownOpen = false;
			resetDropdownAnimations();
		}, 150);
	}

	function handleSocialMouseEnter() {
		if (socialTimeout) {
			clearTimeout(socialTimeout);
			socialTimeout = undefined;
		}
		socialDropdownOpen = true;
	}

	function handleSocialMouseLeave() {
		socialTimeout = setTimeout(() => {
			socialDropdownOpen = false;
			resetDropdownAnimations();
		}, 150);
	}

	// Function to toggle mobile menu
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Function to close mobile menu
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Close dropdowns when clicking outside (for mobile)
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.dropdown-container')) {
			companyDropdownOpen = false;
			socialDropdownOpen = false;
			resetDropdownAnimations();
		}
	}

	// Reset dropdown animations
	function resetDropdownAnimations() {
		const items = document.querySelectorAll('.dropdown-item');
		items.forEach((item) => {
			item.classList.remove('show');
		});
	}

	// Add click outside listener
	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
			// Cleanup timeouts
			if (companyTimeout) clearTimeout(companyTimeout);
			if (socialTimeout) clearTimeout(socialTimeout);
		};
	});
</script>

<!-- Loading Screen during navigation -->
{#if $navigating}
	<LoadingScreen />
{/if}

{@render children()}

<!-- Navbar -->
<nav class="fixed inset-x-4 top-4 z-50">
	<div
		class="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-gray-200 bg-white/95 px-6 py-0.5 shadow-lg backdrop-blur-md"
	>
		<!-- Logo -->
		<a href="{base}/" class="navbar-logo group flex items-center gap-2">
			<img
				src={logoGlint}
				alt="Glam Stitch Logo"
				class="h-16 w-16 object-contain dark:brightness-110"
			/>
			<span class="hidden text-xl font-medium text-gray-900 transition-colors duration-200 sm:block"
				>Glam Stitch</span
			>
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden items-center space-x-8 lg:flex">
			<a
				href="{base}/"
				class="navbar-link group relative text-base font-semibold text-gray-900 transition-colors duration-200 hover:text-indigo-600"
			>
				Beranda
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"
				></span>
			</a>

			<!-- Products Link -->
			<a
				href="{base}/product"
				class="navbar-link group relative text-base font-semibold text-gray-900 transition-colors duration-200 hover:text-indigo-600"
			>
				Produk
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"
				></span>
			</a>

			<a
				href="{base}/services"
				class="navbar-link group relative text-base font-semibold text-gray-900 transition-colors duration-200 hover:text-indigo-600"
			>
				Layanan
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"
				></span>
			</a>

			<!-- Company Info Dropdown -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="dropdown-container relative"
				onmouseenter={handleCompanyMouseEnter}
				onmouseleave={handleCompanyMouseLeave}
			>
				<button
					class="navbar-link group relative flex items-center gap-1 text-base font-semibold text-gray-900 transition-colors duration-200 hover:text-indigo-600"
				>
					Lainnya
					<svg
						class="h-4 w-4 transition-all duration-300 {companyDropdownOpen
							? 'rotate-180'
							: ''} text-gray-900"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"
					></span>
				</button>
				{#if companyDropdownOpen}
					<div
						class="dropdown-menu absolute top-full left-0 z-50 mt-2 w-48 rounded-xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur-md lg:left-0 lg:w-52 xl:left-0 xl:w-56"
					>
						<div class="py-2">
							<a
								href="{base}/about-us"
								class="dropdown-item mx-2 block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
							>
								<span class="flex items-center gap-2">
									<svg
										class="h-4 w-4 text-gray-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Tentang Kami
								</span>
							</a>

							<a
								href="{base}/contact-us"
								class="dropdown-item mx-2 block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
							>
								<span class="flex items-center gap-2">
									<svg
										class="h-4 w-4 text-gray-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									Hubungi Kami
								</span>
							</a>
							<a
								href="{base}/store-location"
								class="dropdown-item mx-2 block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
							>
								<span class="flex items-center gap-2">
									<svg
										class="h-4 w-4 text-gray-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									Lokasi Toko
								</span>
							</a>
							<a
								href="{base}/gallery"
								class="dropdown-item mx-2 block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
							>
								<span class="flex items-center gap-2">
									<svg
										class="h-4 w-4 text-gray-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									Tim Kami
								</span>
							</a>
							<a
								href="{base}/supplier-kami"
								class="dropdown-item mx-2 block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
							>
								<span class="flex items-center gap-2">
									<svg
										class="h-4 w-4 text-gray-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
										/>
									</svg>
									Supplier Kami
								</span>
							</a>
							<a
								href="{base}/pelanggan-kami"
								class="dropdown-item mx-2 block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
							>
								<span class="flex items-center gap-2">
									<svg
										class="h-4 w-4 text-gray-900"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									Pelanggan Kami
								</span>
							</a>
						</div>
					</div>
				{/if}
			</div>

			<!-- Social Media Dropdown -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="dropdown-container relative"
				onmouseenter={handleSocialMouseEnter}
				onmouseleave={handleSocialMouseLeave}
			>
				<button
					class="navbar-link group relative flex items-center gap-1 text-base font-semibold text-gray-900 transition-colors duration-200 hover:text-indigo-600"
				>
					<span class="flex items-center gap-2"> Sosial Media </span>
					<svg
						class="h-4 w-4 transition-all duration-300 {socialDropdownOpen
							? 'rotate-180'
							: ''} text-gray-900"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"
					></span>
				</button>
				{#if socialDropdownOpen}
					<div
						class="dropdown-menu absolute top-full left-0 z-50 mt-2 w-48 rounded-xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur-md lg:left-0 lg:w-52 xl:left-0 xl:w-56"
					>
						<div class="py-2">
							<a
								href="{base}/404.html"
								class="dropdown-item mx-2 block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
							>
								<span class="flex items-center gap-2">
									<img src={instagramIcon} alt="Instagram" class="h-4 w-4" />
									Instagram
								</span>
							</a>

							<a
								href="{base}/404.html"
								class="dropdown-item mx-2 block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
							>
								<span class="flex items-center gap-2">
									<img src={facebookIcon} alt="Facebook" class="h-4 w-4" />
									Facebook
								</span>
							</a>

							<a
								href="{base}/404.html"
								class="dropdown-item mx-2 block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
							>
								<span class="flex items-center gap-2">
									<img src={youtubeIcon} alt="YouTube" class="h-4 w-4" />
									YouTube
								</span>
							</a>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Right Side Actions -->
		<div class="flex items-center gap-3">
			<!-- Theme Switcher Component -->
			<ThemeSwitcher />

			<!-- Mobile Menu Toggle -->
			<button
				onclick={toggleMobileMenu}
				class="group cursor-pointer rounded-lg p-1.5 transition-all duration-300 hover:bg-gray-100 lg:hidden"
			>
				<svg
					class="h-5 w-5 text-gray-900 transition-all duration-300 group-hover:scale-110 group-hover:rotate-90"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					{#if mobileMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>
		</div>
	</div>
</nav>

<!-- Mobile Menu Container -->
{#if mobileMenuOpen}
	<div class="lg:hidden">
		<!-- Backdrop -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			onclick={closeMobileMenu}
			class="mobile-menu-backdrop fixed inset-0 z-40 cursor-pointer bg-black/30"
			transition:fade={{ duration: 250, easing: cubicOut }}
		></div>

		<!-- Menu Panel - Dropdown dari bawah navbar dengan animasi menurun -->
		<div
			class="mobile-menu-panel fixed top-[92px] right-4 left-4 z-50 mx-auto max-h-[calc(100vh-108px)] max-w-7xl overflow-hidden overflow-y-auto rounded-2xl border border-gray-200 bg-white/98 shadow-2xl backdrop-blur-lg"
			transition:fly={{ y: -20, duration: 300, easing: cubicOut }}
		>
			<!-- Navigation -->
			<nav class="space-y-1 p-6">
				<a
					href="{base}/"
					onclick={closeMobileMenu}
					class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600"
				>
					Beranda
				</a>

				<!-- Products Link -->
				<a
					href="{base}/product"
					onclick={closeMobileMenu}
					class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600"
				>
					Produk
				</a>

				<a
					href="{base}/services"
					onclick={closeMobileMenu}
					class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600"
				>
					Layanan
				</a>

				<!-- Company Info Dropdown -->
				<div class="relative">
					<input type="checkbox" id="mobile-company" class="peer/company hidden" />
					<label
						for="mobile-company"
						class="mobile-menu-item flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600"
					>
						<span>Lainnya</span>
						<svg
							class="h-5 w-5 text-gray-900 transition-transform duration-300 peer-checked/company:rotate-180"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</label>
					<div
						class="max-h-0 space-y-1 overflow-hidden transition-all duration-300 ease-in-out peer-checked/company:max-h-80"
					>
						<a
							href="{base}/about-us"
							onclick={closeMobileMenu}
							class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
						>
							Tentang Kami
						</a>
						<a
							href="{base}/contact-us"
							onclick={closeMobileMenu}
							class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
						>
							Hubungi Kami
						</a>
						<a
							href="{base}/store-location"
							onclick={closeMobileMenu}
							class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
						>
							Lokasi Toko
						</a>
						<a
							href="{base}/gallery"
							onclick={closeMobileMenu}
							class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
						>
							Tim Kami
						</a>
						<a
							href="{base}/supplier-kami"
							onclick={closeMobileMenu}
							class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
						>
							Supplier Kami
						</a>
						<a
							href="{base}/pelanggan-kami"
							onclick={closeMobileMenu}
							class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
						>
							Pelanggan Kami
						</a>
					</div>
				</div>

				<!-- Social Media Dropdown -->
				<div class="relative">
					<input type="checkbox" id="mobile-social" class="peer/social hidden" />
					<label
						for="mobile-social"
						class="mobile-menu-item flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600"
					>
						<span>Sosial Media</span>
						<svg
							class="h-5 w-5 text-gray-900 transition-transform duration-300 peer-checked/social:rotate-180"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</label>
					<div
						class="max-h-0 space-y-1 overflow-hidden transition-all duration-300 ease-in-out peer-checked/social:max-h-80"
					>
						<a
							href="{base}/404.html"
							onclick={closeMobileMenu}
							class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
						>
							<span class="flex items-center gap-2">
								<img src={instagramIcon} alt="Instagram" class="h-4 w-4" />
								Instagram
							</span>
						</a>
						<a
							href="{base}/404.html"
							onclick={closeMobileMenu}
							class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
						>
							<span class="flex items-center gap-2">
								<img src={facebookIcon} alt="Facebook" class="h-4 w-4" />
								Facebook
							</span>
						</a>
						<a
							href="{base}/404.html"
							onclick={closeMobileMenu}
							class="mobile-menu-item block rounded-lg px-4 py-3 font-medium text-gray-900 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600"
						>
							<span class="flex items-center gap-2">
								<img src={youtubeIcon} alt="YouTube" class="h-4 w-4" />
								YouTube
							</span>
						</a>
					</div>
				</div>
			</nav>

			<!-- Footer in Mobile Menu -->
			<div class="border-t border-gray-200 px-6 pt-4 pb-6">
				<p class="text-center text-sm text-gray-500">© 2025 Glam Stitch</p>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Smooth dark mode transitions */
	:global(*) {
		transition:
			background-color 0.2s ease,
			color 0.2s ease,
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	/* Ensure dark mode works properly */
	:global(html.dark) {
		color-scheme: dark !important;
	}

	:global(html:not(.dark)) {
		color-scheme: light !important;
	}

	/* Comprehensive dark mode styles */
	:global(html.dark body) {
		background-color: #111827;
		color: #f9fafb;
	}

	:global(html:not(.dark) body) {
		background-color: #ffffff;
		color: #111827;
	}

	/* Ensure images are visible in dark mode */
	:global(html.dark img) {
		opacity: 1 !important;
		filter: none !important;
		visibility: visible !important;
		display: block !important;
	}

	/* Dark mode text colors */
	:global(html.dark h1),
	:global(html.dark h2),
	:global(html.dark h3),
	:global(html.dark h4),
	:global(html.dark h5),
	:global(html.dark h6) {
		color: #f9fafb !important;
	}

	:global(html.dark p) {
		color: #d1d5db !important;
	}

	:global(html.dark .text-gray-600) {
		color: #9ca3af !important;
	}

	:global(html.dark .text-gray-500) {
		color: #6b7280 !important;
	}

	:global(html.dark .text-gray-400) {
		color: #9ca3af !important;
	}

	/* Dark mode background colors */
	:global(html.dark .bg-white) {
		background-color: #1f2937 !important;
	}

	:global(html.dark .bg-gray-50) {
		background-color: #374151 !important;
	}

	:global(html.dark .bg-gray-100) {
		background-color: #4b5563 !important;
	}

	/* Dark mode borders */
	:global(html.dark .border-gray-200) {
		border-color: #374151 !important;
	}

	:global(html.dark .border-gray-300) {
		border-color: #4b5563 !important;
	}

	/* Dark mode shadows */
	:global(html.dark .shadow-md),
	:global(html.dark .shadow-lg),
	:global(html.dark .shadow-xl) {
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
	}

	/* Dropdown container */
	:global(.dropdown-container) {
		position: relative;
	}

	/* Dropdown menu */
	:global(.dropdown-menu) {
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
		pointer-events: auto;
	}

	/* Ensure dropdown stays open when hovering over menu items */
	:global(.dropdown-container:hover .dropdown-menu) {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
		pointer-events: auto;
	}

	/* Dropdown items */
	:global(.dropdown-item) {
		transition:
			background-color 0.2s ease,
			color 0.2s ease,
			transform 0.2s ease;
	}

	/* Hover effects for dropdown items */
	:global(.dropdown-item:hover) {
		transform: translateX(2px);
	}

	/* Mobile dropdown animations */
	:global(.peer-checked\/company:max-h-80) {
		max-height: 20rem;
	}

	/* Smooth dropdown transitions */
	:global(.overflow-hidden) {
		transition: max-height 0.3s ease-in-out;
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

	/* Light mode navbar styling */
	:global(html:not(.dark) nav > div) {
		background-color: rgba(255, 255, 255, 0.95) !important;
		border-color: #e5e7eb !important;
		backdrop-filter: blur(12px);
		box-shadow:
			0 10px 25px -5px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
	}

	/* Clean dark mode navbar styling */
	:global(html.dark nav > div) {
		background-color: rgba(17, 24, 39, 0.95) !important;
		border-color: #374151 !important;
		backdrop-filter: blur(12px);
		box-shadow:
			0 10px 25px -5px rgba(0, 0, 0, 0.3),
			0 4px 6px -2px rgba(0, 0, 0, 0.1) !important;
	}

	/* Dark mode navbar links */
	:global(html.dark .navbar-link) {
		color: #e5e7eb !important;
	}

	:global(html.dark .navbar-link:hover) {
		color: #818cf8 !important;
	}

	/* Dark mode dropdown styling */
	:global(html.dark .dropdown-menu) {
		background-color: rgba(17, 24, 39, 0.98) !important;
		border-color: #374151 !important;
		backdrop-filter: blur(12px);
	}

	:global(html.dark .dropdown-item) {
		color: #e5e7eb !important;
	}

	:global(html.dark .dropdown-item:hover) {
		background-color: rgba(31, 41, 55, 0.8) !important;
		color: #f9fafb !important;
	}

	/* Dark mode mobile menu */
	:global(html.dark .mobile-menu-panel) {
		background-color: rgba(17, 24, 39, 0.98) !important;
		border-color: #374151 !important;
		backdrop-filter: blur(12px);
	}

	:global(html.dark .mobile-menu-item) {
		color: #e5e7eb !important;
	}

	:global(html.dark .mobile-menu-item:hover) {
		background-color: rgba(31, 41, 55, 0.8) !important;
		color: #f9fafb !important;
	}

	:global(html.dark .mobile-menu-close) {
		color: #f9fafb !important;
	}

	:global(html.dark .mobile-menu-close:hover) {
		background-color: rgba(31, 41, 55, 0.8) !important;
	}

	/* Optimized navbar animations */
	:global(.navbar-link) {
		transition:
			color 0.2s ease,
			transform 0.2s ease;
	}

	:global(.navbar-link:hover) {
		transform: translateY(-1px);
	}

	/* Hamburger button animations */
	:global(label[for='menu-toggle']) {
		transition:
			transform 0.2s ease,
			background-color 0.2s ease;
	}

	:global(label[for='menu-toggle']:hover) {
		transform: scale(1.05);
	}

	:global(label[for='menu-toggle']:active) {
		transform: scale(0.95);
	}

	/* Hamburger to X animation */
	:global(.hamburger-line) {
		transform-origin: center;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* When menu is checked, transform hamburger to X */
	:global(.peer:checked ~ nav .hamburger-line:nth-child(1)) {
		transform: rotate(45deg) translateY(8px);
	}

	:global(.peer:checked ~ nav .hamburger-line:nth-child(2)) {
		opacity: 0;
		transform: scaleX(0);
	}

	:global(.peer:checked ~ nav .hamburger-line:nth-child(3)) {
		transform: rotate(-45deg) translateY(-8px);
	}

	/* Logo animation */
	:global(.navbar-logo) {
		transition: transform 0.2s ease;
	}

	:global(.navbar-logo:hover) {
		transform: scale(1.05);
	}

	/* Dropdown animation */
	:global(.dropdown-menu) {
		animation: slideDown 0.2s ease-out;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Mobile menu items */
	:global(.mobile-menu-item) {
		transition:
			background-color 0.2s ease,
			color 0.2s ease,
			transform 0.2s ease;
	}

	:global(.mobile-menu-item:hover) {
		transform: translateX(4px);
	}

	/* Backdrop - Now handled by Svelte transitions */
	:global(.mobile-menu-backdrop) {
		backdrop-filter: blur(4px);
	}

	/* Mobile menu responsive improvements */
	@media (max-width: 640px) {
		:global(.mobile-menu-item) {
			padding: 1rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
		:global(.mobile-menu-item) {
			padding: 0.875rem;
			font-size: 0.9rem;
		}
	}
</style>
