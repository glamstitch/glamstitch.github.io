<script lang="ts">
  // Page content only - dark mode handled by layout
  import supplierMain from '$lib/assets/image/gallery.jpg';
  import supplier1 from '$lib/assets/image/gallery1.jpg';
  import supplier2 from '$lib/assets/image/gallery2.jpg';
  import supplier3 from '$lib/assets/image/gallery3.jpg';
  import supplier4 from '$lib/assets/image/gallery4.jpg';
  import logoGlint from '$lib/assets/image/logo glint.png';
  import poto7 from '$lib/assets/image/poto7.jpg'
</script>

<svelte:head>
  <title>Supplier Kami - Glam Stitch | Mitra Terpercaya Konveksi Berkualitas</title>
  <meta name="description" content="Temukan supplier terpercaya Glam Stitch yang menyediakan bahan berkualitas tinggi untuk konveksi, sablon, dan bordir. Mitra terbaik untuk kebutuhan produksi Anda." />
  <meta name="keywords" content="supplier konveksi, bahan berkualitas, mitra terpercaya, supplier kain, bahan sablon" />
</svelte:head>

<!-- Hero Header -->
<section class="hero-section relative isolate overflow-hidden pt-6">
	<img loading="lazy"
		src={supplierMain}
		alt="Supplier Glam Stitch"
		class="hero-section absolute inset-0 -z-10 w-full h-full object-cover"/>
	<div class="absolute inset-0 -z-10 bg-black/50"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40 text-center">
			<h1 class="text-4xl sm:text-6xl font-bold text-white">Supplier Terpercaya Kami</h1>
			<p class="mt-6 text-lg text-gray-300 sm:text-xl">
				Bekerja sama dengan supplier terbaik untuk menyediakan bahan berkualitas tinggi —
				mulai dari kain premium, benang berkualitas, hingga aksesoris konveksi terbaik.
			</p>
		</div>
	</div>
</section>

