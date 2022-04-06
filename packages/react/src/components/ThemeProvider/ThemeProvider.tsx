import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

interface Props {}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <Provider theme={{ borders: '', breakpoints: '', colors: '', fonts: '' }}>
      {children}
    </Provider>
  )
}
