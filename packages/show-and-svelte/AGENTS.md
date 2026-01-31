# Agent Guidelines for Svelte Movie Maker

## Commands
- **Dev**: `pnpm dev` - Start development server
- **Build**: `pnpm build` - Build package and run prepack
- **Type check**: `pnpm check` - Run svelte-check with TypeScript
- **Watch types**: `pnpm check:watch` - Type check in watch mode
- **Package**: `pnpm prepack` - Sync, package, and lint

## Code Style
- **Language**: TypeScript with strict mode enabled
- **Framework**: Svelte 5 with runes (`$state`, `$props`, `$effect`)
- **Imports**: Use `.js` extensions for TypeScript files, named exports preferred
- **Formatting**: Tabs for indentation, semicolons optional, trailing commas
- **Types**: Explicit typing with `type` imports, use `Record<string, T>` for objects
- **Naming**: camelCase for variables/functions, PascalCase for components
- **State**: Use Svelte 5 runes - `$state()`, `$state.raw()` for complex objects
- **Props**: Destructure props with types: `let { text, interval = 75 }: { text: string, interval?: number } = $props()`
- **Functions**: Arrow functions for inline, regular functions for component methods
- **Styles**: Scoped styles preferred, use CSS custom properties for dynamic values
- **Error handling**: Use `@ts-expect-error` with comment for known TypeScript issues
- **Exports**: Re-export components from `index.ts`, use default exports for Svelte components