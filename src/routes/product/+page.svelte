<script lang="ts">
	// Page content only - dark mode handled by layout
	// @ts-expect-error - vite-imagetools query parameters
	import logoGlint from '$lib/assets/image/logo glint.png?w=256&quality=90';
	// @ts-expect-error - vite-imagetools query parameters
	import polo1 from '$lib/assets/image/polo1.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import kaos1 from '$lib/assets/image/kaos1.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import jersey1 from '$lib/assets/image/jersey1.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import hoodie1 from '$lib/assets/image/hoodie1.jpg?w=800&format=webp&quality=80';
	// @ts-expect-error - vite-imagetools query parameters
	import kemeja1 from '$lib/assets/image/kemeja1.jpg?w=800&format=webp&quality=80';
	import { base } from '$app/paths';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import AnimatedCard from '$lib/components/AnimatedCard.svelte';
</script>

<svelte:head>
	<title>Produk - Glam Stitch | Produk Berkualitas</title>
	<meta
		name="description"
		content="Layanan konveksi lengkap dari Glam Stitch: sablon, bordir, konveksi kaos, jersey, jaket, dan kemeja. Kualitas terjamin dengan harga kompetitif."
	/>
	<meta
		name="keywords"
		content="layanan konveksi, sablon, bordir, konveksi kaos, jersey, jaket, kemeja, kualitas terjamin"
	/>
</svelte:head>

<section class="hero-section relative isolate overflow-hidden pt-6">
	<img
		loading="lazy"
		src="https://img.freepik.com/free-photo/family-tailors-having-leather-industry_1303-23397.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
		alt="Tailor background"
		class="hero-section absolute inset-0 -z-10 h-full w-full object-cover object-center"
	/>

	<div class="absolute inset-0 -z-10 bg-black/20"></div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 text-center sm:py-48 lg:py-32">
			<div class="mb-6 flex justify-center">
				<div
					class="relative rounded-full px-4 py-1.5 text-sm text-gray-200 ring-1 ring-white/20 transition hover:ring-white/30"
				>
					Jelajahi beragam produk dari Konveksi Glam Stitch.
				</div>
			</div>

			<div class="animate-fade-in">
				<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					Produk Berkualitas dari Glam Stitch
				</h1>

				<p class="mt-6 text-lg text-gray-200 sm:text-xl">
					Temukan kaos polos, jaket, dan kemeja dengan desain menarik, bahan terbaik, dan jahitan
					rapi — cocok untuk brand, komunitas, maupun usaha Anda.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="relative overflow-hidden bg-white py-12 sm:py-20 dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center gap-10 lg:flex-row">
			<ScrollReveal animation="fade-right" delay={200} class="w-full lg:w-1/2">
				<AnimatedCard hoverEffect="zoom">
					<img
						loading="lazy"
						src="https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18667.jpg"
						alt="Produk Konveksi"
						class="product-image h-auto w-full rounded-lg object-cover shadow-xl"
					/>
				</AnimatedCard>
			</ScrollReveal>

			<ScrollReveal
				animation="fade-left"
				delay={400}
				class="w-full text-center lg:w-1/2 lg:text-left"
			>
				<h2 class="text-4xl leading-tight font-bold text-gray-900 sm:text-5xl dark:text-white">
					Koleksi Fashion Terlengkap dari <span class="text-indigo-600 dark:text-indigo-400"
						>Glam Stitch</span
					>
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-gray-700 sm:text-xl dark:text-gray-300">
					Temukan beragam produk fashion berkualitas tinggi yang dirancang khusus untuk memenuhi
					kebutuhan Anda. Dari kaos polos yang nyaman untuk sehari-hari, kaos polo elegan untuk
					acara semi-formal, jersey sporty untuk aktivitas olahraga, hoodie/sweater hangat untuk
					cuaca dingin, hingga kemeja profesional untuk kesempatan formal.
				</p>
				<div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
					<a
						href="{base}/404.html"
						class="inline-block rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
					>
						Layanan Kami
					</a>
					<a
						href="/contact-us"
						class="inline-block rounded-md border border-gray-300 px-6 py-3 text-base font-semibold text-gray-600 transition duration-300 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
					>
						Konsultasi Gratis
					</a>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>

