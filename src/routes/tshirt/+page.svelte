<script lang="ts">
  // Page content only - dark mode handled by layout
  import logoGlint from '$lib/assets/image/logo glint.png';
</script>

<svelte:head>
  <title>Kaos - Glam Stitch | Konveksi Kaos Berkualitas Tinggi</title>
  <meta name="description" content="Pesan kaos berkualitas tinggi dari Glam Stitch. Konveksi kaos dengan berbagai model, ukuran, dan teknik sablon terbaik. Harga kompetitif dan hasil memuaskan." />
  <meta name="keywords" content="kaos, konveksi kaos, sablon kaos, kaos berkualitas, harga kaos, model kaos" />
</svelte:head>

<style type="text/tailwindcss"></style>
  
<!-- Hero Section -->
<div class="relative isolate overflow-hidden pt-6">
    <!-- Background Image -->
    <img src="https://img.freepik.com/free-photo/close-up-collection-black-white-color-monochrome-t-shirt-hanging-clothes-hanger_158595-6518.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" 
      alt="Kaos polos" class="absolute inset-0 -z-10 w-full h-full object-cover">
  
    <!-- Dark Overlay -->
    <div class="absolute inset-0 -z-10 bg-black/50"></div>
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 text-center">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Koleksi kaos polos berkualitas dari Glam Stitch untuk segala kebutuhan Anda.
            <a href="/" class="font-semibold text-white">
              <span class="absolute inset-0" aria-hidden="true"></span>Beranda <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Produk Kaos Polos Glam Stitch
        </h1>
        <p class="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
          Didesain untuk kenyamanan dan tampil stylish, kaos polos kami cocok untuk keperluan komunitas, bisnis, hingga kebutuhan sehari-hari.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact-us" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all transform hover:scale-105">
              Pesan Sekarang
            </a>
            <a href="/product" class="text-sm font-semibold text-white hover:text-indigo-400 dark:text-gray-300 dark:hover:text-indigo-400 transition-all transform hover:scale-105">
              Lihat Produk Lainnya <span aria-hidden="true">→</span>
            </a>
          </div>
      </div>
    </div>
  </div>
  

<!--promo-->
<div class="relative overflow-hidden bg-white dark:bg-gray-900 z-0">
    <!-- Callout Section -->
    <section aria-labelledby="sale-heading" class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-5xl">
          Dapatkan Kualitas Terbaik untuk Kaos Polos Glam Stitch Anda
        </h2>
        <p class="mx-auto mt-8 max-w-xl text-base text-gray-600 dark:text-gray-400">
          Sebagian besar produk kami dibuat dalam jumlah terbatas. Segera pesan Kaos Polos Glam Stitch berkualitas tinggi sebelum habis!
        </p>
        <a href="/#" class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-500">
          Dapatkan Akses ke Produk Kaos Polos Glam Stitch Kami
        </a>
      </div>
    </section>
  </div>
  
