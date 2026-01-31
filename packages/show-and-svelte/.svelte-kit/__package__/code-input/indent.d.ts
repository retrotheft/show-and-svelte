export type BracketPairs = Record<string, string>;
export interface IndentPlugin {
    beforeInput?: (event: InputEvent, textarea: HTMLTextAreaElement) => void;
    keydown?: (event: KeyboardEvent, textarea: HTMLTextAreaElement) => void;
}
export declare function createIndentPlugin(useSpaces?: boolean, indentSize?: number, bracketPairs?: BracketPairs): IndentPlugin;