<section class="bg-white py-20 dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
		<div class="mb-14 text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Produk Kami</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
				Temukan pilihan fashion terbaik dari kami, dibuat dengan kualitas tinggi dan sentuhan desain
				yang stylish.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div
				class="group relative rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
			>
				<div class="relative overflow-hidden rounded-t-lg">
					<img
						loading="lazy"
						src={kaos1}
						alt="Kaos Polos Glam Stitch"
						class="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<div class="p-4">
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
						Kaos Polos Premium
					</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">30+ Pilihan Warna</p>
					<a
						href="/tshirt"
						class="block w-full rounded bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
					>
						Lihat Detail
					</a>
				</div>
			</div>

			<div
				class="group relative rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
			>
				<div class="relative overflow-hidden rounded-t-lg">
					<img
						loading="lazy"
						src={polo1}
						alt="Kaos Polo Glam Stitch"
						class="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<div class="p-4">
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Kaos Polo Elegan</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">15+ Pilihan Warna</p>
					<a
						href="/polo"
						class="block w-full rounded bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
					>
						Lihat Detail
					</a>
				</div>
			</div>

			<div
				class="group relative rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
			>
				<div class="relative overflow-hidden rounded-t-lg">
					<img
						loading="lazy"
						src={jersey1}
						alt="Jersey Glam Stitch"
						class="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<div class="p-4">
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Jersey Olahraga</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">15+ Pilihan Warna</p>
					<a
						href="/jersey"
						class="block w-full rounded bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
					>
						Lihat Detail
					</a>
				</div>
			</div>

			<div
				class="group relative rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
			>
				<div class="relative overflow-hidden rounded-t-lg">
					<img
						loading="lazy"
						src={hoodie1}
						alt="Hoodie/Sweater Glam Stitch"
						class="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<div class="p-4">
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Hoodie Premium</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">10+ Pilihan Warna</p>
					<a
						href="/jacket"
						class="block w-full rounded bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
					>
						Lihat Detail
					</a>
				</div>
			</div>

			<div
				class="group relative rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
			>
				<div class="relative overflow-hidden rounded-t-lg">
					<img
						loading="lazy"
						src={kemeja1}
						alt="Kemeja Glam Stitch"
						class="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<div class="p-4">
					<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Kemeja Formal</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">10+ Pilihan Warna</p>
					<a
						href="/shirts"
						class="block w-full rounded bg-gray-100 px-4 py-2 text-center text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
					>
						Lihat Detail
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

