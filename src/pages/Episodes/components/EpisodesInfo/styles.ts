import styled from 'styled-components'

export const EpisodesInfocontainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    top: 7rem;
    left: 5rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    text-transform: uppercase;
    font-weight: bolder;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const InfoHeaderContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;

  h1 {
    font-size: 4rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      font-size: 1.5rem;
      font-weight: bolder;

      > :last-child {
        font-weight: 100;
        color: ${(props) => props.theme['font-gray']};
      }
    }
  }
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  align-items: center;

  h1 {
    display: flex;
    justify-content: flex-start;
    color: ${(props) => props.theme['font-gray']};
  }
`

export const Content = styled.main`
  display: flex;
  gap: 2rem;
`
