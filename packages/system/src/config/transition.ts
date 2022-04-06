import * as CSS from 'csstype'
import { system, Config } from 'styled-system'

const config: Config = {
  transition: {
    property: 'transition'
  },
  transitionDelay: {
    property: 'transitionDelay'
  },
  transitionTimingFunction: {
    property: 'transitionTimingFunction'
  },
  transitionProperty: {
    property: 'transitionProperty'
  },
  transitionDuration: {
    property: 'transitionDuration'
  }
}

export const transition = system(config)

export interface TransitionProps {
  transition?: CSS.Property.Transition
  transitionDelay?: CSS.Property.TransitionDelay
  transitionTimingFunction?: CSS.Property.TransitionTimingFunction
  transitionProperty?: CSS.Property.TransitionProperty
  transitionDuration?: CSS.Property.TransitionDuration
}
