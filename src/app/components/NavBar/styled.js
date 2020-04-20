import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
  height: 10vh;
`
