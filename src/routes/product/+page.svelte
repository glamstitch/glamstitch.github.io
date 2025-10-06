<script lang="ts">
  // Page content only - dark mode handled by layout
  import logoGlint from '$lib/assets/image/logo glint.png';
</script>
  
<!-- Hero Section Produk -->
  <section class="hero-section relative isolate overflow-hidden pt-6">
    <!-- Background Image -->
    <img loading="lazy"
      src="https://img.freepik.com/free-photo/family-tailors-having-leather-industry_1303-23397.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
      alt="Tailor background"
      class="hero-section absolute inset-0 -z-10 w-full h-full object-cover object-center"
    />
  
    <!-- Overlay Hitam -->
    <div class="absolute inset-0 -z-10 bg-black/60"></div>
  
    <!-- Konten Hero -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 text-center">
        
        <!-- Box Highlight -->
        <div class="mb-6 flex justify-center">
          <div class="relative rounded-full px-4 py-1.5 text-sm text-gray-300 ring-1 ring-white/20 hover:ring-white/30 transition">
            Jelajahi beragam produk dari Konveksi Glam Stitch.
            <a href="/product" class="ml-1 font-semibold text-white hover:underline">
              Lihat Produk <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
  
        <!-- Judul -->
        <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-white animate__animated animate__fadeIn">
          Produk Berkualitas dari Glam Stitch
        </h1>
  
        <!-- Deskripsi -->
        <p class="mt-6 text-lg sm:text-xl text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
          Temukan kaos polos, jaket, dan kemeja dengan desain menarik, bahan terbaik, dan jahitan rapi — cocok untuk brand, komunitas, maupun usaha Anda.
        </p>
  
        <!-- Tombol CTA -->
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/"
              class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all transform hover:scale-105">
              Mulai Sekarang
            </a>
            <a href="/" class="text-sm font-semibold text-white hover:text-indigo-400 transition-all transform hover:scale-105">Jelajahi Lebih Lanjut <span aria-hidden="true">→</span></a>
          </div>
      </div>
    </div>
  </section>
  
  <!-- Hero Section with Animations -->
  <section class="relative bg-white dark:bg-gray-900 py-12 sm:py-20 overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-10">
  
        <!-- Left: Image -->
        <div class="w-full lg:w-1/2 animate-fade-slide-left">
          <img loading="lazy"
            src="https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18667.jpg"
            alt="Produk Konveksi"
            class="product-image rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
  
        <!-- Right: Text Content -->
        <div class="w-full lg:w-1/2 text-center lg:text-left animate-fade-slide-right">
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Koleksi Fashion Terlengkap dari <span class="text-indigo-600 dark:text-indigo-400">Glam Stitch</span>
          </h2>
          <p class="mt-5 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Temukan beragam produk fashion berkualitas tinggi yang dirancang khusus untuk memenuhi kebutuhan Anda. Dari kaos polos yang nyaman untuk sehari-hari, kaos polo elegan untuk acara semi-formal, jersey sporty untuk aktivitas olahraga, hoodie/sweater hangat untuk cuaca dingin, hingga kemeja profesional untuk kesempatan formal.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row lg:justify-start justify-center gap-4">
            <a
              href="/services"
              class="inline-block rounded-md bg-indigo-600 dark:bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 transition duration-300"
            >
              Layanan Kami
            </a>
            <a
              href="/contact-us"
              class="inline-block rounded-md border border-gray-300 dark:border-gray-600 px-6 py-3 text-base font-semibold text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Product Section -->
