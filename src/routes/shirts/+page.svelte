<script lang="ts">
	// Page content only - dark mode handled by layout
	// @ts-expect-error - vite-imagetools query parameters
	import kemejaImg from '$lib/assets/image/kemeja.jpg?w=600&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import logoGlint from '$lib/assets/image/logo glint.png?w=256&quality=90';
	// @ts-expect-error - vite-imagetools query parameters
	import ukurankemeja from '$lib/assets/image/ukurankemeja.png?w=800&format=webp&quality=85';
	// @ts-expect-error - vite-imagetools query parameters
	import kemeja3 from '$lib/assets/image/kemeja3.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import kemeja4 from '$lib/assets/image/kemeja4.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import kemeja5 from '$lib/assets/image/kemeja5.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import kemeja6 from '$lib/assets/image/kemeja6.jpg?w=800&format=webp&quality=80';
	import { base } from '$app/paths';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import AnimatedCard from '$lib/components/AnimatedCard.svelte';
</script>

<svelte:head>
	<title>Kemeja - Glam Stitch | Konveksi Kemeja Formal & Casual</title>
	<meta
		name="description"
		content="Pesan kemeja formal dan casual berkualitas tinggi dari Glam Stitch. Konveksi kemeja dengan bahan premium, jahitan rapi, dan desain profesional."
	/>
	<meta
		name="keywords"
		content="kemeja, konveksi kemeja, kemeja formal, kemeja casual, bahan premium, jahitan rapi"
	/>
</svelte:head>

<div class="hero-section relative isolate overflow-hidden pt-6">
	<img
		loading="lazy"
		src="https://img.freepik.com/free-photo/dressmaker-is-measuring-fabric-with-meter-his-studio-man-is-looking-camera-he-is-wearing-denim-cap-glasses-there-are-lot-sewing-tools-background_613910-21802.jpg"
		alt="Dressmaker working in a studio"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 -z-10 bg-black/20"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
			<div class="hidden sm:mb-8 sm:flex sm:justify-center">
				<div
					class="relative rounded-full px-3 py-1 text-sm text-gray-200 ring-1 ring-white/10 transition hover:ring-white/20 dark:ring-gray-600 dark:hover:ring-gray-500"
				>
					Temukan koleksi kemeja eksklusif Glam Stitch untuk tampilan profesional dan stylish.
					<a
						href="/"
						class="font-semibold text-white hover:underline dark:text-gray-300 dark:hover:text-indigo-400"
					>
						<span class="absolute inset-0" aria-hidden="true"></span>Beranda
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
			<div class="text-center">
				<h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl dark:text-white">
					Produk Kemeja Glam Stitch
				</h1>
				<p class="mt-8 text-lg font-medium text-gray-200 sm:text-xl dark:text-gray-300">
					Kemeja custom kami cocok untuk keperluan kantor, seragam usaha, atau acara formal dengan
					sentuhan elegan dan bahan berkualitas tinggi.
				</p>
			</div>
		</div>
	</div>
</div>

<div class="relative z-0 overflow-hidden bg-white dark:bg-gray-900">
	<section
		aria-labelledby="sale-heading"
		class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center sm:px-6 lg:px-8"
	>
		<ScrollReveal animation="fade-up">
			<div class="mx-auto max-w-2xl lg:max-w-none">
				<h2
					id="sale-heading"
					class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl dark:text-white"
				>
					Dapatkan Kualitas Terbaik untuk Kemeja Glam Stitch Anda
				</h2>
				<p class="mx-auto mt-8 max-w-xl text-base text-gray-600 dark:text-gray-300">
					Sebagian besar produk kami dibuat dalam jumlah terbatas. Segera pesan Kemeja Glam Stitch
					berkualitas tinggi sebelum habis!
				</p>
			</div>
		</ScrollReveal>
	</section>
</div>

