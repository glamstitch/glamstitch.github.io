<script lang="ts">
  // Page content only - dark mode handled by layout
  import { base } from '$app/paths';
  import logoGlint from '$lib/assets/image/logo glint.png';
</script>

<svelte:head>
  <title>Tentang Kami - Glam Stitch | Konveksi Profesional & Terpercaya</title>
  <meta name="description" content="Pelajari lebih lanjut tentang Glam Stitch, konveksi profesional dengan pengalaman bertahun-tahun. Tim ahli kami siap melayani kebutuhan konveksi Anda dengan kualitas terbaik." />
  <meta name="keywords" content="tentang kami, konveksi profesional, tim ahli, pengalaman konveksi, kualitas terbaik" />
</svelte:head>

<!--header -->
<section class="relative isolate overflow-hidden pt-6">
    <!-- Background Image -->
    <img
      src="https://img.freepik.com/premium-photo/fashion-designer-cutting-tailor-made-concept_53876-45794.jpg"
      alt="Fashion designer working on tailoring"
      class="absolute inset-0 -z-10 w-full h-full object-cover"
    />
    <!-- Overlay -->
    <div class="absolute inset-0 -z-10 bg-black/50"></div>
  
    <!-- Content Container -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
        <!-- Welcome Badge -->
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full bg-white/10 px-4 py-1.5 text-sm text-gray-300 ring-1 ring-white/20 hover:ring-white/30 transition">
            Selamat datang di Glam Stitch.
            <a href="/product" class="ml-2 font-semibold text-white hover:underline">
              <span class="absolute inset-0" aria-hidden="true"></span>Lihat Produk <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
  
        <!-- Hero Text -->
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Konveksi Profesional Glam Stitch
          </h1>
          <p class="mt-6 text-lg text-gray-300 sm:text-xl">
            Kami menyediakan berbagai layanan produksi pakaian — mulai dari kaos polos, jaket custom, hingga kemeja formal — dengan standar kualitas tinggi dan pengerjaan cepat.
          </p>
  
          <!-- CTA Buttons -->
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/#"
              class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all transform hover:scale-105">
              Mulai Sekarang
            </a>
            <a href="/#" class="text-sm font-semibold text-white hover:text-indigo-400 transition-all transform hover:scale-105">Jelajahi Lebih Lanjut <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
<!-- Hero Section -->
<section class="relative bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
    <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-16">
  
      <!-- Kiri: Konten Teks -->
      <div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-16 xl:col-span-6 flex items-center">
        <div class="mx-auto max-w-lg lg:mx-0 animate-fade-in-up duration-700 ease-out">
  
          <!-- Badge -->
          <div class="hidden sm:flex sm:mt-32 lg:mt-16">
            <div class="relative rounded-full px-3 py-1 text-sm text-gray-500 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-white/10 hover:ring-gray-900/20 dark:hover:ring-white/20 transition">
              Kami bangga melayani berbagai klien dengan produk pakaian berkualitas tinggi.
              <a href="/#" class="ml-2 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                <span class="absolute inset-0" aria-hidden="true"></span>
                Temukan lebih lanjut <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
  
          <!-- Judul -->
          <h1 class="mt-24 text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white sm:mt-10">
            Glam Stitch Konveksi Profesional
          </h1>
  
          <!-- Deskripsi -->
          <p class="mt-6 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            Glam Stitch adalah penyedia solusi pakaian kustom untuk berbagai kebutuhan bisnis, organisasi, dan acara. Kami siap memenuhi pesanan seragam, merchandise, atau pakaian promosi dengan hasil berkualitas tinggi yang disesuaikan dengan kebutuhan Anda.
          </p>
  
          <!-- Tombol CTA -->
          <div class="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="/services" class="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition">
              Layanan Kami
            </a>
            <a href="/about" class="text-sm font-semibold text-gray-900 dark:text-white hover:underline">
              Pelajari lebih lanjut <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
  
      <!-- Kanan: Gambar -->
      <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 flex items-center justify-center h-full">
        <img
          class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg mt-10 object-contain rounded-2xl shadow-lg
                 motion-safe:animate-zoom-in-up motion-safe:duration-1000 motion-safe:ease-out"
          src={logoGlint}
          alt="Logo Glam Stitch"
        >
      </div>
      
    </div>
  </section>
  
  
  
<!-- Visi -->
<section class="bg-white dark:bg-gray-900 py-24 transition-colors duration-300">
    <div class="mx-auto max-w-7xl px-6 lg:px-16">
        <div class="text-center">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Visi dan Misi</h2>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <!-- Visi -->
            <div class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                <div class="mb-4 p-3 bg-indigo-600 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l2-2 2 2M12 10v4M19 10v6a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h12a2 2 0 012 2z"/>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Visi</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center">
                    Menjadi pemimpin terkemuka dalam industri konveksi yang dikenal akan kualitas unggul, inovasi, dan kepuasan pelanggan.
                </p>
            </div>
  
            <!-- Misi 1 -->
            <div class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                <div class="mb-4 p-3 bg-indigo-600 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l-4 4m0 0l4 4m-4-4h16"/>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Misi 1</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center">
                    Memberikan pakaian kustom berkualitas tinggi sesuai kebutuhan pelanggan dengan menerapkan praktik produksi yang berkelanjutan.
                </p>
            </div>
  
            <!-- Misi 2 -->
            <div class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                <div class="mb-4 p-3 bg-indigo-600 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Misi 2</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center">
                    Membangun hubungan jangka panjang dengan klien melalui layanan yang andal, inovatif, dan berfokus pada kepuasan pelanggan.
                </p>
            </div>
  
            <!-- Komitmen Kualitas -->
            <div class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                <div class="mb-4 p-3 bg-indigo-600 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Komitmen Kualitas</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center">
                    Kami percaya bahwa setiap pakaian harus dibuat dengan ketelitian dan standar tertinggi.
                </p>
            </div>
  
            <!-- Inovasi -->
            <div class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                <div class="mb-4 p-3 bg-indigo-600 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l-3-3m0 0L7 7m3-3v14"/>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Inovasi</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center">
                    Kami mengadopsi teknologi dan teknik terbaru untuk meningkatkan kemampuan produksi dan menciptakan solusi pakaian yang modern.
                </p>
            </div>
  
            <!-- Keberlanjutan -->
            <div class="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                <div class="mb-4 p-3 bg-indigo-600 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5l8-3 8 3v12l-8 3-8-3V5z"/>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Keberlanjutan</h3>
                <p class="text-gray-600 dark:text-gray-300 text-center">
                    Glam Stitch berkomitmen mengurangi dampak lingkungan dengan menerapkan praktik produksi yang ramah lingkungan.
                </p>
            </div>
        </div>
    </div>
