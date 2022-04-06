import * as CSS from 'csstype'
import { system, Config } from 'styled-system'

const config: Config = {
  boxShadow: { property: 'boxShadow' },
  textShadow: { property: 'textShadow' }
}

export const shadow = system(config)

export interface ShadowProps {
  boxShadow?: CSS.Property.BoxShadow
  textShadow?: CSS.Property.TextShadow
}
