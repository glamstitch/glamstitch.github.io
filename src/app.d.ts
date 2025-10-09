// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// Vite imagetools type declarations
declare module '*&imagetools' {
	const out;
	export default out;
}

// Image files with query parameters
declare module '*.jpg?*' {
	const out: string;
	export default out;
}

declare module '*.jpeg?*' {
	const out: string;
	export default out;
}

declare module '*.png?*' {
	const out: string;
	export default out;
}

declare module '*.webp?*' {
	const out: string;
	export default out;
}

declare module '*.gif?*' {
	const out: string;
	export default out;
}

// Image files without query parameters
declare module '*.jpg' {
	const out: string;
	export default out;
}

declare module '*.jpeg' {
	const out: string;
	export default out;
}

declare module '*.png' {
	const out: string;
	export default out;
}

declare module '*.webp' {
	const out: string;
	export default out;
}

declare module '*.gif' {
	const out: string;
	export default out;
}

declare module '*.svg' {
	const out: string;
	export default out;
}

export {};
