export type BracketPairs = Record<string, string>;

export interface AutoCloseBracketsPlugin {
	beforeInput?: (event: InputEvent, textarea: HTMLTextAreaElement) => void;
	keydown?: (event: KeyboardEvent, textarea: HTMLTextAreaElement) => void;
}

export function createAutoCloseBracketsPlugin(
	bracketPairs: BracketPairs = { '(': ')', '[': ']', '{': '}', '"': '"' }
): AutoCloseBracketsPlugin {
	return {
		beforeInput(event: InputEvent, textarea: HTMLTextAreaElement) {
			checkBrackets(event, textarea, bracketPairs);
		},
		keydown(event: KeyboardEvent, textarea: HTMLTextAreaElement) {
			checkBackspace(event, textarea, bracketPairs);
		}
	};
}

function checkBrackets(event: InputEvent, textarea: HTMLTextAreaElement, bracketPairs: BracketPairs) {
	if (!event.data) return;

	const { selectionStart, selectionEnd, value } = textarea;
	
	// Check if we're typing a closing bracket that already exists at cursor
	if (event.data === value[selectionStart]) {
		for (const openBracket in bracketPairs) {
			const closeBracket = bracketPairs[openBracket];
			if (event.data === closeBracket) {
				// Move cursor past the existing closing bracket
				event.preventDefault();
				textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
				return;
			}
		}
	}
	
	// Check if we're typing an opening bracket
	if (event.data in bracketPairs) {
		const closingBracket = bracketPairs[event.data];
		const selectedText = value.substring(selectionStart, selectionEnd);
		
		event.preventDefault();
		
		// Insert opening bracket, selected text, closing bracket
		const before = value.substring(0, selectionStart);
		const after = value.substring(selectionEnd);
		
		const newValue = before + event.data + selectedText + closingBracket + after;
		textarea.value = newValue;
		
		// Position cursor after opening bracket (or after selected text if there was any)
		const newCursorPos = selectionStart + 1 + selectedText.length;
		textarea.selectionStart = textarea.selectionEnd = newCursorPos;
		
		// Dispatch input event to notify of change
		textarea.dispatchEvent(new Event('input', { bubbles: true }));
	}
}

function checkBackspace(event: KeyboardEvent, textarea: HTMLTextAreaElement, bracketPairs: BracketPairs) {
	if (event.key !== 'Backspace') return;
	
	const { selectionStart, selectionEnd, value } = textarea;
	
	// Only handle when no text is selected
	if (selectionStart !== selectionEnd) return;
	
	const charBefore = value[selectionStart - 1];
	const charAfter = value[selectionStart];
	
	// Check if we're between matching brackets
	const closingBracket = bracketPairs[charBefore];
	if (closingBracket && charAfter === closingBracket) {
		// Delete both brackets
		event.preventDefault();
		
		const before = value.substring(0, selectionStart - 1);
		const after = value.substring(selectionStart + 1);
		
		textarea.value = before + after;
		textarea.selectionStart = textarea.selectionEnd = selectionStart - 1;
		
		// Dispatch input event to notify of change
		textarea.dispatchEvent(new Event('input', { bubbles: true }));
	}
}