<!-- Products Sections -->
<div class="bg-white dark:bg-gray-900">
    <main class="pt-10 sm:pt-8">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-16 lg:max-w-7xl lg:px-16">
        </ol>
      </nav>
  
      <!-- Galeri Gambar -->
      <div class="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-16 space-y-4 lg:space-y-0">
      
        <!-- Gambar kiri - hanya tampil di desktop -->
        <div class="hidden lg:block">
          <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            alt="Beberapa kaos warna abu, putih, dan hitam yang diletakkan secara datar."
            class="aspect-[3/4] w-full max-w-sm mx-auto rounded-lg object-cover">
        </div>
  
        <!-- Gambar tengah (dua vertikal) - tampil di mobile -->
        <div class="grid grid-cols-1 gap-y-4">
          <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
            alt="Model mengenakan kaos hitam polos."
            class="aspect-[3/2] w-full max-w-sm mx-auto rounded-lg object-cover">
          <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
            alt="Model mengenakan kaos abu polos."
            class="aspect-[3/2] w-full max-w-sm mx-auto rounded-lg object-cover">
        </div>
  
        <!-- Gambar utama -->
        <div>
          <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
            alt="Model mengenakan kaos putih polos."
            class="aspect-[4/5] w-full max-w-sm mx-auto rounded-lg object-cover lg:aspect-[3/4]">
        </div>
  
      </div>
      
      <!-- Info Produk -->
      <div class="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-16 lg:pt-16">
        <div class="lg:col-span-2 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Kaos Glam Stitch</h1>
        </div>
  
        <!-- Opsi -->
        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pr-8 lg:pb-16">
          <!-- Deskripsi -->
          <div>
            <h3 class="sr-only">Deskripsi</h3>
            <div class="space-y-6">
              <p class="text-base text-gray-900 dark:text-gray-300">
                Kaos Glam Stitch hadir dengan gaya simpel dan elegan dalam tiga pilihan warna menawan. Ingin tampil berani? Pilih warna "Abu Heather". Untuk kesan premium, warna "Hitam" adalah pilihan tepat. Butuh tampilan segar dan bersih? Warna "Putih" siap menyempurnakan gayamu.
              </p>
            </div>
          </div>
  
          <!-- Highlight -->
          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900 dark:text-white">Fitur Unggulan</h3>
            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-gray-400 dark:text-gray-500"><span class="text-gray-600 dark:text-gray-400">Dijahit secara manual oleh tenaga lokal</span></li>
                <li class="text-gray-400 dark:text-gray-500"><span class="text-gray-600 dark:text-gray-400">Menggunakan pewarna eksklusif</span></li>
                <li class="text-gray-400 dark:text-gray-500"><span class="text-gray-600 dark:text-gray-400">Sudah dicuci dan disusutkan sebelumnya</span></li>
                <li class="text-gray-400 dark:text-gray-500"><span class="text-gray-600 dark:text-gray-400">100% katun super lembut</span></li>
              </ul>
            </div>
          </div>
  
          <!-- Detail Pengiriman -->
          <section aria-labelledby="shipping-heading" class="mt-10">
            <h2 id="shipping-heading" class="text-sm font-medium text-gray-900 dark:text-white">Detail Produk</h2>
            <div class="mt-4 space-y-8">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Temukan produk Glam Stitch berkualitas tinggi, dirancang untuk kenyamanan dan ketahanan maksimal. Daftar sekarang untuk mendapatkan informasi warna-warna terbaru, termasuk edisi terbatas "Abu Tua" yang segera hadir.
              </p>
            </div>              
          </section>
        </div>
      </div>
  
      <!-- Produk Terkait -->
      <section aria-labelledby="related-products-heading" class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-2xl px-16 py-24 sm:px-16 lg:max-w-7xl lg:px-16">
          <h2 id="related-products-heading" class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Produk Terkait</h2>
          <p class="mt-2 text-lg text-gray-400 dark:text-gray-400 text-center">Lihat produk Glam Stitch lainnya yang bisa kamu sukai. Tersedia berbagai pilihan stylish untuk setiap kesempatan.</p>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
  
            <!-- Produk 1 -->
            <div class="group relative">
              <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Kaos Glam Stitch warna hitam." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 dark:text-gray-200">
                    <a href="/#"><span aria-hidden="true" class="absolute inset-0"></span>Kaos Glam Stitch</a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Hitam</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">Rp 525.000</p>
              </div>
            </div>
  
            <!-- Produk 2 -->
            <div class="group relative">
              <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg" alt="Kaos Glam Stitch warna putih." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 dark:text-gray-200">
                    <a href="/#"><span aria-hidden="true" class="absolute inset-0"></span>Kaos Glam Stitch</a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Putih Aspen</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">Rp 525.000</p>
              </div>
            </div>
  
            <!-- Produk 3 -->
            <div class="group relative">
              <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg" alt="Kaos Glam Stitch warna charcoal." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 dark:text-gray-200">
                    <a href="/#"><span aria-hidden="true" class="absolute inset-0"></span>Kaos Glam Stitch</a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Abu Tua</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">Rp 525.000</p>
              </div>
            </div>
  
            <!-- Produk 4 -->
            <div class="group relative">
              <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-01-product-01.jpg" alt="Kaos Glam Stitch warna sienna." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 dark:text-gray-200">
                    <a href="/#"><span aria-hidden="true" class="absolute inset-0"></span>Kaos Glam Stitch</a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Sienna</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">Rp 525.000</p>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    </main>
  </div>
  
   

  <!-- Footer -->
  <footer class="bg-gray-900 dark:bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8 animate__animated animate__fadeInUp">
        
        <!-- Logo & Description -->
        <div class="space-y-6">
          <img class="h-24 w-24 animate__animated animate__zoomIn animate__delay-1s" src={logoGlint} alt="Glam Stitch Logo">
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
              <li><a href="/faq" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">FAQ</a></li>
            </ul>
          </div>
          
          <!-- Products -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white dark:text-gray-900">Produk</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/tshirt" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Kaos</a></li>
              <li><a href="/polo" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Kaos Polo</a></li>
              <li><a href="/jersey" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Jersey</a></li>
              <li><a href="/jacket" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Jaket</a></li>
              <li><a href="/shirts" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Kemeja</a></li>
            </ul>
          </div>
          
          <!-- Discover Us -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white dark:text-gray-900">Jelajahi</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/about-us" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Tentang Kami</a></li>
              <li><a href="/blog" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Blog</a></li>
              <li><a href="/contact-us" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Hubungi Kami</a></li>
              <li><a href="/store-location" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Lokasi Toko</a></li>
              <li><a href="/gallery" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Galeri</a></li>

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
  
  

  
