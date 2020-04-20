import React from 'react'

import Text from 'app/components/core/Text'

import { Container } from './styled'

const NavBar = () =>  (
    <Container id='navbar'>
      <Text component='h1'>
        Conway's Game of Life
      </Text>
      <button onClick={() => setIsDarkMode(false)}> Click Me</button>
    </Container>
  )


export default NavBar
