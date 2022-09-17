import styled from 'styled-components'

export const CharacterCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AvatarIcon = styled.div`
  text-align: center;
  margin-top: 2rem;

  img {
    height: 28rem;
    width: 30rem;
    border-radius: 200%;
  }

  h1 {
    font-size: 4rem;
    margin: 2rem 0 8rem;
  }
`

export const CharacterCardInfoContent = styled.div`
  display: flex;
  gap: 10rem;
  margin-bottom: 4rem;
`

export const TablesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    width: 35rem;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    color: ${(props) => props.theme['font-gray']};
    font-weight: 100;
  }
`

export const TablesRows = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme['font-gray']};

  p {
    font-size: 1.5rem;
    :first-child {
      color: ${(props) => props.theme.black};

      font-size: 2rem;
      font-weight: 800;
    }

    &:not(:first-child) {
      color: ${(props) => props.theme['font-gray']};
    }
  }
`
