import styled from 'styled-components'

export const LocalContainer = styled.div`
  width: max-content;
  padding: 3rem 4rem;
  text-align: center;
  box-shadow: 1px 2px 5px 1px #c0c2be;

  p {
    color: ${(props) => props.theme['font-gray']};
  }
`
