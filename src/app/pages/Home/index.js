import React, { useState } from 'react'

import Text from 'app/components/core/Text'

import Section from 'app/components/core/Section'


const Home = () => {
  const [theme, setTheme] = useState('dark') 
  return (

    
    
    <Section style={{
      height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Text component='h1'>
      Conway's Game of Life
    </Text>
  </Section>
  )
} 

  export default Home
