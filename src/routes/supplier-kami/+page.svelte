<script lang="ts">
	// @ts-expect-error - vite-imagetools query parameters
	import supplierMain from '$lib/assets/image/gallery.jpg?w=1920&format=webp&quality=85';
	// @ts-expect-error - vite-imagetools query parameters
	import supplier1 from '$lib/assets/image/gallery1.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import supplier2 from '$lib/assets/image/gallery2.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import supplier3 from '$lib/assets/image/gallery3.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import supplier4 from '$lib/assets/image/gallery4.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import logoGlint from '$lib/assets/image/logo glint.png?w=256&quality=90';
	// @ts-expect-error - vite-imagetools query parameters
	import poto7 from '$lib/assets/image/poto7.jpg?w=800&format=webp&quality=80';
	import { base } from '$app/paths';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import AnimatedCard from '$lib/components/AnimatedCard.svelte';
</script>

<svelte:head>
	<title>Supplier Kami - Glam Stitch | Mitra Terpercaya Konveksi Berkualitas</title>
	<meta
		name="description"
		content="Temukan supplier terpercaya Glam Stitch yang menyediakan bahan berkualitas tinggi untuk konveksi, sablon, dan bordir. Mitra terbaik untuk kebutuhan produksi Anda."
	/>
	<meta
		name="keywords"
		content="supplier konveksi, bahan berkualitas, mitra terpercaya, supplier kain, bahan sablon"
	/>
</svelte:head>

<section class="hero-section relative isolate overflow-hidden pt-6">
	<img
		loading="lazy"
		src={supplierMain}
		alt="Supplier Glam Stitch"
		class="hero-section absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-black/20"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 text-center sm:py-48 lg:py-40">
			<div class="animate-fade-in">
				<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					Supplier Terpercaya Kami
				</h1>
				<p class="mt-6 text-lg text-gray-300 sm:text-xl">
					Bekerja sama dengan supplier terbaik untuk menyediakan bahan berkualitas tinggi — mulai
					dari kain premium, benang berkualitas, hingga aksesoris konveksi terbaik.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="bg-white py-24 transition-colors duration-300 dark:bg-gray-900">
	<div class="mx-auto max-w-7xl space-y-32 px-6 lg:px-16">
		<div class="flex flex-col items-center gap-12 lg:flex-row">
			<ScrollReveal animation="fade-right" delay={200} class="lg:w-1/2">
				<AnimatedCard hoverEffect="zoom">
					<img
						loading="lazy"
						src="https://cms.disway.id/uploads/6243de5657616b5d0f48d5f28b9df10d.jpg"
						alt="Knitto Textiles"
						class="h-80 w-full rounded-2xl object-cover shadow-lg"
					/>
				</AnimatedCard>
			</ScrollReveal>
			<ScrollReveal animation="fade-left" delay={400} class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Knitto Textiles</h2>
				<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
					Pelopor toko kain modern di Indonesia yang memproduksi kain di pabrik sendiri. Knitto
					menyediakan 500+ jenis kain berkualitas premium dengan 100+ stok warna tersedia, melayani
					lebih dari 10.000 pelanggan dan brand dengan kemudahan order online.
				</p>
				<a
					href="https://knitto.co.id/"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
				>
					Kunjungi Website →
				</a>
			</ScrollReveal>
		</div>

		<div class="flex flex-col-reverse items-center gap-12 lg:flex-row">
			<ScrollReveal animation="fade-right" delay={200} class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Nirwana Textile</h2>
				<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
					Nirwana Textile adalah supplier tekstil dan bahan sandang yang menyediakan berbagai macam
					kain berkualitas untuk kebutuhan konveksi. Nirwana Textile menawarkan pilihan bahan yang
					beragam dengan harga kompetitif serta stok yang selalu tersedia untuk mendukung kelancaran
					produksi kami.
				</p>
				<a
					href="https://gateway.nirwanatextile.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
				>
					Kunjungi Website →
				</a>
			</ScrollReveal>
			<ScrollReveal animation="fade-left" delay={400} class="lg:w-1/2">
				<AnimatedCard hoverEffect="zoom">
					<img
						loading="lazy"
						src="https://www.nirwanatextile.com/images/stores/store%20bkr.png"
						alt="Nirwana Textile"
						class="h-80 w-full rounded-2xl object-cover shadow-lg"
					/>
				</AnimatedCard>
			</ScrollReveal>
		</div>

		{#if false}
			<div class="flex flex-col-reverse items-center gap-12 lg:flex-row">
				<img
					loading="lazy"
					src={supplier1}
					alt="Supplier Bahan Sablon"
					class="gallery h-80 w-full rounded-2xl object-cover shadow-lg lg:w-1/2"
				/>
				<div class="lg:w-1/2">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Supplier Bahan Sablon</h2>
					<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
						Untuk layanan sablon berkualitas tinggi, kami bermitra dengan supplier tinta sablon dan
						bahan pendukung terbaik. Tinta yang kami gunakan memiliki daya tahan warna yang
						excellent dan ramah lingkungan. Setiap supplier telah teruji kualitasnya untuk
						memastikan hasil sablon yang tajam dan tahan lama.
					</p>
				</div>
			</div>

			<div class="flex flex-col items-center gap-12 lg:flex-row">
				<div class="lg:w-1/2">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white">
						Supplier Mesin & Peralatan
					</h2>
					<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
						Kami bekerja sama dengan supplier mesin jahit dan peralatan konveksi terpercaya untuk
						memastikan proses produksi berjalan lancar dan efisien. Mesin-mesin yang kami gunakan
						adalah produk terbaru dengan teknologi canggih untuk menghasilkan kualitas jahitan yang
						sempurna dan konsisten.
					</p>
				</div>
				<img
					loading="lazy"
					src={supplier2}
					alt="Supplier Mesin & Peralatan"
					class="gallery h-80 w-full rounded-2xl object-cover shadow-lg lg:w-1/2"
				/>
			</div>

			<div class="flex flex-col-reverse items-center gap-12 lg:flex-row">
				<img
					loading="lazy"
					src={supplier3}
					alt="Komitmen Kualitas Supplier"
					class="gallery h-80 w-full rounded-2xl object-cover shadow-lg lg:w-1/2"
				/>
				<div class="lg:w-1/2">
					<h2 class="text-3xl font-bold text-gray-900 dark:text-white">
						Komitmen Kualitas Bersama
					</h2>
					<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
						Setiap supplier yang bermitra dengan kami telah menandatangani komitmen kualitas yang
						ketat. Kami melakukan audit berkala untuk memastikan standar kualitas terjaga dan sesuai
						dengan ekspektasi pelanggan. Hubungan kemitraan yang saling menguntungkan ini
						memungkinkan kami memberikan produk terbaik dengan harga kompetitif.
					</p>
				</div>
			</div>
		{/if}
	</div>
</section>

<footer class="bg-gray-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8">
		<div class="animate__animated animate__fadeInUp xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-6">
				<img
					loading="lazy"
					class="footer-logo animate__animated animate__zoomIn animate__delay-1s h-16 w-16"
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
