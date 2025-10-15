<script lang="ts">
	// Page content only - dark mode handled by layout
	// @ts-expect-error - vite-imagetools query parameters
	import customerMain from '$lib/assets/image/gallery.jpg?w=1920&format=webp&quality=85';
	// @ts-expect-error - vite-imagetools query parameters
	import customer1 from '$lib/assets/image/gallery1.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import customer2 from '$lib/assets/image/gallery2.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import customer3 from '$lib/assets/image/kasir.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import customer4 from '$lib/assets/image/gallery4.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import logoGlint from '$lib/assets/image/logo glint.png?w=256&quality=90';
	// @ts-expect-error - vite-imagetools query parameters
	import poto7 from '$lib/assets/image/poto7.jpg?w=800&format=webp&quality=80';
	import { base } from '$app/paths';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import AnimatedCard from '$lib/components/AnimatedCard.svelte';
</script>

<svelte:head>
	<title>Pelanggan Kami - Glam Stitch | Testimoni & Portofolio Klien Terpercaya</title>
	<meta
		name="description"
		content="Lihat testimoni dan portofolio pelanggan terpercaya Glam Stitch. Dari perusahaan besar hingga komunitas, kami melayani berbagai kebutuhan konveksi berkualitas tinggi."
	/>
	<meta
		name="keywords"
		content="testimoni pelanggan, portofolio klien, konveksi terpercaya, pelanggan puas, hasil kerja"
	/>
</svelte:head>

<section class="hero-section relative isolate overflow-hidden pt-6">
	<img
		loading="lazy"
		src={customerMain}
		alt="Pelanggan Glam Stitch"
		class="hero-section absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-black/20"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 text-center sm:py-48 lg:py-40">
			<div class="animate-fade-in">
				<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					Pelanggan Terpercaya Kami
				</h1>
				<p class="mt-6 text-lg text-gray-300 sm:text-xl">
					Berkat kepercayaan pelanggan setia, Glam Stitch terus berkembang — dari perusahaan besar,
					komunitas, hingga individu yang mempercayai kualitas layanan kami.
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
						src={customer4}
						alt="Pelanggan Perusahaan"
						class="h-80 w-full rounded-2xl object-cover shadow-lg"
					/>
				</AnimatedCard>
			</ScrollReveal>
			<ScrollReveal animation="fade-left" delay={400} class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Perusahaan & Korporasi</h2>
				<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
					Kami bangga melayani berbagai perusahaan dan korporasi untuk kebutuhan seragam karyawan,
					merchandise, dan event. Dari startup hingga perusahaan multinasional, kami memahami
					pentingnya kualitas dan ketepatan waktu. Setiap proyek dikerjakan dengan standar tinggi
					untuk memenuhi ekspektasi profesional.
				</p>
			</ScrollReveal>
		</div>

		<div class="flex flex-col-reverse items-center gap-12 lg:flex-row">
			<ScrollReveal animation="fade-right" delay={200} class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Komunitas & Organisasi</h2>
				<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
					Banyak komunitas dan organisasi mempercayai Glam Stitch untuk kebutuhan seragam dan
					merchandise mereka. Dari komunitas olahraga, organisasi mahasiswa, hingga komunitas hobi.
					Kami memahami bahwa setiap komunitas memiliki identitas unik yang perlu diwujudkan melalui
					desain dan kualitas produk yang tepat.
				</p>
			</ScrollReveal>
			<ScrollReveal animation="fade-left" delay={400} class="lg:w-1/2">
				<AnimatedCard hoverEffect="zoom">
					<img
						loading="lazy"
						src={poto7}
						alt="Pelanggan Komunitas"
						class="h-80 w-full rounded-2xl object-cover shadow-lg"
					/>
				</AnimatedCard>
			</ScrollReveal>
		</div>

		<div class="flex flex-col-reverse items-center gap-12 lg:flex-row">
			<ScrollReveal animation="fade-right" delay={200} class="lg:w-1/2">
				<AnimatedCard hoverEffect="zoom">
					<img
						loading="lazy"
						src={customer1}
						alt="Pelanggan Event & Wedding"
						class="h-80 w-full rounded-2xl object-cover shadow-lg"
					/>
				</AnimatedCard>
			</ScrollReveal>
			<ScrollReveal animation="fade-left" delay={400} class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Event & Wedding</h2>
				<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
					Untuk momen-momen spesial seperti pernikahan, ulang tahun, dan acara keluarga, kami
					menyediakan layanan custom yang memenuhi kebutuhan unik setiap pelanggan. Dari kaos
					keluarga, seragam bridesmaid, hingga merchandise event. Setiap detail diperhatikan untuk
					menciptakan kenangan yang berharga.
				</p>
			</ScrollReveal>
		</div>

		<div class="flex flex-col items-center gap-12 lg:flex-row">
			<ScrollReveal animation="fade-right" delay={200} class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Sekolah & Pendidikan</h2>
				<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
					Banyak sekolah dan institusi pendidikan mempercayai Glam Stitch untuk kebutuhan seragam
					siswa, kaos olahraga, dan merchandise sekolah. Kami memahami pentingnya kenyamanan dan
					daya tahan untuk aktivitas sehari-hari siswa. Setiap produk dirancang dengan
					mempertimbangkan kebutuhan praktis.
				</p>
			</ScrollReveal>
			<ScrollReveal animation="fade-left" delay={400} class="lg:w-1/2">
				<AnimatedCard hoverEffect="zoom">
					<img
						loading="lazy"
						src={customer2}
						alt="Pelanggan Sekolah"
						class="h-80 w-full rounded-2xl object-cover shadow-lg"
					/>
				</AnimatedCard>
			</ScrollReveal>
		</div>

		<div class="flex flex-col-reverse items-center gap-12 lg:flex-row">
			<ScrollReveal animation="fade-right" delay={200} class="lg:w-1/2">
				<AnimatedCard hoverEffect="zoom">
					<img
						loading="lazy"
						src={customer3}
						alt="Testimoni Pelanggan"
						class="h-80 w-full rounded-2xl object-cover shadow-lg"
					/>
				</AnimatedCard>
			</ScrollReveal>
			<ScrollReveal animation="fade-left" delay={400} class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Testimoni & Kepuasan</h2>
				<p class="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
					Kepuasan pelanggan adalah prioritas utama kami. Banyak pelanggan yang kembali dan
					merekomendasikan Glam Stitch kepada teman dan kolega mereka. Testimoni positif dan
					kepercayaan yang berkelanjutan menjadi bukti komitmen kami dalam memberikan layanan
					terbaik dan produk berkualitas tinggi.
				</p>
			</ScrollReveal>
		</div>
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
