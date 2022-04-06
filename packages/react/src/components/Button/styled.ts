import styled from 'styled-components'
import {
  space,
  background,
  SpaceProps,
  BackgroundProps
} from '@fioreact/system'

export type _ButtonProps = SpaceProps & BackgroundProps

export const _Button = styled.button<_ButtonProps>`
  ${space}
  ${background}
`
