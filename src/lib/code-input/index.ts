/**
 * Code Input wrapper module for SvelteKit library
 * Encapsulates code-input library functionality without requiring global scripts
 */

// Type definitions
export interface CodeInputTemplate {
	highlight: (codeElement: HTMLElement, codeInput?: HTMLElement) => void;
	includeCodeInputInHighlightFunc: boolean;
	preElementStyled: boolean;
	isCode: boolean;
	plugins: CodeInputPlugin[];
}

export interface CodeInputPlugin {
	beforeHighlight?: (codeInput: HTMLElement) => void;
	afterHighlight?: (codeInput: HTMLElement) => void;
	beforeElementsAdded?: (codeInput: HTMLElement) => void;
	afterElementsAdded?: (codeInput: HTMLElement) => void;
	attributeChanged?: (codeInput: HTMLElement, name: string, oldValue: string, newValue: string) => void;
}

export interface CodeInput {
	registerTemplate: (templateName: string, template: CodeInputTemplate) => void;
	templates: {
		hljs: (hljs: any, plugins?: CodeInputPlugin[]) => CodeInputTemplate;
		Hljs: new (hljs: any, plugins?: CodeInputPlugin[], preElementStyled?: boolean) => CodeInputTemplate;
	};
	plugins: {
		Indent: new (useSpaces: boolean, size: number) => CodeInputPlugin;
		AutoCloseBrackets: new () => CodeInputPlugin;
	};
}

let codeInputInstance: CodeInput | null = null;
let initializationPromise: Promise<CodeInput> | null = null;

/**
 * Initialize code-input functionality
 * This loads the required scripts and styles dynamically
 * @param theme Optional theme URL to override the default tokyo-night-dark theme
 */
export async function initializeCodeInput(theme?: string): Promise<CodeInput> {
	if (typeof window === 'undefined') {
		// SSR fallback
		return createFallbackCodeInput();
	}

	if (codeInputInstance) {
		console.log('Returning existing codeInput instance')
		return codeInputInstance;
	}

	// If initialization is already in progress, wait for it
	if (initializationPromise) {
		console.log('Waiting for existing initialization to complete...')
		return initializationPromise;
	}

	console.log('No existing instance, creating new one')

	// Start initialization and store the promise
	initializationPromise = performInitialization(theme);
	
	try {
		const result = await initializationPromise;
		initializationPromise = null; // Clear the promise when done
		return result;
	} catch (error) {
		initializationPromise = null; // Clear the promise on error
		throw error;
	}
}

async function performInitialization(theme?: string): Promise<CodeInput> {

	// Load default or custom theme
	const themeUrl = theme || 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.css';
	if (!document.querySelector(`link[href="${themeUrl}"]`)) {
		const themeLink = document.createElement('link');
		themeLink.rel = 'stylesheet';
		themeLink.href = themeUrl;
		document.head.appendChild(themeLink);
	}

	// Load essential CSS (only code-input.min.css is needed)
	const cssFiles = ['/code-input.min.css'];

	for (const cssFile of cssFiles) {
		if (!document.querySelector(`link[href="${cssFile}"]`)) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = cssFile;
			document.head.appendChild(link);
		}
	}

	console.log('Starting code-input initialization...')
	
	// Load core code-input script first
	if (!document.querySelector('script[src="/code-input-custom.js"]')) {
		console.log('Loading core code-input script...')
		await loadScript('/code-input-custom.js');
	} else {
		console.log('Core code-input script already loaded')
	}

	// Wait for codeInput to be available before loading plugins
	let attempts = 0;
	console.log('Waiting for codeInput global object...')
	while (!(window as any).codeInput && attempts < 50) {
		await new Promise(resolve => setTimeout(resolve, 50));
		attempts++;
	}

	if (!(window as any).codeInput) {
		throw new Error(`codeInput failed to initialize after main script load (${attempts} attempts)`);
	}
	console.log(`codeInput available after ${attempts} attempts`)

	// Now load plugin scripts in sequence and wait for them to be available
	const pluginFiles = [
		{ file: '/indent.min.js', name: 'Indent' },
		{ file: '/auto-close-brackets.min.js', name: 'AutoCloseBrackets' }
	];
	
	for (const plugin of pluginFiles) {
		if (!document.querySelector(`script[src="${plugin.file}"]`)) {
			console.log('Loading plugin:', plugin.file)
			await loadScript(plugin.file);
			console.log('Plugin script loaded:', plugin.file)
		} else {
			console.log('Plugin script already loaded:', plugin.file)
		}

		// Wait for the plugin to be actually available in codeInput.plugins
		let pluginAttempts = 0;
		while (pluginAttempts < 20) {
			try {
				// Try to access the plugin to see if it's available
				const testPlugin = (window as any).codeInput.plugins[plugin.name];
				if (testPlugin) {
					console.log('Plugin available:', plugin.name)
					break;
				}
			} catch (e) {
				// Plugin not yet available
			}
			await new Promise(resolve => setTimeout(resolve, 50));
			pluginAttempts++;
		}

		if (pluginAttempts >= 20) {
			throw new Error(`Plugin ${plugin.name} failed to become available after loading ${plugin.file}`);
		}
	}

	// Access the global codeInput object
	const globalCodeInput = (window as any).codeInput as CodeInput;
	if (globalCodeInput) {
		codeInputInstance = globalCodeInput;
		console.log('Initialization complete with all plugins available')
		return globalCodeInput;
	}

	throw new Error('codeInput not available after initialization');
}

/**
 * Load a script file dynamically
 */
function loadScript(src: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
		document.head.appendChild(script);
	});
}

/**
 * Create a fallback code-input interface for SSR
 */
function createFallbackCodeInput(): CodeInput {
	return {
		registerTemplate: () => {},
		templates: {
			hljs: () => ({
				highlight: () => {},
				includeCodeInputInHighlightFunc: false,
				preElementStyled: true,
				isCode: true,
				plugins: []
			}),
			Hljs: class {
				constructor() {
					return {
						highlight: () => {},
						includeCodeInputInHighlightFunc: false,
						preElementStyled: true,
						isCode: true,
						plugins: []
					} as CodeInputTemplate;
				}
			} as any
		},
		plugins: {
			Indent: class {
				constructor() {
					return {} as CodeInputPlugin;
				}
			} as any,
			AutoCloseBrackets: class {
				constructor() {
					return {} as CodeInputPlugin;
				}
			} as any
		}
	};
}

/**
 * Get the current code-input instance
 * Returns null if not initialized
 */
export function getCodeInput(): CodeInput | null {
	return codeInputInstance;
}
