<script lang="ts">
  // Page content only - dark mode handled by layout
  import galleryMain from '$lib/assets/image/gallery.jpg';
  import gallery1 from '$lib/assets/image/gallery1.jpg';
  import gallery2 from '$lib/assets/image/gallery2.jpg';
  import gallery3 from '$lib/assets/image/gallery3.jpg';
  import gallery4 from '$lib/assets/image/gallery4.jpg';
  import logoGlint from '$lib/assets/image/logo glint.png';
  import poto7 from '$lib/assets/image/poto7.jpg'
</script>

<svelte:head>
  <title>Tim Kami - Glam Stitch | Portfolio Karya Konveksi Terbaik</title>
  <meta name="description" content="Lihat portfolio karya konveksi terbaik dari Glam Stitch. Galeri lengkap hasil sablon, bordir, dan konveksi berkualitas tinggi untuk berbagai kebutuhan." />
  <meta name="keywords" content="galeri konveksi, portfolio karya, hasil sablon, bordir berkualitas, konveksi terbaik" />
</svelte:head>

<!-- Hero Header -->
<section class="hero-section relative isolate overflow-hidden pt-6">
	<img loading="lazy"
		src={galleryMain}
		alt="Glam Stitch Gallery"
		class="hero-section absolute inset-0 -z-10 w-full h-full object-cover"/>
	<div class="absolute inset-0 -z-10 bg-black/50"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40 text-center">
			<h1 class="text-4xl sm:text-6xl font-bold text-white">Informasi Tim Glam Stitch</h1>
			<p class="mt-6 text-lg text-gray-300 sm:text-xl">
				Menyajikan gambaran lengkap tentang aktivitas dan suasana kerja di Glam Stitch —
				mulai dari toko utama, gudang penyimpanan, proses produksi hingga area kasir.
			</p>
		</div>
	</div>
</section>

<!-- Gallery Section -->
<section class="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
	<div class="mx-auto max-w-7xl px-6 lg:px-16 space-y-32">

		<!-- 1. Toko -->
		<div class="flex flex-col lg:flex-row items-center gap-12">
			<img loading="lazy"
				src={gallery4}
				alt="Toko Glam Stitch"
				class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
			/>
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Toko Utama Glam Stitch</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Di toko utama Glam Stitch, pelanggan dapat melihat langsung beragam contoh produk seperti kaos polos,
					jaket, dan seragam custom. Area ini dirancang dengan nuansa modern dan pencahayaan hangat
					agar pelanggan merasa nyaman saat berkonsultasi maupun memilih bahan.
					Tim kami siap membantu Anda menemukan desain terbaik sesuai kebutuhan bisnis, komunitas, atau acara.
				</p>
			</div>
		</div>

		<!-- 2. Tim Glam Stitch-->
		<div class="flex flex-col-reverse lg:flex-row items-center gap-12">
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Tim Kami</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Tim profesional Glam Stitch terdiri dari desainer berpengalaman, penjahit terampil, dan teknisi sablon ahli.
					Setiap anggota tim memiliki keahlian khusus dalam bidangnya masing-masing, mulai dari desain grafis,
					teknik jahit, hingga proses finishing. Kami bekerja sama dengan kompak untuk menghasilkan produk berkualitas tinggi
					yang memenuhi standar terbaik sesuai kebutuhan pelanggan.
				</p>
			</div>
			<img loading="lazy"
				src={poto7}
				alt="Tim Glam Stitch"
				class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
			/>
		</div>

		<!-- 3. Gudang -->
		<div class="flex flex-col-reverse lg:flex-row items-center gap-12">
			<img loading="lazy"
				src={gallery1}
				alt="Gudang Glam Stitch"
				class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
			/>
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Gudang Penyimpanan</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Gudang Glam Stitch menjadi pusat penyimpanan bahan baku seperti kain, benang, dan aksesoris jahit.
					Sistem penyimpanan kami tertata rapi dengan labelisasi digital untuk memastikan
					setiap bahan mudah dilacak dan diambil kapan saja dibutuhkan.
					Kebersihan dan sirkulasi udara gudang selalu dijaga untuk mempertahankan kualitas bahan terbaik.
				</p>
			</div>
	
		</div>

		<!-- 4. Tempat Produksi -->
		<div class="flex flex-col lg:flex-row items-center gap-12">
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Area Produksi & Penjahitan</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Area produksi adalah jantung dari Glam Stitch. Di sinilah seluruh proses penjahitan, sablon, dan finishing dilakukan.
					Dilengkapi dengan mesin jahit industri modern dan peralatan sablon berkualitas tinggi,
					setiap produk dikerjakan oleh tenaga profesional berpengalaman.
					Kami selalu mengutamakan ketelitian dan kebersihan di setiap tahap untuk menghasilkan produk yang sempurna.
				</p>
			</div>
			<img loading="lazy"
			src={gallery2}
			alt="Tempat Produksi Glam Stitch"
			class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
		/>
		</div>

		<!-- 5. Kasir -->
		<div class="flex flex-col-reverse lg:flex-row items-center gap-12">
			<img loading="lazy"
				src={gallery3}
				alt="Kasir Glam Stitch"
				class="gallery w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
			/>
			<div class="lg:w-1/2">
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white">Area Kasir & Pelayanan</h2>
				<p class="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
					Bagian kasir merupakan tempat akhir dari pengalaman berbelanja pelanggan di Glam Stitch.
					Di sini, staf kami memberikan pelayanan ramah dan cepat dalam proses pembayaran maupun konsultasi akhir.
					Selain itu, area kasir juga menjadi tempat untuk pengambilan produk jadi bagi pelanggan yang telah melakukan pemesanan sebelumnya.
					Kami berkomitmen memberikan pengalaman terbaik dari awal hingga akhir proses pembelian Anda.
				</p>
			</div>
		</div>

	</div>
</section>

<!-- Footer -->
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
			  <li><a href="/jacket" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Hoodie/Sweater</a></li>
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