<div class="bg-white dark:bg-gray-900">
	<main class="pt-10 sm:pt-8">
		<nav aria-label="Breadcrumb">
			<ol
				role="list"
				class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-16 lg:max-w-7xl lg:px-16"
			></ol>
		</nav>

		<div
			class="mx-auto mt-6 max-w-2xl space-y-4 px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:space-y-0 lg:gap-x-8 lg:px-16"
		>
			<ScrollReveal animation="fade-right" delay={200} class="">
				<AnimatedCard hoverEffect="zoom">
					<div class="hidden lg:block">
						<img
							loading="lazy"
							src="https://img.freepik.com/premium-photo/this-model-look-pose-you-graphic-design_891936-2635.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
							alt="Beberapa kaos warna abu, putih, dan hitam yang diletakkan secara datar."
							class="mx-auto aspect-[3/4] w-full max-w-sm rounded-lg object-cover"
						/>
					</div>
				</AnimatedCard>
			</ScrollReveal>

			<ScrollReveal animation="fade-right" delay={200} class="">
				<AnimatedCard hoverEffect="zoom">
					<div class="grid grid-cols-1 gap-y-4">
						<img
							loading="lazy"
							src="https://media.istockphoto.com/id/162368681/id/foto/potret-fashion-pemuda-berbaju-hitam.jpg?s=612x612&w=0&k=20&c=LZY5r_8zNI0IONWIMUzVQMInfxhqBgbk__1OfIq-ni0="
							alt="Model mengenakan kaos hitam polos."
							class="mx-auto aspect-[3/2] w-full max-w-sm rounded-lg object-cover"
						/>
						<img
							loading="lazy"
							src="https://img.freepik.com/free-photo/shirt_1203-8194.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
							alt="Model mengenakan kaos abu polos."
							class="mx-auto aspect-[3/2] w-full max-w-sm rounded-lg object-cover"
						/>
					</div>
				</AnimatedCard>
			</ScrollReveal>

			<ScrollReveal animation="fade-right" delay={200} class="">
				<AnimatedCard hoverEffect="zoom">
					<div>
						<img
							loading="lazy"
							src="https://img.freepik.com/premium-photo/young-handsome-man-standing_251136-20866.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
							alt="Model mengenakan kaos putih polos."
							class="mx-auto aspect-[4/5] w-full max-w-sm rounded-lg object-cover lg:aspect-[3/4]"
						/>
					</div>
				</AnimatedCard>
			</ScrollReveal>
		</div>

		<div class="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<ScrollReveal animation="fade-right" delay={200}>
					<div class="space-y-8">
						<div>
							<h1
								class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
							>
								Kemeja Premium
							</h1>
							<p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
								Kemeja berkualitas tinggi dengan desain klasik dan elegan
							</p>
						</div>

						<div class="space-y-6">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Deskripsi Produk</h3>
							<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
								Kemeja Glam Stitch hadir dengan desain klasik yang timeless dan elegan. Terbuat dari
								bahan berkualitas tinggi dengan potongan yang sempurna, cocok untuk keperluan
								formal, semi-formal, maupun casual. Didesain untuk memberikan kenyamanan maksimal
								sepanjang hari.
							</p>
						</div>

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
										Bahan katun premium yang lembut dan breathable
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
										Potongan klasik yang timeless dan elegan
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
										Cocok untuk formal, semi-formal, dan casual
									</p>
								</div>
							</div>
						</div>
					</div>
				</ScrollReveal>

				<ScrollReveal animation="fade-left" delay={400}>
					<div class="space-y-8">
						<AnimatedCard hoverEffect="lift">
							<div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
								<h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
									Detail Produk
								</h3>
								<div class="space-y-4">
									<div class="flex justify-between">
										<span class="text-sm font-medium text-gray-600 dark:text-gray-400">Bahan</span>
										<span class="text-sm text-gray-900 dark:text-white">100% Cotton Premium</span>
									</div>

									<div class="flex justify-between">
										<span class="text-sm font-medium text-gray-600 dark:text-gray-400">Ukuran</span>
										<span class="text-sm text-gray-900 dark:text-white"
											>XS, S, M, L, XL, XXL, XXXL, XXXXL</span
										>
									</div>
									<div class="flex justify-between">
										<span class="text-sm font-medium text-gray-600 dark:text-gray-400">Warna</span>
										<span class="text-sm text-gray-900 dark:text-white">10+ Pilihan Warna</span>
									</div>
								</div>
							</div>
						</AnimatedCard>

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
								class="flex w-full items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-600 transition-colors duration-200 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
							>
								Lihat Produk Lainnya
							</a>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</div>

		<section aria-labelledby="related-products-heading" class="bg-white dark:bg-gray-900">
			<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
				<ScrollReveal animation="fade-up">
					<h2
						id="related-products-heading"
						class="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
					>
						Produk Terkait
					</h2>
				</ScrollReveal>
				<p class="mt-2 text-center text-lg text-gray-600 dark:text-gray-400">
					Lihat produk Glam Stitch lainnya yang bisa kamu sukai. Tersedia berbagai pilihan stylish
					untuk setiap kesempatan.
				</p>
				<div
					class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
				>
					<div class="group relative">
						<img
							loading="lazy"
							src={kemeja3}
							alt="Kemeja Glam Stitch warna biru."
							class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 dark:bg-gray-800"
						/>
						<div class="mt-4 flex justify-between">
							<div>
								<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Hitam</p>
							</div>
						</div>
					</div>

					<div class="group relative">
						<img
							loading="lazy"
							src={kemeja4}
							alt="Kemeja Glam Stitch warna putih."
							class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 dark:bg-gray-800"
						/>
						<div class="mt-4 flex justify-between">
							<div>
								<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Biru</p>
							</div>
						</div>
					</div>

					<div class="group relative">
						<img
							loading="lazy"
							src={kemeja5}
							alt="Kemeja Glam Stitch warna hitam."
							class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 dark:bg-gray-800"
						/>
						<div class="mt-4 flex justify-between">
							<div>
								<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Putih</p>
							</div>
						</div>
					</div>

					<div class="group relative">
						<img
							loading="lazy"
							src={kemeja6}
							alt="Kemeja Glam Stitch warna abu-abu."
							class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 dark:bg-gray-800"
						/>
						<div class="mt-4 flex justify-between">
							<div>
								<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Hijau</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section aria-labelledby="size-chart-heading" class="bg-white py-16 dark:bg-gray-900">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ScrollReveal animation="fade-up">
					<div class="mb-12 text-center">
						<h2
							id="size-chart-heading"
							class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
						>
							Panduan Ukuran Kemeja
						</h2>
						<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
							Gunakan panduan ukuran berikut untuk memastikan Anda mendapatkan kemeja dengan ukuran
							yang tepat dan nyaman untuk tampilan profesional yang sempurna.
						</p>
					</div>
				</ScrollReveal>

				<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					<ScrollReveal animation="fade-right" delay={200}>
						<AnimatedCard hoverEffect="lift">
							<div class="rounded-xl bg-gray-50 p-8 dark:bg-gray-800">
								<h3 class="mb-6 text-center text-xl font-semibold text-gray-900 dark:text-white">
									Tabel Ukuran Kemeja Glam Stitch
								</h3>
								<div class="overflow-x-auto">
									<table class="w-full text-sm">
										<thead>
											<tr class="border-b border-gray-200 dark:border-gray-700">
												<th class="px-2 py-3 text-left font-semibold text-gray-900 dark:text-white"
													>Ukuran</th
												>
												<th
													class="px-2 py-3 text-center font-semibold text-gray-900 dark:text-white"
													>Panjang (cm)</th
												>
												<th
													class="px-2 py-3 text-center font-semibold text-gray-900 dark:text-white"
													>Lebar (cm)</th
												>
												<th
													class="px-2 py-3 text-center font-semibold text-gray-900 dark:text-white"
													>Lingkar Dada (cm)</th
												>
												<th
													class="px-2 py-3 text-center font-semibold text-gray-900 dark:text-white"
													>Panjang Tangan (cm)</th
												>
											</tr>
										</thead>
										<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
											<tr>
												<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XS</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">69</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">49</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">96</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">57</td>
											</tr>
											<tr>
												<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">S</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">71</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">52</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">101</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">59</td>
											</tr>
											<tr>
												<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">M</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">73</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">55</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">106</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">61</td>
											</tr>
											<tr>
												<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">L</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">75</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">58</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">111</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">63</td>
											</tr>
											<tr>
												<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XL</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">77</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">61</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">116</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">65</td>
											</tr>
											<tr>
												<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XXL</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">79</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">64</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">121</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">67</td>
											</tr>
											<tr>
												<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XXXL</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">81</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">67</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">126</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">69</td>
											</tr>
											<tr>
												<td class="px-2 py-3 font-medium text-gray-900 dark:text-white">XXXXL</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">83</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">70</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">131</td>
												<td class="px-2 py-3 text-center text-gray-700 dark:text-gray-300">71</td>
											</tr>
										</tbody>
									</table>
								</div>

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
												Tips Memilih Ukuran Kemeja
											</h4>
											<p class="text-sm text-blue-200">
												Kemeja dirancang dengan potongan yang lebih formal dan pas. Pertimbangkan
												untuk memilih ukuran yang sesuai dengan aktivitas dan gaya yang diinginkan.
											</p>
										</div>
									</div>
								</div>
							</div>
						</AnimatedCard>
					</ScrollReveal>

					<ScrollReveal animation="fade-left" delay={400}>
						<div class="space-y-6">
							<AnimatedCard hoverEffect="zoom">
								<div class="w-full rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
									<img
										loading="lazy"
										src={ukurankemeja}
										alt="Panduan ukuran kemeja - cara mengukur kemeja dengan benar"
										class="h-auto w-full object-contain transition-transform duration-300 hover:scale-105"
									/>
								</div>
							</AnimatedCard>

							<AnimatedCard hoverEffect="lift">
								<div class="rounded-xl bg-gray-50 p-6 dark:bg-gray-800">
									<h3 class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
										Cara Mengukur Kemeja
									</h3>
									<div class="space-y-4">
										<div class="flex items-start space-x-3">
											<div
												class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900"
											>
												<span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400"
													>1</span
												>
											</div>
											<div>
												<h4 class="text-sm font-medium text-gray-900 dark:text-white">
													Panjang Kemeja
												</h4>
												<p class="text-sm text-gray-600 dark:text-gray-400">
													Ukur dari bahu hingga bagian bawah kemeja
												</p>
											</div>
										</div>
										<div class="flex items-start space-x-3">
											<div
												class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900"
											>
												<span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400"
													>2</span
												>
											</div>
											<div>
												<h4 class="text-sm font-medium text-gray-900 dark:text-white">
													Lebar Kemeja
												</h4>
												<p class="text-sm text-gray-600 dark:text-gray-400">
													Ukur dari ketiak kiri hingga ketiak kanan
												</p>
											</div>
										</div>
										<div class="flex items-start space-x-3">
											<div
												class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900"
											>
												<span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400"
													>3</span
												>
											</div>
											<div>
												<h4 class="text-sm font-medium text-gray-900 dark:text-white">
													Lingkar Dada
												</h4>
												<p class="text-sm text-gray-600 dark:text-gray-400">
													Ukur keliling dada pada bagian terlebar
												</p>
											</div>
										</div>
										<div class="flex items-start space-x-3">
											<div
												class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900"
											>
												<span class="text-xs font-semibold text-indigo-600 dark:text-indigo-400"
													>4</span
												>
											</div>
											<div>
												<h4 class="text-sm font-medium text-gray-900 dark:text-white">
													Panjang Tangan
												</h4>
												<p class="text-sm text-gray-600 dark:text-gray-400">
													Ukur dari bahu hingga ujung lengan kemeja
												</p>
											</div>
										</div>
									</div>
								</div>
							</AnimatedCard>
						</div>
					</ScrollReveal>
				</div>

				<ScrollReveal animation="fade-up" delay={600}>
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
				</ScrollReveal>
			</div>
		</section>
	</main>
</div>

<footer class="bg-gray-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8">
		<div class="animate__animated animate__fadeInUp xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-6">
				<img
					loading="lazy"
					class="animate__animated animate__zoomIn animate__delay-1s h-24 w-24"
					src={logoGlint}
					alt="Glam Stitch Logo"
				/>
				<div class="flex space-x-6">
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

			<div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
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
					</ul>
				</div>

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

		<div
			class="animate__animated animate__fadeInUp animate__delay-3s mt-16 border-t border-white/10 pt-8 text-center"
		>
			<p class="text-sm leading-5 text-gray-400">&copy; 2025 Glam Stitch. All rights reserved.</p>
		</div>
	</div>
</footer>

<style type="text/tailwindcss"></style>