<section class="bg-white dark:bg-gray-900 py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
      <div class="text-center mb-14">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Produk Kami</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Temukan pilihan fashion terbaik dari kami, dibuat dengan kualitas tinggi dan sentuhan desain yang stylish.
        </p>
      </div>
  
      <div class="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        
        <!-- Kaos Polos -->
        <div class="flex flex-col items-center text-center space-y-4 animate__animated animate__fadeInUp animate__delay-200ms">
          <a href="/tshirt" class="block w-full max-w-sm mx-auto group">
            <div class="overflow-hidden rounded-xl shadow-md transition-all duration-300 transform group-hover:scale-105">
              <img loading="lazy" 
                src="https://i.pinimg.com/736x/50/31/57/5031570ca2bae383dc3d83f004bc0dfe.jpg" 
                alt="Kaos Polos Glam Stitch" 
                class="w-full aspect-[4/5] object-cover"
              />
            </div>
          </a>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Kaos Polos</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 px-2 max-w-sm">
            Nyaman dipakai seharian, hadir dalam berbagai warna dan bahan premium yang adem dan awet.
          </p>
        </div>
  
        <!-- Kaos Polo -->
        <div class="flex flex-col items-center text-center space-y-4 animate__animated animate__fadeInUp animate__delay-400ms">
          <a href="/polo" class="block w-full max-w-sm mx-auto group">
            <div class="overflow-hidden rounded-xl shadow-md transition-all duration-300 transform group-hover:scale-105">
              <img loading="lazy" 
                src="https://i.pinimg.com/1200x/01/22/29/012229e1a04151b3b6c0210eee6b259b.jpg" 
                alt="Kaos Polo Glam Stitch" 
                class="w-full aspect-[4/5] object-cover"
              />
            </div>
          </a>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Kaos Polo</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 px-2 max-w-sm">
            Elegan dan stylish dengan kerah polo yang klasik, cocok untuk acara semi-formal maupun casual.
          </p>
        </div>
  
        <!-- Jersey -->
        <div class="flex flex-col items-center text-center space-y-4 animate__animated animate__fadeInUp animate__delay-600ms">
          <a href="/jersey" class="block w-full max-w-sm mx-auto group">
            <div class="overflow-hidden rounded-xl shadow-md transition-all duration-300 transform group-hover:scale-105">
              <img loading="lazy" 
                src="https://i.pinimg.com/1200x/4c/ae/ef/4caeef490939279146dfcce1830b7b6f.jpg" 
                alt="Jersey Glam Stitch" 
                class="w-full aspect-[4/5] object-cover"
              />
            </div>
          </a>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Jersey</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 px-2 max-w-sm">
            Nyaman untuk aktivitas olahraga dan casual, dengan bahan yang menyerap keringat dan mudah dicuci.
          </p>
        </div>
  
        <!-- Hoodie/Sweater -->
        <div class="flex flex-col items-center text-center space-y-4 animate__animated animate__fadeInUp animate__delay-800ms">
          <a href="/jacket" class="block w-full max-w-sm mx-auto group">
            <div class="overflow-hidden rounded-xl shadow-md transition-all duration-300 transform group-hover:scale-105">
              <img loading="lazy" 
                src="https://i.pinimg.com/1200x/5a/6d/b1/5a6db1b76d8dcacfb279079a82e8bf4e.jpg" 
                alt="Hoodie/Sweater Glam Stitch" 
                class="w-full aspect-[4/5] object-cover"
              />
            </div>
          </a>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Hoodie/Sweater</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 px-2 max-w-sm">
            Hangat dan stylish, cocok untuk aktivitas luar ruangan maupun casual harian.
          </p>
        </div>
  
        <!-- Kemeja -->
        <div class="flex flex-col items-center text-center space-y-4 animate__animated animate__fadeInUp animate__delay-1000ms">
          <a href="/shirts" class="block w-full max-w-sm mx-auto group">
            <div class="overflow-hidden rounded-xl shadow-md transition-all duration-300 transform group-hover:scale-105">
              <img loading="lazy" 
                src="https://i.pinimg.com/1200x/a3/9f/93/a39f9311f2367a33dcbba0f849fc5c8c.jpg" 
                alt="Kemeja Glam Stitch" 
                class="w-full aspect-[4/5] object-cover"
              />
            </div>
          </a>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Kemeja</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 px-2 max-w-sm">
            Tampil rapi dan profesional dengan kemeja berkualitas tinggi dari Glam Stitch.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Reviews Section -->
