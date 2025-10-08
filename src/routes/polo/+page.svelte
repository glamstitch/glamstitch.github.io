<script lang="ts">
  // Page content only - dark mode handled by layout
  import logoGlint from '$lib/assets/image/logo glint.png';
  // @ts-expect-error - vite-imagetools query parameters
  import poto6 from '$lib/assets/image/poto6.jpg?w=800&format=webp&quality=80'
  // @ts-expect-error - vite-imagetools query parameters
  import ukuranpolo from '$lib/assets/image/ukuranpolo.png?w=800&format=webp&quality=85'
</script>


<svelte:head>
  <title>Kaos Polo - Glam Stitch | Konveksi Kaos Polo Premium</title>
  <meta name="description" content="Pesan kaos polo berkualitas premium dari Glam Stitch. Konveksi kaos polo dengan bahan terbaik, model elegan, dan teknik sablon profesional." />
  <meta name="keywords" content="kaos polo, konveksi polo, kaos polo premium, sablon polo, model polo, bahan polo" />
</svelte:head>

<style type="text/tailwindcss"></style>
  
<!-- Hero Section -->
<div class="hero-section relative isolate overflow-hidden pt-6">
    <!-- Background Image -->
    <img loading="lazy" src={poto6}
      alt="Kaos polo" class="absolute inset-0 -z-10 w-full h-full object-cover">
  
    <!-- Dark Overlay -->
    <div class="absolute inset-0 -z-10 bg-black/20"></div>
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 text-center">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm text-gray-200 ring-1 ring-white/10 hover:ring-white/20">
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
              <img loading="lazy" src="https://i.pinimg.com/1200x/26/8e/fc/268efc157e9aeb9e100916cd9f987bcb.jpg"
                alt="Model mengenakan kaos polo putih premium."
                class="h-full w-full object-cover object-center">
            </div>
          </div>
  
          <!-- Gambar samping -->
          <div class="grid grid-cols-1 gap-6">
            <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img loading="lazy" src="https://i.pinimg.com/1200x/b9/cf/13/b9cf1394d45966487e2ab76281d9fe21.jpg"
                alt="Model mengenakan kaos polo hitam."
                class="h-full w-full object-cover object-center">
            </div>
            <div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <img loading="lazy" src="https://i.pinimg.com/1200x/d5/c8/bb/d5c8bb224ae8411e2fea73d085853a33.jpg"
                alt="Model mengenakan kaos polo navy."
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
                Kaos Polo Glam Stitch
              </h1>
              <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Kaos polo premium dengan desain klasik dan elegan untuk penampilan profesional
              </p>
            </div>

            <!-- Deskripsi -->
            <div class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Deskripsi Produk</h3>
              <p class="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Kaos Polo Glam Stitch dibuat dengan bahan pique cotton premium yang memberikan kenyamanan maksimal sepanjang hari. 
                Bahan berkualitas tinggi ini memiliki tekstur yang breathable, menyerap keringat dengan baik, dan tidak mudah kusut. 
                Kerah polo klasik dengan kancing berkualitas tinggi memberikan tampilan profesional yang timeless. 
                Jahitan double-stitch memastikan ketahanan dan keawetan produk untuk penggunaan jangka panjang.
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
                  <p class="text-sm text-gray-700 dark:text-gray-300">Bahan pique cotton premium breathable</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Kerah polo dengan kancing berkualitas tinggi</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Jahitan double-stitch untuk ketahanan maksimal</p>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="text-sm text-gray-700 dark:text-gray-300">Pre-shrunk fabric anti-susut</p>
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
                  <span class="text-sm text-gray-900 dark:text-white">100% Pique Cotton</span>
                </div>
              
                <div class="flex justify-between">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Ukuran</span>
                  <span class="text-sm text-gray-900 dark:text-white">XS, S, M, L, XL, XXL, XXXL, XXXXL</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Warna</span>
                  <span class="text-sm text-gray-900 dark:text-white">15+ Pilihan Warna</span>
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
              <img loading="lazy" src="https://i.pinimg.com/1200x/55/35/e7/5535e7c317e5c98887da060ef5694470.jpg" alt="Kaos Polo Glam Stitch warna navy." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4">
                <h3 class="text-sm text-gray-700 dark:text-gray-200">
                  Kaos Polo
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Warna Biru</p>
              </div>
            </div>
  
            <!-- Produk 2 -->
            <div class="group relative">
              <img loading="lazy" src="https://i.pinimg.com/1200x/01/22/29/012229e1a04151b3b6c0210eee6b259b.jpg" alt="Kaos Polo Glam Stitch warna putih." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4">
                <h3 class="text-sm text-gray-700 dark:text-gray-200">
                  Kaos Polo
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Warna Putih</p>
              </div>
            </div>
  
            <!-- Produk 3 -->
            <div class="group relative">
              <img loading="lazy" src="https://i.pinimg.com/1200x/e1/29/f8/e129f8cbbd978329b2428f9fc5eb6ae3.jpg" alt="Kaos Polo Glam Stitch warna hitam." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4">
                <h3 class="text-sm text-gray-700 dark:text-gray-200">
                  Kaos Polo
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Warna Orange</p>
              </div>
            </div>
  
            <!-- Produk 4 -->
            <div class="group relative">
              <img loading="lazy" src="https://i.pinimg.com/736x/ed/9d/96/ed9d96d3337265eab4ad4b8d43362c79.jpg" alt="Kaos Polo Glam Stitch warna abu-abu." class="aspect-square w-full rounded-md bg-gray-200 dark:bg-gray-800 object-cover group-hover:opacity-75">
              <div class="mt-4">
                <h3 class="text-sm text-gray-700 dark:text-gray-200">
                  Kaos Polo
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Warna Hitam</p>
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
              Panduan Ukuran Kaos Polo
            </h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Gunakan panduan ukuran berikut untuk memastikan Anda mendapatkan kaos polo dengan ukuran yang tepat dan nyaman.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Size Chart Table -->
            <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Tabel Ukuran Kaos Polo Glam Stitch
              </h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b border-gray-200 dark:border-gray-700">
                      <th class="text-left py-3 px-2 font-semibold text-gray-900 dark:text-white">Ukuran</th>
                      <th class="text-center py-3 px-2 font-semibold text-gray-900 dark:text-white">Panjang (cm)</th>
                      <th class="text-center py-3 px-2 font-semibold text-gray-900 dark:text-white">Lebar (cm)</th>
                      <th class="text-center py-3 px-2 font-semibold text-gray-900 dark:text-white">Lengan (cm)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900 dark:text-white">XS</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">66</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">44</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">18</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900 dark:text-white">S</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">68</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">47</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">19</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900 dark:text-white">M</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">70</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">50</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">20</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900 dark:text-white">L</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">72</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">53</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">21</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900 dark:text-white">XL</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">74</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">56</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">22</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900 dark:text-white">XXL</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">76</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">59</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">23</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900 dark:text-white">XXXL</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">78</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">62</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">24</td>
                    </tr>
                    <tr>
                      <td class="py-3 px-2 font-medium text-gray-900 dark:text-white">XXXXL</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">80</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">65</td>
                      <td class="py-3 px-2 text-center text-gray-700 dark:text-gray-300">25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <!-- Tips -->
              <div class="mt-6 p-4 bg-gray-800 rounded-lg">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 class="text-sm font-semibold text-blue-100 mb-1">Tips Memilih Ukuran Polo</h4>
                    <p class="text-sm text-blue-200">
                      Kaos polo memiliki potongan yang lebih fitted dibanding kaos biasa. Pertimbangkan untuk memilih satu ukuran lebih besar untuk kenyamanan optimal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Size Chart Image -->
            <div class="space-y-6">
              <div class="w-full rounded-xl bg-gray-100 dark:bg-gray-800 p-4">
                <img loading="lazy" 
                  src="{ukuranpolo}" 
                  alt="Panduan ukuran kaos polo - cara mengukur kaos polo dengan benar"
                  class="w-full h-auto object-contain hover:scale-105 transition-transform duration-300">
              </div>
              
              <!-- How to Measure Guide -->
              <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Cara Mengukur Kaos Polo
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">1</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-900 dark:text-white">Panjang Polo</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Ukur dari bahu hingga bagian bawah kaos polo</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">2</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-900 dark:text-white">Lebar Polo</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Ukur dari ketiak kiri hingga ketiak kanan</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 w-6 h-6 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">3</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-medium text-gray-900 dark:text-white">Lengan Polo</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Ukur panjang lengan dari bahu hingga ujung lengan</p>
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
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
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
            <h3 class="text-lg font-semibold leading-6 text-white">Navigasi</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Beranda</a></li>
              <li><a href="/product" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Produk</a></li>
              <li><a href="/services" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Layanan</a></li>
            </ul>
          </div>
          
          <!-- Products -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white">Produk</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/tshirt" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Kaos</a></li>
              <li><a href="/polo" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Kaos Polo</a></li>
              <li><a href="/jersey" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Jersey</a></li>
              <li><a href="/jacket" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Hoodie/Sweater</a></li>
              <li><a href="/shirts" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Kemeja</a></li>
            </ul>
          </div>
          
          <!-- Discover Us -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white">Jelajahi</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/about-us" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Tentang Kami</a></li>
              <li><a href="/contact-us" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Hubungi Kami</a></li>
              <li><a href="/store-location" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Lokasi Toko</a></li>
              <li><a href="/gallery" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Tim Kami</a></li>
              <li><a href="/pelanggan-kami" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Pelanggan Kami</a></li>
              <li><a href="/supplier-kami" class="text-base text-gray-300 hover:text-blue-400 transition duration-200">Supplier Kami</a></li>

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
  

  
