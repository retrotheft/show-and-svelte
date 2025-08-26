export type BracketPairs = Record<string, string>;

export interface IndentPlugin {
	beforeInput?: (event: InputEvent, textarea: HTMLTextAreaElement) => void;
	keydown?: (event: KeyboardEvent, textarea: HTMLTextAreaElement) => void;
}

export function createIndentPlugin(
	useSpaces = false,
	indentSize = 4,
	bracketPairs: BracketPairs = { '(': ')', '[': ']', '{': '}' }
): IndentPlugin {
	const indentation = useSpaces ? ' '.repeat(indentSize) : '\t';
	const indentationLength = useSpaces ? indentSize : 1;

	return {
		keydown(event: KeyboardEvent, textarea: HTMLTextAreaElement) {
			if (event.key === 'Tab') {
				checkTab(event, textarea, indentation, indentationLength);
			} else if (event.key === 'Enter') {
				checkEnter(event, textarea, indentation, indentationLength, bracketPairs);
			} else if (event.key === 'Backspace') {
				checkBackspace(event, textarea, indentation, indentationLength);
			}
		},
		beforeInput(event: InputEvent, textarea: HTMLTextAreaElement) {
			if (event.data && Object.values(bracketPairs).includes(event.data)) {
				checkCloseBracket(event, textarea, indentation, indentationLength, bracketPairs);
			}
		}
	};
}

function checkTab(
	event: KeyboardEvent, 
	textarea: HTMLTextAreaElement, 
	indentation: string, 
	indentationLength: number
) {
	event.preventDefault();
	
	const { selectionStart, selectionEnd, value } = textarea;
	
	if (selectionStart === selectionEnd) {
		// Single cursor - insert indentation
		insertText(textarea, indentation);
	} else {
		// Selection - indent/unindent lines
		const lines = value.split('\n');
		let lineStart = 0;
		let startLine = -1;
		let endLine = -1;
		
		// Find which lines are selected
		for (let i = 0; i < lines.length; i++) {
			const lineEnd = lineStart + lines[i].length;
			
			if ((selectionStart <= lineEnd && selectionEnd >= lineStart) || 
				(selectionStart === selectionEnd && selectionStart <= lineEnd + 1 && selectionEnd >= lineStart)) {
				if (startLine === -1) startLine = i;
				endLine = i;
			}
			
			lineStart = lineEnd + 1;
		}
		
		let newSelectionStart = selectionStart;
		let newSelectionEnd = selectionEnd;
		
		// Process each selected line
		for (let i = startLine; i <= endLine; i++) {
			const lineStartPos = lines.slice(0, i).join('\n').length + (i > 0 ? 1 : 0);
			
			if (event.shiftKey) {
				// Unindent
				if (lines[i].startsWith(indentation)) {
					lines[i] = lines[i].substring(indentationLength);
					
					if (newSelectionStart > lineStartPos) {
						newSelectionStart = Math.max(newSelectionStart - indentationLength, lineStartPos);
					}
					newSelectionEnd -= indentationLength;
				}
			} else {
				// Indent
				lines[i] = indentation + lines[i];
				
				if (newSelectionStart > lineStartPos) {
					newSelectionStart += indentationLength;
				}
				newSelectionEnd += indentationLength;
			}
		}
		
		textarea.value = lines.join('\n');
		textarea.selectionStart = newSelectionStart;
		textarea.selectionEnd = newSelectionEnd;
		
		// Dispatch input event
		textarea.dispatchEvent(new Event('input', { bubbles: true }));
	}
}

