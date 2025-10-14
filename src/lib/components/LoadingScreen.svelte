<div class="pointer-events-none fixed top-0 right-0 left-0 z-[60]">
	<div
		class="h-1 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg"
	>
		<div class="animate-shimmer h-full bg-white/30"></div>
	</div>

	<div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<div
			class="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500/30 border-t-indigo-500"
		></div>
	</div>
</div>

<style>
	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.animate-shimmer {
		animation: shimmer 1.5s infinite;
	}
</style>
