<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	// @ts-expect-error - vite-imagetools query parameters
	import logoGlint from '$lib/assets/image/logo glint.png?w=256&quality=90';
</script>

<svelte:head>
	<title>404 - Halaman Tidak Ditemukan | Glam Stitch</title>
	<meta
		name="description"
		content="Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Glam Stitch."
	/>
</svelte:head>

<main class="flex min-h-screen items-center justify-center bg-white px-6 py-24 dark:bg-gray-900">
	<div class="mx-auto w-full max-w-md text-center">
		<!-- Logo -->
		<div class="mb-8">
			<img src={logoGlint} alt="Glam Stitch Logo" class="mx-auto mb-4 h-20 w-auto" />
		</div>

		<!-- 404 Error -->
		<div class="mb-8">
			<h1 class="mb-4 animate-bounce text-8xl font-bold text-gray-900 dark:text-white">
				{$page.status || 404}
			</h1>
			<h2 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
				{$page.status === 404 ? 'Halaman Tidak Ditemukan' : 'Terjadi Kesalahan'}
			</h2>
			<p class="text-gray-600 dark:text-gray-400">
				{#if $page.status === 404}
					Maaf, halaman yang Anda cari tidak dapat ditemukan.
					<br />
					Media sosial kami sedang dalam pengembangan.
				{:else}
					{$page.error?.message || 'Terjadi kesalahan yang tidak terduga.'}
				{/if}
			</p>
		</div>

		<!-- Action Buttons -->
		<div class="space-y-4">
			<a
				href="{base}/"
				class="block w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-indigo-700"
			>
				Kembali ke Beranda
			</a>
			<a
				href="{base}/contact-us"
				class="block w-full rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
			>
				Hubungi Kami
			</a>
		</div>

		<!-- Footer -->
		<div class="mt-12 text-center">
			<p class="text-sm text-gray-500 dark:text-gray-400">
				&copy; 2025 Glam Stitch. All rights reserved.
			</p>
		</div>
	</div>
</main>

<style>
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}

	.animate-bounce {
		animation: bounce 3s infinite;
	}
</style>
