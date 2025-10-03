<script lang="ts">
  // Page content only - dark mode handled by layout
  import gambar4 from '$lib/assets/image/gambar4.png';
  import gambar5 from '$lib/assets/image/gambar5.png';
  import gambar6 from '$lib/assets/image/gambar6.png';
  import gambar7 from '$lib/assets/image/gambar7.png';
  import gallery5 from '$lib/assets/image/gallery5.jpg';
  import logoGlint from '$lib/assets/image/logo glint.png';
</script>

<svelte:head>
  <title>Glam Stitch - Konveksi Berkualitas Tinggi | Kaos, Jersey, Jaket & Kemeja</title>
  <meta name="description" content="Glam Stitch adalah konveksi terpercaya yang menyediakan kaos, jersey, jaket, dan kemeja berkualitas tinggi. Layanan konveksi profesional dengan harga kompetitif dan hasil terbaik." />
  <meta name="keywords" content="konveksi, kaos, jersey, jaket, kemeja, sablon, bordir, konveksi berkualitas" />
</svelte:head>

<!--header-->
<main>
  <section class="hero-section relative isolate overflow-hidden pt-6">
    <!-- Enhanced background with gradient overlay -->
    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    alt="Glam Stitch Konveksi" class="hero-section absolute inset-0 -z-10 h-full w-full object-cover" loading="eager" fetchpriority="high" />
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
        <!-- Tagline Section -->
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-4 text-sm font-medium text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Konveksi Glam Stitch — Produksi pakaian berkualitas tinggi untuk merek Anda.
            <a href="/product" class="font-semibold text-indigo-600">
              <span class="absolute inset-0" aria-hidden="true"></span>Selengkapnya <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
  
        <!-- Main Heading and Description with Animation -->
        <div class="text-center animate__animated animate__fadeIn animate__delay-1s">
          <h1 class="text-4xl font-semibold tracking-tight text-white dark:text-white sm:text-7xl animate__animated animate__fadeIn animate__delay-1s">
            Glam Stitch Mitra Konveksi Terpercaya Anda
          </h1>
          <p class="mt-8 text-lg font-medium text-gray-400 sm:text-xl animate__animated animate__fadeIn animate__delay-2s">
            
            Kami menyediakan layanan produksi pakaian yang terpercaya dan profesional untuk membantu pertumbuhan bisnis Anda — dengan kualitas tinggi, proses cepat, dan harga bersaing.
          </p>
  
          <!-- Enhanced Call to Action Buttons -->
          <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="/contact-us"
              class="group relative px-8 py-4 bg-indigo-500  text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span class="relative z-10">Mulai Sekarang</span>
            </a>
            <a href="/product" class="group text-white font-semibold hover:text-indigo-300 transition-all duration-300 flex items-center gap-2">
              Jelajahi Produk Kami 
              <span aria-hidden="true" class="inline-block transition-transform group-hover:translate-x-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

