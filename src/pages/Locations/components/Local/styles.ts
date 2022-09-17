import styled from 'styled-components'

export const LocalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 10rem;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 5px 1px #c0c2be;
  gap: 1rem;

  p {
    color: ${(props) => props.theme['font-gray']};
  }
`