{#if false}
	<section class="bg-white py-24 dark:bg-gray-900">
		<div class="mx-auto max-w-7xl px-6 lg:px-16">
			<div class="mb-16 text-center">
				<h2 class="text-4xl font-bold text-gray-900 dark:text-white">Testimoni Pelanggan</h2>
				<p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
					Review dari para pelanggan setia kami.
				</p>
			</div>
			<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
				<div
					class="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700"
				>
					<div class="mb-4 flex items-center gap-4">
						<img
							loading="lazy"
							class="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
							src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="Putri Aulia"
						/>
						<div>
							<h4 class="text-base font-semibold text-gray-900 dark:text-white">Putri Aulia</h4>
							<span
								class="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100"
								>Kaos Polos</span
							>
						</div>
					</div>

					<div class="mb-3 flex items-center">
						<div class="flex space-x-1 text-yellow-400">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg
								class="h-5 w-5 text-gray-400 dark:text-gray-600"
								fill="currentColor"
								viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
						</div>
					</div>

					<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
						“Kaos polosnya super nyaman dipakai seharian. Bahannya adem, jahitannya rapi, dan
						warnanya nggak gampang pudar!”
					</p>
				</div>

				<div
					class="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700"
				>
					<div class="mb-4 flex items-center gap-4">
						<img
							loading="lazy"
							class="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
							src="https://media.istockphoto.com/id/1325882419/id/foto/wanita-meniup-ciuman-udara-pada-latar-belakang-biru-muda.jpg?s=612x612&w=0&k=20&c=xBVLOjJkZ2AAPBMi-bPeYzDKTQLQq48z0xPpWb7rUVE="
							alt="Budi Santoso"
						/>
						<div>
							<h4 class="text-base font-semibold text-gray-900 dark:text-white">Budi Santoso</h4>
							<span
								class="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100"
								>Kaos Polo</span
							>
						</div>
					</div>

					<div class="mb-3 flex items-center">
						<div class="flex space-x-1 text-yellow-400">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
						</div>
					</div>

					<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
						"Kaos polo dari Glam Stitch sangat nyaman dan elegan. Kerahnya tidak mudah melengkung,
						bahannya adem, dan cocok untuk acara kantor maupun hangout."
					</p>
				</div>

				<div
					class="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700"
				>
					<div class="mb-4 flex items-center gap-4">
						<img
							loading="lazy"
							class="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
							src="https://media.istockphoto.com/id/185941321/id/foto/tubuh-bagian-atas-pria.jpg?s=612x612&w=0&k=20&c=iS9nQtGYKbNusFB7N6ygJZPdkmSvK1OwkhinmalwW3o="
							alt="Sari Dewi"
						/>
						<div>
							<h4 class="text-base font-semibold text-gray-900 dark:text-white">Sari Dewi</h4>
							<span
								class="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100"
								>Jersey</span
							>
						</div>
					</div>

					<div class="mb-3 flex items-center">
						<div class="flex space-x-1 text-yellow-400">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
						</div>
					</div>

					<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
						"Jersey untuk tim futsal kami sangat bagus! Bahan menyerap keringat dengan baik, tidak
						mudah kusut, dan desainnya bisa dikustom sesuai keinginan."
					</p>
				</div>

				<div
					class="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700"
				>
					<div class="mb-4 flex items-center gap-4">
						<img
							loading="lazy"
							class="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
							src="https://media.istockphoto.com/id/2085676478/id/foto/mockup-hoodie-putih-pada-pria-berjanggut-kaus-oversized-dengan-saku-untuk-desain-branding.jpg?s=612x612&w=0&k=20&c=7QKD-7q--IDD5CV0p5JDNuWy6f26zHLa0qCI3cF8wOc="
							alt="Rizki Pratama"
						/>
						<div>
							<h4 class="text-base font-semibold text-gray-900 dark:text-white">Rizki Pratama</h4>
							<span
								class="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100"
								>Hoodie/Sweater</span
							>
						</div>
					</div>

					<div class="mb-3 flex items-center">
						<div class="flex space-x-1 text-yellow-400">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
						</div>
					</div>

					<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
						"Hoodie dari Glam Stitch sangat nyaman dan hangat. Kualitasnya premium, jahitannya rapi,
						dan desainnya simple tapi tetap stylish. Perfect untuk cuaca dingin!"
					</p>
				</div>

				<div
					class="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700"
				>
					<div class="mb-4 flex items-center gap-4">
						<img
							loading="lazy"
							class="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
							src="https://img.freepik.com/free-photo/business-casual-shirt-white-closeup-outdoor-photoshoot_53876-119744.jpg?ga=GA1.1.1868222757.1738365469&w=740"
							alt="Ahmad Fauzi"
						/>
						<div>
							<h4 class="text-base font-semibold text-gray-900 dark:text-white">Ahmad Fauzi</h4>
							<span
								class="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100"
								>Kemeja</span
							>
						</div>
					</div>

					<div class="mb-3 flex items-center">
						<div class="flex space-x-1 text-yellow-400">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
						</div>
					</div>

					<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
						"Kemeja untuk seragam kantor sangat memuaskan! Bahan berkualitas, jahitan rapi, dan
						ukurannya pas. Tim kami sangat puas dengan hasilnya."
					</p>
				</div>

				<div
					class="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700"
				>
					<div class="mb-4 flex items-center gap-4">
						<img
							loading="lazy"
							class="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
							src="https://media.istockphoto.com/id/483627817/id/foto/memamerkan-putih-mutiaranya.jpg?s=612x612&w=0&k=20&c=0dXbdlR-Ten2QPyJ7E6WtpRjGAwLFLbfWywDJ0RCs_E="
							alt="Arifki Pratama"
						/>
						<div>
							<h4 class="text-base font-semibold text-gray-900 dark:text-white">Arifki Pratama</h4>
							<span
								class="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100"
								>Hoodie/Sweater</span
							>
						</div>
					</div>

					<div class="mb-3 flex items-center">
						<div class="flex space-x-1 text-yellow-400">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
						</div>
					</div>

					<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
						"Hoodie dari Glam Stitch bener-bener keren! Bahannya tebal tapi tetap ringan,
						potongannya pas, dan sangat cocok buat gaya harian yang casual tapi tetap kece."
					</p>
				</div>

				<div
					class="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700"
				>
					<div class="mb-4 flex items-center gap-4">
						<img
							loading="lazy"
							class="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
							src="https://media.istockphoto.com/id/1325882419/id/foto/wanita-meniup-ciuman-udara-pada-latar-belakang-biru-muda.jpg?s=612x612&w=0&k=20&c=xBVLOjJkZ2AAPBMi-bPeYzDKTQLQq48z0xPpWb7rUVE="
							alt="Sri Rahayu"
						/>
						<div>
							<h4 class="text-base font-semibold text-gray-900 dark:text-white">Sri Rahayu</h4>
							<span
								class="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100"
								>Kemeja</span
							>
						</div>
					</div>

					<div class="mb-3 flex items-center">
						<div class="flex space-x-1 text-yellow-400">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
						</div>
					</div>

					<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
						“Kemejanya elegan banget! Bahannya adem, jatuhnya bagus di badan, dan jahitannya rapi.
						Cocok banget buat acara formal maupun nongkrong santai.”
					</p>
				</div>

				<div
					class="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700"
				>
					<div class="mb-4 flex items-center gap-4">
						<img
							loading="lazy"
							class="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
							src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="Dewi Sari"
						/>
						<div>
							<h4 class="text-base font-semibold text-gray-900 dark:text-white">Dewi Sari</h4>
							<span
								class="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100"
								>Kaos Polos</span
							>
						</div>
					</div>

					<div class="mb-3 flex items-center">
						<div class="flex space-x-1 text-yellow-400">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
						</div>
					</div>

					<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
						"Kaos polos untuk komunitas book club kami sangat memuaskan! Bahan adem, ukuran pas, dan
						warnanya tidak mudah luntur meski dicuci berkali-kali. Recommended banget!"
					</p>
				</div>

				<div
					class="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:border-gray-600 dark:bg-gray-700"
				>
					<div class="mb-4 flex items-center gap-4">
						<img
							loading="lazy"
							class="h-12 w-12 rounded-full border-2 border-indigo-500 object-cover"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt="Fajar Nugroho"
						/>
						<div>
							<h4 class="text-base font-semibold text-gray-900 dark:text-white">Fajar Nugroho</h4>
							<span
								class="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-medium text-indigo-600 dark:bg-indigo-900 dark:text-indigo-100"
								>Kaos Polo</span
							>
						</div>
					</div>

					<div class="mb-3 flex items-center">
						<div class="flex space-x-1 text-yellow-400">
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
								><path
									d="M10 15l-5.878 3.09L5.5 12.18.5 7.91l6.064-.88L10 2l3.436 5.03L19.5 7.91l-5 4.27 1.378 5.91z"
								/></svg
							>
						</div>
					</div>

					<p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
						"Kaos polo untuk seragam tim marketing sangat bagus! Kualitas premium, jahitan rapi, dan
						desainnya profesional. Klien pun terkesan dengan penampilan tim kami."
					</p>
				</div>
			</div>
		</div>
	</section>
{/if}

<footer class="bg-gray-900 dark:bg-gray-900" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8">
		<div class="animate__animated animate__fadeInUp xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-6">
				<img
					loading="lazy"
					class="footer-logo animate__animated animate__zoomIn animate__delay-1s h-16 w-16"
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
						<li>
							<a
								href="{base}/404.html"
								class="text-base text-gray-300 transition duration-200 hover:text-blue-400"
								>Layanan</a
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
