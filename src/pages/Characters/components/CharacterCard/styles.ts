import styled from 'styled-components'

export const CharacterCardContainer = styled.div`
  box-shadow: 1px 2px 5px 1px #c0c2be;

  img {
    width: 24rem;
  }

  div {
    padding: 1.5rem 1rem;
    background-color: ${(props) => props.theme.white};
    border-radius: 5px;
  }

  span {
    color: ${(props) => props.theme['font-gray']};
  }
`
