<script lang="ts">
	import { base } from '$app/paths';
	import instagramIcon from '$lib/assets/image/instagram.svg';
	import facebookIcon from '$lib/assets/image/facebook.svg';
	import youtubeIcon from '$lib/assets/image/youtube.svg';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	// @ts-expect-error - vite-imagetools query parameters
	import logoGlint from '$lib/assets/image/logo glint.png?w=256&quality=90';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import AnimatedCard from '$lib/components/AnimatedCard.svelte';
</script>

<svelte:head>
	<title>Sosial Media - Glam Stitch</title>
	<meta name="description" content="Ikuti kami di sosial media untuk mendapatkan update terbaru" />
</svelte:head>

<section class="hero-section relative isolate overflow-hidden pt-6">
	<img
		loading="lazy"
		src="https://i.pinimg.com/1200x/61/54/4c/61544cdb7afd8c7f7962c07ad426762a.jpg"
		alt="Social Media Background"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-black/40"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
			<div class="hidden sm:mb-8 sm:flex sm:justify-center">
				<div
					class="relative rounded-full bg-white/10 px-4 py-1.5 text-sm text-gray-200 ring-1 ring-white/20 transition hover:ring-white/30"
				>
					Terhubung dengan Glam Stitch
				</div>
			</div>

			<div class="animate-fade-in text-center">
				<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					Ikuti Kami di Sosial Media
				</h1>
				<p class="mt-6 text-lg text-gray-200 sm:text-xl">
					Tetap terhubung dengan kami untuk mendapatkan update terbaru, promo menarik, inspirasi
					fashion, dan konten eksklusif lainnya!
				</p>
			</div>
		</div>
	</div>
</section>

