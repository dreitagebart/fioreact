import * as CSS from 'csstype'
import { system, Config } from 'styled-system'

const config: Config = {
  position: {
    property: 'position'
  },
  zIndex: {
    property: 'zIndex'
  },
  top: {
    property: 'top'
  },
  left: {
    property: 'left'
  },
  right: {
    property: 'right'
  },
  bottom: {
    property: 'bottom'
  }
}

export const position = system(config)

export interface PositionProps {
  position?: CSS.Property.Position
  zIndex?: CSS.Property.ZIndex
  top?: CSS.Property.Top
  left?: CSS.Property.Left
  right?: CSS.Property.Right
  bottom?: CSS.Property.Bottom
}
