import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borders: string
    colors: string
    breakpoints: string
    fonts: string
  }
}

// export type Theme = typeof theme
