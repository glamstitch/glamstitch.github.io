<script lang="ts">
  // Page content only - dark mode handled by layout
  import logoGlint from '$lib/assets/image/logo glint.png';
  import ukurankaos from '$lib/assets/image/ukurankaos.png';
</script>

<svelte:head>
  <title>Jersey - Glam Stitch | Konveksi Jersey Olahraga Berkualitas</title>
  <meta name="description" content="Pesan jersey olahraga berkualitas tinggi dari Glam Stitch. Konveksi jersey dengan bahan breathable, desain sporty, dan teknik sablon tahan lama." />
  <meta name="keywords" content="jersey, konveksi jersey, jersey olahraga, sablon jersey, bahan breathable, desain sporty" />
</svelte:head>

<style type="text/tailwindcss"></style>
  
<!-- Hero Section -->
<div class="hero-section relative isolate overflow-hidden pt-6">
    <!-- Background Image -->
    <img loading="lazy" src="https://img.freepik.com/free-photo/soccer-jersey-mockup-concept_23-2149448801.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" 
      alt="Jersey olahraga" class="absolute inset-0 -z-10 w-full h-full object-cover">
  
    <!-- Dark Overlay -->
    <div class="absolute inset-0 -z-10 bg-black/50"></div>
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 text-center">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Koleksi jersey olahraga berkualitas premium dari Glam Stitch untuk performa maksimal dan tampilan sporty.
            <a href="/" class="font-semibold text-white">
              <span class="absolute inset-0" aria-hidden="true"></span>Beranda <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Produk Jersey Glam Stitch
        </h1>
        <p class="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
          Tampil percaya diri di lapangan dengan jersey premium kami. Cocok untuk olahraga, tim, komunitas, hingga seragam event dengan kualitas dan desain terdepan.
        </p>
      </div>
    </div>
  </div>
  