<!-- Supplier Section -->
<section class="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
	<div class="mx-auto max-w-7xl px-6 lg:px-16 space-y-32">

		<!-- 1. Supplier Kain Premium -->
		<div class="flex flex-col lg:flex-row items-center gap-12">
			<img loading="lazy"
				src={supplier4}
				alt="Supplier Kain Premium"
				class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
			/>
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Supplier Kain Premium</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Kami bekerja sama dengan supplier kain terpercaya yang menyediakan berbagai jenis kain berkualitas tinggi.
					Dari katun combed, polyester, hingga kain khusus untuk seragam. Setiap supplier telah melalui proses seleksi ketat
					untuk memastikan kualitas bahan yang konsisten dan sesuai standar internasional.
				</p>
			</div>
		</div>

		<!-- 2. Supplier Benang & Aksesoris-->
		<div class="flex flex-col-reverse lg:flex-row items-center gap-12">
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Supplier Benang & Aksesoris</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Untuk memastikan kualitas jahitan yang sempurna, kami bermitra dengan supplier benang terbaik.
					Benang yang kami gunakan memiliki ketahanan tinggi, tidak mudah putus, dan memberikan hasil jahitan yang rapi.
					Selain itu, kami juga bekerja sama dengan supplier aksesoris seperti kancing, resleting, dan label berkualitas.
				</p>
			</div>
			<img loading="lazy"
				src={poto7}
				alt="Supplier Benang & Aksesoris"
				class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
			/>
		</div>

		<!-- 3. Supplier Bahan Sablon -->
		<div class="flex flex-col-reverse lg:flex-row items-center gap-12">
			<img loading="lazy"
				src={supplier1}
				alt="Supplier Bahan Sablon"
				class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
			/>
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Supplier Bahan Sablon</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Untuk layanan sablon berkualitas tinggi, kami bermitra dengan supplier tinta sablon dan bahan pendukung terbaik.
					Tinta yang kami gunakan memiliki daya tahan warna yang excellent dan ramah lingkungan.
					Setiap supplier telah teruji kualitasnya untuk memastikan hasil sablon yang tajam dan tahan lama.
				</p>
			</div>
		</div>

		<!-- 4. Supplier Mesin & Peralatan -->
		<div class="flex flex-col lg:flex-row items-center gap-12">
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Supplier Mesin & Peralatan</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Kami bekerja sama dengan supplier mesin jahit dan peralatan konveksi terpercaya untuk memastikan
					proses produksi berjalan lancar dan efisien. Mesin-mesin yang kami gunakan adalah produk terbaru
					dengan teknologi canggih untuk menghasilkan kualitas jahitan yang sempurna dan konsisten.
				</p>
			</div>
			<img loading="lazy"
			src={supplier2}
			alt="Supplier Mesin & Peralatan"
			class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
		/>
		</div>

		<!-- 5. Komitmen Kualitas -->
		<div class="flex flex-col-reverse lg:flex-row items-center gap-12">
			<img loading="lazy"
				src={supplier3}
				alt="Komitmen Kualitas Supplier"
				class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
			/>
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Komitmen Kualitas Bersama</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Setiap supplier yang bermitra dengan kami telah menandatangani komitmen kualitas yang ketat.
					Kami melakukan audit berkala untuk memastikan standar kualitas terjaga dan sesuai dengan ekspektasi pelanggan.
					Hubungan kemitraan yang saling menguntungkan ini memungkinkan kami memberikan produk terbaik dengan harga kompetitif.
				</p>
			</div>
		</div>

	</div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 dark:bg-white" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8 animate__animated animate__fadeInUp">

			<!-- Logo & Description -->
			<div class="space-y-6">
				<img loading="lazy" class="footer-logo h-16 w-16 animate__animated animate__zoomIn animate__delay-1s" src={logoGlint} alt="Glam Stitch Logo">
				<div class="flex space-x-6">

					<!-- Facebook -->
					<a href="/" class="text-gray-500 hover:text-gray-400 transition duration-300">
						<span class="sr-only">Facebook</span>
						<svg class="h-7 w-7 animate__animated animate__fadeIn animate__delay-2s" fill="currentColor" viewBox="0 0 24 24">
							<path d="M22 12a10 10 0 10-11.6 9.87v-6.99H8.1v-2.88h2.3V9.41c0-2.28 1.35-3.55 3.42-3.55.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.88h-2.1v6.99A10 10 0 0022 12z"/>
						</svg>
					</a>

					<!-- Instagram -->
					<a href="/" class="text-gray-500 hover:text-gray-400 transition duration-300">
						<span class="sr-only">Instagram</span>
						<svg class="h-7 w-7 animate__animated animate__fadeIn animate__delay-2_5s" fill="currentColor" viewBox="0 0 24 24">
							<path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1 1 0 100 2 1 1 0 000-2z"/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Navigation Links -->
			<div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">

				<!-- Navigasi -->
				<div>
					<h3 class="text-lg font-semibold leading-6 text-white dark:text-gray-900">Navigasi</h3>
					<ul class="mt-6 space-y-4">
					  <li><a href="/" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Beranda</a></li>
					  <li><a href="/product" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Produk</a></li>
					  <li><a href="/services" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Layanan</a></li>
					</ul>
				  </div>
          
          <!-- Products -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white dark:text-gray-900">Produk</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/tshirt" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Kaos</a></li>
              <li><a href="/polo" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Kaos Polo</a></li>
              <li><a href="/jersey" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Jersey</a></li>
              <li><a href="/jacket" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Sweater</a></li>
              <li><a href="/shirts" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Kemeja</a></li>
            </ul>
          </div>
          
          <!-- Discover Us -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white dark:text-gray-900">Jelajahi</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/about-us" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Tentang Kami</a></li>
              <li><a href="/contact-us" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Hubungi Kami</a></li>
              <li><a href="/store-location" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Lokasi Toko</a></li>
              <li><a href="/gallery" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Tim Kami</a></li>
              <li><a href="/pelanggan-kami" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Pelanggan Kami</a></li>
              <li><a href="/supplier-kami" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Supplier Kami</a></li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Footer Bottom -->
		<div class="mt-16 border-t border-white/10 pt-8 text-center animate__animated animate__fadeInUp animate__delay-3s">
			<p class="text-sm leading-5 text-gray-400 dark:text-gray-900">&copy; 2025 Glam Stitch. All rights reserved.</p>
		</div>
	</div>
</footer>