<section class="bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-16 py-16">
      <div class="text-center">
        <h2 class="text-4xl sm:text-2xl font-bold text-gray-900 dark:text-white">Testimoni Pelanggan: Pengalaman Memuaskan dari Glam Stitch!</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">Review dari para pelanggan setia kami.</p>
      </div>
  
      <div class="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        
        <!-- Review Card -->
        <div class="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-4 mb-4">
            <img loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Putri Aulia">
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white text-base">Putri Aulia</h4>
              <span class="text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-full px-2 py-0.5">Kaos Polos</span>
            </div>
          </div>
  
          <div class="flex items-center mb-3">
            <!-- Stars -->
            <div class="flex space-x-1 text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
            </div>
          </div>
  
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">“Kaos polosnya super nyaman dipakai seharian. Bahannya adem, jahitannya rapi, dan warnanya nggak gampang pudar!”</p>
        </div>
        
        <!-- Review Card 3 -->
        <div class="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-4 mb-4">
            <img loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" src="https://media.istockphoto.com/id/1325882419/id/foto/wanita-meniup-ciuman-udara-pada-latar-belakang-biru-muda.jpg?s=612x612&w=0&k=20&c=xBVLOjJkZ2AAPBMi-bPeYzDKTQLQq48z0xPpWb7rUVE=" alt="Budi Santoso">
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white text-base">Budi Santoso</h4>
              <span class="text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-full px-2 py-0.5">Kaos Polo</span>
            </div>
          </div>

          <div class="flex items-center mb-3">
            <!-- Stars -->
            <div class="flex space-x-1 text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
            </div>
          </div>

          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">"Kaos polo dari Glam Stitch sangat nyaman dan elegan. Kerahnya tidak mudah melengkung, bahannya adem, dan cocok untuk acara kantor maupun hangout."</p>
        </div>

        <!-- Review Card 4 -->
        <div class="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-4 mb-4">
            <img loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" src="https://media.istockphoto.com/id/185941321/id/foto/tubuh-bagian-atas-pria.jpg?s=612x612&w=0&k=20&c=iS9nQtGYKbNusFB7N6ygJZPdkmSvK1OwkhinmalwW3o=" alt="Sari Dewi">
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white text-base">Sari Dewi</h4>
              <span class="text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-full px-2 py-0.5">Jersey</span>
            </div>
          </div>

          <div class="flex items-center mb-3">
            <!-- Stars -->
            <div class="flex space-x-1 text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
            </div>
          </div>

          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">"Jersey untuk tim futsal kami sangat bagus! Bahan menyerap keringat dengan baik, tidak mudah kusut, dan desainnya bisa dikustom sesuai keinginan."</p>
        </div>

        <!-- Review Card 5 -->
        <div class="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-4 mb-4">
            <img loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" src="https://media.istockphoto.com/id/2085676478/id/foto/mockup-hoodie-putih-pada-pria-berjanggut-kaus-oversized-dengan-saku-untuk-desain-branding.jpg?s=612x612&w=0&k=20&c=7QKD-7q--IDD5CV0p5JDNuWy6f26zHLa0qCI3cF8wOc=" alt="Rizki Pratama">
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white text-base">Rizki Pratama</h4>
              <span class="text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-full px-2 py-0.5">Hoodie/Sweater</span>
            </div>
          </div>

          <div class="flex items-center mb-3">
            <!-- Stars -->
            <div class="flex space-x-1 text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
            </div>
          </div>

          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">"Hoodie dari Glam Stitch sangat nyaman dan hangat. Kualitasnya premium, jahitannya rapi, dan desainnya simple tapi tetap stylish. Perfect untuk cuaca dingin!"</p>
        </div>

        <!-- Review Card 6 -->
        <div class="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-4 mb-4">
            <img loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" src="https://img.freepik.com/free-photo/business-casual-shirt-white-closeup-outdoor-photoshoot_53876-119744.jpg?ga=GA1.1.1868222757.1738365469&w=740" alt="Ahmad Fauzi">
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white text-base">Ahmad Fauzi</h4>
              <span class="text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-full px-2 py-0.5">Kemeja</span>
            </div>
          </div>

          <div class="flex items-center mb-3">
            <!-- Stars -->
            <div class="flex space-x-1 text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
            </div>
          </div>

          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">"Kemeja untuk seragam kantor sangat memuaskan! Bahan berkualitas, jahitan rapi, dan ukurannya pas. Tim kami sangat puas dengan hasilnya."</p>
        </div>
  
        <!-- Example Review Card -->
        <div class="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-4 mb-4">
            <img loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" src="https://media.istockphoto.com/id/483627817/id/foto/memamerkan-putih-mutiaranya.jpg?s=612x612&w=0&k=20&c=0dXbdlR-Ten2QPyJ7E6WtpRjGAwLFLbfWywDJ0RCs_E=" alt="Arifki Pratama">
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white text-base">Arifki Pratama</h4>
              <span class="text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-full px-2 py-0.5">Hoodie/Sweater</span>
            </div>
          </div>
  
          <div class="flex items-center mb-3">
            <!-- Stars -->
            <div class="flex space-x-1 text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
            </div>
          </div>
  
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">"Hoodie dari Glam Stitch bener-bener keren! Bahannya tebal tapi tetap ringan, potongannya pas, dan sangat cocok buat gaya harian yang casual tapi tetap kece."</p>
        </div>

        <div class="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
            <div class="flex items-center gap-4 mb-4">
              <img loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" src="https://media.istockphoto.com/id/1325882419/id/foto/wanita-meniup-ciuman-udara-pada-latar-belakang-biru-muda.jpg?s=612x612&w=0&k=20&c=xBVLOjJkZ2AAPBMi-bPeYzDKTQLQq48z0xPpWb7rUVE=" alt="Sri Rahayu">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white text-base">Sri Rahayu</h4>
                <span class="text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-full px-2 py-0.5">Kemeja</span>
              </div>
            </div>
          
            <div class="flex items-center mb-3">
              <!-- Stars -->
              <div class="flex space-x-1 text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              </div>
            </div>
          
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">“Kemejanya elegan banget! Bahannya adem, jatuhnya bagus di badan, dan jahitannya rapi. Cocok banget buat acara formal maupun nongkrong santai.”</p>
          </div>
          
  
        <!-- Review Card 7 -->
        <div class="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-4 mb-4">
            <img loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Dewi Sari">
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white text-base">Dewi Sari</h4>
              <span class="text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-full px-2 py-0.5">Kaos Polos</span>
            </div>
          </div>

          <div class="flex items-center mb-3">
            <!-- Stars -->
            <div class="flex space-x-1 text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
            </div>
          </div>

          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">"Kaos polos untuk komunitas book club kami sangat memuaskan! Bahan adem, ukuran pas, dan warnanya tidak mudah luntur meski dicuci berkali-kali. Recommended banget!"</p>
        </div>

        <!-- Review Card 8 -->
        <div class="bg-white dark:bg-gray-700 shadow-xl rounded-3xl p-8 border border-gray-100 dark:border-gray-600 hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div class="flex items-center gap-4 mb-4">
            <img loading="lazy" class="w-12 h-12 rounded-full object-cover border-2 border-indigo-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Fajar Nugroho">
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white text-base">Fajar Nugroho</h4>
              <span class="text-sm text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-full px-2 py-0.5">Kaos Polo</span>
            </div>
          </div>

          <div class="flex items-center mb-3">
            <!-- Stars -->
            <div class="flex space-x-1 text-yellow-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"/></svg>
            </div>
          </div>

          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">"Kaos polo untuk seragam tim marketing sangat bagus! Kualitas premium, jahitan rapi, dan desainnya profesional. Klien pun terkesan dengan penampilan tim kami."</p>
        </div>
  
        <!-- Add more review cards with similar structure -->
  
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
              <li><a href="/gallery" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Galeri</a></li>
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
  
  <style type="text/tailwindcss"></style>
  

  
