type $$ComponentProps = {
    code: string;
    rows?: number;
    language?: string;
    indentSize?: number;
    placeholder?: string;
    callback?: (lines: string[], index: number) => void;
};
declare const CodeEditor: import("svelte").Component<$$ComponentProps, {}, "code">;
type CodeEditor = ReturnType<typeof CodeEditor>;
export default CodeEditor;
