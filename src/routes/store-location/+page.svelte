<script lang="ts">
	// Page content only - dark mode handled by layout
	import logoGlint from '$lib/assets/image/logo glint.png';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Lokasi Toko - Glam Stitch | Alamat & Jam Operasional</title>
	<meta
		name="description"
		content="Temukan lokasi toko Glam Stitch dan jam operasional kami. Kunjungi workshop konveksi kami untuk konsultasi langsung dan melihat proses produksi."
	/>
	<meta
		name="keywords"
		content="lokasi toko, alamat konveksi, jam operasional, workshop konveksi, konsultasi langsung"
	/>
</svelte:head>

<!-- Header -->
<section
	class="hero-section relative isolate overflow-hidden bg-white pt-32 pb-20 sm:pt-36 sm:pb-32 dark:bg-gray-900"
>
	<!-- Background Image -->
	<img
		loading="lazy"
		src="https://img.freepik.com/premium-photo/asian-seamstress-work-sewing-machine_50401-138.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
		alt="Seamstress bekerja dengan mesin jahit"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-center"
	/>

	<!-- Overlay -->
	<div class="absolute inset-0 -z-10 bg-black/20"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<!-- Badge -->
			<div class="mb-5 flex justify-center">
				<div
					class="inline-flex items-center rounded-full bg-gray-100/10 px-4 py-1.5 text-sm text-gray-200 ring-1 ring-black/10 transition hover:ring-black/20 dark:bg-white/10 dark:text-white dark:ring-white/20 dark:hover:ring-white/40"
				>
					Lokasi Toko Glam Stitch
				</div>
			</div>

			<!-- Heading -->
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl dark:text-white">
				Glam Stitch Mitra Konveksi Terpercaya Anda
			</h1>

			<!-- Description -->
			<p class="mt-6 text-lg text-gray-200 sm:text-xl dark:text-gray-300">
				Kunjungi workshop dan toko kami di Desa Cijoged, Kecamatan Cisarua, Kabupaten Sumedang —
				mudah dijangkau dan siap melayani Anda secara langsung maupun online.
			</p>
		</div>
	</div>
</section>

<!-- Location Section -->
<section class="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 lg:px-16">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
				Lokasi Toko Glam Stitch
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
				Temukan toko kami di lokasi strategis yang mudah dijangkau. Kunjungi dan diskusikan langsung
				kebutuhan konveksi Anda bersama tim profesional kami!
			</p>
		</div>

		<div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
			<!-- Map -->
			<div class="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-700">
				<!-- svelte-ignore a11y_missing_attribute -->
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.001924246237!2d107.63708791074282!3d-6.52143746372805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69157b1927e5a3%3A0x1182e42524259d7!2sKaos%20Polos%20Glam%20Stitch!5e0!3m2!1sid!2sid!4v1746449536701!5m2!1sid!2sid"
					width="100%"
					height="400"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					class="h-[400px] w-full transform rounded-xl border-none shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
				>
				</iframe>
			</div>

			<!-- Location Details -->
			<div class="space-y-6">
				<!-- Address -->
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0">
						<img
							loading="lazy"
							src="https://img.freepik.com/free-vector/location-pin-map-glyph_78370-1576.jpg?ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
							alt="Icon Lokasi"
							class="h-14 w-14 transform rounded-xl object-cover shadow-md transition-transform hover:scale-105"
						/>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Alamat</h3>
						<p class="text-gray-600 dark:text-gray-300">
							Kampung Dayacipta, Tanggulun Bar., Kec. Kalijati, Kabupaten Subang, Jawa Barat 41271
						</p>
					</div>
				</div>

				<!-- Operating Hours -->
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0">
						<img
							loading="lazy"
							src="https://media.istockphoto.com/id/1283403359/id/vektor/ikon-waktu-di-latar-belakang-transparan.jpg?s=612x612&w=0&k=20&c=foEv6n4528X0AkgcQZBX6TqWlZAOezpBEgoDRS-5LDo="
							alt="Icon Jam"
							class="h-14 w-14 transform rounded-xl object-cover shadow-md transition-transform hover:scale-105"
						/>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Jam Operasional</h3>
						<p class="text-gray-600 dark:text-gray-300">Senin - Sabtu, 09.00 - 17.00 WIB</p>
						<p class="text-gray-600 dark:text-gray-300">Minggu, Tutup</p>
					</div>
				</div>

				<!-- Link Maps -->
				<div>
					<a
						href="https://maps.app.goo.gl/bHXM3HurzhfNRbENA"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex transform items-center gap-3 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-xl dark:bg-indigo-500 dark:hover:bg-indigo-600"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 0C7.802 0 4.403 3.399 4.403 7.597c0 5.148 7.597 16.403 7.597 16.403s7.597-11.255 7.597-16.403C19.597 3.399 16.198 0 12 0zm0 10.838c-1.789 0-3.241-1.452-3.241-3.241S10.211 4.356 12 4.356s3.241 1.452 3.241 3.241S13.789 10.838 12 10.838z"
							/>
						</svg>
						Buka di Google Maps
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-gray-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8">
		<div class="animate__animated animate__fadeInUp xl:grid xl:grid-cols-3 xl:gap-8">
			<!-- Logo & Description -->
			<div class="space-y-6">
				<img
					loading="lazy"
					class="animate__animated animate__zoomIn animate__delay-1s h-24 w-24"
					src={logoGlint}
					alt="Glam Stitch Logo"
				/>
				<div class="flex space-x-6">
					<!-- Facebook -->
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

					<!-- Instagram -->
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

			<!-- Navigation Links -->
			<div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
				<!-- Navigasi -->
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

				<!-- Products -->
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

				<!-- Discover Us -->
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

		<!-- Footer Bottom -->
		<div
			class="animate__animated animate__fadeInUp animate__delay-3s mt-16 border-t border-white/10 pt-8 text-center"
		>
			<p class="text-sm leading-5 text-gray-400">&copy; 2025 Glam Stitch. All rights reserved.</p>
		</div>
	</div>
</footer>

<style type="text/tailwindcss"></style>
