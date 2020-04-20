import React from 'react'

import Link from 'app/components/core/Link'

import { Container } from './styled'

const Footer = () => {
  return (
    <Container id='footer'>
      <Link href='https://tremtec.gitlab.io' target='_blank'>
        tremtec.gitlab.io
      </Link>
    </Container>
  )
}

export default Footer
