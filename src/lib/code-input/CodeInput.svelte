<script lang="ts">
   import type { Snippet } from "svelte";

	type Props = {
		value?: string;
		placeholder?: string;
		language?: string;
		template?: string;
		readonly?: boolean;
		disabled?: boolean;
		autofocus?: boolean;
		maxlength?: number;
		minlength?: number;
		rows?: number;
		cols?: number;
		name?: string;
		form?: string;
		required?: boolean;
		spellcheck?: boolean;
		wrap?: 'hard' | 'soft';
		autocomplete?: string;
		autocorrect?: 'on' | 'off';
		pattern?: string;
		highlighter?: (code: string, language?: string) => string;
		plugins?: Array<{
			beforeInput?: (event: InputEvent, textarea: HTMLTextAreaElement) => void;
			keydown?: (event: KeyboardEvent, textarea: HTMLTextAreaElement) => void;
			afterHighlight?: (pre: HTMLPreElement, textarea: HTMLTextAreaElement) => void;
		}>;
		oninput?: (event: Event) => void;
		onkeydown?: (event: KeyboardEvent) => void;
		onchange?: (event: Event) => void;
		oninvalid?: (event: Event) => void;
		children?: Snippet
	};

	let {
		value = $bindable(''),
		placeholder,
		language,
		template,
		readonly = false,
		disabled = false,
		autofocus = false,
		maxlength,
		minlength,
		rows,
		cols,
		name,
		form,
		required = false,
		spellcheck = false,
		wrap,
		autocomplete,
		autocorrect,
		pattern,
		highlighter,
		plugins = [],
		oninput,
		onkeydown,
		onchange,
		oninvalid,
		children
	}: Props = $props();

	let textareaElement: HTMLTextAreaElement;
	let preElement: HTMLPreElement;
	let codeElement: HTMLElement;
	let loaded = $state(false);
	let registered = $state(true);

	$effect(() => {
		if (textareaElement && preElement && codeElement) {
			loaded = true;
			const cleanup = syncScroll();
			updateHighlighting();

			return cleanup;
		}
	});

	function syncScroll() {
		if (!textareaElement || !preElement) return;

		const syncScrollHandler = () => {
			preElement.scrollTop = textareaElement.scrollTop;
			preElement.scrollLeft = textareaElement.scrollLeft;
		};

		textareaElement.addEventListener('scroll', syncScrollHandler);
		textareaElement.addEventListener('input', syncScrollHandler);

		return () => {
			textareaElement.removeEventListener('scroll', syncScrollHandler);
			textareaElement.removeEventListener('input', syncScrollHandler);
		};
	}

	function updateHighlighting() {
		if (!codeElement || !highlighter) return;

		const highlighted = highlighter(value || '', language);
		codeElement.innerHTML = highlighted;

		// Run plugin afterHighlight callbacks
		plugins.forEach(plugin => {
			plugin.afterHighlight?.(preElement, textareaElement);
		});
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLTextAreaElement;
		value = target.value;
		updateHighlighting();
		oninput?.(event);
	}

	function handleBeforeInput(event: InputEvent) {
		// Run plugin beforeInput callbacks
		plugins.forEach(plugin => {
			plugin.beforeInput?.(event, textareaElement);
		});
	}

	function handleKeydown(event: KeyboardEvent) {
		// Run plugin keydown callbacks
		plugins.forEach(plugin => {
			plugin.keydown?.(event, textareaElement);
		});
		onkeydown?.(event);
	}

	function handleSelectionChange() {
		// Maintain caret position sync
	}

	$effect(() => {
		updateHighlighting();
	});
</script>

<div
	class="code-input"
	class:code-input_loaded={loaded}
	class:code-input_registered={registered}
	class:code-input_pre-element-styled={true}
>
	<textarea
		bind:this={textareaElement}
		bind:value
		{placeholder}
		{readonly}
		{disabled}
		{maxlength}
		{minlength}
		{rows}
		{cols}
		{name}
		{form}
		{required}
		{spellcheck}
		{wrap}
		autocomplete={autocomplete as any}
		oninput={handleInput}
		onbeforeinput={handleBeforeInput}
		onkeydown={handleKeydown}
		onselectionchange={handleSelectionChange}
	></textarea>
	{@render children?.()}
	<pre bind:this={preElement}>
		<code bind:this={codeElement}></code>
	</pre>
</div>

<style>
	.code-input {
		display: block;
		overflow-y: auto;
		overflow-x: auto;
		position: relative;
		top: 0;
		left: 0;
		margin: 8px;
		--padding: 16px;
		height: 250px;
		font-size: inherit;
		font-family: monospace;
		line-height: 1.5;
		tab-size: 0;
		caret-color: #a9a9a9;
		white-space: pre;
		padding: 0 !important;
		padding-left: 4ch !important;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 100%;
	}

	.code-input:not(.code-input_loaded) {
		margin: 0 !important;
		margin-bottom: calc(-1 * var(--padding, 16px)) !important;
		padding: var(--padding, 16px) !important;
		border: 0
	}

	.code-input textarea,
	.code-input.code-input_pre-element-styled pre,
	.code-input:not(.code-input_pre-element-styled) pre code {
		margin: 0 !important;
		padding: var(--padding, 16px) !important;
		/*padding-left: 4ch !important;*/
		border: 0;
		min-width: calc(100% - var(--padding, 16px) * 2);
		min-height: calc(100% - var(--padding, 16px) * 2);
		overflow: hidden;
		resize: none;
		grid-row: 1;
		grid-column: 1;
		display: block;
	}

	.code-input.code-input_pre-element-styled pre,
	.code-input:not(.code-input_pre-element-styled) pre code {
		height: max-content;
		width: max-content;
	}

	.code-input.code-input_pre-element-styled pre code,
	.code-input:not(.code-input_pre-element-styled) pre {
		margin: 0 !important;
		padding: 0 !important;
		width: 100%;
		height: 100%
	}

	.code-input pre,
	.code-input pre *,
	.code-input textarea {
		font-size: inherit !important;
		font-family: inherit !important;
		line-height: inherit !important;
		tab-size: 0 !important
	}

	.code-input pre,
	.code-input textarea {
		grid-column: 1;
		grid-row: 1
	}

	.code-input textarea {
		z-index: 1
	}

	.code-input pre {
		z-index: 0;
	}

	.code-input:not(.code-input_loaded) pre,
	.code-input:not(.code-input_loaded) textarea {
		opacity: 0
	}

	.code-input:not(.code-input_loaded)::before {
		color: #ccc
	}

	.code-input textarea {
		color: transparent;
		background: 0 0;
		caret-color: inherit !important;
	}

	.code-input textarea::placeholder {
		color: #d3d3d3
	}

	.code-input pre,
	.code-input textarea {
		white-space: inherit;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal
	}

	.code-input textarea {
		resize: none;
		outline: 0 !important
	}

	.code-input:not(.code-input_registered)::before {
		content: "Use codeInput.registerTemplate to set up.";
		display: block;
		color: grey
	}
</style>
