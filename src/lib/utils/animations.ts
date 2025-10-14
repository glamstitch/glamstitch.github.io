/**
 * Animation utilities for the application
 * Inspired by garmentindo.co.id animations
 */

export const animationTimings = {
	fast: 200,
	normal: 300,
	slow: 500,
	verySlow: 800
};

export const animationEasings = {
	easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
	easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
	easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
	bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

export const staggerDelay = 100; // milliseconds between each staggered animation

/**
 * Generate staggered delay for multiple elements
 */
export function getStaggerDelay(index: number, baseDelay = 0): number {
	return baseDelay + index * staggerDelay;
}

/**
 * Smooth scroll to element
 */
export function smoothScrollTo(elementId: string, offset = 0) {
	const element = document.getElementById(elementId);
	if (element) {
		const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
		window.scrollTo({
			top: targetPosition,
			behavior: 'smooth'
		});
	}
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: HTMLElement, threshold = 0.1): boolean {
	const rect = element.getBoundingClientRect();
	const windowHeight = window.innerHeight || document.documentElement.clientHeight;
	const windowWidth = window.innerWidth || document.documentElement.clientWidth;

	const vertInView = rect.top <= windowHeight * (1 - threshold) && rect.top + rect.height >= 0;
	const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

	return vertInView && horInView;
}

/**
 * Parallax effect calculator
 */
export function calculateParallax(scrollY: number, speed = 0.5): number {
	return scrollY * speed;
}

/**
 * Counter animation
 */
export function animateCounter(
	element: HTMLElement,
	start: number,
	end: number,
	duration = 2000,
	suffix = ''
) {
	const range = end - start;
	const increment = range / (duration / 16);
	let current = start;

	const timer = setInterval(() => {
		current += increment;
		if (current >= end) {
			current = end;
			clearInterval(timer);
		}
		element.textContent = Math.floor(current) + suffix;
	}, 16);
}
