import * as CSS from 'csstype'
import { system, Config } from 'styled-system'

const config: Config = {
  background: { property: 'background' },
  backgroundColor: { property: 'backgroundColor' },
  backgroundImage: { property: 'backgroundImage' },
  backgroundSize: { property: 'backgroundSize' },
  backgroundPosition: { property: 'backgroundPosition' },
  backgroundRepeat: { property: 'backgroundRepeat' }
}

config.bg = config.background
config.bgColor = config.backgroundColor
config.bgImage = config.backgroundImage
config.bgSize = config.backgroundSize
config.bgPosition = config.backgroundPosition
config.bgRepeat = config.backgroundRepeat

export const background = system(config)

export interface BackgroundProps {
  background?: CSS.Property.Background
  backgroundColor?: CSS.Property.BackgroundColor
  backgroundImage?: CSS.Property.BackgroundImage
  backgroundSize?: CSS.Property.BackgroundSize
  backgroundPosition?: CSS.Property.BackgroundPosition
  backgroundRepeat?: CSS.Property.BackgroundRepeat
  bg?: CSS.Property.Background
  bgColor?: CSS.Property.BackgroundColor
  bgImage?: CSS.Property.BackgroundImage
  bgSize?: CSS.Property.BackgroundSize
  bgPosition?: CSS.Property.BackgroundPosition
  bgRepeat?: CSS.Property.BackgroundRepeat
}
