<script lang="ts">
  // Page content only - dark mode handled by layout
</script>

<svelte:head>
  <title>Blog - Glam Stitch | Tips & Informasi Konveksi Terkini</title>
  <meta name="description" content="Baca artikel dan tips terbaru tentang konveksi, fashion, dan industri tekstil dari Glam Stitch. Informasi berguna untuk kebutuhan konveksi Anda." />
  <meta name="keywords" content="blog konveksi, tips fashion, industri tekstil, artikel konveksi, informasi terkini" />
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
      <div class="hidden sm:mb-16 sm:flex sm:justify-center">
        <div class="relative rounded-full bg-white/10 px-4 py-1.5 text-sm text-gray-300 ring-1 ring-white/20 hover:ring-white/30 transition">
          Temukan inspirasi dan informasi konveksi.
          <a href="/product" class="ml-2 font-semibold text-white hover:underline">
            <span class="absolute inset-0" aria-hidden="true"></span>Lihat Produk <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <!-- Hero Text -->
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Blog Glam Stitch
        </h1>
        <p class="mt-6 text-lg text-gray-300 sm:text-xl">
          Baca artikel menarik seputar dunia konveksi, tren fashion, tips produksi pakaian, serta cerita di balik layar tim kami.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/#"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all transform hover:scale-105">
            Mulai Membaca
          </a>
          <a href="/#" class="text-sm font-semibold text-white hover:text-indigo-400 transition-all transform hover:scale-105">
            Artikel Terbaru <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  
  
<!-- Blog Section -->
<section class="bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24 sm:py-20 transition-colors duration-300">
    <div class="mx-auto max-w-7xl px-6 lg:px-16">
      
      <!-- Heading -->
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl tracking-wide">
          Artikel & Cerita dari Glam Stitch
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Temukan wawasan menarik, kisah inspiratif, dan tips bermanfaat seputar dunia konveksi serta perkembangan bisnis kami.
        </p>
      </div>
  
      <!-- Blog Cards -->
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        <!-- Post Card -->
        {#each [
          {
            img: 'https://media.istockphoto.com/id/1269798844/id/foto/terinspirasi-wanita-muda-asia-ide-bagus.jpg?s=612x612&w=0&k=20&c=dpoO_SJ-ZOf5LDfS89333lsqYz0KFVbRPduB8pnvrk0=',
            date: '2025-04-15',
            title: 'Di Balik Produksi Kaos Polos Kami',
            excerpt: 'Intip proses produksi yang kami jalankan untuk menghadirkan kaos polos berkualitas premium dan nyaman digunakan.',
            link: '/#'
          },
          {
            img: 'https://media.istockphoto.com/id/2042011981/id/foto/male-african-american-tailor-is-making-a-sketch-in-his-atelier.jpg?s=612x612&w=0&k=20&c=htWFYHyrCnyVXSy3dL3EbtjfJessNbNuG_uFhDE4eUk=',
            date: '2025-04-10',
            title: 'Panduan Memilih Bahan Terbaik',
            excerpt: 'Mau produksi kaos tapi bingung pilih bahan? Kami bantu Anda memahami perbedaan bahan dan penggunaannya.',
            link: '/#'
          },
          {
            img: 'https://media.istockphoto.com/id/1215557826/id/foto/proses-produksi-tangan-laki-laki-bekerja-dengan-sketsa-atau-pola-di-studio-dan-menyiapkan-kain.jpg?s=612x612&w=0&k=20&c=AB8HCVta2oIWY_Rs0tdvepwHoT79p0Cogsgi6us0PDs=',
            date: '2025-04-05',
            title: 'Kekuatan UMKM Lokal: Cerita dari Cijoged',
            excerpt: 'Glam Stitch tumbuh bersama komunitas lokal. Inilah alasan kami bangga menjadi bagian dari konveksi lokal di Cijoged.',
            link: '/#'
          }
        ] as post}
        <article class="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 group">
          <div class="overflow-hidden">
            <img 
              src={post.img} 
              alt={post.title} 
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div class="p-6">
            <time datetime={post.date} class="text-sm text-indigo-500">
              {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
            <h3 class="mt-2 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
              {post.title}
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              {post.excerpt}
            </p>
            <a href={post.link} class="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition">
              Baca Selengkapnya →
            </a>
          </div>
        </article>
        {/each}
      </div>
    </div>
  </section>
  
<!-- testimonial sections -->
<section class="bg-white dark:bg-gray-900 py-24 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-16">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Testimoni Klien Konveksi Glam Stitch
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">Dipercaya oleh berbagai brand dan bisnis yang puas dengan hasil produksi kami.</p>
      </div>
  
      <div class="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Testimonial Item -->
        <figure class="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <blockquote class="text-gray-900">
            <p>“Kualitas bahan dan jahitan sangat bagus. Pesanan kaos promosi kami selesai tepat waktu dan hasilnya memuaskan.”</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-x-4">
            <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Foto Putri Aulia">
            <div>
              <div class="font-semibold text-gray-900">Putri Aulia</div>
              <div class="text-sm text-gray-600">@putriaulia</div>
            </div>
          </figcaption>
        </figure>
  
        <figure class="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <blockquote class="text-gray-900">
            <p>“Pelayanan cepat dan responsif. Jaket kantor yang kami pesan hasilnya rapi dan profesional.”</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-x-4">
            <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Foto Rahmat Hidayat">
            <div>
              <div class="font-semibold text-gray-900">Rahmat Hidayat</div>
              <div class="text-sm text-gray-600">@rahmathdy</div>
            </div>
          </figcaption>
        </figure>
  
        <figure class="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <blockquote class="text-gray-900">
            <p>“Sangat perhatian terhadap detail. Kaos komunitas kami dibuat sesuai desain dan ukuran yang kami inginkan.”</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-x-4">
            <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Foto Melati Nurfadila">
            <div>
              <div class="font-semibold text-gray-900">Melati Nurfadila</div>
              <div class="text-sm text-gray-600">@melatinur</div>
            </div>
          </figcaption>
        </figure>
  
        <figure class="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <blockquote class="text-gray-900">
            <p>“Hasil bordirnya detail dan rapi. Kami sangat puas dengan seragam kerja yang dibuat oleh Glam Stitch.”</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-x-4">
            <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Foto Daniel Surya">
            <div>
              <div class="font-semibold text-gray-900">Daniel Surya</div>
              <div class="text-sm text-gray-600">@danielsurya</div>
            </div>
          </figcaption>
        </figure>
  
        <figure class="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <blockquote class="text-gray-900">
            <p>“Order kaos event kami diproses sangat cepat dan hasil sablonnya tajam. Terima kasih Glam Stitch!”</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-x-4">
            <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Foto Alya Ramadhani">
            <div>
              <div class="font-semibold text-gray-900">Alya Ramadhani</div>
              <div class="text-sm text-gray-600">@alyaram</div>
            </div>
          </figcaption>
        </figure>
  
        <figure class="rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <blockquote class="text-gray-900">
            <p>“Timnya sangat kooperatif. Kami bisa request desain khusus dan hasilnya sangat memuaskan. Recommended!”</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-x-4">
            <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Foto Farhan Naufal">
            <div>
              <div class="font-semibold text-gray-900">Farhan Naufal</div>
              <div class="text-sm text-gray-600">@farhannfl</div>
            </div>
          </figcaption>
        </figure>
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
          <img class="h-24 w-24 animate__animated animate__zoomIn animate__delay-1s" src="assets/image/logo glint.png" alt="Glam Stitch Logo">
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
  
  
  <style type="text/tailwindcss"></style>
  

  
