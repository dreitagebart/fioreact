import React from 'react'
import { DefaultTheme, StyledComponentProps } from 'styled-components'

import { _ButtonProps, _Button } from './styled'

export type ButtonProps = StyledComponentProps<
  'button',
  DefaultTheme,
  _ButtonProps,
  never
>

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <_Button {...props}>{children}</_Button>
}