<!--promo-->
<div class="relative overflow-hidden bg-white dark:bg-gray-900 z-0">
    <!-- Callout Section -->
    <section aria-labelledby="sale-heading" class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-5xl">
          Dapatkan Kualitas Terbaik untuk Jersey Glam Stitch Anda
        </h2>
        <p class="mx-auto mt-8 max-w-xl text-base text-gray-600 dark:text-gray-400">
          Sebagian besar produk kami dibuat dalam jumlah terbatas. Segera pesan Jersey Glam Stitch berkualitas premium untuk tim atau komunitas Anda sebelum habis!
        </p>
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
  
      <!-- Galeri Produk -->
      <div class="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          
          <!-- Gambar utama - lebih besar -->
          <div class="lg:col-span-2">
            <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img loading="lazy" src="https://i.pinimg.com/1200x/ad/12/51/ad125113aed9ff86a981f1cb1fbd2e79.jpg"
                alt="Model mengenakan jersey putih premium."
                class="h-full w-full object-cover object-center">
            </div>
          </div>
  
          <!-- Gambar samping -->
          <div class="grid grid-cols-1 gap-6">
            <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img loading="lazy" src="https://i.pinimg.com/1200x/22/3e/77/223e777f25f31fa86fa7db15bd9d8b51.jpg"
                alt="Model mengenakan jersey biru."
                class="h-full w-full object-cover object-center">
            </div>
            <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img loading="lazy" src="https://i.pinimg.com/1200x/59/75/9e/59759e16383e2061fa7f6dcb8b1fb0e1.jpg"
                alt="Model mengenakan jersey merah."
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
                Jersey Glam Stitch
              </h1>
              <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Jersey premium dengan teknologi fabric terdepan untuk performa atletis maksimal
              </p>
            </div>

            <!-- Deskripsi -->
            <div class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Deskripsi Produk</h3>
              <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Jersey Glam Stitch dibuat dengan teknologi fabric terdepan yang dirancang khusus untuk performa atletis. 
                Bahan polyester premium dengan teknologi Dri-FIT menyerap keringat dengan cepat dan mengering dengan cepat pula, 
                menjaga kenyamanan maksimal selama berolahraga. Jahitan flatlock anti-chafing memastikan tidak ada iritasi pada kulit 
                saat bergerak aktif. Desain ergonomis dengan fit atletis memberikan kebebasan bergerak tanpa hambatan.
              </p>
            </div>

            <!-- Fitur Unggulan -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Fitur Unggulan</h3>
              <div class="grid grid-cols-1 gap-4">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Teknologi Dri-FIT untuk menyerap keringat</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Bahan polyester premium breathable</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Jahitan flatlock anti-chafing</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Desain ergonomis dengan fit atletis</p>
                </div>
                <div class="flex items-start space-x-3">
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
                  <span class="text-sm font-medium text-gray-600dark:text-gray-400">Bahan</span>
                  <span class="text-sm text-gray-900dark:text-white">100% Polyester Premium</span>
                </div>
              
                <div class="flex justify-between">
                  <span class="text-sm font-medium text-gray-600dark:text-gray-400">Ukuran</span>
                  <span class="text-sm text-gray-900dark:text-white">XS, S, M, L, XL, XXL, XXXL, XXXXL</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm font-medium text-gray-600dark:text-gray-400">Warna</span>
                  <span class="text-sm text-gray-900dark:text-white">15+ Pilihan Warna</span>
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
              <a href="/product" class="w-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center">
                Lihat Produk Lainnya
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Produk Terkait -->
      <section aria-labelledby="related-products-heading" class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="related-products-heading" class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Contoh Produk</h2>
          <p class="mt-2 text-lg text-gray-600 dark:text-gray-400 text-center">Tersedia berbagai pilihan stylish dan warna untuk setiap kesempatan.</p>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
  
            <!-- Produk 1 -->
            <div class="group relative">
              <img loading="lazy" src="https://i.pinimg.com/1200x/4c/ae/ef/4caeef490939279146dfcce1830b7b6f.jpg" alt="Jersey Glam Stitch warna biru royal." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4">
                <h3 class="text-sm text-gray-700 dark:text-gray-200">
                  Jersey
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Warna Biru Royal</p>
              </div>
            </div>
  
            <!-- Produk 2 -->
            <div class="group relative">
              <img loading="lazy" src="https://i.pinimg.com/736x/41/bb/b0/41bbb08d32e9a922edff196d732a497f.jpg" alt="Jersey Glam Stitch warna putih." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4">
                <h3 class="text-sm text-gray-700 dark:text-gray-200">
                  Jersey
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Warna Putih</p>
              </div>
            </div>
  
            <!-- Produk 3 -->
            <div class="group relative">
              <img loading="lazy" src="https://i.pinimg.com/736x/ed/bb/f2/edbbf2e37109ace2298f5d45cca938d7.jpg" alt="Jersey Glam Stitch warna merah." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4">
                <h3 class="text-sm text-gray-700 dark:text-gray-200">
                  Jersey
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Warna Merah</p>
              </div>
            </div>
  
            <!-- Produk 4 -->
            <div class="group relative">
              <img loading="lazy" src="https://i.pinimg.com/736x/29/bf/c2/29bfc2c2abd2a741cbc6af3b144b48f3.jpg" alt="Jersey Glam Stitch warna hijau." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4">
                <h3 class="text-sm text-gray-700 dark:text-gray-200">
                  Jersey
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Warna Hijau</p>
              </div>
            </div>
  
          </div>
        </div>
      </section>

      <!-- Size Chart Section -->
      <section aria-labelledby="size-chart-heading" class="bg-white dark:bg-gray-900 py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 id="size-chart-heading" class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Panduan Ukuran Jersey
            </h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Gunakan panduan ukuran berikut untuk memastikan Anda mendapatkan jersey dengan ukuran yang tepat dan nyaman untuk performa maksimal.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Size Chart Table -->
            <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Tabel Ukuran Jersey Glam Stitch
              </h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="text-left py-3 px-2 font-semibold text-gray-900dark:text-white">Ukuran</th>
                      <th class="text-center py-3 px-2 font-semibold text-gray-900dark:text-white">Panjang (cm)</th>
                      <th class="text-center py-3 px-2 font-semibold text-gray-900dark:text-white">Lebar (cm)</th>
                      <th class="text-center py-3 px-2 font-semibold text-gray-900dark:text-white">Lingkar Dada (cm)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900dark:text-white">XS</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">67</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">46</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">92</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900dark:text-white">S</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">69</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">49</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">97</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900dark:text-white">M</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">71</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">52</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">102</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900dark:text-white">L</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">73</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">55</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">107</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900dark:text-white">XL</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">75</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">58</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">112</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900dark:text-white">XXL</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">77</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">61</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">117</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900dark:text-white">XXXL</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">79</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">64</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">122</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900dark:text-white">XXXXL</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">81</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">67</td>
                      <td class="py-3 px-2 text-center text-gray-700dark:text-gray-300">127</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <!-- Tips -->
              <div class="mt-6 p-4 bg-blue-50dark:bg-blue-900/20 rounded-lg">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 class="text-sm font-semibold text-blue-900dark:text-blue-100 mb-1">Tips Memilih Ukuran Jersey</h4>
                    <p class="text-sm text-blue-800dark:text-blue-200">
                      Jersey dirancang dengan fit atletis yang lebih ketat untuk performa optimal. Pilih ukuran yang pas untuk gerakan bebas tanpa terlalu longgar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Size Chart Image -->
            <div class="space-y-6">
              <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <img loading="lazy" 
                  src="{ukurankaos}" 
                  alt="Panduan ukuran jersey - cara mengukur jersey dengan benar"
                  class="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300">
              </div>
              
              <!-- How to Measure Guide -->
              <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Cara Mengukur Jersey
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">1</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-900 dark:text-white">Panjang Jersey</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Ukur dari bahu hingga bagian bawah jersey</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">2</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-900 dark:text-white">Lebar Jersey</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Ukur dari ketiak kiri hingga ketiak kanan</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">3</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-900 dark:text-white">Lengan Kaos</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Ukur dari bahu hingga ujung lengan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="mt-12 text-center">
            <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Masih bingung dengan ukuran? Tim customer service kami siap membantu Anda!
            </p>
            <a href="/contact-us" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Konsultasi Ukuran
            </a>
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
  

  
