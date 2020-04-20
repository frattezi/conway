import styled, { css } from 'styled-components'

import theme from 'app/helpers/theme'

import CoreText from './text'

const Text = styled(CoreText)`
  ${
    props => props.variant
    ? css`
        ${theme.variants[props.variant]}
      `
    : css`
        ${theme.variants.default}
      `
  }
`

export default Text
