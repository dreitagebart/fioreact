import * as CSS from 'csstype'
import { system, Config } from 'styled-system'

const config: Config = {
  width: {
    property: 'width'
  },
  height: {
    property: 'height'
  },
  minWidth: {
    property: 'minWidth'
  },
  maxWidth: {
    property: 'maxWidth'
  },
  minHeight: {
    property: 'minHeight'
  },
  maxHeight: {
    property: 'maxHeight'
  },
  size: {
    properties: ['width', 'height']
  },
  display: {
    property: 'display'
  },
  verticalAlign: {
    property: 'verticalAlign'
  },
  overflow: {
    property: 'overflow'
  },
  overflowX: {
    property: 'overflowX'
  },
  overflowY: {
    property: 'overflowY'
  }
}

export const layout = system(config)

export interface LayoutProps {
  width?: CSS.Property.Width
  height?: CSS.Property.Height
  minWidth?: CSS.Property.MinWidth
  maxWidth?: CSS.Property.MaxWidth
  minHeight?: CSS.Property.MinHeight
  maxHeight?: CSS.Property.MaxHeight
  size?: CSS.Property.Width & CSS.Property.Height
  display?: CSS.Property.Display
  verticalAlign?: CSS.Property.VerticalAlign
  overflow?: CSS.Property.Overflow
  overflowX?: CSS.Property.OverflowX
  overflowY?: CSS.Property.OverflowY
}
