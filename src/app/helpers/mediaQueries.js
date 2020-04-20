import { css } from 'styled-components'

import theme from 'app/helpers/theme'

const breakpoints = theme.breakpoints

export const mediaQueryMin = (min, styles) =>
  css`
    @media (min-width: ${breakpoints[min]}px) {
      ${styles}
    }
  `

export const mediaQueryBetween = (min, max, styles) =>
  css`
    @media (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max]}px) {
      ${styles}
    }
  `

export const mediaQueryMax = (max, styles) =>
  css`
    @media (max-width: ${breakpoints[max]}px) {
      ${styles}
    }
  `
