<script lang="ts">
	// Page content only - dark mode handled by layout
	// @ts-expect-error - vite-imagetools query parameters
	import logoGlint from '$lib/assets/image/logo glint.png?w=256&quality=90';
	import { base } from '$app/paths';
	// @ts-expect-error - vite-imagetools query parameters
	import ukuranjaket from '$lib/assets/image/ukuranjaket.png?w=800&format=webp&quality=85';
</script>

<svelte:head>
	<title>Sweater - Glam Stitch | Konveksi Sweater Fashion Berkualitas</title>
	<meta
		name="description"
		content="Pesan sweater fashion berkualitas dari Glam Stitch. Konveksi sweater dengan berbagai model, bahan premium, dan desain trendy untuk gaya kasual yang stylish."
	/>
	<meta
		name="keywords"
		content="sweater, konveksi sweater, sweater fashion, sweater casual, bahan premium, desain trendy, sweater hangat"
	/>
</svelte:head>

<!-- Hero Section -->
<div class="hero-section relative isolate overflow-hidden pt-6">
	<img
		loading="lazy"
		src="https://img.freepik.com/free-photo/fashionable-men-jacket-hanging-clothing-store-generated-by-ai_188544-40066.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
		alt="Sweater Glam Stitch"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-black/20"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 text-center sm:py-48 lg:py-32">
			<div class="hidden sm:mb-8 sm:flex sm:justify-center">
				<div
					class="relative rounded-full px-3 py-1 text-sm text-gray-200 ring-1 ring-white/10 hover:ring-white/20"
				>
					Eksplor pilihan sweater custom berkualitas dari Glam Stitch.
					<a href="/" class="font-semibold text-white">
						<span class="absolute inset-0" aria-hidden="true"></span>Beranda
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
			<h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
				Produk Sweater Glam Stitch
			</h1>
			<p class="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
				Temukan berbagai model sweater custom yang stylish, hangat, dan cocok untuk keperluan
				komunitas, kantor, hingga kebutuhan brand Anda.
			</p>
		</div>
	</div>
</div>

<!--promo-->
<div class="relative z-0 overflow-hidden bg-white dark:bg-gray-900">
	<!-- Callout Section -->
	<section
		aria-labelledby="sale-heading"
		class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center sm:px-6 lg:px-8"
	>
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<h2
				id="sale-heading"
				class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl dark:text-white"
			>
				Dapatkan Kualitas Terbaik untuk Sweater Glam Stitch Anda
			</h2>
			<p class="mx-auto mt-8 max-w-xl text-base text-gray-600 dark:text-gray-400">
				Sebagian besar produk kami dibuat dalam jumlah terbatas. Segera pesan Sweater Glam Stitch
				berkualitas tinggi sebelum habis!
			</p>
		</div>
	</section>
</div>

