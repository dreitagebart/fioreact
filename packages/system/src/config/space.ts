import * as CSS from 'csstype'
import { system, Config } from 'styled-system'

const config: Config = {
  margin: {
    property: 'margin'
  },
  marginTop: {
    property: 'marginTop'
  },
  marginLeft: {
    property: 'marginLeft'
  },
  marginRight: {
    property: 'marginRight'
  },
  marginBottom: {
    property: 'marginBottom'
  },
  marginX: {
    properties: ['marginLeft', 'marginRight']
  },
  marginY: {
    properties: ['marginTop', 'marginBottom']
  },
  padding: {
    property: 'padding'
  },
  paddingTop: {
    property: 'paddingTop'
  },
  paddingLeft: {
    property: 'paddingLeft'
  },
  paddingRight: {
    property: 'paddingRight'
  },
  paddingBottom: {
    property: 'paddingBottom'
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight']
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom']
  }
}

config.m = config.margin
config.mt = config.marginTop
config.ml = config.marginLeft
config.mr = config.marginRight
config.mb = config.marginBottom
config.mx = config.marginX
config.my = config.marginY
config.p = config.padding
config.pt = config.paddingTop
config.pl = config.paddingLeft
config.pr = config.paddingRight
config.pb = config.paddingBottom
config.px = config.paddingX
config.py = config.paddingY

export const space = system(config)

export interface SpaceProps {
  margin?: CSS.Property.Margin
  marginTop?: CSS.Property.MarginTop
  marginLeft?: CSS.Property.MarginLeft
  marginRight?: CSS.Property.MarginRight
  marginBottom?: CSS.Property.MarginBottom
  marginX?: CSS.Property.Margin
  marginY?: CSS.Property.Margin
  m?: CSS.Property.Margin
  mt?: CSS.Property.MarginTop
  ml?: CSS.Property.MarginLeft
  mr?: CSS.Property.MarginRight
  mb?: CSS.Property.MarginBottom
  mx?: CSS.Property.Margin
  my?: CSS.Property.Margin
  padding?: CSS.Property.Padding
  paddingTop?: CSS.Property.PaddingTop
  paddingLeft?: CSS.Property.PaddingLeft
  paddingRight?: CSS.Property.PaddingRight
  paddingBottom?: CSS.Property.PaddingBottom
  paddingX?: CSS.Property.Padding
  paddingY?: CSS.Property.Padding
  p?: CSS.Property.Padding
  pt?: CSS.Property.PaddingTop
  pl?: CSS.Property.PaddingLeft
  pr?: CSS.Property.PaddingRight
  pb?: CSS.Property.PaddingBottom
  px?: CSS.Property.Padding
  py?: CSS.Property.Padding
}
