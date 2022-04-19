/// <reference types="vite/client" />

interface ImportMetaEnv {}

interface ImportMeta { readonly env: ImportMetaEnv }

interface Exposed {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window extends Exposed {}
