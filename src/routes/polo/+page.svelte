<script lang="ts">
  // Page content only - dark mode handled by layout
  import logoGlint from '$lib/assets/image/logo glint.png';
  import poto6 from '$lib/assets/image/poto6.jpg'
</script>

<svelte:head>
  <title>Kaos Polo - Glam Stitch | Konveksi Kaos Polo Premium</title>
  <meta name="description" content="Pesan kaos polo berkualitas premium dari Glam Stitch. Konveksi kaos polo dengan bahan terbaik, model elegan, dan teknik sablon profesional." />
  <meta name="keywords" content="kaos polo, konveksi polo, kaos polo premium, sablon polo, model polo, bahan polo" />
</svelte:head>

<style type="text/tailwindcss"></style>
  
<!-- Hero Section -->
<div class="relative isolate overflow-hidden pt-6">
    <!-- Background Image -->
    <img src={poto6}
      alt="Kaos polo" class="absolute inset-0 -z-10 w-full h-full object-cover">
  
    <!-- Dark Overlay -->
    <div class="absolute inset-0 -z-10 bg-black/50"></div>
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 text-center">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Koleksi kaos polo berkualitas premium dari Glam Stitch untuk tampilan yang elegan dan profesional.
            <a href="/" class="font-semibold text-white">
              <span class="absolute inset-0" aria-hidden="true"></span>Beranda <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Produk Kaos Polo Glam Stitch
        </h1>
        <p class="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
          Tampil profesional dan stylish dengan kaos polo premium kami. Cocok untuk acara formal, kasual, hingga seragam perusahaan dengan kualitas terbaik.
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
          Dapatkan Kualitas Premium untuk Kaos Polo Glam Stitch Anda
        </h2>
        <p class="mx-auto mt-8 max-w-xl text-base text-gray-600 dark:text-gray-400">
          Sebagian besar produk kami dibuat dalam jumlah terbatas. Segera pesan Kaos Polo Glam Stitch berkualitas premium sebelum habis!
        </p>
        <a href="/#" class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-500">
          Dapatkan Akses ke Produk Kaos Polo Glam Stitch Kami
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
          <img src="https://img.fantaskycdn.com/c2c74c9fb69f55e818e630fc5973e57c_750x.jpeg"
            alt="Beberapa kaos polo warna navy, putih, dan hitam yang diletakkan secara rapi."
            class="aspect-[3/4] w-full max-w-sm mx-auto rounded-lg object-cover">
        </div>
  
        <!-- Gambar tengah (dua vertikal) - tampil di mobile -->
        <div class="grid grid-cols-1 gap-y-4">
          <img src="https://i.pinimg.com/1200x/b9/cf/13/b9cf1394d45966487e2ab76281d9fe21.jpg"
            alt="Model mengenakan kaos polo hitam."
            class="aspect-[3/2] w-full max-w-sm mx-auto rounded-lg object-cover">
          <img src="https://i.pinimg.com/1200x/d5/c8/bb/d5c8bb224ae8411e2fea73d085853a33.jpg"
            alt="Model mengenakan kaos polo navy."
            class="aspect-[3/2] w-full max-w-sm mx-auto rounded-lg object-cover">
        </div>
  
        <!-- Gambar utama -->
        <div>
          <img src="https://i.pinimg.com/1200x/26/8e/fc/268efc157e9aeb9e100916cd9f987bcb.jpg"
            alt="Model mengenakan kaos polo putih premium."
            class="aspect-[4/5] w-full max-w-sm mx-auto rounded-lg object-cover lg:aspect-[3/4]">
        </div>
  
      </div>
      
      <!-- Info Produk -->
      <div class="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-16 lg:pt-16">
        <div class="lg:col-span-2 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Kaos Polo Glam Stitch</h1>
        </div>
  
        <!-- Opsi -->
        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pr-8 lg:pb-16">
          <!-- Deskripsi -->
          <div>
            <h3 class="sr-only">Deskripsi</h3>
            <div class="space-y-6">
              <p class="text-base text-gray-900 dark:text-gray-300">
                Kaos Polo Glam Stitch hadir dengan desain klasik dan elegan dalam berbagai pilihan warna premium. Ingin tampil profesional? Pilih warna "Navy" yang timeless. Untuk kesan bersih dan formal, warna "Putih" adalah pilihan sempurna. Butuh tampilan yang bold dan sophisticated? Warna "Hitam" siap menyempurnakan penampilan Anda.
              </p>
            </div>
          </div>
  
          <!-- Highlight -->
          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900 dark:text-white">Fitur Unggulan</h3>
            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li class="text-gray-400 dark:text-gray-500"><span class="text-gray-600 dark:text-gray-400">Kerah polo dengan kancing berkualitas tinggi</span></li>
                <li class="text-gray-400 dark:text-gray-500"><span class="text-gray-600 dark:text-gray-400">Bahan pique cotton premium yang breathable</span></li>
                <li class="text-gray-400 dark:text-gray-500"><span class="text-gray-600 dark:text-gray-400">Jahitan double-stitch untuk ketahanan maksimal</span></li>
                <li class="text-gray-400 dark:text-gray-500"><span class="text-gray-600 dark:text-gray-400">Pre-shrunk fabric anti-susut</span></li>
                <li class="text-gray-400 dark:text-gray-500"><span class="text-gray-600 dark:text-gray-400">Fit reguler yang nyaman untuk segala aktivitas</span></li>
              </ul>
            </div>
          </div>
  
          <!-- Detail Pengiriman -->
          <section aria-labelledby="shipping-heading" class="mt-10">
            <h2 id="shipping-heading" class="text-sm font-medium text-gray-900 dark:text-white">Detail Produk</h2>
            <div class="mt-4 space-y-8">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Temukan koleksi Kaos Polo Glam Stitch berkualitas premium, dirancang khusus untuk tampilan profesional dan kasual yang elegan. Daftar sekarang untuk mendapatkan informasi koleksi terbaru, termasuk edisi limited "Maroon Premium" yang segera hadir.
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
              <img src="https://i.pinimg.com/1200x/9a/4c/81/9a4c811400ad7f828dc939839b51bc91.jpg" alt="Kaos Polo Glam Stitch warna navy." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 dark:text-gray-200">
                    <a href="/#"><span aria-hidden="true" class="absolute inset-0"></span>Kaos Polo Glam Stitch</a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Navy</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">Rp 675.000</p>
              </div>
            </div>
  
            <!-- Produk 2 -->
            <div class="group relative">
              <img src="https://i.pinimg.com/1200x/34/70/e2/3470e25804ca2235f271b865a367eb49.jpg" alt="Kaos Polo Glam Stitch warna putih." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 dark:text-gray-200">
                    <a href="/#"><span aria-hidden="true" class="absolute inset-0"></span>Kaos Polo Glam Stitch</a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Putih Premium</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">Rp 675.000</p>
              </div>
            </div>
  
            <!-- Produk 3 -->
            <div class="group relative">
              <img src="https://i.pinimg.com/1200x/e1/29/f8/e129f8cbbd978329b2428f9fc5eb6ae3.jpg" alt="Kaos Polo Glam Stitch warna hitam." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 dark:text-gray-200">
                    <a href="/#"><span aria-hidden="true" class="absolute inset-0"></span>Kaos Polo Glam Stitch</a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Hitam</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">Rp 675.000</p>
              </div>
            </div>
  
            <!-- Produk 4 -->
            <div class="group relative">
              <img src="https://i.pinimg.com/736x/ed/9d/96/ed9d96d3337265eab4ad4b8d43362c79.jpg" alt="Kaos Polo Glam Stitch warna abu-abu." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 dark:text-gray-200">
                    <a href="/#"><span aria-hidden="true" class="absolute inset-0"></span>Kaos Polo Glam Stitch</a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Abu-abu</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">Rp 675.000</p>
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
  

  
