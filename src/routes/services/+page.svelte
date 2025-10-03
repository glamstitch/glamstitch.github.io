<script lang="ts">
  // Page content only - dark mode handled by layout
  import logoGlint from '$lib/assets/image/logo glint.png';
</script>

<svelte:head>
  <title>Layanan - Glam Stitch | Sablon, Bordir & Konveksi Berkualitas</title>
  <meta name="description" content="Layanan konveksi lengkap dari Glam Stitch: sablon, bordir, konveksi kaos, jersey, jaket, dan kemeja. Kualitas terjamin dengan harga kompetitif." />
  <meta name="keywords" content="layanan konveksi, sablon, bordir, konveksi kaos, jersey, jaket, kemeja, kualitas terjamin" />
</svelte:head>

<!--header-->
<section class="relative isolate overflow-hidden bg-gray-900 dark:bg-gray-950 pt-4">
    <!-- Background Image -->
    <img
      src="https://img.freepik.com/premium-photo/pensive-young-man-leather-apron-drinking-coffee-while-taking-break-leather-workshop_274679-7615.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
      alt="Layanan Konveksi"
      class="absolute inset-0 -z-10 w-full h-full object-cover opacity-90"
      loading="lazy"
    />
    <div class="absolute inset-0 -z-10 bg-black/60"></div>
  
    <!-- Container -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32 text-center">
        <!-- Badge Link -->
        <div class="hidden sm:flex justify-center mb-6">
          <div class="relative rounded-full bg-white/10 px-4 py-1.5 text-sm text-gray-200 ring-1 ring-white/20 hover:ring-white/40 transition">
            Solusi konveksi terbaik untuk kebutuhan Anda.
            <a href="/product" class="ml-2 font-semibold text-white underline underline-offset-4">
              Lihat Produk <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
    
        <!-- Heading & Content -->
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Layanan Konveksi Profesional dari Glam Stitch
          </h1>
          <p class="mt-4 text-base sm:text-lg text-gray-300 font-medium max-w-xl mx-auto">
            Kami menyediakan berbagai layanan produksi pakaian — mulai dari kaos polos, jaket custom, hingga kemeja formal — dengan standar kualitas tinggi dan pengerjaan cepat.
          </p>
    
          <!-- CTA Buttons -->
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/"
              class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all transform hover:scale-105">
              Mulai Sekarang
            </a>
            <a href="/" class="text-sm font-semibold text-white hover:text-indigo-400 transition-all transform hover:scale-105">Jelajahi Lebih Lanjut <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>    
  </section>
  
  
  <!-- CTA Section -->
