<script lang="ts">
	let {
		children,
		href = '',
		class: className = '',
		hoverEffect = 'lift',
		...rest
	}: {
		children?: any;
		href?: string;
		class?: string;
		hoverEffect?: 'lift' | 'zoom' | 'glow' | 'slide';
		[key: string]: any;
	} = $props();
</script>

{#if href}
	<a {href} class="animated-card {className}" data-hover-effect={hoverEffect} {...rest}>
		{@render children?.()}
	</a>
{:else}
	<div class="animated-card {className}" data-hover-effect={hoverEffect} {...rest}>
		{@render children?.()}
	</div>
{/if}

<style>
	.animated-card {
		display: block;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
	}

	/* Lift effect */
	.animated-card[data-hover-effect='lift'] {
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}

	.animated-card[data-hover-effect='lift']:hover {
		transform: translateY(-8px);
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	/* Zoom effect */
	.animated-card[data-hover-effect='zoom']:hover {
		transform: scale(1.03);
	}

	/* Glow effect */
	.animated-card[data-hover-effect='glow']:hover {
		box-shadow:
			0 0 20px rgba(79, 70, 229, 0.4),
			0 0 40px rgba(79, 70, 229, 0.2);
	}

	/* Slide effect */
	.animated-card[data-hover-effect='slide']::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
		transition: left 0.5s ease;
	}

	.animated-card[data-hover-effect='slide']:hover::before {
		left: 100%;
	}

	/* Dark mode adjustments */
	:global(html.dark) .animated-card[data-hover-effect='glow']:hover {
		box-shadow:
			0 0 20px rgba(129, 140, 248, 0.4),
			0 0 40px rgba(129, 140, 248, 0.2);
	}
</style>