<!-- Products Section -->
<div class="bg-white dark:bg-gray-900">
	<main class="pt-10 sm:pt-8">
		<!-- Breadcrumb Navigation -->
		<nav aria-label="Breadcrumb">
			<ol
				role="list"
				class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-16 lg:max-w-7xl lg:px-16"
			></ol>
		</nav>

		<!-- Galeri Produk -->
		<div class="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
				<!-- Gambar utama - lebih besar -->
				<div class="lg:col-span-2">
					<div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
						<img
							loading="lazy"
							src="https://media.istockphoto.com/id/1366972069/id/foto/potret-pria-ceria-berkerudung-oranye.jpg?s=612x612&w=0&k=20&c=HjDQsGzANZ35dxYBk6VPK48ilGN4sXYPHA8Mwu0XRws="
							alt="Model mengenakan hoodie oranye."
							class="h-full w-full object-cover object-center"
						/>
					</div>
				</div>

				<!-- Gambar samping -->
				<div class="grid grid-cols-1 gap-6">
					<div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
						<img
							loading="lazy"
							src="https://i.pinimg.com/1200x/c0/3d/d1/c03dd1324047bf85a4c86e474ed57b0a.jpg"
							alt="Model mengenakan hoodie hitam."
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<div class="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
						<img
							loading="lazy"
							src="https://media.istockphoto.com/id/1438595781/id/foto/wanita-muda-berkacamata-dan-hoodie-hitam.jpg?s=612x612&w=0&k=20&c=yGm0UL4DqOxXym5Payfd1d4uSwigr-qgOCY3mHEMlrk="
							alt="Model mengenakan hoodie hitam."
							class="h-full w-full object-cover object-center"
						/>
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
						<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
							Sweater Premium
						</h1>
						<p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
							Sweater berkualitas tinggi dengan desain modern dan stylish
						</p>
					</div>

					<!-- Deskripsi -->
					<div class="space-y-6">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Deskripsi Produk</h3>
						<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
							Sweater Glam Stitch dirancang khusus untuk memberikan kehangatan dan kenyamanan dengan
							desain yang stylish dan modern. Terbuat dari bahan berkualitas tinggi yang lembut dan
							hangat, sweater kami cocok untuk aktivitas sehari-hari, hangout santai, atau sebagai
							pelengkap fashion statement Anda. Dengan teknologi breathable dan fit yang ergonomis,
							sweater ini memberikan kenyamanan maksimal dalam berbagai kesempatan.
						</p>
					</div>

					<!-- Fitur Unggulan -->
					<div class="space-y-4">
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Fitur Unggulan</h3>
						<div class="grid grid-cols-1 gap-4">
							<div class="flex items-start space-x-3">
								<div class="flex-shrink-0">
									<svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="text-sm text-gray-700 dark:text-gray-300">
									Bahan premium yang lembut dan hangat
								</p>
							</div>
							<div class="flex items-start space-x-3">
								<div class="flex-shrink-0">
									<svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="text-sm text-gray-700 dark:text-gray-300">
									Desain modern dengan potongan yang pas
								</p>
							</div>
							<div class="flex items-start space-x-3">
								<div class="flex-shrink-0">
									<svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="text-sm text-gray-700 dark:text-gray-300">
									Jahitan berkualitas tinggi dan tahan lama
								</p>
							</div>
							<div class="flex items-start space-x-3">
								<div class="flex-shrink-0">
									<svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="text-sm text-gray-700 dark:text-gray-300">
									Berbagai pilihan warna yang trendy
								</p>
							</div>
							<div class="flex items-start space-x-3">
								<div class="flex-shrink-0">
									<svg class="h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<p class="text-sm text-gray-700 dark:text-gray-300">
									Cocok untuk berbagai kesempatan dan gaya
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Detail Produk -->
				<div class="space-y-8">
					<div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
						<h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Detail Produk</h3>
						<div class="space-y-4">
							<div class="flex items-center justify-between">
								<span class="text-sm font-medium text-gray-600 dark:text-white">Bahan</span>
								<span class="text-sm text-gray-900 dark:text-white"
									>Fleece Premium / Cotton Fleece</span
								>
							</div>

							<div class="flex items-center justify-between">
								<span class="text-sm font-medium text-gray-600 dark:text-gray-400">Ukuran</span>
								<span class="text-sm text-gray-900 dark:text-white"
									>XS, S, M, L, XL, XXL, XXXL, XXXXL</span
								>
							</div>

							<div class="flex items-center justify-between">
								<span class="text-sm font-medium text-gray-600 dark:text-white">Warna</span>
								<span class="text-sm text-gray-900 dark:text-white">10+ Pilihan Warna</span>
							</div>
						</div>
					</div>

					<!-- CTA Button -->
					<div class="space-y-4">
						<a
							href="/contact-us"
							class="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-indigo-700"
						>
							<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							Pesan Sekarang
						</a>
						<a
							href="/product"
							class="flex w-full items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-600 transition-colors duration-200 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
						>
							Lihat Produk Lainnya
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- Produk Terkait -->
		<section aria-labelledby="related-products-heading" class="bg-white dark:bg-gray-900">
			<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2
					id="related-products-heading"
					class="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					Contoh Produk
				</h2>
				<p class="mt-2 text-center text-lg text-gray-400 dark:text-gray-200">
					Lihat produk Glam Stitch lainnya yang bisa kamu sukai. Tersedia berbagai pilihan stylish
					untuk setiap kesempatan.
				</p>
				<div
					class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
				>
					<!-- Hoodie/Sweater 1 -->
					<div class="group relative">
						<img
							loading="lazy"
							src="https://i.pinimg.com/1200x/69/60/05/696005d91605b4099e04daf51193b7fe.jpg"
							alt="Hoodie/Sweater Glam Stitch warna putih."
							class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 dark:bg-gray-800"
						/>
						<div class="mt-4 flex justify-between">
							<div>
								<h3 class="text-sm text-gray-700 dark:text-gray-200">
									<a href="/jacket"
										><span aria-hidden="true" class="absolute inset-0"></span>Hitam</a
									>
								</h3>
							</div>
						</div>
					</div>

					<!-- Hoodie/Sweater 2 -->
					<div class="group relative">
						<img
							loading="lazy"
							src="https://i.pinimg.com/1200x/6a/58/0c/6a580cc3c6800bdc4cb02ba38e83e20d.jpg"
							alt="Hoodie/Sweater Glam Stitch warna hitam."
							class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 dark:bg-gray-800"
						/>
						<div class="mt-4 flex justify-between">
							<div>
								<h3 class="text-sm text-gray-700 dark:text-gray-200">
									<a href="/jacket"
										><span aria-hidden="true" class="absolute inset-0"></span>Biru Navy</a
									>
								</h3>
							</div>
						</div>
					</div>

					<!-- Hoodie/Sweater 3 -->
					<div class="group relative">
						<img
							loading="lazy"
							src="https://i.pinimg.com/1200x/10/8c/ac/108cac2bb1f4e33c37c4e553f4b45547.jpg"
							alt="Hoodie/Sweater Glam Stitch warna coklat."
							class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 dark:bg-gray-800"
						/>
						<div class="mt-4 flex justify-between">
							<div>
								<h3 class="text-sm text-gray-700 dark:text-gray-200">
									<a href="/jacket"><span aria-hidden="true" class="absolute inset-0"></span>Pink</a
									>
								</h3>
							</div>
						</div>
					</div>

					<!-- Hoodie/Sweater 4 -->
					<div class="group relative">
						<img
							loading="lazy"
							src="https://i.pinimg.com/1200x/62/09/01/620901c10de6d2ff03fb5abbad660e66.jpg"
							alt="Hoodie/Sweater Glam Stitch warna biru."
							class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 dark:bg-gray-800"
						/>
						<div class="mt-4 flex justify-between">
							<div>
								<h3 class="text-sm text-gray-700 dark:text-gray-200">
									<a href="/jacket"
										><span aria-hidden="true" class="absolute inset-0"></span>Biru Awan</a
									>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Size Chart Section -->
		<section aria-labelledby="size-chart-heading" class="bg-white py-16 dark:bg-gray-900">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mb-12 text-center">
					<h2
						id="size-chart-heading"
						class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
					>
						Panduan Ukuran Sweater/Hoodie
					</h2>
					<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
						Gunakan panduan ukuran berikut untuk memastikan Anda mendapatkan sweater/hoodie dengan
						ukuran yang tepat dan nyaman untuk gaya kasual yang stylish.
					</p>
				</div>

				<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<!-- Size Chart Table -->
					<div class="rounded-xl bg-gray-50 p-8 dark:bg-gray-800">
						<h3 class="mb-6 text-center text-xl font-semibold text-gray-900 dark:text-white">
							Tabel Ukuran Sweater/Hoodie Glam Stitch
						</h3>
						<div class="overflow-x-auto">
							<table class="w-full text-sm">
								<thead>
									<tr class="border-b border-gray-200 dark:border-gray-700">
										<th class="px-2 py-3 text-left font-semibold text-gray-900 dark:text-white"
											>Ukuran</th
										>
										<th class="px-2 py-3 text-center font-semibold text-gray-900 dark:text-white"
											>Panjang (cm)</th
										>
										<th class="px-2 py-3 text-center font-semibold text-gray-900 dark:text-white"
											>Lebar (cm)</th
										>
										<th class="px-2 py-3 text-center font-semibold text-gray-900 dark:text-white"
											>Lingkar Dada (cm)</th
										>
										<th class="px-2 py-3 text-center font-semibold text-gray-900 dark:text-white"
											>Panjang Tangan (cm)</th
										>
									</tr>
								</thead>
								<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
									<tr>
										<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XS</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">68</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">48</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">94</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">56</td>
									</tr>
									<tr>
										<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">S</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">70</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">51</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">99</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">58</td>
									</tr>
									<tr>
										<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">M</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">72</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">54</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">104</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">60</td>
									</tr>
									<tr>
										<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">L</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">74</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">57</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">109</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">62</td>
									</tr>
									<tr>
										<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XL</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">76</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">60</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">114</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">64</td>
									</tr>
									<tr>
										<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XXL</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">78</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">63</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">119</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">66</td>
									</tr>
									<tr>
										<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XXXL</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">80</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">66</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">124</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">68</td>
									</tr>
									<tr>
										<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XXXXL</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">82</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">69</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">129</td>
										<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">70</td>
									</tr>
								</tbody>
							</table>
						</div>

						<!-- Tips -->
						<div class="mt-6 rounded-lg bg-gray-800 p-4">
							<div class="flex items-start">
								<svg
									class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-blue-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<div>
									<h4 class="mb-1 text-sm font-semibold text-blue-100">
										Tips Memilih Ukuran Sweater/Hoodie
									</h4>
									<p class="text-sm text-blue-200">
										Sweater dan hoodie dirancang dengan potongan yang lebih longgar untuk gaya
										kasual yang nyaman. Pertimbangkan untuk memilih ukuran yang sesuai untuk lapisan
										pakaian di bawahnya.
									</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Size Chart Image -->
					<div class="space-y-6">
						<div class="w-full rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
							<img
								loading="lazy"
								src={ukuranjaket}
								alt="Panduan ukuran sweater/hoodie - cara mengukur sweater dengan benar"
								class="h-auto w-full object-contain transition-transform duration-300 hover:scale-105"
							/>
						</div>

						<!-- How to Measure Guide -->
						<div class="rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
							<h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
								Cara Mengukur Sweater/Hoodie
							</h3>
							<div class="space-y-4">
								<div class="flex items-start space-x-3">
									<div
										class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900"
									>
										<span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">1</span
										>
									</div>
									<div>
										<h4 class="text-sm font-medium text-gray-900 dark:text-white">
											Panjang Sweater
										</h4>
										<p class="text-sm text-gray-600 dark:text-gray-400">
											Ukur dari bahu hingga bagian bawah sweater
										</p>
									</div>
								</div>
								<div class="flex items-start space-x-3">
									<div
										class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900"
									>
										<span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">2</span
										>
									</div>
									<div>
										<h4 class="text-sm font-medium text-gray-900 dark:text-white">Lebar Sweater</h4>
										<p class="text-sm text-gray-600 dark:text-gray-400">
											Ukur dari ketiak kiri hingga ketiak kanan
										</p>
									</div>
								</div>
								<div class="flex items-start space-x-3">
									<div
										class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900"
									>
										<span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">3</span
										>
									</div>
									<div>
										<h4 class="text-sm font-medium text-gray-900 dark:text-white">Lingkar Dada</h4>
										<p class="text-sm text-gray-600 dark:text-gray-400">
											Ukur keliling dada pada bagian terlebar
										</p>
									</div>
								</div>
								<div class="flex items-start space-x-3">
									<div
										class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900"
									>
										<span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400">4</span
										>
									</div>
									<div>
										<h4 class="text-sm font-medium text-gray-900 dark:text-white">
											Panjang Tangan
										</h4>
										<p class="text-sm text-gray-600 dark:text-gray-400">
											Ukur dari bahu hingga ujung lengan baju
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- CTA Section -->
				<div class="mt-12 text-center">
					<p class="mb-6 text-lg text-gray-600 dark:text-gray-400">
						Masih bingung dengan ukuran? Tim customer service kami siap membantu Anda!
					</p>
					<a
						href="/contact-us"
						class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-indigo-700"
					>
						<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
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
	<div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8">
		<div class="animate__animated animate__fadeInUp xl:grid xl:grid-cols-3 xl:gap-8">
			<!-- Logo & Description -->
			<div class="space-y-6">
				<img
					loading="lazy"
					class="animate__animated animate__zoomIn animate__delay-1s h-24 w-24"
					src={logoGlint}
					alt="Glam Stitch Logo"
				/>
				<div class="flex space-x-6">
					<!-- Facebook -->
					<a href="/" class="text-gray-500 transition duration-300 hover:text-gray-400">
						<span class="sr-only">Facebook</span>
						<svg
							class="animate__animated animate__fadeIn animate__delay-2s h-7 w-7"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M22 12a10 10 0 10-11.6 9.87v-6.99H8.1v-2.88h2.3V9.41c0-2.28 1.35-3.55 3.42-3.55.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.88h-2.1v6.99A10 10 0 0022 12z"
							/>
						</svg>
					</a>

					<!-- Instagram -->
					<a href="/" class="text-gray-500 transition duration-300 hover:text-gray-400">
						<span class="sr-only">Instagram</span>
						<svg
							class="animate__animated animate__fadeIn animate__delay-2_5s h-7 w-7"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1 1 0 100 2 1 1 0 000-2z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Navigation Links -->
			<div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
				<!-- Navigasi -->
				<div>
					<h3 class="text-lg leading-6 font-semibold text-white">Navigasi</h3>
					<ul class="mt-6 space-y-4">
						<li>
							<a
								href="/"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Beranda</a
							>
						</li>
						<li>
							<a
								href="/product"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Produk</a
							>
						</li>
						<li>
							<a
								href="{base}/404.html"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Layanan</a
							>
						</li>
					</ul>
				</div>

				<!-- Products -->
				<div>
					<h3 class="text-lg leading-6 font-semibold text-white">Produk</h3>
					<ul class="mt-6 space-y-4">
						<li>
							<a
								href="/tshirt"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400">Kaos</a
							>
						</li>
						<li>
							<a
								href="/polo"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Kaos Polo</a
							>
						</li>
						<li>
							<a
								href="/jersey"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Jersey</a
							>
						</li>
						<li>
							<a
								href="/jacket"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Hoodie/Sweater</a
							>
						</li>
						<li>
							<a
								href="/shirts"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Kemeja</a
							>
						</li>
					</ul>
				</div>

				<!-- Discover Us -->
				<div>
					<h3 class="text-lg leading-6 font-semibold text-white">Jelajahi</h3>
					<ul class="mt-6 space-y-4">
						<li>
							<a
								href="/about-us"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Tentang Kami</a
							>
						</li>
						<li>
							<a
								href="/contact-us"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Hubungi Kami</a
							>
						</li>
						<li>
							<a
								href="/store-location"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Lokasi Toko</a
							>
						</li>
						<li>
							<a
								href="/gallery"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Tim Kami</a
							>
						</li>
						<li>
							<a
								href="{base}/404.html"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Pelanggan Kami</a
							>
						</li>
						<li>
							<a
								href="/supplier-kami"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Supplier Kami</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Footer Bottom -->
		<div
			class="animate__animated animate__fadeInUp animate__delay-3s mt-16 border-t border-white/10 pt-8 text-center"
		>
			<p class="text-sm leading-5 text-gray-400">&copy; 2025 Glam Stitch. All rights reserved.</p>
		</div>
	</div>
</footer>

<style type="text/tailwindcss"></style>
