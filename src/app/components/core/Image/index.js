import React from 'react'
import PropTypes from 'prop-types'

import { Container, CoreImage } from './styled'

const Image = ({ src, width, padding }) =>
  <Container
    width={width}
    padding={padding}
  >
    <CoreImage src={src} />
  </Container>

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string
}

export default Image
