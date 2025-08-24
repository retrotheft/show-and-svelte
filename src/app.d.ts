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
	
	interface Window {
		codeInput: {
			registerTemplate: (templateName: string, template: any) => void;
			templates: {
				hljs: (hljs: any, plugins?: any[]) => any;
			};
			plugins: {
				Indent: new (useSpaces: boolean, size: number) => any;
				AutoCloseBrackets: new () => any;
			};
		};
	}
}

export {};
