import styled from 'styled-components'

export const ButtonloadMore = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: 1px 2px 5px 1px #c0c2be;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.buttonColor};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
`