<section class="py-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900">
    <div class="max-w-7xl mx-auto px-6 lg:px-16">
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white tracking-tight">
          Layanan Unggulan Glam Stitch
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Nikmati layanan bordir, sablon, dan custom desain yang elegan, cepat, dan sesuai identitas brand Anda.
        </p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Card -->
        <div class="group bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <div class="relative overflow-hidden rounded-2xl mb-6">
            <img src="https://img.freepik.com/free-photo/portrait-businesswoman-owner_23-2148828328.jpg?w=740" alt="Jasa Bordir" class="w-full h-60 object-cover rounded-2xl group-hover:scale-105 transition duration-500">
            <div class="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Bordir
            </div>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Jasa Bordir Profesional</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Tingkatkan identitas brand Anda dengan hasil bordir presisi, tahan lama, dan elegan untuk segala kebutuhan.
          </p>
          <a href="/#" class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm transition">
            Pelajari Lebih Lanjut
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div class="mt-6">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition">
              Pesan Sekarang
            </button>
          </div>
        </div>
  
        <!-- Card -->
        <div class="group bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <div class="relative overflow-hidden rounded-2xl mb-6">
            <img src="https://img.freepik.com/premium-photo/close-up-person-working-textile-industry_1048944-24648174.jpg?w=740" alt="Jasa Sablon" class="w-full h-60 object-cover rounded-2xl group-hover:scale-105 transition duration-500">
            <div class="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Sablon
            </div>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Sablon Kaos Berkualitas</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Layanan sablon dengan hasil warna tajam dan tahan lama, cocok untuk kaos komunitas, promosi, hingga distro.
          </p>
          <a href="/project-sveltekit/#" class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm transition">
            Pelajari Lebih Lanjut
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div class="mt-6">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition">
              Cek Harga
            </button>
          </div>
        </div>
  
        <!-- Card -->
        <div class="group bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
          <div class="relative overflow-hidden rounded-2xl mb-6">
            <img src="https://img.freepik.com/free-photo/drawing-fabric_1098-18012.jpg?w=740" alt="Custom Desain Baju" class="w-full h-60 object-cover rounded-2xl group-hover:scale-105 transition duration-500">
            <div class="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Custom
            </div>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Custom Desain Baju</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Bebaskan kreativitasmu! Bekerja sama dengan tim desain kami untuk menciptakan pakaian yang unik.
          </p>
          <a href="/project-sveltekit/#" class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm transition">
            Pelajari Lebih Lanjut
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div class="mt-6">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition">
              Konsultasi Desain
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
<!-- superiority Section -->
<section class="bg-white dark:bg-gray-900 py-16">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-32">
        <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Keunggulan Kami
            </h2>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Konveksi Glam Stitch hadir dengan layanan terbaik mulai dari desain hingga produksi, 
              memastikan setiap detail produk memenuhi ekspektasi Anda — cepat, berkualitas, dan fleksibel.
            </p>
          </div>          
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
  
        <!-- Asal Produksi -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
          <dt class="text-2xl font-semibold text-white">Buatan Sendiri</dt>
          <dd class="mt-2 text-white text-sm">
            Semua produk dikerjakan langsung di workshop kami oleh tim ahli, bukan outsourcing.
          </dd>
        </div>
  
        <!-- Bahan -->
        <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
          <dt class="text-2xl font-semibold text-white">Bahan Premium</dt>
          <dd class="mt-2 text-white text-sm">
            Kami gunakan kain terbaik seperti Cotton Combed, Polyester, dan Drill. Lembut dan awet.
          </dd>
        </div>
  
        <!-- Ukuran -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
          <dt class="text-2xl font-semibold text-white">Ukuran Lengkap</dt>
          <dd class="mt-2 text-white text-sm">
            Tersedia semua ukuran dari XS sampai XXL. Bisa juga custom sesuai permintaan.
          </dd>
        </div>
  
        <!-- Finishing -->
        <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
          <dt class="text-2xl font-semibold text-white">Finishing Rapi</dt>
          <dd class="mt-2 text-white text-sm">
            Setiap produk dijahit dengan rapi dan dicek ulang sebelum dikirim.
          </dd>
        </div>
  
        <!-- Paket -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
          <dt class="text-2xl font-semibold text-white">Semua Sudah Termasuk</dt>
          <dd class="mt-2 text-white text-sm">
            Mulai dari desain, potong, jahit, sampai packing—semuanya sudah termasuk.
          </dd>
        </div>
  
        <!-- Catatan -->
        <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
          <dt class="text-2xl font-semibold text-white">Catatan Penting</dt>
          <dd class="mt-2 text-white text-sm">
            Warna kain bisa sedikit beda karena layar & bahan. Tapi kami selalu jaga kualitas terbaik.
          </dd>
        </div>
      </div>
    </div>
  </section>
  
<!-- Jam Kerja -->
<section class="bg-white dark:bg-gray-900 py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-16">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Jam Kerja Kami
        </h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Kami siap membantu Anda sesuai dengan jam kerja yang terjadwal di bawah ini.
        </p>
      </div>
      
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Senin - Jumat -->
        <div class="flex justify-center items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <div class="text-center">
            <img src="https://media.istockphoto.com/id/1283403359/id/vektor/ikon-waktu-di-latar-belakang-transparan.jpg?s=612x612&w=0&k=20&c=foEv6n4528X0AkgcQZBX6TqWlZAOezpBEgoDRS-5LDo=" alt="Senin-Jumat" class="mx-auto mb-4 h-16 w-16 text-indigo-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Senin - Jumat</h3>
            <p class="text-lg text-blue-500 dark:text-blue-400">09:00 - 18:00</p>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Kami siap melayani Anda pada hari kerja, Senin hingga Jumat, dari pukul 09:00 hingga 18:00. Anda bisa menghubungi kami untuk berbagai kebutuhan, mulai dari konsultasi hingga pemesanan produk.
            </p>
          </div>
        </div>
        
        <!-- Sabtu -->
        <div class="flex justify-center items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <div class="text-center">
            <img src="https://media.istockphoto.com/id/1780573447/id/vektor/ikon-doodle-kartun-yang-digambar-tangan-tanda-pintu-terbuka-dengan-latar-belakang-putih.jpg?s=612x612&w=0&k=20&c=jn27-Nm3EE_J92m_vuFezE0jVOAIoHIrFErW_5DEi6I=" alt="Sabtu" class="mx-auto mb-4 h-16 w-16 text-indigo-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Sabtu</h3>
            <p class="text-lg text-blue-500 dark:text-blue-400">09:00 - 14:00</p>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Sabtu adalah hari kerja setengah hari, dari pukul 09:00 hingga 14:00. Meskipun waktunya terbatas, kami tetap siap melayani kebutuhan Anda dengan cepat.
            </p>
          </div>
        </div>
        
        <!-- Minggu -->
        <div class="flex justify-center items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <div class="text-center">
            <img src="https://img.freepik.com/premium-vector/closed-sign-icon-comic-style-accessibility-cartoon-vector-illustration-white-isolated-background-message-splash-effect-business-concept_157943-22063.jpg?ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="Minggu" class="mx-auto mb-4 h-16 w-16 text-indigo-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Minggu</h3>
            <p class="text-lg text-blue-500 dark:text-blue-400">Tutup</p>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Minggu adalah hari libur bagi kami. Kami akan kembali melayani Anda pada hari Senin dengan semangat baru!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
