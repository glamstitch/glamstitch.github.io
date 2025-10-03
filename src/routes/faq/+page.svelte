<script lang="ts">
  import logoGlint from '$lib/assets/image/logo glint.png';
  import { onMount } from 'svelte';
  import { initializeTheme, forceTheme, getInitialTheme } from '$lib/utils/theme';
  
  // Ensure theme is applied on page load
  onMount(() => {
    const isDark = getInitialTheme();
    forceTheme(isDark);
    
    // Listen for theme changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const isDark = e.newValue === 'dark';
        forceTheme(isDark);
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  });
  
  const faqData = [
    {
      id: 1,
      question: "Berapa minimum order untuk produksi kaos?",
      answer: "Minimum order untuk kaos adalah 50 pcs. Namun, untuk desain khusus atau bahan premium, kami dapat mendiskusikan minimum order yang lebih fleksibel sesuai kebutuhan Anda.",
      category: "Order"
    },
    {
      id: 2,
      question: "Berapa lama waktu produksi untuk pesanan?",
      answer: "Waktu produksi standar adalah 7-14 hari kerja tergantung jumlah dan kompleksitas pesanan. Untuk pesanan urgent, kami menyediakan layanan express dengan tambahan biaya.",
      category: "Produksi"
    },
    {
      id: 3,
      question: "Apakah bisa menggunakan desain sendiri?",
      answer: "Tentu saja! Kami menerima desain dari klien dalam format AI, PSD, atau PDF dengan resolusi tinggi. Tim desain kami juga siap membantu menyempurnakan desain Anda.",
      category: "Desain"
    },
    {
      id: 4,
      question: "Apa saja metode pembayaran yang tersedia?",
      answer: "Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan untuk klien korporat tersedia sistem kredit dengan syarat dan ketentuan tertentu.",
      category: "Pembayaran"
    },
    {
      id: 5,
      question: "Apakah ada garansi untuk produk yang rusak?",
      answer: "Ya, kami memberikan garansi 30 hari untuk kerusakan produksi seperti jahitan lepas atau sablon yang mudah luntur. Garansi tidak berlaku untuk kerusakan akibat pemakaian normal.",
      category: "Garansi"
    },
    {
      id: 6,
      question: "Bisakah melihat sample produk sebelum produksi massal?",
      answer: "Tentu! Kami menyediakan layanan sample dengan biaya yang akan dipotong dari total pesanan jika Anda melanjutkan ke produksi massal.",
      category: "Sample"
    },
    {
      id: 7,
      question: "Apakah melayani pengiriman ke luar kota?",
      answer: "Ya, kami melayani pengiriman ke seluruh Indonesia melalui berbagai ekspedisi terpercaya seperti JNE, J&T, SiCepat, dan lainnya. Biaya pengiriman ditanggung pembeli.",
      category: "Pengiriman"
    },
    {
      id: 8,
      question: "Bagaimana cara menghitung harga pesanan?",
      answer: "Harga dihitung berdasarkan jenis bahan, jumlah pesanan, kompleksitas desain, dan teknik sablon/bordir. Semakin banyak jumlah pesanan, semakin murah harga per pcs.",
      category: "Harga"
    }
  ];
  
  const categories = ["Semua", "Order", "Produksi", "Desain", "Pembayaran", "Garansi", "Sample", "Pengiriman", "Harga"];
  
  let selectedCategory = "Semua";
  let openFaq: number | null = null;
  
  $: filteredFaq = selectedCategory === "Semua" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);
    
  function toggleFaq(id: number) {
    openFaq = openFaq === id ? null : id;
  }
</script>

<svelte:head>
  <title>FAQ - Pertanyaan yang Sering Diajukan | Glam Stitch</title>
  <meta name="description" content="Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan konveksi Glam Stitch. Mulai dari minimum order hingga garansi produk." />
</svelte:head>

<!-- Hero Section -->
<section class="relative isolate overflow-hidden pt-6">
  <img loading="lazy" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
  <div class="absolute inset-0 -z-10 bg-black/10"></div>

  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-40 sm:py-56 lg:py-48 text-center">
      <h1 class="text-4xl sm:text-6xl font-bold text-white mb-6">
        Pertanyaan yang Sering Diajukan
      </h1>
      <p class="text-lg text-gray-300 sm:text-xl max-w-3xl mx-auto">
        Temukan jawaban untuk pertanyaan umum tentang layanan konveksi kami. Tidak menemukan jawaban yang Anda cari? Hubungi kami langsung!
      </p>
    </div>
  </div>
</section>

<!-- Category Filter -->
<section class="bg-white dark:bg-gray-900 py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="flex flex-wrap justify-center gap-3 mb-8">
      {#each categories as category}
        <button
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 {
            selectedCategory === category
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'
          }"
          on:click={() => selectedCategory = category}
        >
          {category}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="bg-white dark:bg-gray-900 pb-24">
  <div class="mx-auto max-w-4xl px-6 lg:px-8">
    <div class="space-y-4">
      {#each filteredFaq as faq (faq.id)}
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <button
            class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            on:click={() => toggleFaq(faq.id)}
          >
            <div class="flex items-center gap-4">
              <span class="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-sm font-semibold">
                {faq.id}
              </span>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                {faq.question}
              </h3>
            </div>
            <svg 
              class="w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 {openFaq === faq.id ? 'rotate-180' : ''}"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {#if openFaq === faq.id}
            <div class="px-6 pb-5 animate-in slide-in-from-top-2 duration-200">
              <div class="pl-12">
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
                <span class="inline-block mt-3 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full">
                  {faq.category}
                </span>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Contact CTA -->
<section class="bg-white dark:bg-gray-900 py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
      Masih Ada Pertanyaan?
    </h2>
    <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
      Tim customer service kami siap membantu Anda dengan pertanyaan lebih spesifik tentang kebutuhan konveksi Anda.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="/contact-us" 
        class="inline-flex items-center px-8 py-4 bg-white text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Hubungi Kami
        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank"
        class="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        WhatsApp
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 dark:bg-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      
      <!-- Logo & Description -->
      <div class="space-y-6">
        <img loading="lazy" class="h-24 w-24" src={logoGlint} alt="Glam Stitch Logo">
        <div class="flex space-x-6">
          
          <!-- Facebook -->
          <a href="/" class="text-gray-500 hover:text-gray-400 transition duration-300">
            <span class="sr-only">Facebook</span>
            <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.6 9.87v-6.99H8.1v-2.88h2.3V9.41c0-2.28 1.35-3.55 3.42-3.55.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.88h-2.1v6.99A10 10 0 0022 12z"/>
            </svg>
          </a>
          
          <!-- Instagram -->
          <a href="/" class="text-gray-500 hover:text-gray-400 transition duration-300">
            <span class="sr-only">Instagram</span>
            <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
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
    <div class="mt-16 border-t border-white/10 pt-8 text-center">
      <p class="text-sm leading-5 text-gray-400 dark:text-gray-900">&copy; 2025 Glam Stitch. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  @keyframes slide-in-from-top-2 {
    from {
      transform: translateY(-8px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .animate-in {
    animation-fill-mode: both;
  }
  
  .slide-in-from-top-2 {
    animation: slide-in-from-top-2 0.2s ease-out;
  }
</style>
