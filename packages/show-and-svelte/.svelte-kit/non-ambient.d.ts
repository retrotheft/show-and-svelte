
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/presentations" | "/presentations/create-raw-snippet" | "/presentations/create-raw-snippet/_slides" | "/presentations/create-raw-snippet/content" | "/presentations/magic-move" | "/presentations/magic-move/_components" | "/presentations/magic-move/_slides" | "/presentations/magic-move/_slides/content" | "/tutorial-0.0.3" | "/tutorial-0.0.3/_components" | "/tutorial-0.0.3/_slides" | "/tutorial-0.0.3/_slides/content";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/presentations": Record<string, never>;
			"/presentations/create-raw-snippet": Record<string, never>;
			"/presentations/create-raw-snippet/_slides": Record<string, never>;
			"/presentations/create-raw-snippet/content": Record<string, never>;
			"/presentations/magic-move": Record<string, never>;
			"/presentations/magic-move/_components": Record<string, never>;
			"/presentations/magic-move/_slides": Record<string, never>;
			"/presentations/magic-move/_slides/content": Record<string, never>;
			"/tutorial-0.0.3": Record<string, never>;
			"/tutorial-0.0.3/_components": Record<string, never>;
			"/tutorial-0.0.3/_slides": Record<string, never>;
			"/tutorial-0.0.3/_slides/content": Record<string, never>
		};
		Pathname(): "/" | "/presentations" | "/presentations/" | "/presentations/create-raw-snippet" | "/presentations/create-raw-snippet/" | "/presentations/create-raw-snippet/_slides" | "/presentations/create-raw-snippet/_slides/" | "/presentations/create-raw-snippet/content" | "/presentations/create-raw-snippet/content/" | "/presentations/magic-move" | "/presentations/magic-move/" | "/presentations/magic-move/_components" | "/presentations/magic-move/_components/" | "/presentations/magic-move/_slides" | "/presentations/magic-move/_slides/" | "/presentations/magic-move/_slides/content" | "/presentations/magic-move/_slides/content/" | "/tutorial-0.0.3" | "/tutorial-0.0.3/" | "/tutorial-0.0.3/_components" | "/tutorial-0.0.3/_components/" | "/tutorial-0.0.3/_slides" | "/tutorial-0.0.3/_slides/" | "/tutorial-0.0.3/_slides/content" | "/tutorial-0.0.3/_slides/content/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/favicon.svg" | "/presentation.css" | "/presentation.js" | "/you-are-here.png" | string & {};
	}
}