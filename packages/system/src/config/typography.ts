import * as CSS from 'csstype'
import { system, Config } from 'styled-system'

const config: Config = {
  fontFamily: { property: 'fontFamily' },
  fontSize: { property: 'fontSize' },
  fontWeight: { property: 'fontWeight' },
  fontStyle: { property: 'fontStyle' },
  letterSpacing: { property: 'letterSpacing' },
  textDecoration: { property: 'textDecoration' },
  lineHeight: { property: 'lineHeight' },
  textAlign: { property: 'textAlign' },
  color: { property: 'color' }
}

export const typography = system(config)

export interface TypographyProps {
  fontFamily?: CSS.Property.FontFamily
  fontSize?: CSS.Property.FontSize
  fontWeight?: CSS.Property.FontWeight
  fontStyle?: CSS.Property.FontStyle
  letterSpacing?: CSS.Property.LetterSpacing
  textDecoration?: CSS.Property.TextDecoration
  lineHeight?: CSS.Property.LineHeight
  textAlign?: CSS.Property.TextAlign
  color?: CSS.Property.Color
}
