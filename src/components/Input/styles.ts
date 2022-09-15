import styled from 'styled-components'

export const Inputs = styled.input`
  padding: 1rem 2rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme['font-gray']};
  background-color: ${(props) => props.theme.white};
`
