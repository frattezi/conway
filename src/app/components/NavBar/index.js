import React from 'react'
import { useTheme } from 'app/redux/theme'

import Text from 'app/components/core/Text'

import { Container } from './styled'

const NavBar = () => {  
  const { switchMode } = useTheme()  
  return (
    <Container id='navbar'>
      <Text component='h1'>
        Conway's Game of Life
      </Text>
      <button onClick={() => switchMode()}> Click Me</button>
    </Container>
  )
  }

export default NavBar
