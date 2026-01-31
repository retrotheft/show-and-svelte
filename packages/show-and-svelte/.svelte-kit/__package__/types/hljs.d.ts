interface PublicApi {
    highlight(code: string, options: HighlightOptions): HighlightResult
    /** @deprecated use `higlight(code, {lang: ..., ignoreIllegals: ...})` */
    highlight(languageName: string, code: string, ignoreIllegals?: boolean): HighlightResult
    highlightAuto: (code: string, languageSubset?: string[]) => AutoHighlightResult
    highlightBlock: (element: HTMLElement) => void
    highlightElement: (element: HTMLElement) => void
    configure: (options: Partial<HLJSOptions>) => void
    initHighlighting: () => void
    initHighlightingOnLoad: () => void
    highlightAll: () => void
    registerLanguage: (languageName: string, language: LanguageFn) => void
    unregisterLanguage: (languageName: string) => void
    listLanguages: () => string[]
    registerAliases: (aliasList: string | string[], { languageName } : {languageName: string}) => void
    getLanguage: (languageName: string) => Language | undefined
    autoDetection: (languageName: string) => boolean
    inherit: <T>(original: T, ...args: Record<string, any>[]) => T
    addPlugin: (plugin: HLJSPlugin) => void
    removePlugin: (plugin: HLJSPlugin) => void
    debugMode: () => void
    safeMode: () => void
    versionString: string
    vuePlugin: () => VuePlugin
    regex: {
        concat: (...args: (RegExp | string)[]) => string,
        lookahead: (re: RegExp | string) => string,
        either: (...args: (RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]) => string,
        optional: (re: RegExp | string) => string,
        anyNumberOfTimes: (re: RegExp | string) => string
    }
    newInstance: () => HLJSApi
}

interface ModesAPI {
    SHEBANG: (mode?: Partial<Mode> & {binary?: string | RegExp}) => Mode
    BACKSLASH_ESCAPE: Mode
    QUOTE_STRING_MODE: Mode
    APOS_STRING_MODE: Mode
    PHRASAL_WORDS_MODE: Mode
    COMMENT: (begin: string | RegExp, end: string | RegExp, modeOpts?: Mode | {}) => Mode
    C_LINE_COMMENT_MODE: Mode
    C_BLOCK_COMMENT_MODE: Mode
    HASH_COMMENT_MODE: Mode
    NUMBER_MODE: Mode
    C_NUMBER_MODE: Mode
    BINARY_NUMBER_MODE: Mode
    REGEXP_MODE: Mode
    TITLE_MODE: Mode
    UNDERSCORE_TITLE_MODE: Mode
    METHOD_GUARD: Mode
    END_SAME_AS_BEGIN: (mode: Mode) => Mode
    // built in regex
    IDENT_RE: string
    UNDERSCORE_IDENT_RE: string
    MATCH_NOTHING_RE: string
    NUMBER_RE: string
    C_NUMBER_RE: string
    BINARY_NUMBER_RE: string
    RE_STARTERS_RE: string
}

export type HLJSApi = PublicApi & ModesAPI
