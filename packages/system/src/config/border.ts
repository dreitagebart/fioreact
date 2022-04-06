import * as CSS from 'csstype'
import { Config, system } from 'styled-system'

const config: Config = {
  border: {
    property: 'border'
  },
  borderTop: {
    property: 'borderTop'
  },
  borderLeft: {
    property: 'borderLeft'
  },
  borderRight: {
    property: 'borderRight'
  },
  borderBottom: {
    property: 'borderBottom'
  },
  borderTopStyle: {
    property: 'borderTopStyle'
  },
  borderLeftStyle: {
    property: 'borderLeftStyle'
  },
  borderRightStyle: {
    property: 'borderRightStyle'
  },
  borderBottomStyle: {
    property: 'borderBottomStyle'
  },
  borderTopColor: {
    property: 'borderTopColor'
  },
  borderLeftColor: {
    property: 'borderLeftColor'
  },
  borderRightColor: {
    property: 'borderRightColor'
  },
  borderBottomColor: {
    property: 'borderBottomColor'
  },
  borderTopWidth: {
    property: 'borderTopWidth'
  },
  borderLeftWidth: {
    property: 'borderLeftWidth'
  },
  borderRightWidth: {
    property: 'borderRightWidth'
  },
  borderBottomWidth: {
    property: 'borderBottomWidth'
  },
  borderRadius: {
    property: 'borderRadius'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius'
  }
}

export const border = system(config)

export interface BorderProps {
  border?: CSS.Property.Border
  borderTop?: CSS.Property.BorderTop
  borderLeft?: CSS.Property.BorderLeft
  borderRight?: CSS.Property.BorderRight
  borderBottom?: CSS.Property.BorderBottom
  borderTopStyle?: CSS.Property.BorderTopStyle
  borderLeftStyle?: CSS.Property.BorderLeftStyle
  borderRightStyle?: CSS.Property.BorderRightStyle
  borderBottomStyle?: CSS.Property.BorderBottomStyle
  borderTopColor?: CSS.Property.BorderTopColor
  borderLeftColor?: CSS.Property.BorderLeftColor
  borderRightColor?: CSS.Property.BorderRightColor
  borderBottomColor?: CSS.Property.BorderBottomColor
  borderTopWidth?: CSS.Property.BorderTopWidth
  borderLeftWidth?: CSS.Property.BorderLeftWidth
  borderRightWidth?: CSS.Property.BorderRightWidth
  borderBottomWidth?: CSS.Property.BorderBottomWidth
  borderRadius?: CSS.Property.BorderRadius
  borderTopLeftRadius?: CSS.Property.BorderTopLeftRadius
  borderBottomLeftRadius?: CSS.Property.BorderBottomLeftRadius
  borderTopRightRadius?: CSS.Property.BorderTopRightRadius
  borderBottomRightRadius?: CSS.Property.BorderBottomRightRadius
}
