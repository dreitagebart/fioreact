import { css } from 'styled-components'

export const hover = (...props: any) => {
  debugger
  if (!props) {
    return undefined
  }

  return css`
    &:hover {
      ${props.map((f: any) => {
        if (typeof f === 'function') {
          const result = f(props)
          debugger
          return result
        }
      })}
    }
  `
}
