import React from 'react'
import PropTypes from 'prop-types'

import { CoreLink } from './styled'

const Link = ({ children }) =>
  <CoreLink rel='noopener noreferrer'>
    {children}
  </CoreLink>

Link.propTypes = {
  children: PropTypes.node
}

export default Link
