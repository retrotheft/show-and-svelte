import { getContext, setContext } from 'svelte';
const key = {};
export function setHljsContext(hljs) {
    setContext(key, hljs);
}
export function getHljsContext() {
    return getContext(key);
}