</section>

<!--journey-->
<section class="bg-white dark:bg-gray-900 py-20" id="our-journey">
    <div class="mx-auto max-w-7xl px-6 lg:px-16">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-800 dark:text-white">Perjalanan Kami</h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">Kami menggabungkan semangat tim, keahlian, dan komitmen untuk selalu memberikan produk terbaik bagi setiap pelanggan kami, sejak pertama kali kami berdiri.</p>
        </div>        
      <div class="space-y-16 relative">
        <!-- Timeline -->
        <div class="space-y-16 relative border-l-4 border-indigo-500 dark:border-indigo-300 pl-8">
          
          <!-- 2020 -->
          <div class="relative animate__animated animate__fadeIn animate__delay-1s">
            <div class="absolute -left-5 top-1 w-10 h-10 bg-indigo-500 dark:bg-indigo-300 rounded-full flex items-center justify-center text-white font-bold shadow-md">2020</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="https://img.freepik.com/premium-photo/tailors-shop-with-equipment-work-benches_126745-1092.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="2020" class="rounded-xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300">
              <div class="text-gray-700 dark:text-gray-300 text-lg">
                Awal mula berdirinya Glam Stitch, dimulai dari sebuah rumah kecil di Cijoged dengan mesin jahit sederhana dan semangat besar untuk memberikan kualitas terbaik.
              </div>
            </div>
          </div>

          <!-- 2021 -->
          <div class="relative animate__animated animate__fadeIn animate__delay-2s">
            <div class="absolute -left-5 top-1 w-10 h-10 bg-indigo-500 dark:bg-indigo-300 rounded-full flex items-center justify-center text-white font-bold shadow-md">2021</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="https://img.freepik.com/free-photo/woman-business-owner-working-her-tailor-shop_1150-11672.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="2021" class="rounded-xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300">
              <div class="text-gray-700 dark:text-gray-300 text-lg">
                Memperluas layanan dengan mulai menerima pesanan dalam jumlah besar dari komunitas dan sekolah. Glam Stitch mulai dikenal di wilayah lokal.
              </div>
            </div>
          </div>

          <!-- 2022 -->
          <div class="relative animate__animated animate__fadeIn animate__delay-3s">
            <div class="absolute -left-5 top-1 w-10 h-10 bg-indigo-500 dark:bg-indigo-300 rounded-full flex items-center justify-center text-white font-bold shadow-md">2022</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="https://img.freepik.com/free-photo/portrait-businesswoman-owner_23-2148828328.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="2022" class="rounded-xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300">
              <div class="text-gray-700 dark:text-gray-300 text-lg">
                Tahun inovasi. Kami memperkenalkan layanan custom desain dan menambah 5 mesin jahit industri untuk meningkatkan kapasitas produksi.
              </div>
            </div>
          </div>

          <!-- 2023 -->
          <div class="relative animate__animated animate__fadeIn animate__delay-4s">
            <div class="absolute -left-5 top-1 w-10 h-10 bg-indigo-500 dark:bg-indigo-300 rounded-full flex items-center justify-center text-white font-bold shadow-md">2023</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="2023" class="rounded-xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300">
              <div class="text-gray-700 dark:text-gray-300 text-lg">
                Glam Stitch meluncurkan website resmi dan menjangkau pelanggan dari seluruh Indonesia. Jaringan reseller pun mulai dibentuk.
              </div>
            </div>
          </div>

          <!-- 2024 -->
          <div class="relative animate__animated animate__fadeIn animate__delay-5s">
            <div class="absolute -left-5 top-1 w-10 h-10 bg-indigo-500 dark:bg-indigo-300 rounded-full flex items-center justify-center text-white font-bold shadow-md">2024</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="https://img.freepik.com/free-vector/new-employee-concept-illustration_114360-7805.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="2024" class="rounded-xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300">
              <div class="text-gray-700 dark:text-gray-300 text-lg">
                Kini Glam Stitch telah menjadi konveksi terpercaya dengan lebih dari 100 klien aktif. Kami terus berkomitmen memberikan pelayanan terbaik.
              </div>
            </div>
          </div>
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
              <li><a href="{base}/tshirt" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Kaos</a></li>
              <li><a href="{base}/polo" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Kaos Polo</a></li>
              <li><a href="{base}/jersey" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Jersey</a></li>
              <li><a href="{base}/jacket" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Jaket</a></li>
              <li><a href="{base}/shirts" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Kemeja</a></li>
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
  
  
  

  
