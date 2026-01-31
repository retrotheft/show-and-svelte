import type { HLJSApi } from '$lib/types/hljs.js'
import { getContext, setContext } from 'svelte'

const key = {}

export function setHljsContext(hljs: HLJSApi) {
   setContext(key, hljs)
}

export function getHljsContext(): HLJSApi {
   return getContext(key)
}
