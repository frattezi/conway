import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ component, ...restProps }) =>
  React.createElement(component || 'p', { ...restProps })

Text.propTypes = {
  component: PropTypes.string,
}

export default Text
