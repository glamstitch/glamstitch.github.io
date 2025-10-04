<script lang="ts">
  // Page content only - dark mode handled by layout
  import logoGlint from '$lib/assets/image/logo glint.png';
</script>

<svelte:head>
  <title>Hoodie/Sweater - Glam Stitch | Konveksi Hoodie & Sweater Fashion</title>
  <meta name="description" content="Pesan hoodie dan sweater fashion berkualitas dari Glam Stitch. Konveksi hoodie/sweater dengan berbagai model, bahan premium, dan desain trendy." />
  <meta name="keywords" content="hoodie, sweater, konveksi hoodie, konveksi sweater, hoodie fashion, sweater casual, bahan premium, desain trendy" />
</svelte:head>

<style type="text/tailwindcss"></style>
  
<!-- Hero Section -->
<div class="hero-section relative isolate overflow-hidden pt-6">
    <img loading="lazy" src="https://img.freepik.com/free-photo/fashionable-men-jacket-hanging-clothing-store-generated-by-ai_188544-40066.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="Hoodie/Sweater Glam Stitch" class="absolute inset-0 -z-10 w-full h-full object-cover">
    <div class="absolute inset-0 -z-10 bg-black/50"></div>
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 text-center">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Eksplor pilihan hoodie/sweater custom berkualitas dari Glam Stitch.
            <a href="/" class="font-semibold text-white">
              <span class="absolute inset-0" aria-hidden="true"></span>Beranda <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Produk Hoodie/Sweater Glam Stitch</h1>
        <p class="mt-8 text-lg font-medium text-gray-200 sm:text-xl">Temukan berbagai model hoodie/sweater custom yang stylish, hangat, dan cocok untuk keperluan komunitas, kantor, hingga kebutuhan brand Anda.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/jacket" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all transform hover:scale-105">
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
          Dapatkan Kualitas Terbaik untuk Hoodie/Sweater Glam Stitch Anda
        </h2>
        <p class="mx-auto mt-8 max-w-xl text-base text-gray-600 dark:text-gray-400">
          Sebagian besar produk kami dibuat dalam jumlah terbatas. Segera pesan Hoodie/Sweater Glam Stitch berkualitas tinggi sebelum habis!
        </p>
        <a href="/#" class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-600 dark:hover:bg-indigo-500">
            Dapatkan Akses ke Produk Hoodie/Sweater Glam Stitch Kami
        </a>
      </div>
    </section>
  </div>
  
  
<!-- Products Section -->
<div class="bg-white dark:bg-gray-900">
    <main class="pt-10 sm:pt-8">
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-16 lg:max-w-7xl lg:px-16"></ol>
      </nav>
  
      <!-- Galeri Gambar -->
      <div class="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          
          <!-- Gambar utama - lebih besar -->
          <div class="lg:col-span-2">
            <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img loading="lazy" src="https://media.istockphoto.com/id/1366972069/id/foto/potret-pria-ceria-berkerudung-oranye.jpg?s=612x612&w=0&k=20&c=HjDQsGzANZ35dxYBk6VPK48ilGN4sXYPHA8Mwu0XRws=" 
                alt="Model mengenakan hoodie oranye."
                class="h-full w-full object-cover object-center">
            </div>
          </div>
  
          <!-- Gambar samping -->
          <div class="grid grid-cols-1 gap-6">
            <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img loading="lazy" src="https://media.istockphoto.com/id/1393264537/id/foto/model-mengenakan-hoodie-pria-kulit-hitam-maket-untuk-desain-anda-sendiri.jpg?s=612x612&w=0&k=20&c=8gN8pachrbhpSFlX5VQxUDKQsvaYNk9hb69vPwr577w=" 
                alt="Model mengenakan hoodie hitam."
                class="h-full w-full object-cover object-center">
            </div>
            <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img loading="lazy" src="https://media.istockphoto.com/id/1438595781/id/foto/wanita-muda-berkacamata-dan-hoodie-hitam.jpg?s=612x612&w=0&k=20&c=yGm0UL4DqOxXym5Payfd1d4uSwigr-qgOCY3mHEMlrk=" 
                alt="Model mengenakan hoodie hitam."
                class="h-full w-full object-cover object-center">
            </div>
          </div>
  
        </div>
      </div>
  
      <!-- Info Produk -->
      <div class="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          <!-- Informasi Produk -->
          <div class="space-y-8">
            <div>
              <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Hoodie & Sweater Premium
              </h1>
              <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Hoodie/Sweater berkualitas tinggi dengan desain modern dan stylish
              </p>
            </div>

            <!-- Deskripsi -->
            <div class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Deskripsi Produk</h3>
              <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Hoodie dan Sweater Glam Stitch hadir dengan desain modern yang memadukan kenyamanan dan gaya. Terbuat dari bahan berkualitas tinggi dengan berbagai pilihan warna yang trendy. Cocok untuk aktivitas outdoor, hangout santai, atau sebagai bagian dari koleksi fashion Anda.
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
                  <p class="text-sm text-gray-700 dark:text-gray-300">Bahan premium yang lembut dan hangat</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Desain modern dengan potongan yang pas</p>
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
                  <p class="text-sm text-gray-700 dark:text-gray-300">Berbagai pilihan warna yang trendy</p>
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
                  <span class="text-sm text-gray-900 dark:text-white">Fleece Premium / Cotton Fleece</span>
                </div>
              
                <div class="flex justify-between">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Ukuran</span>
                  <span class="text-sm text-gray-900 dark:text-white">S, M, L, XL, XXL, XXXL</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Warna</span>
                  <span class="text-sm text-gray-900 dark:text-white">10+ Pilihan Warna</span>
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
      <!-- Produk Terkait -->