<!--why choose -->
<div class="bg-white dark:bg-gray-900">
    <section class="relative isolate overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <!-- Decorative Background Shape -->
        <div
        class="absolute top-10 left-1/2 -z-10 transform -translate-x-1/2 blur-3xl sm:-translate-x-[18rem] lg:top-[calc(50%-30rem)] lg:left-48 xl:-translate-x-[24rem]"
        aria-hidden="true"
        >
        <div
            class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] via-[#4f46e5] to-[#ec4899] opacity-30 dark:opacity-20"
            style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
        ></div>
        </div>
    
        <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-24">
        <!-- Text Content -->
        <div class="max-w-2xl animate__animated animate__fadeIn animate__delay-600ms">
            <div class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-6">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              Kenapa Memilih Kami?
            </div>
            
            <h2 class="text-4xl sm:text-6xl font-bold tracking-tight text-pretty bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Kenapa Harus Glam Stitch?
            </h2>
            <p class="mt-6 text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
            Kami menghadirkan layanan konveksi berkualitas tinggi dengan proses mudah, hasil presisi, dan pelayanan profesional.
            <span class="text-indigo-600 dark:text-indigo-400 font-semibold">Glam Stitch</span> adalah solusi terpercaya untuk kebutuhan pakaian custom Anda.
            </p>
            <ul class="mt-6 space-y-3 text-base leading-relaxed text-gray-600dark:text-gray-400">
            <li>✅ Bahan Berkualitas Premium</li>
            <li>✅ Tim Desain dan Produksi Profesional</li>
            <li>✅ Waktu Pengerjaan Cepat dan Tepat Waktu</li>
            <li>✅ Harga Kompetitif dan Transparan</li>
            <li>✅ Dukungan Konsultasi dan Revisi Desain</li>
            </ul>
            <div class="mt-10 flex items-center gap-x-6">
            <a
                href="/contact-us"
                class="group relative px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
                <span class="relative z-10">Hubungi Kami</span>
            </a>
            <a href="/gallery" class="group text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-500 dark:hover:text-indigo-300 transition-all duration-300 flex items-center gap-2">
                Lihat Portofolio 
                <span aria-hidden="true" class="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            </div>
        </div>
    
        <!-- Image Section -->
        <div class="mt-16 lg:mt-0 lg:ml-16 w-full lg:w-1/2 animate__animated animate__fadeIn animate__delay-1800ms">
            <img
            src={gallery5}
            alt="Tim produksi Glam Stitch sedang menjahit kaos custom"
            class="product-image w-full h-96 lg:h-[500px] rounded-2xl shadow-2xl object-cover transition duration-500 transform hover:scale-105 hover:shadow-2xl" loading="lazy" />
        </div>
        </div>
    </section>
  </div>

<!--how to buy-->
<section class="bg-white dark:bg-gray-900 text-black dark:text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-16">
      <h2 class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center animate__animated animate__fadeIn animate__delay-300ms">Cara Pemesanan</h2>
      <p class="mt-4 text-base text-gray-500 text-center animate__animated animate__fadeIn animate__delay-600ms">Ikuti langkah mudah berikut untuk memesan produk dari Glam Stitch.</p>
      
      <div class="mt-16 flex flex-col lg:flex-row items-center lg:items-start gap-10">
         <!-- Gambar -->
         <div class="w-full lg:w-1/2 animate__animated animate__fadeInUp animate__delay-900ms">
             <img 
              src={gambar4} 
              alt="Ilustrasi cara pemesanan" 
              class="product-image w-full h-full lg:h-[600px] rounded-2xl shadow-2xl object-contain bg-white p-4 transition duration-500 transform hover:scale-105 hover:shadow-2xl" loading="lazy">
        </div>
          
          
  
        <!-- Langkah-langkah -->
        <div class="w-full lg:w-2/4 space-y-12">
          <div class="group block animate__animated animate__fadeInUp animate__delay-1200ms">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">1. Konsultasi</h3>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">Hubungi tim kami untuk berdiskusi mengenai desain, bahan, dan kebutuhan Anda. Kami siap memberikan saran terbaik untuk memenuhi permintaan Anda.</p>
          </div>
          <div class="group block animate__animated animate__fadeInUp animate__delay-1500ms">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">2. Produksi</h3>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">Setelah desain disetujui, kami akan memulai proses produksi dengan bahan berkualitas tinggi yang sesuai dengan standar kami. Proses ini dijalankan dengan teknologi modern untuk memastikan hasil yang optimal.</p>
          </div>
          <div class="group block animate__animated animate__fadeInUp animate__delay-1800ms">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">3. Pengiriman</h3>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">Produk jadi akan dikirim ke alamat Anda sesuai estimasi waktu yang telah disepakati. Kami memastikan pengiriman tepat waktu dengan layanan kurir yang terpercaya untuk pengalaman yang lebih nyaman.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
<!--size chart-->
  <section class="bg-white dark:bg-gray-900 text-black dark:text-white py-6 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-16">
      
      <!-- Judul dan deskripsi -->
      <div class="max-w-2xl lg:mx-0 text-left animate__animated animate__fadeInUp animate__delay-300ms">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
          Pilih Ukuran yang Tepat untuk Anda
        </h2>
        <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          Pilih ukuran pakaian yang sesuai dengan panduan ukuran kami untuk kenyamanan maksimal.
        </p>
      </div>      
  
      <!-- Card ukuran -->
      <div class="mx-auto mt-16 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-center justify-center">
        
         <!-- T-Shirt -->
         <div class="flex flex-col justify-center items-center gap-4 rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate__delay-600ms">
           <p class="text-3xl font-bold text-gray-900 dark:text-white mb-4">T-Shirt</p>
           <div class="text-center">
             <img src={gambar5} alt="T-Shirt Size Chart" class="rounded-xl mb-6 w-full h-64 object-contain bg-gray-50 p-4" loading="lazy">
             <p class="text-xl font-semibold text-gray-900 dark:text-white">Ukuran T-Shirt</p>
             <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Pilih ukuran sesuai dengan ukuran dada dan panjang badan Anda.</p>
           </div>
         </div>
  
         <!-- Jaket -->
         <div class="flex flex-col justify-center items-center gap-4 rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate__delay-900ms">
           <p class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Jaket</p>
           <div class="text-center">
             <img src={gambar6} alt="Jacket Size Chart" class="rounded-xl mb-6 w-full h-64 object-contain bg-gray-50 p-4" loading="lazy">
             <p class="text-xl font-semibold text-gray-900 dark:text-white">Ukuran Jaket</p>
             <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Pilih ukuran sesuai dengan ukuran dada dan panjang badan Anda.</p>
           </div>
         </div>
  
         <!-- Kemeja -->
         <div class="flex flex-col justify-center items-center gap-4 rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp animate__delay-1200ms">
           <p class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Kemeja</p>
           <div class="text-center">
             <img src={gambar7} alt="Shirt Size Chart" class="rounded-xl mb-6 w-full h-64 object-contain bg-gray-50 p-4" loading="lazy">
             <p class="text-xl font-semibold text-gray-900 dark:text-white">Ukuran Kemeja</p>
             <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Pilih ukuran sesuai dengan ukuran dada dan panjang badan Anda.</p>
           </div>
         </div>
      </div>
    </div>  
  </section>

  <!--stats-->
  <section class="relative isolate overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white">
    <!-- Background Gradient Blob -->
    <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 py-10">
        <!-- Heading -->
        <div class="text-center mb-12 animate__animated animate__fadeInDown animate__slow">
          <h2 class="text-4xl font-semibold text-gray-900 dark:text-white sm:text-5xl mb-4">Pencapaian Glam Stitch</h2>
          <p class="text-lg text-gray-600 dark:text-gray-200">Dedikasi kami tercermin dari data. Berikut pencapaian kami dalam melayani kebutuhan fashion Anda.</p>
        </div>
  
        <!-- Statistik Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center py-12 max-w-6xl mx-auto px-4">
          <!-- Pengguna -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate__animated animate__zoomIn animate__delay-1s">
            <div class="w-20 h-20 flex items-center justify-center bg-yellow-400/20 dark:bg-white  rounded-full text-yellow-600 text-4xl transition-transform duration-300 hover:scale-110">
              👤
            </div>
            <div>
              <p class="mt-4 text-4xl font-bold text-gray-900 dark:text-white">1000+</p>
              <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-200">Pengguna</p>
            </div>
          </div>
  
          <!-- Pesanan -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate__animated animate__zoomIn animate__delay-2s">
            <div class="w-20 h-20 flex items-center justify-center bg-yellow-400/20 dark:bg-white  rounded-full text-yellow-600 text-4xl transition-transform duration-300 hover:scale-110">
              📦
            </div>
            <div>
              <p class="mt-4 text-4xl font-bold text-gray-900 dark:text-white">45.000+</p>
              <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-200">Pesanan</p>
            </div>
          </div>
  
          <!-- Pengalaman -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate__animated animate__zoomIn animate__delay-3s">
            <div class="w-20 h-20 flex items-center justify-center bg-yellow-400/20 dark:bg-white rounded-full text-yellow-600 text-4xl transition-transform duration-300 hover:scale-110">
              📅
            </div>
            <div>
              <p class="mt-4 text-4xl font-bold text-gray-900 dark:text-white">5+ Tahun</p>
              <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-200">Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
<!-- Logo Cloud Section -->
<section class="bg-gray-900 py-24 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Logo Grx`id -->
      <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <!-- Logo Item -->
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate__animated animate__fadeInUp animate__delay-1s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate__animated animate__fadeInUp animate__delay-1_5s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" alt="Reform" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate__animated animate__fadeInUp animate__delay-2s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 animate__animated animate__fadeInUp animate__delay-2_5s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" width="158" height="48" />
        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 animate__animated animate__fadeInUp animate__delay-3s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" width="158" height="48" />
      </div>
  
      <!-- Caption -->
      <div class="mt-16 flex justify-center animate__animated animate__fadeIn animate__delay-4s">
        <p class="relative rounded-full bg-gray-800 px-4 py-1.5 text-sm/6 text-gray-300">
          <span class="hidden md:inline">Konveksi Glam Stitch dipercaya oleh banyak brand ternama.</span>
          <a href="/blog" class="font-semibold text-white hover:underline ml-2">
            <span class="absolute inset-0" aria-hidden="true"></span>
            Lihat cerita pelanggan kami <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
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
          <img class="footer-logo h-16 w-16 animate__animated animate__zoomIn animate__delay-1s" src={logoGlint} alt="Glam Stitch Logo">
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
            <h3 class="text-lg font-semibold leading-6 text-white">Navigasi</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Beranda</a></li>
              <li><a href="/product" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Produk</a></li>
              <li><a href="/services" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Layanan</a></li>
              <li><a href="/faq" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">FAQ</a></li>
            </ul>
          </div>
          
          <!-- Products -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white">Produk</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/tshirt" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Kaos</a></li>
              <li><a href="/polo" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Kaos Polo</a></li>
              <li><a href="/jersey" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Jersey</a></li>
              <li><a href="/jacket" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Jaket</a></li>
              <li><a href="/shirts" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Kemeja</a></li>
            </ul>
          </div>
          
          <!-- Discover Us -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white">Jelajahi</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/about-us" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Tentang Kami</a></li>
              <li><a href="/blog" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Blog</a></li>
              <li><a href="/contact-us" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Hubungi Kami</a></li>
              <li><a href="/store-location" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Lokasi Toko</a></li>
              <li><a href="/gallery" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Galeri</a></li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Footer Bottom -->
      <div class="mt-16 border-t border-white/10 pt-8 text-center animate__animated animate__fadeInUp animate__delay-3s">
        <p class="text-sm leading-5 text-gray-400">&copy; 2025 Glam Stitch. All rights reserved.</p>
      </div>
    </div>
  </footer>
</main>
  
  
  

