import styled from 'styled-components'

export const Container = styled.div`
  width: ${props => props.width ? props.width : 'auto'};
  padding: ${props => props.padding ? props.padding : '0'};
`

export const CoreImage = styled.img`
  width: 100%;
`
