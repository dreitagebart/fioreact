import * as CSS from 'csstype'
import { system, Config } from 'styled-system'

const config: Config = {
  alignItems: {
    property: 'alignItems'
  },
  alignContent: {
    property: 'alignContent'
  },
  justifyItems: {
    property: 'justifyItems'
  },
  justifyContent: {
    property: 'justifyContent'
  },
  flexWrap: {
    property: 'flexWrap'
  },
  flexDirection: {
    property: 'flexDirection'
  },
  flex: {
    property: 'flex'
  },
  flexGrow: {
    property: 'flexGrow'
  },
  flexShrink: {
    property: 'flexShrink'
  },
  flexBasis: {
    property: 'flexBasis'
  },
  justifySelf: {
    property: 'justifySelf'
  },
  alignSelf: {
    property: 'alignSelf'
  },
  order: {
    property: 'order'
  }
}

export const flex = system(config)

export interface FlexProps {
  alignItems?: CSS.Property.AlignItems
  alignContent?: CSS.Property.AlignContent
  justifyItems?: CSS.Property.JustifyItems
  justifyContent?: CSS.Property.JustifyContent
  flexWrap?: CSS.Property.FlexWrap
  flexDirection?: CSS.Property.FlexDirection
  flex?: CSS.Property.Flex
  flexGrow?: CSS.Property.FlexGrow
  flexShrink?: CSS.Property.FlexShrink
  flexBasis?: CSS.Property.FlexBasis
  justifySelf?: CSS.Property.JustifySelf
  alignSelf?: CSS.Property.AlignSelf
  order?: CSS.Property.Order
}
