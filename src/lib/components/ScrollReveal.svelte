<script lang="ts">
	import { onMount } from 'svelte';

	// Props
	let {
		children,
		animation = 'fade-up',
		delay = 0,
		duration = 600,
		once = true,
		threshold = 0.15,
		class: className = ''
	}: {
		children?: any;
		animation?:
			| 'fade-up'
			| 'fade-down'
			| 'fade-left'
			| 'fade-right'
			| 'fade'
			| 'zoom-in'
			| 'zoom-out'
			| 'slide-up'
			| 'slide-down';
		delay?: number;
		duration?: number;
		once?: boolean;
		threshold?: number;
		class?: string;
	} = $props();

	let element: HTMLDivElement;
	let isVisible = $state(false);
	let hasAnimated = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (once && hasAnimated) return;

						setTimeout(() => {
							isVisible = true;
							hasAnimated = true;
						}, delay);

						if (once) {
							observer.unobserve(element);
						}
					} else if (!once) {
						isVisible = false;
					}
				});
			},
			{
				threshold,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	});
</script>

<div
	bind:this={element}
	class="scroll-reveal {className}"
	class:visible={isVisible}
	data-animation={animation}
	style="--duration: {duration}ms; --delay: {delay}ms;"
>
	{@render children?.()}
</div>

<style>
	.scroll-reveal {
		opacity: 0;
		transition:
			opacity var(--duration) ease-out,
			transform var(--duration) ease-out;
	}

	/* Fade animations */
	.scroll-reveal[data-animation='fade'] {
		opacity: 0;
	}

	.scroll-reveal[data-animation='fade'].visible {
		opacity: 1;
	}

	/* Fade-up animation */
	.scroll-reveal[data-animation='fade-up'] {
		opacity: 0;
		transform: translateY(40px);
	}

	.scroll-reveal[data-animation='fade-up'].visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Fade-down animation */
	.scroll-reveal[data-animation='fade-down'] {
		opacity: 0;
		transform: translateY(-40px);
	}

	.scroll-reveal[data-animation='fade-down'].visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Fade-left animation */
	.scroll-reveal[data-animation='fade-left'] {
		opacity: 0;
		transform: translateX(40px);
	}

	.scroll-reveal[data-animation='fade-left'].visible {
		opacity: 1;
		transform: translateX(0);
	}

	/* Fade-right animation */
	.scroll-reveal[data-animation='fade-right'] {
		opacity: 0;
		transform: translateX(-40px);
	}

	.scroll-reveal[data-animation='fade-right'].visible {
		opacity: 1;
		transform: translateX(0);
	}

	/* Zoom-in animation */
	.scroll-reveal[data-animation='zoom-in'] {
		opacity: 0;
		transform: scale(0.9);
	}

	.scroll-reveal[data-animation='zoom-in'].visible {
		opacity: 1;
		transform: scale(1);
	}

	/* Zoom-out animation */
	.scroll-reveal[data-animation='zoom-out'] {
		opacity: 0;
		transform: scale(1.1);
	}

	.scroll-reveal[data-animation='zoom-out'].visible {
		opacity: 1;
		transform: scale(1);
	}

	/* Slide-up animation */
	.scroll-reveal[data-animation='slide-up'] {
		opacity: 0;
		transform: translateY(60px);
	}

	.scroll-reveal[data-animation='slide-up'].visible {
		opacity: 1;
		transform: translateY(0);
	}

	/* Slide-down animation */
	.scroll-reveal[data-animation='slide-down'] {
		opacity: 0;
		transform: translateY(-60px);
	}

	.scroll-reveal[data-animation='slide-down'].visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
