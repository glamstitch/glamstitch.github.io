<script lang="ts">
	// Nomor WhatsApp perusahaan (ganti dengan nomor yang sebenarnya)
	const whatsappNumber = '6285172202151'; // Format: kode negara + nomor (tanpa +)
	const defaultMessage = 'Halo, saya tertarik dengan produk Glam Stitch!';

	// Generate WhatsApp URL
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

	let isHovered = $state(false);
</script>

<!-- WhatsApp Floating Button -->
<a
	href={whatsappUrl}
	target="_blank"
	rel="noopener noreferrer"
	class="whatsapp-button fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_40px_rgba(37,211,102,0.5)] lg:h-16 lg:w-16"
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
	aria-label="Chat via WhatsApp"
>
	<!-- WhatsApp Icon -->
	<svg
		class="h-8 w-8 text-white transition-transform duration-300 lg:h-9 lg:w-9 {isHovered
			? 'scale-110'
			: ''}"
		fill="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
		/>
	</svg>

	<!-- Multi-Ring Wave Animation -->
</a>

<!-- Tooltip (Optional) -->
{#if isHovered}
	<div
		class="animate-bounce-in fixed right-24 bottom-6 z-40 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg lg:right-28"
	>
		Chat dengan kami
		<!-- Tooltip Arrow -->
		<div class="absolute top-1/2 right-[-6px] h-3 w-3 -translate-y-1/2 rotate-45 bg-gray-900"></div>
	</div>
{/if}

<style>
	/* Entrance Animation - Bounce from bottom right */
	.whatsapp-button {
		animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	@keyframes bounceIn {
		0% {
			opacity: 0;
			transform: scale(0) rotate(-45deg) translate(50px, 50px);
		}
		50% {
			transform: scale(1.1) rotate(5deg);
		}
		100% {
			opacity: 1;
			transform: scale(1) rotate(0deg) translate(0, 0);
		}
	}

	/* Tooltip bounce in animation */
	@keyframes bounceInTooltip {
		0% {
			opacity: 0;
			transform: translateX(10px) scale(0.8);
		}
		60% {
			opacity: 1;
			transform: translateX(-5px) scale(1.05);
		}
		100% {
			transform: translateX(0) scale(1);
		}
	}

	.animate-bounce-in {
		animation: bounceInTooltip 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	/* Dark mode support */
	:global(html.dark) .whatsapp-button {
		box-shadow: 0 25px 50px -12px rgba(37, 211, 102, 0.3);
	}

	:global(html.dark) .whatsapp-button:hover {
		box-shadow: 0 10px 40px rgba(37, 211, 102, 0.6);
	}

	/* Mobile responsiveness */
	@media (max-width: 640px) {
		.whatsapp-button {
			bottom: 1.5rem;
			right: 1.5rem;
			height: 3.5rem;
			width: 3.5rem;
		}
	}

	/* Accessibility improvements */
	.whatsapp-button:focus {
		outline: 2px solid #25d366;
		outline-offset: 2px;
	}

	.whatsapp-button:focus:not(:focus-visible) {
		outline: none;
	}

	.whatsapp-button:active {
		transform: scale(0.95);
	}
</style>