<section aria-labelledby="related-products-heading" class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 id="related-products-heading" class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Produk Terkait</h2>
      <p class="mt-2 text-lg text-gray-400 dark:text-gray-200 text-center">Lihat produk Glam Stitch lainnya yang bisa kamu sukai. Tersedia berbagai pilihan stylish untuk setiap kesempatan.</p>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <!-- Hoodie/Sweater 1 -->
        <div class="group relative">
          <img loading="lazy" src="https://media.istockphoto.com/id/2085676478/id/foto/mockup-hoodie-putih-pada-pria-berjanggut-kaus-oversized-dengan-saku-untuk-desain-branding.jpg?s=612x612&w=0&k=20&c=7QKD-7q--IDD5CV0p5JDNuWy6f26zHLa0qCI3cF8wOc=" alt="Hoodie/Sweater Glam Stitch warna putih." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700 dark:text-gray-200">
                <a href="/jacket"><span aria-hidden="true" class="absolute inset-0"></span>Putih</a>
              </h3>
            </div>
          </div>
        </div>

        <!-- Hoodie/Sweater 2 -->
        <div class="group relative">
          <img loading="lazy" src="https://media.istockphoto.com/id/2147500282/id/foto/template-hoodie-hitam-besar-pada-seorang-pria-brutal-dengan-tangan-di-saku-pakaian-lebar-untuk.jpg?s=612x612&w=0&k=20&c=O5ypltazwnlEkG_6VFkZjUN77G5hTlSzdoW5tGCnbhk=" alt="Hoodie/Sweater Glam Stitch warna hitam." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700 dark:text-gray-200">
                <a href="/jacket"><span aria-hidden="true" class="absolute inset-0"></span>Hitam</a>
              </h3>
            </div>
          </div>
        </div>

        <!-- Hoodie/Sweater 3 -->
        <div class="group relative">
          <img loading="lazy" src="https://media.istockphoto.com/id/1314499049/id/foto/wanita-pirang-fasion-dalam-hoodie-besar-coklat-kacamata-dan-jeans-biru-mockup-untuk-logo-atau.jpg?s=612x612&w=0&k=20&c=CvvE5nL93XofC5kdnAQcVli9cB8nrOaDZvZ2vs7XhNs=" alt="Hoodie/Sweater Glam Stitch warna coklat." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700 dark:text-gray-200">
                <a href="/jacket"><span aria-hidden="true" class="absolute inset-0"></span>Coklat</a>
              </h3>
            </div>
          </div>
        </div>

        <!-- Hoodie/Sweater 4 -->
        <div class="group relative">
          <img loading="lazy" src="https://media.istockphoto.com/id/1652781007/id/foto/wanita-muda-tersenyum-dengan-hoodie-ungu-biru-di-mockup-ruang-copy-latar-belakang-merah-ramah.jpg?s=612x612&w=0&k=20&c=y-fN3CbRpMECwJ1epGMKPf7Ys8GAXWNoBF3xZBF-Vyo=" alt="Hoodie/Sweater Glam Stitch warna biru." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700 dark:text-gray-200">
                <a href="/jacket"><span aria-hidden="true" class="absolute inset-0"></span>Biru Navy</a>
              </h3>
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
              <li><a href="/jacket" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Hoodie/Sweater</a></li>
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
  
  

  
