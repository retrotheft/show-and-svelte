export type BracketPairs = Record<string, string>;
export interface AutoCloseBracketsPlugin {
    beforeInput?: (event: InputEvent, textarea: HTMLTextAreaElement) => void;
    keydown?: (event: KeyboardEvent, textarea: HTMLTextAreaElement) => void;
}
export declare function createAutoCloseBracketsPlugin(bracketPairs?: BracketPairs): AutoCloseBracketsPlugin;
