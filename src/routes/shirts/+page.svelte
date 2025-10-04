<script lang="ts">
  // Page content only - dark mode handled by layout
  import kemejaImg from '$lib/assets/image/kemeja.jpg';
  import logoGlint from '$lib/assets/image/logo glint.png';
</script>

<svelte:head>
  <title>Kemeja - Glam Stitch | Konveksi Kemeja Formal & Casual</title>
  <meta name="description" content="Pesan kemeja formal dan casual berkualitas tinggi dari Glam Stitch. Konveksi kemeja dengan bahan premium, jahitan rapi, dan desain profesional." />
  <meta name="keywords" content="kemeja, konveksi kemeja, kemeja formal, kemeja casual, bahan premium, jahitan rapi" />
</svelte:head>

<style type="text/tailwindcss"></style>
  
<!-- Hero Section -->
<div class="hero-section relative isolate overflow-hidden pt-6">
    <img loading="lazy" 
      src="https://img.freepik.com/free-photo/dressmaker-is-measuring-fabric-with-meter-his-studio-man-is-looking-camera-he-is-wearing-denim-cap-glasses-there-are-lot-sewing-tools-background_613910-21802.jpg" 
      alt="Dressmaker working in a studio" 
      class="absolute inset-0 -z-10 w-full h-full object-cover"
    >
    <div class="absolute inset-0 -z-10 bg-black/50 dark:bg-black/75"></div>
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20 dark:ring-gray-600 dark:hover:ring-gray-500 transition">
            Temukan koleksi kemeja eksklusif Glam Stitch untuk tampilan profesional dan stylish.
            <a href="/" class="font-semibold text-white hover:underline dark:text-gray-300 dark:hover:text-indigo-400">
              <span class="absolute inset-0" aria-hidden="true"></span>Beranda <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl dark:text-white">
            Produk Kemeja Glam Stitch
          </h1>
          <p class="mt-8 text-lg font-medium text-gray-200 sm:text-xl dark:text-gray-300">
            Kemeja custom kami cocok untuk keperluan kantor, seragam usaha, atau acara formal dengan sentuhan elegan dan bahan berkualitas tinggi.
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
  </div>
  
  
<!-- Promo Section -->
<div class="relative overflow-hidden bg-white dark:bg-gray-900 z-0">
    <!-- Callout -->
    <section aria-labelledby="sale-heading" class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-5xl">
          Dapatkan Kualitas Terbaik untuk Kemeja Glam Stitch Anda
        </h2>
        <p class="mx-auto mt-8 max-w-xl text-base text-gray-600 dark:text-gray-300">
          Sebagian besar produk kami dibuat dalam jumlah terbatas. Segera pesan Kemeja Glam Stitch berkualitas tinggi sebelum habis!
        </p>
        <a href="/#" class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-500">
          Dapatkan Akses ke Produk Kemeja Glam Stitch Kami
        </a>
      </div>
    </section>
  </div>
  
