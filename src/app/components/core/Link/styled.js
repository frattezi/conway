import styled, { css } from 'styled-components'

import theme from 'app/helpers/theme'

export const CoreLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  transition: opacity .5s;

  &:hover {
    opacity: .7;
  }

  ${props => props.variant
    ? css`
        ${theme.variants[props.variant]}
      `
    : css`
        ${theme.variants.default}
      `
  }
`