<div class="bg-gray-50 py-16 dark:bg-gray-900">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-3"
			in:fade={{ duration: 600, easing: quintOut }}
		>
			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="relative p-8 text-center">
					<div class="mb-6 flex justify-center">
						<div
							class="rounded-full bg-gray-100 p-4 transition-all duration-300 group-hover:bg-indigo-50 dark:bg-gray-700 dark:group-hover:bg-gray-600"
						>
							<img src={instagramIcon} alt="Instagram" class="h-12 w-12" />
						</div>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">Instagram</h3>
					<p class="mb-6 text-gray-600 dark:text-gray-300">
						Lihat koleksi terbaru dan inspirasi fashion kami
					</p>
					<a
						href="{base}/404.html"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600"
					>
						<span>Kunjungi Instagram</span>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</a>
				</div>
			</div>

			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="relative p-8 text-center">
					<div class="mb-6 flex justify-center">
						<div
							class="rounded-full bg-gray-100 p-4 transition-all duration-300 group-hover:bg-indigo-50 dark:bg-gray-700 dark:group-hover:bg-gray-600"
						>
							<img src={facebookIcon} alt="Facebook" class="h-12 w-12" />
						</div>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">Facebook</h3>
					<p class="mb-6 text-gray-600 dark:text-gray-300">
						Bergabung dengan komunitas kami di Facebook
					</p>
					<a
						href="{base}/404.html"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600"
					>
						<span>Kunjungi Facebook</span>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</a>
				</div>
			</div>

			<div
				class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="relative p-8 text-center">
					<div class="mb-6 flex justify-center">
						<div
							class="rounded-full bg-gray-100 p-4 transition-all duration-300 group-hover:bg-indigo-50 dark:bg-gray-700 dark:group-hover:bg-gray-600"
						>
							<img src={youtubeIcon} alt="YouTube" class="h-12 w-12" />
						</div>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">YouTube</h3>
					<p class="mb-6 text-gray-600 dark:text-gray-300">
						Tonton video tutorial dan behind the scenes kami
					</p>
					<a
						href="{base}/404.html"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600"
					>
						<span>Kunjungi YouTube</span>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<div
			class="mx-auto mt-16 max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md dark:border-gray-700 dark:bg-gray-800"
		>
			<h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
				Mengapa Mengikuti Kami?
			</h2>
			<div class="grid gap-6 text-left sm:grid-cols-2">
				<div class="flex items-start gap-3">
					<div class="flex-shrink-0">
						<svg
							class="h-6 w-6 text-gray-600 dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 dark:text-gray-100">Update Produk Terbaru</h3>
						<p class="text-sm text-gray-600 dark:text-gray-300">
							Dapatkan info koleksi terbaru kami
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<div class="flex-shrink-0">
						<svg
							class="h-6 w-6 text-gray-600 dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 dark:text-gray-100">Promo Eksklusif</h3>
						<p class="text-sm text-gray-600 dark:text-gray-300">
							Penawaran khusus untuk followers kami
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<div class="flex-shrink-0">
						<svg
							class="h-6 w-6 text-gray-600 dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 dark:text-gray-100">Inspirasi Fashion</h3>
						<p class="text-sm text-gray-600 dark:text-gray-300">Tips styling dan trend terkini</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<div class="flex-shrink-0">
						<svg
							class="h-6 w-6 text-gray-600 dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<div>
						<h3 class="font-semibold text-gray-900 dark:text-gray-100">Behind the Scenes</h3>
						<p class="text-sm text-gray-600 dark:text-gray-300">
							Lihat proses pembuatan produk kami
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<footer class="bg-gray-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8">
		<div class="animate__animated animate__fadeInUp xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-6">
				<img
					loading="lazy"
					class="animate__animated animate__zoomIn animate__delay-1s h-24 w-24"
					src={logoGlint}
					alt="Glam Stitch Logo"
				/>
				<div class="flex space-x-6">
					<a href="/" class="text-gray-500 transition duration-300 hover:text-gray-400">
						<span class="sr-only">Facebook</span>
						<svg
							class="animate__animated animate__fadeIn animate__delay-2s h-7 w-7"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M22 12a10 10 0 10-11.6 9.87v-6.99H8.1v-2.88h2.3V9.41c0-2.28 1.35-3.55 3.42-3.55.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.88h-2.1v6.99A10 10 0 0022 12z"
							/>
						</svg>
					</a>

					<a href="/" class="text-gray-500 transition duration-300 hover:text-gray-400">
						<span class="sr-only">Instagram</span>
						<svg
							class="animate__animated animate__fadeIn animate__delay-2_5s h-7 w-7"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1 1 0 100 2 1 1 0 000-2z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
				<div>
					<h3 class="text-lg leading-6 font-semibold text-white">Navigasi</h3>
					<ul class="mt-6 space-y-4">
						<li>
							<a
								href="/"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Beranda</a
							>
						</li>
						<li>
							<a
								href="/product"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Produk</a
							>
						</li>
						<li>
							<a
								href="{base}/404.html"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Layanan</a
							>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="text-lg leading-6 font-semibold text-white">Produk</h3>
					<ul class="mt-6 space-y-4">
						<li>
							<a
								href="/tshirt"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400">Kaos</a
							>
						</li>
						<li>
							<a
								href="/polo"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Kaos Polo</a
							>
						</li>
						<li>
							<a
								href="/jersey"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Jersey</a
							>
						</li>
						<li>
							<a
								href="/jacket"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Hoodie/Sweater</a
							>
						</li>
						<li>
							<a
								href="/shirts"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Kemeja</a
							>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="text-lg leading-6 font-semibold text-white">Jelajahi</h3>
					<ul class="mt-6 space-y-4">
						<li>
							<a
								href="/about-us"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Tentang Kami</a
							>
						</li>
						<li>
							<a
								href="/contact-us"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Hubungi Kami</a
							>
						</li>
						<li>
							<a
								href="/store-location"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Lokasi Toko</a
							>
						</li>
						<li>
							<a
								href="/gallery"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Tim Kami</a
							>
						</li>
						<li>
							<a
								href="{base}/404.html"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Pelanggan Kami</a
							>
						</li>
						<li>
							<a
								href="/supplier-kami"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Supplier Kami</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div
			class="animate__animated animate__fadeInUp animate__delay-3s mt-16 border-t border-white/10 pt-8 text-center"
		>
			<p class="text-sm leading-5 text-gray-400">&copy; 2025 Glam Stitch. All rights reserved.</p>
		</div>
	</div>
</footer>