<!-- Products Section -->
<div class="bg-white dark:bg-gray-900">
    <main class="pt-10 sm:pt-8">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-16 lg:max-w-7xl lg:px-16"></ol>
      </nav>
  
      <!-- Image Gallery -->
      <div class="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-16 space-y-4 lg:space-y-0">
        <!-- Left Image (only for desktop) -->
        <div class="hidden lg:block">
          <img loading="lazy" src="https://img.freepik.com/premium-photo/this-model-look-pose-you-graphic-design_891936-2635.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
            alt="Beberapa kaos warna abu, putih, dan hitam yang diletakkan secara datar."
            class="aspect-[3/4] w-full max-w-sm mx-auto rounded-lg object-cover">
        </div>
  
        <!-- Center Images (two vertically stacked) - for mobile view -->
        <div class="grid grid-cols-1 gap-y-4">
          <img loading="lazy" src="https://media.istockphoto.com/id/162368681/id/foto/potret-fashion-pemuda-berbaju-hitam.jpg?s=612x612&w=0&k=20&c=LZY5r_8zNI0IONWIMUzVQMInfxhqBgbk__1OfIq-ni0=" alt="Model mengenakan kaos hitam polos."
            class="aspect-[3/2] w-full max-w-sm mx-auto rounded-lg object-cover">
          <img loading="lazy" src="https://img.freepik.com/free-photo/shirt_1203-8194.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
            alt="Model mengenakan kaos abu polos."
            class="aspect-[3/2] w-full max-w-sm mx-auto rounded-lg object-cover">
        </div>
  
        <!-- Main Image -->
        <div>
          <img loading="lazy" src="https://img.freepik.com/premium-photo/young-handsome-man-standing_251136-20866.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
            alt="Model mengenakan kaos putih polos."
            class="aspect-[4/5] w-full max-w-sm mx-auto rounded-lg object-cover lg:aspect-[3/4]">
        </div>
      </div>
  
      <!-- Product Information -->
      <div class="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          <!-- Product Information -->
          <div class="space-y-8">
            <div>
              <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Kemeja Premium
              </h1>
              <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Kemeja berkualitas tinggi dengan desain klasik dan elegan
              </p>
            </div>

            <!-- Deskripsi -->
            <div class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Deskripsi Produk</h3>
              <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Kemeja Glam Stitch hadir dengan desain klasik yang timeless dan elegan. Terbuat dari bahan berkualitas tinggi dengan potongan yang sempurna, cocok untuk keperluan formal, semi-formal, maupun casual. Didesain untuk memberikan kenyamanan maksimal sepanjang hari.
              </p>
            </div>

            <!-- Fitur Unggulan -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Fitur Unggulan</h3>
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Bahan katun premium yang lembut dan breathable</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Potongan klasik yang timeless dan elegan</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Jahitan berkualitas tinggi dan tahan lama</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Cocok untuk formal, semi-formal, dan casual</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Detail Produk -->
          <div class="space-y-8">
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Detail Produk</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Bahan</span>
                  <span class="text-sm text-gray-900 dark:text-white">100% Cotton Premium</span>
                </div>
              
                <div class="flex justify-between">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Ukuran</span>
                  <span class="text-sm text-gray-900 dark:text-white">S, M, L, XL, XXL, XXXL</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Warna</span>
                  <span class="text-sm text-gray-900 dark:text-white">Putih, Hitam, Navy, Abu-abu, Krim</span>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="space-y-4">
              <a href="/contact-us" class="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Pesan Sekarang
              </a>
              <a href="/product" class="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                Lihat Produk Lainnya
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Related Products -->
      <section aria-labelledby="related-products-heading" class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="related-products-heading" class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Produk Terkait</h2>
          <p class="mt-2 text-lg text-gray-600 dark:text-gray-400 text-center">Lihat produk Glam Stitch lainnya yang bisa kamu sukai. Tersedia berbagai pilihan stylish untuk setiap kesempatan.</p>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      
            <!-- Kemeja 1 -->
            <div class="group relative">
              <img loading="lazy" src={kemejaImg} alt="Kemeja Glam Stitch warna biru." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4 flex justify-between">
                <div>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Biru Navy</p>
                </div>
              </div>
            </div>
      
            <!-- Kemeja 2 -->
            <div class="group relative">
              <img loading="lazy" src="https://i.pinimg.com/474x/dc/0c/f8/dc0cf89c241e8da2ec335ab995fbfd3a.jpg" alt="Kemeja Glam Stitch warna putih." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4 flex justify-between">
                <div>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Putih</p>
                </div>
              </div>
            </div>
      
            <!-- Kemeja 3 -->
            <div class="group relative">
              <img loading="lazy" src="https://img.freepik.com/premium-photo/mens-black-short-sleeve-shirt_53876-1021210.jpg?ga=GA1.1.1868222757.1738365469&w=740" alt="Kemeja Glam Stitch warna hitam." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4 flex justify-between">
                <div>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Hitam</p>
                </div>
              </div>
            </div>
      
            <!-- Kemeja 4 -->
            <div class="group relative">
              <img loading="lazy" src="https://img.freepik.com/premium-photo/black-denim-jacket-mock-up-front-back-views-jeans-jacket-set_1008660-4054.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&w=740" alt="Kemeja Glam Stitch warna abu-abu." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4 flex justify-between">
                <div>
                  <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Abu-abu</p>
                </div>
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
          <img loading="lazy" class="h-24 w-24 animate__animated animate__zoomIn animate__delay-1s" src={logoGlint} alt="Glam Stitch Logo">
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
  
  

  