<!-- Layanan Konveksi -->
<section class="bg-gray-100 dark:bg-gray-900 py-24 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-16">
      <div class="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Layanan Konveksi dari Glam Stitch</h2>
        <p class="mt-6 text-lg text-gray-600 dark:text-gray-300">Glam Stitch siap memenuhi kebutuhan produksi pakaian Anda — dari desain custom, manajemen produksi skala besar, hingga kontrol kualitas yang ketat.</p>
      </div>
  
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
  
          <!-- Desain Custom -->
          <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img src="https://img.freepik.com/premium-photo/female-fashion-designer-cutting-fabric-workbench_1048944-5011017.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="Desain Custom Icon" class="w-full max-w-xs h-auto rounded-2xl object-cover shadow-xl mb-6 transition-transform duration-300 hover:scale-105">
            <dt class="text-2xl font-semibold text-gray-900 dark:text-white">Desain Pakaian Custom</dt>
            <dd class="mt-3 text-lg text-gray-600 dark:text-gray-300">
              Kami melayani desain pakaian sesuai kebutuhan Anda, baik untuk brand, komunitas, maupun keperluan pribadi.
              <p class="mt-4">
                <a href="/#" class="text-base font-semibold text-indigo-600 hover:underline">Selengkapnya <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
  
          <!-- Manajemen Produksi -->
          <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img src="https://img.freepik.com/free-photo/portrait-cheerful-good-looking-male-clothes-designer-with-dark-hair-fashionable-outfit-standing-workshop-posing-article-about-his-brand-artist-standing-his-comfy-studio_176420-11848.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="Produksi Icon" class="w-full max-w-xs h-auto rounded-2xl object-cover shadow-xl mb-6 transition-transform duration-300 hover:scale-105">
            <dt class="text-2xl font-semibold text-gray-900 dark:text-white">Manajemen Produksi</dt>
            <dd class="mt-3 text-lg text-gray-600 dark:text-gray-300">
              Glam Stitch memiliki tim produksi profesional untuk menangani pemesanan dalam jumlah besar secara efisien dan tepat waktu.
              <p class="mt-4">
                <a href="/#" class="text-base font-semibold text-indigo-600 hover:underline">Selengkapnya <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
  
          <!-- Quality Control -->
          <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img src="https://img.freepik.com/premium-photo/beautiful-young-woman-sewing-clothes-with-sewing-machine_255667-49856.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740" alt="Quality Check Icon" class="w-full max-w-xs h-auto rounded-2xl object-cover shadow-xl mb-6 transition-transform duration-300 hover:scale-105">
            <dt class="text-2xl font-semibold text-gray-900 dark:text-white">Pemeriksaan Kualitas</dt>
            <dd class="mt-3 text-lg text-gray-600 dark:text-gray-300">
              Setiap produk melalui tahapan quality control untuk memastikan kualitas maksimal sebelum dikirimkan kepada Anda.
              <p class="mt-4">
                <a href="/project-sveltekit/#" class="text-base font-semibold text-indigo-600 hover:underline">Selengkapnya <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
  
        </dl>
      </div>
    </div>
  </section>

  <!-- Incentives -->
  <section class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-16">
      <div class="rounded-2xl bg-gray-50 dark:bg-gray-900 px-6 py-16 sm:p-16 border dark:border-gray-600">
        <div class="mx-auto max-w-xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Konveksi Glam Stitch Mengutamakan Kepuasan Pelanggan
            </h2>
          </div>
  
          <div class="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
  
            <!-- Produksi Cepat -->
            <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:shrink-0">
                <div class="flow-root">
                  <div class="text-6xl mx-auto w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:animate-bounce">🚛</div>
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white">Produksi Cepat</h3>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Konveksi Glam Stitch menawarkan produksi pakaian yang cepat dan tepat waktu untuk memenuhi tenggat waktu Anda tanpa mengurangi kualitas.
                </p>
              </div>
            </div>
  
            <!-- Jaminan Kualitas -->
            <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:shrink-0">
                <div class="flow-root">
                  <div class="text-6xl mx-auto w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:animate-bounce">✅</div>
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white">Jaminan Kualitas</h3>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Setiap produk dari Konveksi Glam Stitch melalui proses kontrol kualitas yang ketat untuk memastikan kepuasan pelanggan dan daya tahan produk.
                </p>
              </div>
            </div>
  
            <!-- Pesanan Kustom -->
            <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:shrink-0">
                <div class="flow-root">
                  <div class="text-6xl mx-auto w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:animate-bounce">🧵</div>
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 class="text-sm font-medium text-gray-900 dark:text-white">Pesanan Kustom</h3>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Konveksi Glam Stitch menerima pesanan pakaian kustom dengan desain, bahan, dan spesifikasi ukuran Anda sendiri.
                </p>
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
  

  