function checkEnter(
	event: KeyboardEvent, 
	textarea: HTMLTextAreaElement, 
	indentation: string, 
	indentationLength: number, 
	bracketPairs: BracketPairs
) {
	event.preventDefault();
	
	const { selectionStart, value } = textarea;
	const lines = value.split('\n');
	
	// Find current line
	let currentLineIndex = 0;
	let pos = 0;
	
	for (let i = 0; i < lines.length; i++) {
		if (selectionStart <= pos + lines[i].length) {
			currentLineIndex = i;
			break;
		}
		pos += lines[i].length + 1;
	}
	
	const currentLine = lines[currentLineIndex];
	const cursorPosInLine = selectionStart - pos;
	
	// Calculate current indentation level
	let currentIndentLevel = 0;
	for (let i = 0; i < currentLine.length; i += indentationLength) {
		if (currentLine.substring(i, i + indentationLength) === indentation) {
			currentIndentLevel++;
		} else {
			break;
		}
	}
	
	// Check if we need extra indentation (opening bracket)
	let extraIndent = false;
	const lineBeforeCursor = currentLine.substring(0, cursorPosInLine);
	const lineAfterCursor = currentLine.substring(cursorPosInLine);
	
	for (const openBracket in bracketPairs) {
		if (lineBeforeCursor.trimEnd().endsWith(openBracket)) {
			const closeBracket = bracketPairs[openBracket];
			if (lineAfterCursor.trimStart().startsWith(closeBracket)) {
				extraIndent = true;
				break;
			}
		}
	}
	
	// Insert newline with appropriate indentation
	let newText = '\n' + indentation.repeat(currentIndentLevel);
	if (extraIndent) {
		newText += indentation;
	}
	
	insertText(textarea, newText);
	
	// If we added extra indentation and there's a closing bracket, add another line
	if (extraIndent) {
		const beforeExtra = textarea.value.substring(0, textarea.selectionStart);
		const afterExtra = textarea.value.substring(textarea.selectionStart);
		const extraLine = '\n' + indentation.repeat(currentIndentLevel);
		
		textarea.value = beforeExtra + extraLine + afterExtra;
		textarea.selectionStart = textarea.selectionEnd = beforeExtra.length;
		
		textarea.dispatchEvent(new Event('input', { bubbles: true }));
	}
}

function checkBackspace(
	event: KeyboardEvent, 
	textarea: HTMLTextAreaElement, 
	indentation: string, 
	indentationLength: number
) {
	const { selectionStart, selectionEnd, value } = textarea;
	
	// Only handle when no selection and cursor is after indentation
	if (selectionStart !== selectionEnd) return;
	
	const beforeCursor = value.substring(Math.max(0, selectionStart - indentationLength), selectionStart);
	
	if (beforeCursor === indentation) {
		event.preventDefault();
		
		const before = value.substring(0, selectionStart - indentationLength);
		const after = value.substring(selectionStart);
		
		textarea.value = before + after;
		textarea.selectionStart = textarea.selectionEnd = selectionStart - indentationLength;
		
		textarea.dispatchEvent(new Event('input', { bubbles: true }));
	}
}

function checkCloseBracket(
	event: InputEvent, 
	textarea: HTMLTextAreaElement, 
	indentation: string, 
	indentationLength: number, 
	bracketPairs: BracketPairs
) {
	if (!event.data) return;
	
	const { selectionStart, value } = textarea;
	const lines = value.split('\n');
	
	// Find current line
	let currentLineIndex = 0;
	let pos = 0;
	
	for (let i = 0; i < lines.length; i++) {
		if (selectionStart <= pos + lines[i].length) {
			currentLineIndex = i;
			break;
		}
		pos += lines[i].length + 1;
	}
	
	const currentLine = lines[currentLineIndex];
	const cursorPosInLine = selectionStart - pos;
	
	// Check if this closing bracket should be unindented
	for (const openBracket in bracketPairs) {
		const closeBracket = bracketPairs[openBracket];
		if (event.data === closeBracket) {
			// Check if line only has indentation before cursor
			const beforeCursor = currentLine.substring(0, cursorPosInLine);
			const afterCursor = currentLine.substring(cursorPosInLine);
			
			if (beforeCursor.trim() === '' && afterCursor.trim() === '') {
				// Unindent this line
				const indentMatch = beforeCursor.match(new RegExp(`^(${escapeRegExp(indentation)})*`));
				if (indentMatch && indentMatch[0].length >= indentationLength) {
					event.preventDefault();
					
					const newLine = beforeCursor.substring(indentationLength) + event.data + afterCursor;
					lines[currentLineIndex] = newLine;
					
					textarea.value = lines.join('\n');
					textarea.selectionStart = textarea.selectionEnd = selectionStart - indentationLength + 1;
					
					textarea.dispatchEvent(new Event('input', { bubbles: true }));
				}
			}
			break;
		}
	}
}

function insertText(textarea: HTMLTextAreaElement, text: string) {
	const { selectionStart, selectionEnd, value } = textarea;
	const before = value.substring(0, selectionStart);
	const after = value.substring(selectionEnd);
	
	textarea.value = before + text + after;
	textarea.selectionStart = textarea.selectionEnd = selectionStart + text.length;
	
	textarea.dispatchEvent(new Event('input', { bubbles: true }));
}

function escapeRegExp(string: string): string {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}